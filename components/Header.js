import {AiOutlineInstagram,AiOutlineFacebook,AiOutlineWhatsApp,AiOutlineMail} from 'react-icons/ai';
import {RxTwitterLogo} from 'react-icons/rx';
import {useRecoilState} from 'recoil';
import {RevealState} from '../atoms/userAtom';
import React from 'react'
import {useState,useEffect} from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link';


export default function Header() {
	// body...
	const [reveal,setReveal] =useRecoilState(RevealState);
	const [instaId,setInstaId] = useState('');
	const [twitter,setTwitter] = useState('');
	const [facebook,setFacebook] = useState('');
	const [whatsapp,setWhatsapp] = useState('');
	const [subscribeName,setSubscribeName] = useState('')

	useEffect(()=>{
		setInstaId("https://instagram.com/tradityltd");
		setFacebook("https://facebook.com");
		setTwitter('https://twitter.com');
		if(localStorage.getItem('tradity')){
			setSubscribeName(localStorage.getItem('tradity'))
		}
	},[])





	return (
		<header className="flex w-full sticky top-0  h-20 items-center overflow-x-hidden justify-between p-5 max-w-7xl z-50 mx-auto" >	
			<motion.div
			initial={{
				x:-500,
				opacity:0,
				scale:0.5,
			}}
			animate={{
				x:0,
				opacity:1,
				scale:1
			}}
			transition={{
				duration:1.5,
			}}
			className="flex items-center  md:ml-2 flex-row gap-5 md:gap-7 "
			>
				<a href={instaId}>
				<AiOutlineInstagram 
				className="md:h-8 h-6 w-6 md:w-8 h-6 w-6 text-gray-500 hover:text-sky-500 cursor-pointer transition duration-200 ease-out
				hover:scale-110"
				/>
				</a>
				<a href="twitter">
				<RxTwitterLogo 
				className="md:h-8 h-6 w-6 md:w-8 h-6 w-6 text-gray-500 hover:text-sky-500 cursor-pointer transition duration-200 ease-out
				hover:scale-110"
				/>
				</a>
				<a href={facebook}>
				<AiOutlineFacebook
				className="md:h-8 h-6 w-6 md:w-8 h-6 w-6 text-gray-500 hover:text-sky-500 cursor-pointer transition duration-200 ease-out
				hover:scale-110"
				/>
				</a>
				<a href="https://wa.me/+919786783564">
				<AiOutlineWhatsApp 
				className="md:h-8 h-6 w-6 md:w-8 h-6 w-6 text-gray-500 hover:text-sky-500 cursor-pointer transition duration-200 ease-out
				hover:scale-110"
				/>
				</a>
			</motion.div>
			<motion.div
			initial={{
				opacity:0,
				scale:0.5,
				x:500
			}}
			animate={{
				opacity:1,
				scale:1,
				x:0,
			}}
			transition={{
				duration:1.5
			}}
			className="flex items-center"
			>
				
				<AiOutlineMail 
				onClick={()=>setReveal(true)}
				className="md:h-8 h-6 w-6 md:w-8 h-6 w-6 text-gray-500 hover:text-sky-500 cursor-pointer transition duration-200 ease-out
				hover:scale-110 mr-2 md:mr-5"
				/>
				<h4 className="text-gray-500 text-xl hidden md:inline-flex">{subscribeName ? subscribeName : "Subscribe"}</h4>

			</motion.div>

		</header>

	)
}