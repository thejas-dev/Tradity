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
		}}
		whileInView={{
			opacity:1,
		}}
		transition={{
			duration:1.5
		}}
		className="md:mt-5 mt-2  flex-col cursor-pointer">
		<div 
		className="flex flex-col relative items-center md:items-center mt-5 justify-center" >
		<AiOutlineDelete 
			onClick={()=>{
				deleteImage(image._id)
			}}
		className={`h-10 w-10 ${admin ? "" : "hidden"} cursor-pointer top-[50px] md:top-[60px] md:right-5 right-8 absolute text-red-500 hover:scale-110 transition duration-300 ease-in-out
		hover:text-blue-500`}/>
		<div className="w-[80%] md:w-[90%] mb-3 flex items-center justify-between">
			<div className="flex gap-2 md:gap-4 items-center">
				<img src="https://ik.imagekit.io/d3kzbpbila/thejashari_sievRnfaX?ik-sdk-version=javascript-1.4.3&updatedAt=1671288680372"
				alt=""
				className="h-10 w-10 md:w-12 md:h-12 rounded-full"
				/>
				<p className="text-gray-300 font-semibold text-md">Saravana Kumar</p>
			</div>
			<p className="text-gray-600/80 font-semibold text-sm md:mr-5">{image.updatedAt.split('T')[0]}</p>
		</div>
		<img 
		onClick={()=>{setReveal3(true);setIndex()}}
		src={image.link} alt=""
		className="mb-5 rounded-2xl shadow-lg shadow-orange-600/50 transition
		duration-200 md:w-[90%] w-[80%] ease-in-out hover:opacity-80"
		/>	


		</div>
		<p className="md:text-lg text-md font-semibold text-gray-300">{image?.title}</p>
		</motion.div>


	)
}