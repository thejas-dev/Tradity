import {motion} from 'framer-motion'



export default function Card({image}) {
	// body...

	return(
		<motion.div 
		initial={{
			opacity:0,
			x:200
		}}
		whileInView={{
			opacity:1,
			x:0
		}}
		transition={{
			duration:1.5
		}}

		className="flex md:items-center justify-center md:mt-5 mt-8" >
		<img src={image.message.text} alt=""
		className="mb-5 rounded-2xl shadow-lg shadow-orange-600/50  transition
		duration-200 md:w-[90%] w-[80%] ease-in-out hover:opacity-90"
		/>	


		</motion.div>


	)
}