import {useRecoilState} from 'recoil';
import {RevealState} from '../atoms/userAtom';
import {motion} from 'framer-motion'


export default function Video() {
	// body...
	const [reveal,setReveal] =useRecoilState(RevealState);

	return (
		<div className="min-h-screen max-w-7xl mt-8 mx-auto text-center" >
			<motion.div
			initial={{
				opacity:0.4
			}}
			whileInView={{
				opacity:1
			}}
			transition={{
				duration:1.5
			}}
			className="h-full w-full"
			>	
				<h1 className="text-2xl uppercase  text-gray-500 tracking-[20px]">
					course
				</h1>

			</motion.div>
			<motion.div 
			initial={{
				opacity:0.4
			}}
			whileInView={{
				opacity:1
			}}
			transition={{
				duration:1.5
			}}
			className="mt-[300px] flex items-center justify-center text-center w-full"
			>
				<h1 className="text-yellow-500 text-3xl font-semibold">Course will be available soon, <span
				onClick={()=>setReveal(true)} 
				className="cursor-pointer text-blue-500">Subscribe</span> and stay tuned with us</h1>

			</motion.div>

		</div>
	)
}