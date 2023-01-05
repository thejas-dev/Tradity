import {useRecoilState} from 'recoil';
import {RevealState} from '../atoms/userAtom';
import {motion} from 'framer-motion'
import {AiTwotoneFolderOpen,AiTwotoneFolder} from 'react-icons/ai'


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
			className="grid md:mt-20 mt-10 md:grid-cols-3 grid-cols-1 items-center justify-center gap-5 text-center w-full"
			>
				<div className="w-full flex items-center cursor-pointer hover:bg-white/10 rounded-full flex-col justify-center">	
				
					<a href="/courses">
						<AiTwotoneFolderOpen className="w-40 h-40 text-gray-500 "/>
					</a>
					<h1 className="text-lg font-mono text-gray-300">Stock Market Crash Course</h1>
				</div>
				<div className="w-full flex items-center cursor-pointer hover:bg-white/10 rounded-full flex-col justify-center">	
					<AiTwotoneFolder className="w-40 h-40 text-gray-500 "/>
					<h1 className="text-lg font-mono text-gray-300">Upcoming:- Options Course</h1>
				</div>

				<div className="">

				</div>
			</motion.div>

		</div>
	)
}