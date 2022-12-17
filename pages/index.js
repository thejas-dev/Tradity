  import Hero from '../components/Hero';
import Team from '../components/Team';
import Gallery from '../components/Gallery'
import Header from '../components/Header'
import Head from 'next/head'
import Image from 'next/image'
import Courses from '../components/Courses'
import Services from '../components/Services';
import Join from '../components/Join.tsx'
import  Video from '../components/Video'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {useRecoilState} from 'recoil';
import {RevealState,currentUserState,adminState,RevealState2,linkState,revealState3,
  imageIndexState,imagesState} from '../atoms/userAtom';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {signIn,useSession,getProviders,getSession} from 'next-auth/react'     
import ImageKit from "imagekit";
import {BsChevronRight,BsChevronLeft} from 'react-icons/bs';
import {GrClose} from 'react-icons/gr';
import LinearProgress from '@mui/material/LinearProgress';

const Index = ({providers}) => {
  const [reveal,setReveal] =useRecoilState(RevealState);
  const [reveal2,setReveal2] = useRecoilState(RevealState2);
  const [reveal3,setReveal3] = useRecoilState(revealState3);
  const [images,setImages] = useRecoilState(imagesState);
  const [imageIndex,setImageIndex] = useRecoilState(imageIndexState);
  const [currentUser,setCurrentUser] = useRecoilState(currentUserState);
  const [admin,setAdmin] = useRecoilState(adminState);
  const [mail,setMail] = useState('');
  const [confirmButton,setConfirmButton] = useState(false);
  const [subscribed,setSubscribed] = useState(false);
  const [progress, setProgress] = useState(0);
  const [path2,setPath2] = useState('');
  const [hideButtons,setHideButtons] = useState(true);
  const [loader1,setLoader1] = useState(false);
  const [url2,setUrl2] = useState('');
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [link,setLink] = useRecoilState(linkState);
  const [changeImage,setChangeImage] = useState('');
  const id = Object.values(providers).map((provider)=>provider.id);
  const imagekit = new ImageKit({
      publicKey : process.env.NEXT_PUBLIC_IMAGEKIT_ID,
      privateKey : process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE,
      urlEndpoint : process.env.NEXT_PUBLIC_IMAGEKIT_ENDPOINT
  });
  // .log(session)
  const session = 
  useEffect(()=>{
      if(mail.includes('@gmail.com') || mail.includes('@email.com')){
        setConfirmButton(true)
      }else{
        setConfirmButton(false)
      }
  },[mail])

  useEffect(()=>{
    if(localStorage.getItem('tradity')){
      setSubscribed(true)
    }
    
      getSession().then((data3)=>{
        if(data3){
          handleValidation(data3)
        }
      })
    
  },[]);

  const handleValidation = async(data3) => {

          const gmail = data3?.user?.email;
          const {data} = await axios.post(`${process.env.NEXT_PUBLIC_BASE_SERVER}/api/auth/tradityusercheck`,{
            gmail
          })
          if(data?.status === true){
            setCurrentUser(data.user);
            if(data.user.gmail === "saravanakumargm2003@gmail.com"){
              setAdmin(true)
            }
          }else{
            const name = data3?.user.name;
            const data2 = await axios.post(`${process.env.NEXT_PUBLIC_BASE_SERVER}/api/auth/tradityusercreate`,{
              gmail,name
            })
            setCurrentUser(data2.data.user);
            if(data2.data.user.gmail === "saravanakumargm2003@gmail.com"){
              setAdmin(true)
            }
          }          
  }

  const  submitSubscribe = async() =>{
    const gmail = mail;
    setMail('');
    setReveal(false);
    const {data} = await axios.post(`${process.env.NEXT_PUBLIC_BASE_SERVER}/api/auth/subscribe`,{
      gmail
    })

    //https://chat-siris-v2-server.vercel.app/
    // console.log(data)
    localStorage.setItem('tradity',data.subscribe.gmail);
    setSubscribed(true)
  }

  const unsubscribe = () => {
    localStorage.removeItem('tradity');
    setSubscribed(false)
  }

  const pathCheck = (path) =>{
    if(path){
      if(path.split('/').includes('data:image')){
        return true;        
      }
    }
  }

  const url1Setter = () =>{
    
      const image_input = document.querySelector('#file1');
      const reader = new FileReader();

      reader.addEventListener('load',()=>{
        let uploaded_image = reader.result;
        setUrl2(uploaded_image)
        // console.log(uploaded_image)
      });
      if(image_input){
        reader.readAsDataURL(image_input.files[0]);
      }
    
  }

    useEffect(()=>{
  if(url2){
    // 
    setLoader1(true);
      const uploadImage = (url2) =>{
        if(pathCheck(url2)){
          imagekit.upload({
            file : url2, //required
            fileName : "thejashari",   //required
            extensions: [
                {
                    name: "google-auto-tagging",
                    maxTags: 5,
                    minConfidence: 95
                }
            ]
          }).then(response => {
            setLoader1(false)
              // uploadBackground(response.url)
              setUrl2('');
              setLink(response.url)
          }).catch(error => {
              console.log(error);
          });
        }else{
          console.log("Not an Image Format")
          setUrl2('')
          setLoader1(false);
        }
      }
      uploadImage(url2);
    }
  },[url2])

    const sendImage = async() => {
      const {data} = await axios.post(`${process.env.NEXT_PUBLIC_BASE_SERVER}/api/auth/addtradityimage`,{
        link,title,description
      })
      setLink('');
      setTitle('');
      setDescription('');
      setReveal2(false)
      // fetch2();
    }

    useEffect(()=>{
      const re = (imageIndex + 1) / images.length;
      const res = re * 100;
      setProgress(res)
    },[imageIndex])

    const nextImage = () => {
      if(imageIndex + 1 >= images.length){
        setImageIndex(0)
      }else{
        setImageIndex(imageIndex+1)
      }
    }

    const previousImage = () => {
      if(imageIndex - 1 < 0){
        setImageIndex(images.length-1);
      }else{
        setImageIndex(imageIndex-1)
      }
    }

    useEffect(()=>{
      if(reveal3){
        setInterval(function() {
            setHideButtons(true);
        }, 10000);        
      }
    },[reveal3])
    
  useEffect(()=>{
    if(!reveal3){
      setHideButtons(true)
    }else{
      setHideButtons(false)
    }
  },[reveal3])
  return (


      <div className="min-h-screen  flex flex-col w-full bg-[rgb(30,30,30)]  snap-y snap-mandatory overflow-y-scroll 
      z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 overflow-x-hidden scroll-smooth">
          <Head>
            <title>Tradity</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header session={session} id={id}/>
          <section id='hero' className="snap-start overflow-x-hidden">
            <Hero />        
          </section>
         <section id='mvv' className="snap-center">
            <Courses />        
          </section> 
         <section id='services' className="snap-center">
            <Services />        
          </section>
          <section id='gallery' className="snap-center">
            <Gallery id={id} />        
          </section>
          <section id='courses' className="snap-center">
            <Video />        
          </section>
          <section id='team' className="snap-center">
            <Team />        
          </section> 
          <section id='join' className="snap-start">
            <Join />        
          </section>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={reveal3}
            className="scrollbar-track-gray-700 min-h-screen scrollbar-thumb-yellow-500"
          >
            <div 
            id="corousal"
            className="h-full overflow-y-scroll w-full flex flex-col gap-5 items-center justify-center p-2 md:p-8 relative w-full bg-black/70">
              <div 
              onClick={previousImage}
              className={`absolute top-[50%] ${hideButtons ? "opacity-0 -left-2" : "opacity-100"} transition-all duration-300 ease-in-out left-2 p-2 
              rounded-full bg-gray-700/50 cursor-pointer hover:scale-110 
              transition duration-300 ease-in-out transform active:scale-90 active:bg-blue-500`}>
                <BsChevronLeft className="cursor-pointer"/>
              </div>
              <div 
              onClick={()=>setReveal3(false)}
              className="absolute top-5 right-5 p-1 rounded-full text-red-500 bg-sky-700 cursor-pointer hover:scale-110 
              transition duration-300 ease-in-out transform active:scale-90 hover:bg-red-500">
                <GrClose className=" text-red-500 cursor-pointer"/>
              </div>
                <h4 className="text-xl mt-7 text-gray-100/90 font-semibold">
                    {images[imageIndex]?.title}
                </h4>
                <img 
                onClick={()=>setHideButtons(!hideButtons)}
                src={images[imageIndex]?.link} alt="" 
                className="md:h-[80%] rounded-xl shadow-lg shadow-sky-500/60" 
                />
                <p className="text-md text-gray-400/90 max-w-7xl text-center font-semibold mb-4">{images[imageIndex]?.description}</p>
              <div 
              onClick={nextImage}
              className={`absolute top-[50%] ${hideButtons ? "opacity-0 -right-2" : "opacity-100"} transition-all duration-300 ease-in-out right-2 p-2 rounded-full bg-gray-700/50 cursor-pointer hover:scale-110 
              transition duration-300 ease-in-out transform active:scale-90 active:bg-blue-500`}>
                <BsChevronRight className="cursor-pointer"/>
              </div>
              <LinearProgress variant="determinate"
              className="h-2 w-full bottom-0 fixed"
               value={progress} />
            </div>

          </Backdrop>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={reveal2}
          >
            <div className="h-full bg-black/80 w-full gap-5 flex flex-col justify-center p-10 items-center">

                <input
                value={title}
                placeholder="Title"
                onChange={(e)=>setTitle(e.target.value)}
                className="contactInput rounded-xl" type="text" />

                <textarea 
                value={description}
                placeholder="Description"
                onChange={(e)=>setDescription(e.target.value)}
                className="contactInput rounded-xl" type="text" />
              <input type="file" id="file1" hidden accept="image/*" value={path2} onChange={(e)=>{
              setPath2(e.target.value);url1Setter();
              }} />
              <div className="flex gap-5 mt-7" >
              <button 
                onClick={()=>setReveal2(false)}
                className={`${admin ? "" : "hidden" } hover:scale-110 transition duration-300 ease-in-out 
              active:scale-90 px-3 rounded-xl border-1 border-white/70 py-3 bg-red-500 text-white`}>Cancel</button>
              {
                link ?
                <button 
                onClick={sendImage}
                className={`${admin ? "" : "hidden" } z-0 hover:scale-110 transition duration-300 ease-in-out 
                active:scale-90 px-3 rounded-xl border-1 border-white/70 py-3 bg-green-700 text-white`}>Submit</button>
                :
                <button className={`${admin ? "" : "hidden" } ${loader1 ? "animate-ping" : ""} z-0 hover:scale-110 transition duration-300 ease-in-out 
                active:scale-90 px-3 rounded-xl border-1 border-white/70 py-3 bg-blue-500 text-white`}><label className="cursor-pointer" htmlFor={`${loader1 ? "" : "file1"}`}>Add Image</label></button>
                }
              </div>
            </div>
          </Backdrop>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={reveal}

          > 
              <div className="h-full w-full gap-5 px-2 flex flex-col bg-black/70 justify-center items-center text-center ">
                  <h1 className="text-red-500 tracking-[20px] md:text-3xl text-xl font-semibold uppercase">Subscribe</h1>
                  <div className="w-[300px] rounded-full px-5 py-3 border-2 shadow-lg shadow-yellow-600/70 focus-within:shadow-blue-500/70 border-gray-700/70 ">
                    <input 
                    value={mail}
                    onChange={(e)=>{
                      setMail(e.target.value)
                    }}
                    placeholder={subscribed ? localStorage.getItem('tradity')  :"Enter Your Mail Id"}
                    className="bg-transparent outline-none w-full text-gray-300/80" type="email" />
                  </div>
                  <h1 className="text-md font-semibold text-gray-600/70 mt-5">* By Subscribing us, you will recieve Tradity updates in your Mail inbox</h1>
                  <div className="button flex items-center justify-center gap-10 w-full">
                    <button 
                    onClick={()=>setReveal(false)}
                    className="text-md font-semibold bg-red-500/80 rounded-xl px-5 py-3 text-white">
                      Cancel
                    </button>
                    <button 
                    onClick={()=>{
                    if(confirmButton && !subscribed){
                      submitSubscribe();
                    }else{
                      unsubscribe();
                    }
                    }}
                    className={`text-md font-semibold ${confirmButton ? "bg-green-500/80":"bg-green-500/30"} rounded-xl px-5 py-3 text-white`}>
                      {subscribed ? "Unsubscribe" :"Subscribe"}
                    </button>

                  </div>
              </div>
          </Backdrop>
      </div>

 
  )
}

export default Index;


export async function getServerSideProps(context) {
  const providers = await getProviders();
  // const session = await getSession();
  return{
    props: {
      providers
      // session
    }
  }
}
