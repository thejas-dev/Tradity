  import Hero from '../components/Hero';
import Team from '../components/Team';
import Gallery from '../components/Gallery'
import Header from '../components/Header'
import Head from 'next/head'
import Image from 'next/image'
import Courses from '../components/Courses'
import Join from '../components/Join.tsx'
import  Video from '../components/Video'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {useRecoilState} from 'recoil';
import {RevealState,currentUserState,adminState} from '../atoms/userAtom';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {signIn,useSession,getProviders,getSession} from 'next-auth/react'     

const Index = ({providers}) => {
  const [reveal,setReveal] =useRecoilState(RevealState);
  const [currentUser,setCurrentUser] = useRecoilState(currentUserState);
  const [admin,setAdmin] = useRecoilState(adminState);
  const [mail,setMail] = useState('');
  const [confirmButton,setConfirmButton] = useState(false);
  const [subscribed,setSubscribed] = useState(false);
  const id = Object.values(providers).map((provider)=>provider.id)
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
          <section id='team' className="snap-center">
            <Team />        
          </section>
         <section id='mvv' className="snap-center">
            <Courses />        
          </section>
          <section id='gallery' className="snap-center">
            <Gallery id={id} />        
          </section>
          <section id='courses' className="snap-center">
            <Video />        
          </section>
          <section id='join' className="snap-start">
            <Join />        
          </section>
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


export async function getStaticProps(context) {
  const providers = await getProviders();
  // const session = await getSession();
  return{
    props: {
      providers
      // session
    }
  }
}
