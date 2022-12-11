import {motion} from 'framer-motion'
import {useRecoilState} from 'recoil';
import {adminState,revealState3,imageIndexState,imagesState} from '../atoms/userAtom';
import {AiOutlineDelete} from 'react-icons/ai';


export default function Card({image,deleteImage,idx}) {
	// body...
	const [admin,setAdmin] = useRecoilState(adminState)
	const [reveal3,setReveal3] = useRecoilState(revealState3)
	const [images,setImages] = useRecoilState(imagesState);
	const [imageIndex,setImageIndex] = useRecoilState(imageIndexState);

	const setIndex =() =>{
		const id =images.indexOf(image);
		setImageIndex(id)
	}


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
		className="md:mt-5 mt-8  flex-col cursor-pointer">
		<h4 className="text-xl font-semibold text-gray-300">{image.title}</h4>
		<div 
		className="flex relative md:items-center mt-2 justify-center" >
		<AiOutlineDelete 
			onClick={()=>{
				deleteImage(image._id)
			}}
		className={`h-10 w-10 ${admin ? "" : "hidden"} cursor-pointer top-2 md:right-5 right-7 z-20 absolute text-red-500 hover:scale-110 transition duration-300 ease-in-out
		hover:text-blue-500`}/>
		<img 
		onClick={()=>{setReveal3(true);setIndex()}}
		src={image.link} alt=""
		className="mb-5 rounded-2xl shadow-lg shadow-orange-600/50  transition
		duration-200 md:w-[90%] w-[80%] ease-in-out hover:opacity-80"
		/>	


		</div>
		<p className="md:text-lg text-md text-gray-400/80 truncate">{image?.description?.substring(0,60)}...</p>
		</motion.div>


	)
}