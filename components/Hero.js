import {useState,useEffect} from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import BackgroundCircles from './BackgroundCircles'
// import {useTypewriter, Cursor} from 'react-simple-typewriter'
import Link from 'next/link';

export default function Hero() {
	// body...

	// const [text]= useTypewriter({
	// 	words: ['T R A D I T Y'],
	// 	loop: true,
	// 	delaySpeed: 2000,	
	// })

	return (
		<div className="md:min-h-screen mb-10 pl-5 w-full" >	

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
				className="flex  items-center items-center md:p-20 items-center justify-center"
				>
					<Image 
					src="https://ik.imagekit.io/d3kzbpbila/thejashari_8tbU4Tzr6?ik-sdk-version=javascript-1.4.3&updatedAt=1670511161122"
					object="cover"
					height={430}
					width={430}
					className="rounded-full relative z-30 shadow-lg shadow-red-500/50"
					/>
					<div className=" absolute top-[170px] md:top-[250px] z-0 ">
						<BackgroundCircles/>

					</div>
				</motion.div>
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
					<div className="w-full h-full justify-center md:gap-12 gap-7 flex flex-col text-center z-10 p-5" > 
						<h1 className="text-xl md:text-5xl text-yellow-500 font-semibold">T R A D I T Y</h1>
						<p className="md:text-xl  text-sm text-gray-300/90 font-mono ">We Focus on various trading like cash market and F&O trading</p>
							
					</div>

				</motion.div>
			</div>
			<div className=" flex  w-full md:gap-10 gap-2 items-center mt-5 justify-center" >
							<Link href="#mvv" >
								<button className="heroButton text-md md:text-lg">m-v-v</button>
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