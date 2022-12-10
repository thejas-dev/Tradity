import {AiOutlineInstagram,AiOutlineFacebook,AiOutlineWhatsApp,AiOutlineMail,AiOutlineUserAdd} from 'react-icons/ai';
import {RxTwitterLogo} from 'react-icons/rx';
import {FaRegUser} from 'react-icons/fa';
import {useRecoilState} from 'recoil';
import {RevealState,currentUserState} from '../atoms/userAtom';
import React from 'react'
import {useState,useEffect} from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link';
import {FiLogOut} from 'react-icons/fi'
import {signOut,signIn} from 'next-auth/react'
import {BsChevronDown} from 'react-icons/bs'
import Divider from '@mui/material/Divider';

export default function Header({session,id}) {
	// body...
	const [reveal,setReveal] =useRecoilState(RevealState);
	const [currentUser,setCurrentUser] = useRecoilState(currentUserState);
	const [instaId,setInstaId] = useState('');
	const [twitter,setTwitter] = useState('');
	const [facebook,setFacebook] = useState('');
	const [whatsapp,setWhatsapp] = useState('');
	const [subscribeName,setSubscribeName] = useState('');
	const [revealMenu,setRevealMenu] = useState(false);

	useEffect(()=>{
		setInstaId("https://instagram.com/tradityltd");
		setFacebook("https://facebook.com");
		setTwitter('https://twitter.com/Tradityltd');
		if(localStorage.getItem('tradity')){
			setSubscribeName(localStorage.getItem('tradity'))
		}
	},[])


	const signOutConfirm = () =>{
		if(currentUser){
			signOut();
			setCurrentUser('')
		}
	}


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
			className="flex items-center relative"
			>
				
				<h4 className="text-gray-500 text-xl mr-4 hidden md:inline-flex">{
					currentUser ? 
					currentUser?.name
					:
					"Not Logged In"
				}</h4>
				<AiOutlineMail 
				onClick={()=>setReveal(true)}
				className="md:h-8 h-6 w-6 md:w-8 h-6 w-6 text-gray-500 hover:text-sky-500 cursor-pointer transition duration-200 ease-out
				hover:scale-110 mr-3 md:mr-5"
				/>
				{
					session ?
					<FaRegUser
					className="md:h-8 h-6 w-6 hidden md:inline-flex md:w-8 h-6 w-6 text-green-500 hover:text-sky-500 cursor-pointer transition duration-200 ease-out
					hover:scale-110 mr-2 md:mr-5"
					/>
					:
					<AiOutlineUserAdd
					onClick={()=>signIn(id)}
					className="md:h-8 h-6 w-6 hidden md:inline-flex md:w-8 h-6 w-6 text-orange-500 hover:text-sky-500 cursor-pointer transition duration-200 ease-out
					hover:scale-110 mr-2 md:mr-5"
					/>


				}
				{
					currentUser  ?
				
				<FiLogOut
				onClick={signOutConfirm}
				className="md:h-8 h-6 w-6 hidden md:inline-flex md:w-8 h-6 w-6 text-red-500 hover:text-yellow-500 cursor-pointer transition duration-200 ease-out
				hover:scale-110 mr-2 md:mr-5"
				/>
				:
				""
				}
				<BsChevronDown 
					onClick={()=>setRevealMenu(!revealMenu)}
					className={`md:h-8 h-6 w-6 md:w-8 h-6 w-6 text-gray-500 hover:text-sky-500 cursor-pointer transition duration-200 ease-out
				hover:scale-110 mr-2 md:mr-5 md:hidden ${revealMenu ? "rotate-180 transition duration-300 ease-out" :""} `}
				/>
				<div className={`fixed top-[70px] p-3 border-2 border-gray-500 z-50 rounded-xl bg-gray-800/70 scale-0 transition-scale duration-300 ease-out
				 right-5 ${revealMenu ? "scale-100 transition-scale duration-300 transform ease-in-out" : ""} `}>
					<div className="flex flex-col gap-5 justify-center">
						<h4 className={` ${currentUser ? "text-gray-500" :"text-red-500"} mx-auto md:text-xl text-sm truncate md:hidden`}>{
							currentUser ? 
							currentUser?.name
							:
							"Not Logged In"
						}</h4>
						
						<div className="flex gap-2 w-full items-center justify-center" >
						{
							session ?
								<FaRegUser
								className="md:h-8 h-6 w-6 md:hidden md:w-8 h-6 w-6 text-green-500 hover:text-sky-500 cursor-pointer transition duration-200 ease-out
								hover:scale-110"
								/>
							:
								<AiOutlineUserAdd
								onClick={()=>{
									if(!currentUser){
										signIn(id)
									}
								}}
								className="md:h-8 h-6 w-6 md:hidden md:w-8 h-6 w-6 text-orange-500 hover:text-sky-500 cursor-pointer transition duration-200 ease-out
								hover:scale-110 "
								/>
						}
						<h1 
						onClick={()=>{
							if(!currentUser){
								signIn(id)
							}
						}}
						className="text-md text-gray-400 cursor-pointer hover:text-yellow-500">{session ? "Connected" : "Login"}</h1>
						</div>
						<Divider className="bg-gray-500"/>
						<div className={`flex ${currentUser ? "" : "hidden"} gap-2`}>
						{
						currentUser  ?						
						<FiLogOut
						onClick={signOutConfirm}
						className="md:h-8 h-6 w-6 md:hidden md:w-8 h-6 w-6 text-red-500 hover:text-yellow-500 cursor-pointer transition duration-200 ease-out
						hover:scale-110 "
						/>
						:
						""
						}
						<h1 className="text-md text-gray-400 cursor-pointer	">{currentUser ? "Logout" : ""}</h1>
						</div>

					</div>
				</div>
			</motion.div>

		</header>

	)
}