import {motion} from 'framer-motion';
import {useState,useEffect} from 'react';
import axios from 'axios'
import Card from './Card'
import {signIn} from 'next-auth/react';
import {useRecoilState} from 'recoil';
import {currentUserState,adminState,RevealState2,linkState,imagesState} from '../atoms/userAtom';


export default function Gallery({id}) {
	// body...
	const [images,setImages] = useRecoilState(imagesState);
	const [firstArray,setFirstArray] = useState([]);
	const [secondArray,setSecondArray] = useState([]);
	const [currentUser,setCurrentUser] = useRecoilState(currentUserState);
	const [reveal2,setReveal2] = useRecoilState(RevealState2);
	const [admin,setAdmin] = useRecoilState(adminState)
	const [link,setLink] = useRecoilState(linkState)

	const fetch2 = async() =>{
		const {data} = await axios.get(`${process.env.NEXT_PUBLIC_BASE_SERVER}/api/auth/gettradityimage`)
		//https://chat-siris-v2-server.vercel.app
		setImages(data.data);
	}

	useEffect(()=>{
		fetch2();
	},[link])

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
		let firstColumn = []
		let secondColumn = []
		images.forEach((image,i)=>{
			if(i%2 === 0){
				firstColumn.push(image);
			}else{
				secondColumn.push(image);
			}
		})
		setFirstArray(firstColumn);
		setSecondArray(secondColumn);
	},[images])

	

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
			<h1 className="text-xl text-yellow-500 font-bold uppercase mt-7">S E R V I C E S</h1>
			<p className="text-gray-300 z-50 text-xl">Currenly we are providing Investment Advisory and Trading Assistance for more details 
			<a href="https://instagram.com/tradityltd" className="text-sky-600"> contact us.</a></p>
			<p className="text-gray-600 z-50 text-md mt-10">Tap on chart to preview</p>
		</motion.div>
		<div className="min-h-screen relative w-full">
		<div className={`h-full w-full absolute p-5 flex items-center justify-center bg-gray-1000/30 rounded-xl 
		backdrop-blur-md md:backdrop-blur-md ${currentUser ? "hidden" : ""} z-10 absolute`} >
				<h1 className={`text-yellow-500  text-4xl mx-auto font-semibold`} ><span 
				onClick={()=>signIn(id)}
				className="text-sky-500 cursor-pointer"> Login</span> to view our charts</h1>
		</div>
			<div className="flex grid px-5 gap-3 md:gap-10 grid-cols-1 md:grid-cols-2">
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
					
			</div>
		</div>
		
		
		<button 
		onClick={()=>setReveal2(true)}
		className={`${admin ? "" : "hidden" } z-0 hover:scale-110 transition duration-300 ease-in-out 
		active:scale-90 px-3 rounded-xl border-1 border-white/70 py-3 bg-blue-500 text-white`}>Add Image</button>
		
		</div>


	)
}