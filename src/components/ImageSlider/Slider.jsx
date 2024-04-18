import { useEffect, useState } from "react"

function Slider(){

    const [selectedImageId,setSelectedImageId] = useState(0);

    const images = [
        'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/bc89bda3-e7dc-42fc-91f8-e380f36303c11651599573964-Tops---Tees_Desk.jpg',
        'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/e384cb32-690c-4ccf-a6cb-61df36960bb21651599573972-Workwear_Desk.jpg',
        'https://m.media-amazon.com/images/G/31/img24/Fashion/AF/SS24/Flip/TopHero/PC/cml-pc._CB580671423_.jpg'
    ]


    useEffect(()=>{

        const interval = setInterval(()=>{
            setSelectedImageId(prev=> images.length-1 == selectedImageId ? 0 : prev+1);
        },4000);

        return(
            ()=>{
                clearInterval(interval);
            }
        )

    }, [selectedImageId])

    return(
        <>
            <div className="relative z-[-50]">

                <div className="absolute top-1/2 p-1 left-0 bg-gray-200 hover:bg-gray-400"
                    onClick={()=>{
                        setSelectedImageId(prev=>prev == 0 ? images.length-1 : prev-1);
                    }}
                
                >
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 lg:w-12 lg:h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </div>
           

                    <div className="relative w-full z-[-20]">
                        <img src={images[selectedImageId]} alt="image" className="w-full"/>
                    </div>


                <div className="absolute top-1/2 right-0 bg-gray-200 p-1 hover:bg-gray-400 z-[-10]"
                
                onClick={()=>{
                    setSelectedImageId(prev=>prev===images.length-1 ? 0 : prev+1);
                }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5  sm:w-7 sm:h-7 md:w-10 md:h-10 lg:w-12 lg:h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                </div>
            
            </div>
        </>
    )
}

export default Slider;