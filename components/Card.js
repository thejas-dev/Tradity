import {motion} from 'framer-motion'
import {useRecoilState} from 'recoil';
import {adminState} from '../atoms/userAtom';
import {AiOutlineDelete} from 'react-icons/ai';


export default function Card({image,deleteImage}) {
	// body...
	const [admin,setAdmin] = useRecoilState(adminState)

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

		className="flex relative md:items-center justify-center md:mt-5 mt-8" >
		<AiOutlineDelete 
			onClick={()=>{
				deleteImage(image._id)
			}}
		className={`h-10 w-10 ${admin ? "" : "hidden"} cursor-pointer top-2 right-5 z-20 absolute text-red-500 hover:scale-110 transition duration-300 ease-in-out
		hover:text-blue-500`}/>
		<img src={image.link} alt=""
		className="mb-5 rounded-2xl shadow-lg shadow-orange-600/50  transition
		duration-200 md:w-[90%] w-[80%] ease-in-out hover:opacity-90"
		/>	


		</motion.div>


	)
}