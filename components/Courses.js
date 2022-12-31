import {motion} from 'framer-motion'

export default function Courses() {
	// body...

	return (
		<div className="min-h-screen max-w-7xl mt-10 mx-auto text-center" >
		<motion.div
		initial={{
			opacity:0,
		}}
		whileInView={{opacity:1}}
		transition={{duration:1.5}}
		>
			<h3 className="uppercase md:tracking-[20px] tracking-[10px] text-gray-500 text-2xl" >
				Mission-vision
			</h3>

		</motion.div>
		<div className="grid grid-cols-1 md:grid-cols-2 w-full h-full md:mt-[200px] mt-10 px-5 py-5 gap-10" >
			<motion.div
			initial={{
				opacity:0.5
			}}
			whileInView={{
				opacity:1
			}}
			transition={{
				duration:1.5
			}}
			className="rounded-xl bg-gray-700/40 p-5 h-[300px]"
			>
				<div className="flex flex-col gap-5 text-center justify-center" >	
					<h1 className="text-3xl text-yellow-500 font-bold uppercase">M i s s i o n</h1>
					<p className="text-lg text-gray-300/70 font-semibold">Our Mission is to give awareness about stock market to people and guide
					them in a right way.</p>

				</div>

			</motion.div>
			<motion.div
			initial={{
				opacity:0.5
			}}
			whileInView={{
				opacity:1
			}}
			transition={{
				duration:1.5
			}}
			className="rounded-xl bg-gray-700/40 p-5 h-[300px]"
			>
				<div className="flex flex-col gap-5 text-center justify-center" >	
					<h1 className="text-3xl text-yellow-500 font-bold uppercase">V I S I O N</h1>
					<p className="text-lg text-gray-300/70 font-semibold">To educate and help people with finance</p>

				</div>

			</motion.div>
			


		</div>


		</div>


	)
}