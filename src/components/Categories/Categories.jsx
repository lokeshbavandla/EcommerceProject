import { Link } from "react-router-dom";

function Categories(){
    return(
        <>
            <div className="flex max-md:flex-col max-md:my-[20rem] justify-center items-center gap-2 h-[80vh] m-[2rem]"
            
                    onClick={()=> window.scrollTo({
                        top:0,
                        behavior: 'smooth'
                    })}
            >
                <div className="flex-1 flex flex-col gap-2 h-full w-full shrink-0"
                
                    
                >

                   
                         <div className="flex-1 bg-green-500 h-full w-full overflow-hidden relative shrink-0">
                         <Link to='products/jackets'>
                            <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/27074414/2024/1/20/d0d457dd-6c7f-48e4-8ecf-aa065d78e1d91705730782952HighStarMenWashedCropDenimJacketwithPatchwork7.jpg" alt="" className="h-full w-full object-cover object-top max-md:object-center" />
                            <button className="absolute top-1/2 left-1/3 bg-white px-4 py-2 hover:bg-blue-500">Jackets</button>
                        </Link>
                        </div>
                   
                    <div className="flex-1 bg-green-500 h-full w-full overflow-hidden relative">
                        <Link to='products/tshirts'>
                            <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/27583506/2024/2/19/5e7d9d7b-9d55-4de9-aa1a-01fd7d3d16321708327427164-Roadster-Men-Tshirts-5391708327426850-1.jpg" alt="" className="h-full w-full object-cover object-top max-md:object-center" />
                            <button className="absolute top-1/2 left-1/3 bg-white px-4 py-2 hover:bg-blue-500">Tshirts</button>
                        </Link>

                    </div>
                </div>
                
                <div className="flex-1 bg-green-500 h-full w-full overflow-hidden relative">
                    <Link to='products/trousers'> 
                         <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13823708/2022/10/19/8cdca2cb-b584-4fad-86d4-4b7a5058bec21666156159160-Urbano-Fashion-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Stretc-4.jpg" alt="" className="h-full w-full object-cover object-top max-md:object-center" />
                        <button className="absolute top-1/2 left-1/3 bg-white px-4 py-2 hover:bg-blue-500">Jeans</button>
                    </Link>
                </div>
                

                <div className="flex-[2_2_0%] flex flex-col gap-2 h-full w-full">
                    <div className="flex-1 flex gap-2 h-full w-full overflow-hidden">
                        <div className="flex-1 bg-green-500 h-full w-full overflow-hidden relative">
                        <Link to='products/newarrivals'>
                            <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/27136776/2024/2/12/cf2e468b-5180-4a4c-bf5b-31e2e48bc4991707736143071-Sztori-Men-Shirts-3331707736142691-6.jpg" alt="" className="h-full w-full object-cover object-top max-md:object-center" />
                             <button className="absolute top-1/2 left-1/3 bg-white px-4 py-2 hover:bg-blue-500 max-sm:left-7">New Arrivals</button>
                      </Link>
                      </div>
                    

                        
                        <div className="flex-1 bg-green-500 h-full w-full overflow-hidden relative">
                        <Link to='products/shirts'>
                            <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/9680385/2019/8/19/9a71effc-5ca8-4f56-94c0-2c71054102101566218377789-Roadster-Men-Shirts-8021566218376333-1.jpg" alt="" className="h-full w-full object-cover object-top max-md:object-center" />
                            <button className="absolute top-1/2 left-1/3  bg-white px-4 py-2 hover:bg-blue-500">Shirts</button>
                        </Link>
                        </div>
                        
                    </div>
                    
                        <div className="flex-1 bg-green-500 h-full w-full overflow-hidden relative">
                            <Link to='products/shorts'>

                            <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13257666/2021/3/19/a5491c23-3171-4ab0-84b1-9eecac266ee01616127927067-Mast--Harbour-Men-Navy-Blue-Solid-Regular-Fit-Cargo-Shorts-4-4.jpg" alt="" className="h-full w-full object-cover object-center max-md:object-center" />
                            <button className="absolute top-1/2 left-2/4  bg-white px-4 py-2 hover:bg-blue-500">Shorts</button>
                            </Link>
                        </div>
                    
                </div>

            </div>
        </>
    )
}

export default Categories;