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
		<div className="flex min-h-screen items-center flex-col gap- mt-7 md:flex-row justify-around">
		<motion.div
		initial={{
			opacity:0,
		}}
		whileInView={{opacity:1}}
		transition={{duration:1.5}}
		className="z-0 flex flex-col items-center"
		>
			
				
				<h1 className="text-xl font-semibold text-gray-200 mt-6">G M Saravana Kumar</h1>
				<h1 className="text-md font-semibold text-gray-300/70 mt-2">Options trader</h1>
				<h1 className="text-md font-semibold text-gray-600/80 mt-2">Positional options buyer </h1>
		</motion.div>
		<hr className="md:hidden" />
			<motion.div
		initial={{
			opacity:0,
		}}
		whileInView={{opacity:1}}
		transition={{duration:1.5}}
		className="z-0 flex flex-col items-center"
		>
			
				<h1 className="text-xl font-semibold text-gray-200 mt-6">O R Arjun</h1>
				<h1 className="text-md font-semibold text-gray-300/70 mt-2">Forex Trader</h1>
				<h1 className="text-md font-semibold text-gray-600/80 mt-2">Forex and Commodities</h1>
		</motion.div>
		<hr className="md:hidden" />
		<motion.div
		initial={{
			opacity:0,
		}}
		whileInView={{opacity:1}}
		transition={{duration:1.5}}
		className="z-0 flex flex-col items-center"
		>
			
				
				<h1 className="text-xl font-semibold text-gray-200 mt-6">N U Thejas Hari</h1>
				<h1 className="text-md font-semibold text-gray-300/70 mt-2">Cash market trader</h1>
				<h1 className="text-md font-semibold text-gray-600/80 mt-2">Swing and Intraday</h1>
		</motion.div>
		<hr className="md:hidden" />
		<motion.div
		initial={{
			opacity:0,
		}}
		whileInView={{opacity:1}}
		transition={{duration:1.5}}
		className="z-0 flex flex-col items-center"
		>
			
				
				<h1 className="text-xl font-semibold text-gray-200 mt-6">K R Saravanan</h1>
				<h1 className="text-md font-semibold text-gray-300/70 mt-2">Cash market trader</h1>
				<h1 className="text-md font-semibold text-gray-600/80 mt-2">Swing and Intraday</h1>
		</motion.div>

		</div>
		</div>

	)
}