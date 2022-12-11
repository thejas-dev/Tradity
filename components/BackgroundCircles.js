
import {motion} from 'framer-motion'



export default function BackgroundCircles() {
	// body...

	return(
	<div className="" >
		<motion.div 
		initial={{
			opacity:0,
		}}
		animate={{
			scale:[1,1.2,1.3,1.5,1],
			opacity: [0.1,0.2,0.4,0.8,0.2],
			borderRadius:["20%","20%","50%","80%","20%"]
		}}
		transition={{
			duration:3.5
		}}
		className="relative z-0 flex justify-center items-center h-full w-full" >
			<div className="absolute border border-[#333333] hidden md:inline-flex rounded-full h-[450px] w-[450px] md:h-[200px] md:w-[200px] mt-80 animate-ping" />
			<div className="absolute border border-[#333333] hidden md:inline-flex rounded-full h-[450px] w-[450px] md:h-[300px] md:w-[300px] mt-80"/>
			<div className="absolute border border-[#333333] hidden md:inline-flex rounded-full h-[560px] w-[560px] md:h-[500px] md:w-[500px] mt-80"/>
			<div className="rounded-full border border-[#F7AB0A] md:inline-flex md:h-[550px] md:w-[550px] hidden absolute md:mt-80 mt-[200px] animate-pulse" />
			<div className="absolute border border-[#333333] hidden md:inline-flex rounded-full h-[450px] w-[450px] md:h-[800px] md:w-[800px] mt-80" />
		</motion.div>

		<motion.div 
		initial={{
			opacity:0,
		}}
		whileInView={{
			scale:[1,1.01,1],
			opacity: [0.1,0.2,0.4,1,0.2],
			borderRadius:["20%","20%","30%","35%","20%"]
		}}
		transition={{
			duration:3.5
		}}
		className="relative md:hidden z-0 flex justify-center items-center h-full w-full" >
			<div className="rounded-full border border-[#F7AB0A] md:inline-flex md:h-[550px] md:w-[550px] h-[260px] w-[260px] absolute md:mt-52 mt-[80px] animate-pulse" />
		</motion.div>
	</div>
		)
}