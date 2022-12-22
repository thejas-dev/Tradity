import {motion} from 'framer-motion'


export default function Services() {
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
				Our Services
			</h3>

		</motion.div>
		<div className="grid grid-cols-1 md:grid-cols-3 w-full h-full md:mt-[200px] mt-10 px-5 py-5 gap-10" >
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
					<h1 className="text-3xl text-yellow-500 font-bold uppercase">Investment advisory</h1>
					<p className="text-lg text-gray-300/70 font-semibold">
						We provide investment advice based on our experience to get the maximum returns to our clients.
					</p>

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
					<h1 className="text-3xl text-yellow-500 font-bold uppercase">Trading Assistance</h1>
					<p className="text-lg text-gray-300/70 font-semibold">We provide simple but powerful price action trading assistance that doesn't include any indicators</p>

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
				<div className="flex flex-col text-center " >	
					<h1 className="text-3xl text-yellow-500 font-bold uppercase">AUM</h1>
					<p className="text-4xl text-gray-300/70 mt-[60px] font-semibold">90K+</p>
					<p className="text-md text-gray-300/60 font-semibold">and counting...</p>

				</div>

			</motion.div>
			


		</div>


		</div>


	)
}