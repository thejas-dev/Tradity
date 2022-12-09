import {motion} from 'framer-motion';
import {useState,useEffect} from 'react';
import axios from 'axios'
import Card from './Card'
export default function Gallery() {
	// body...
	const [images,setImages] = useState([]);
	const [firstArray,setFirstArray] = useState([]);
	const [secondArray,setSecondArray] = useState([]);
	const [thirdArray,setThirdArray] = useState([]);

		const fetch2 = async() =>{
			const {data} = await axios.get('https://chat-siris-v2-server.vercel.app/api/auth/tradity')
			setImages(data.data);
		}
	useEffect(()=>{
		
		fetch2();
	},[])

	useEffect(()=>{
		setFirstArray([]);
		setSecondArray([])
		setThirdArray([])
		let firstColumn = []
		let secondColumn = []
		let thirdColumn = []
		images.forEach((image,i)=>{
			if(i%3 === 0){
				firstColumn.push(image)
			}else if(i%2 === 0){
				secondColumn.push(image)
			}else{
				thirdColumn.push(image)
			}
		})
		setFirstArray(firstColumn);
		setSecondArray(secondColumn);
		setThirdArray(thirdColumn);
	},[images])
	return (

		<div className="min-h-screen max-w-7xl w-full mx-auto text-center mt-7" >
		<motion.div
		initial={{
			opacity:0,
		}}
		whileInView={{opacity:1}}
		transition={{duration:1.5}}
		>
			<h3 className="uppercase tracking-[20px] text-gray-500 text-2xl" >
				Charts
			</h3>

		</motion.div>
		<div className="min-h-screen w-full md:mt-[60px]">
			<div className="flex grid px-5 gap-2 md:gap-10 grid-cols-1 md:grid-cols-3">
					<div className="flex flex-col">
						{
							firstArray.map((image,key)=>(
								<Card image={image} key={key} idx={key}  />
							))
						}
					</div>
					<div className="flex flex-col">
						{
							secondArray.map((image,key)=>(
								<Card image={image} key={key} idx={key}  />
							))
						}
					</div>
					<div className="flex flex-col">
						{
							thirdArray.map((image,key)=>(
								<Card image={image} key={key} idx={key}  />
							))
						}
					</div>
			</div>
		</div>
		</div>

	)
}