import {useState,useEffect} from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import BackgroundCircles from './BackgroundCircles'
// import {useTypewriter, Cursor} from 'react-simple-typewriter'
import Link from 'next/link';

export default function Hero() {
	// body...
	const [animate,setAnimate] = useState(false);
	const [animateT,setAnimateT] = useState(false);
	const [animateR,setAnimateR] = useState(false);
	const [animateA,setAnimateA] = useState(false);
	const [animateD,setAnimateD] = useState(false);
	const [animateI,setAnimateI] = useState(false);
	const [animateT2,setAnimateT2] = useState(false);
	const [animateY,setAnimateY] = useState(false);

	// const [text]= useTypewriter({
	// 	words: ['T R A D I T Y'],
	// 	loop: true,
	// 	delaySpeed: 2000,	
	// })

	// setTimeout(function() {
	// 	setAnimate(true);
	// }, 200);
	// setTimeout(function() {
	// 	setAnimate(false);
	// }, 3000);
	const animateMe = () =>{
		setTimeout(function() {
			setAnimateT(true);
		}, 1000);
		setTimeout(function() {
			setAnimateR(true);
		}, 1200);
		setTimeout(function() {
			setAnimateA(true);
		}, 1400);

		setTimeout(function() {
			setAnimateD(true);
		}, 1600);setTimeout(function() {
			setAnimateI(true);
		}, 1800);
		setTimeout(function() {
			setAnimateT2(true);
		}, 2000);
		setTimeout(function() {
			setAnimateY(true);
		}, 2200);
		//retract
		setTimeout(function() {
			setAnimateT(false);
		}, 2100);
		setTimeout(function() {
			setAnimateR(false);
		}, 2300);
		setTimeout(function() {
			setAnimateA(false);
		}, 2500);

		setTimeout(function() {
			setAnimateD(false);
		}, 2700);
		setTimeout(function() {
			setAnimateI(false);
		}, 2900);
		setTimeout(function() {
			setAnimateT2(false);
		}, 3100);
		setTimeout(function() {
			setAnimateY(false);

		}, 3300);
		//blink twice
		setTimeout(function() {
			setAnimateT(true);
		}, 3900);
		setTimeout(function() {
			setAnimateR(true);
		}, 3900);
		setTimeout(function() {
			setAnimateA(true);
		}, 3900);

		setTimeout(function() {
			setAnimateD(true);
		}, 3900);
		setTimeout(function() {
			setAnimateI(true);
		}, 3900);
		setTimeout(function() {
			setAnimateT2(true);
		}, 3900);
		setTimeout(function() {
			setAnimateY(true);
			
		}, 3900);
		//high
		setTimeout(function() {
			setAnimateT(false);
		}, 4300);
		setTimeout(function() {
			setAnimateR(false);
		}, 4300);
		setTimeout(function() {
			setAnimateA(false);
		}, 4300);

		setTimeout(function() {
			setAnimateD(false);
		}, 4300);
		setTimeout(function() {
			setAnimateI(false);
		}, 4300);
		setTimeout(function() {
			setAnimateT2(false);
		}, 4300);
		setTimeout(function() {
			setAnimateY(false);	
		}, 4300);

		//2nd blink
		setTimeout(function() {
			setAnimateT(true);
		}, 4800);
		setTimeout(function() {
			setAnimateR(true);
		}, 4800);
		setTimeout(function() {
			setAnimateA(true);
		}, 4800);

		setTimeout(function() {
			setAnimateD(true);
		}, 4800);
		setTimeout(function() {
			setAnimateI(true);
		}, 4800);
		setTimeout(function() {
			setAnimateT2(true);
		}, 4800);
		setTimeout(function() {
			setAnimateY(true);
			
		}, 4800);
		//high
		setTimeout(function() {
			setAnimateT(false);
		}, 5200);
		setTimeout(function() {
			setAnimateR(false);
		}, 5200);
		setTimeout(function() {
			setAnimateA(false);
		}, 5200);

		setTimeout(function() {
			setAnimateD(false);
		}, 5200);
		setTimeout(function() {
			setAnimateI(false);
		}, 5200);
		setTimeout(function() {
			setAnimateT2(false);
		}, 5200);
		setTimeout(function() {
			setAnimateY(false);
			
		}, 5200);


	}
	useEffect(()=>{
		setTimeout(function() {animateMe()}, 400);
	},[])

	return (
		<div className="md:min-h-screen flex flex-col items-center justify-center mb-10 pl-5 w-full" >	
		<div className=" absolute top-[170px] md:top-[250px] z-0 ">
			<BackgroundCircles/>
		</div>
			<div className="flex mt-10 gap-12 md:gap-1" >

				<motion.div
				initial={{
					opacity:0,
				}}
				animate={{
					opacity:1,			
				}}
				transition={{
					duration:1.5
				}}	
				className="flex flex-grow flex-col items-center "		
				>	
					<div className="w-full relative h-full justify-center md:gap-12 gap-7 flex flex-col text-center z-10 p-5" > 
						
						<h1 className="text-5xl md:text-8xl text-yellow-500 relative font-semibold">
						<span className={`${animateT ? "opacity-20 transition-all duration-500 ease-in-out":""} transition-all duration-500 ease-in-out`} >T</span><span className={`${animateR ? "opacity-20 transition-all duration-500 ease-in-out":""} transition-all duration-500 ease-in-out`} > R</span> <span className={`${animateA ? "opacity-20 transition-all duration-500 ease-in-out":""} transition-all duration-500 ease-in-out`} >A</span> <span className={`${animateD ? "opacity-20 transition-all duration-500 ease-in-out":""} transition-all duration-500 ease-in-out`} >D</span> 
						<span className={`${animateI ? "opacity-20 transition-all duration-500 ease-in-out":""} transition-all duration-500 ease-in-out`} > I</span> <span className={`${animateT2 ? "opacity-20 transition-all duration-500 ease-in-out":""} transition-all duration-500 ease-in-out`} >T</span> 
						<span className={`${animateY ? "opacity-20 transition-all duration-500 ease-in-out":""} transition-all duration-500 ease-in-out`} > Y</span>
						</h1>
						<p className="md:text-xl  text-sm text-gray-300/90 font-mono ">"When money realizes that it is in good hands, it wants to stay and multiply in those hands"</p>
							
					</div>

				</motion.div>
			</div>
			<div className=" flex  w-full md:gap-10 gap-2 items-center mt-5 justify-center" >
							<Link href="#services" className="z-50" >
								<button className="heroButton text-md md:text-lg">Services</button>
							</Link>
							<Link href="#gallery" >
								<button className="heroButton text-md md:text-lg">chart</button>
							</Link>
							<Link href="#team" >
								<button className="heroButton text-md md:text-lg">team</button>
							</Link>
							<Link href="#join">
								<button className="heroButton text-md md:text-lg">Join</button>
							</Link>
						</div>
		</div>

	)
}


				// <motion.div
				// initial={{
				// 	opacity:0,
				// }}
				// animate={{
				// 	opacity:1,			
				// }}
				// transition={{
				// 	duration:1.5
				// }}
				// className="flex  items-center items-center md:p-20 items-center justify-center"
				// >
				// 	<Image 
				// 	src="https://ik.imagekit.io/d3kzbpbila/thejashari_8tbU4Tzr6?ik-sdk-version=javascript-1.4.3&updatedAt=1670511161122"
				// 	object="cover"
				// 	height={430}
				// 	width={430}
				// 	className="rounded-full relative z-30 shadow-lg shadow-red-500/50"
				// 	/>
					
				// </motion.div>