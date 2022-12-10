import {motion} from 'framer-motion';
import {useState,useEffect} from 'react';
import axios from 'axios'
import Card from './Card'
import {signIn} from 'next-auth/react';
import {useRecoilState} from 'recoil';
import {RevealState,currentUserState,adminState} from '../atoms/userAtom';
import ImageKit from "imagekit"

export default function Gallery({id}) {
	// body...
	const [images,setImages] = useState([]);
	const [firstArray,setFirstArray] = useState([]);
	const [secondArray,setSecondArray] = useState([]);
	const [thirdArray,setThirdArray] = useState([]);
	const [currentUser,setCurrentUser] = useRecoilState(currentUserState);
	const [admin,setAdmin] = useRecoilState(adminState)
	const [path2,setPath2] = useState('');
	const [loader1,setLoader1] = useState(false);
	const [url2,setUrl2] = useState('');
	const imagekit = new ImageKit({
	    publicKey : process.env.NEXT_PUBLIC_IMAGEKIT_ID,
	    privateKey : process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE,
	    urlEndpoint : process.env.NEXT_PUBLIC_IMAGEKIT_ENDPOINT
	});

	const fetch2 = async() =>{
		const {data} = await axios.get(`${process.env.NEXT_PUBLIC_BASE_SERVER}/api/auth/gettradityimage`)
		//https://chat-siris-v2-server.vercel.app
		setImages(data.data);
	}

	const pathCheck = (path) =>{
		if(path){
			if(path.split('/').includes('data:image')){
				return true;				
			}
		}
	}

	useEffect(()=>{
		
		fetch2();
	},[])

	const deleteImage = async(id) => {
		const {data} = await axios.post(`${process.env.NEXT_PUBLIC_BASE_SERVER}/api/auth/removetradityimage`,{
			id
		})
		fetch2();
 	}

	useEffect(()=>{
		setFirstArray([]);
		setSecondArray([])
		setThirdArray([])
		let firstColumn = []
		let secondColumn = []
		let thirdColumn = []
		images.forEach((image,i)=>{
			if(i%3 === 0){
				firstColumn.push(image)
			}else if(i%2 === 0){
				secondColumn.push(image)
			}else{
				thirdColumn.push(image)
			}
		})
		setFirstArray(firstColumn);
		setSecondArray(secondColumn);
		setThirdArray(thirdColumn);
	},[images])

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
					    sendImage(response.url);
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

		const sendImage = async(link) => {
			const {data} = await axios.post(`${process.env.NEXT_PUBLIC_BASE_SERVER}/api/auth/addtradityimage`,{
				link
			})
			fetch2();
		}

	return (

		<div className="min-h-screen max-w-7xl w-full mx-auto text-center z-0 mt-7" >
		
		<motion.div
		initial={{
			opacity:0,
		}}
		whileInView={{opacity:1}}
		transition={{duration:1.5}}
		>
			<h3 className="uppercase tracking-[20px] text-gray-500 z-50 text-2xl" >
				Charts
			</h3>

		</motion.div>
		<div className="min-h-screen relative w-full md:mt-[60px]">
		<div className={`h-full w-full absolute p-5 flex items-center justify-center bg-gray-1000/30 rounded-xl 
		backdrop-blur-sm md:backdrop-blur-md ${currentUser ? "hidden" : ""} z-10 absolute`} >
				<h1 className={`text-yellow-500  text-4xl mx-auto font-semibold`} ><span 
				onClick={()=>signIn(id)}
				className="text-sky-500 cursor-pointer"> Login</span> to view our charts</h1>
		</div>
			<div className="flex grid px-5 gap-2 md:gap-10 grid-cols-1 md:grid-cols-3">
					<div className="flex flex-col">
						{
							firstArray.map((image,key)=>(
								<Card image={image} key={key} idx={key} deleteImage={deleteImage} />
							))
						}
					</div>
					<div className="flex flex-col">
						{
							secondArray.map((image,key)=>(
								<Card image={image} key={key} idx={key} deleteImage={deleteImage} />
							))
						}
					</div>
					<div className="flex flex-col">
						{
							thirdArray.map((image,key)=>(
								<Card image={image} key={key} idx={key} deleteImage={deleteImage} />
							))
						}
					</div>
			</div>
		</div>
		<input type="file" id="file1" hidden accept="image/*" value={path2} onChange={(e)=>{
			setPath2(e.target.value);url1Setter();
		}} />
		
		<button className={`${admin ? "" : "hidden" } ${loader1 ? "animate-ping" : ""} z-0 hover:scale-110 transition duration-300 ease-in-out 
		active:scale-90 px-3 rounded-xl border-1 border-white/70 py-3 bg-blue-500 text-white`}><label className="cursor-pointer" htmlFor={`${loader1 ? "" : "file1"}`}>Add Image</label></button>
		
		</div>


	)
}