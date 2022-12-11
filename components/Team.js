import {motion} from 'framer-motion'
import Image from 'next/image'
import {BsInstagram} from 'react-icons/bs'

export default function Team() {
	// body...

	return(
		<div className="min-h-screen max-w-7xl mx-auto text-center" >	
		<motion.div
		initial={{
			opacity:0,
		}}
		whileInView={{opacity:1}}
		transition={{duration:1.5}}
		>
			<h3 className="uppercase tracking-[20px] text-gray-500 text-2xl" >
				Team
			</h3>

		</motion.div>
		<div className="flex min-h-screen items-center flex-col gap-5 mt-7 md:flex-row justify-around">
		<motion.div
		initial={{
			opacity:0,
			x:-200
		}}
		whileInView={{opacity:1,x:0}}
		transition={{duration:1.5}}
		className="z-0 flex flex-col items-center"
		>
			
				<Image src="https://ik.imagekit.io/d3kzbpbila/thejashari_heRsuY-P-?ik-sdk-version=javascript-1.4.3&updatedAt=1670578174936"
				alt=""
				height={250}
				width={250}
				object="contain"
				className="shadow-xl shadow-blue-500/70 relative  rounded-full"
				/>
				<h1 className="text-xl font-semibold text-gray-500 mt-6">G M Saravana Kumar</h1>
				<h1 className="text-md font-semibold text-gray-500/80 mt-2">Options trader</h1>
				<h1 className="text-md font-semibold text-gray-700 mt-2">Positional options buyer </h1>
		</motion.div>
		<hr className="md:hidden" />
			<motion.div
		initial={{
			opacity:0,
			y:200
		}}
		whileInView={{opacity:1,y:0}}
		transition={{duration:1.5}}
		className="z-0 flex flex-col items-center"
		>
			
				<Image src="https://ik.imagekit.io/d3kzbpbila/thejashari_99Y-Ru0EH?ik-sdk-version=javascript-1.4.3&updatedAt=1670777610086"
				alt=""
				height={250}
				width={250}
				object="contain"
				className="shadow-xl shadow-blue-500/70 relative  rounded-full"
				/>
				<h1 className="text-xl font-semibold text-gray-500 mt-6">O R Arjun</h1>
				<h1 className="text-md font-semibold text-gray-500/80 mt-2">Forex Trader</h1>
		</motion.div>
		<hr className="md:hidden" />
			<motion.div
		initial={{
			opacity:0,
			x:200
		}}
		whileInView={{opacity:1,x:0}}
		transition={{duration:1.5}}
		className="z-0 flex flex-col items-center"
		>
			
				<Image src="https://ik.imagekit.io/d3kzbpbila/thejashari_bvh2Rativ?ik-sdk-version=javascript-1.4.3&updatedAt=1670553916566"
				alt=""
				height={250}
				width={250}
				object="contain"
				className=" shadow-xl shadow-blue-500/70 relative rounded-full"
				/>
				<h1 className="text-xl font-semibold text-gray-500 mt-6">K R Saravanan</h1>
				<h1 className="text-md font-semibold text-gray-500/80 mt-2">Cash market trader</h1>
		</motion.div>
		<hr className="md:hidden" />
		</div>
		</div>

	)
}