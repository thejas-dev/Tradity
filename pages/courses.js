

export default function courses() {
	// body...


	return (
		<div className="h-screen  flex flex-col w-full bg-[rgb(30,30,30)] snap-y snap-mandatory overflow-y-scroll 
      	z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80  overflow-x-hidden scroll-smooth">
      		<div className="w-full h-full flex flex-col mt-10 items-center text-center">
      		<h3 className="uppercase tracking-[10px] text-center text-gray-500 text-2xl" >
				Stock Market
			</h3>
			<div className="w-full mt-10 h-full grid md:grid-cols-3 grid-cols-1 ">
				<div className="p-5 h-full w-full  mx-auto">
					<iframe className="aspect-[4/2.3] md:aspect-[4/3] w-full" src="https://www.youtube.com/embed/gUxzMeu8tqk" title="YouTube video" allowFullScreenallowfullscreen></iframe>
					<h1 className="text-md font-mono text-gray-200 mt-3">Introduction to Stock Market</h1>

				</div>
				
			</div>
      		</div>

		</div>


	)
}