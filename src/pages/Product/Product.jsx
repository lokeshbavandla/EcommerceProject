import { useEffect, useState } from 'react';
import {Card} from '../../components'
import { Link, useParams } from 'react-router-dom';
import allItems from '../../constants/allItems/allItems';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart,addToSaved,removeFromSavedItems} from '../../redux/cartReducer'


const Product = ()=>{

    const [itemadded,setItemAdded] = useState(false);
    const [itemQty,setItemQty] = useState(1);
    const [size,setSize] = useState('');
    const [currentImage,setCurrenImage] = useState('img1');
    const [sizeSelected,setSizeSelected] = useState(true);
    const [itemSaved,setItemSaved] = useState(false);

    const dispatch = useDispatch();

    const {productId} = useParams();

    const productDetails = allItems.filter((product)=>product.id == productId)[0] || [];

    const qtyIncrement = ()=>{
        setItemQty(prev=>prev+1)
    }

    const qtyDecrement = ()=>{
        setItemQty(prev=> prev==1 ? 1 : prev-1);
    }

    const addToCartHandler = ()=>{
        dispatch(addToCart({...productDetails,qty:itemQty,size}));
        console.log('done');
    }

    const addtoSavedHandler = ()=>{
        dispatch(addToSaved({...productDetails,size}))
        console.log('savedItems');
    }

    const products = useSelector((state)=> state.cart.products);

    const savedProducts = useSelector((state)=>state.cart.savedItems);

    useEffect(()=>{
        const itemStatus = products.filter((product)=>product.id==productId);

        if(itemStatus.length==0){
            setItemAdded(false);
        } else{
            setItemAdded(true)
        }
    },[productId,products])

    useEffect(()=>{
        const itemStatus = savedProducts.filter((product)=>product.id==productId);

        if(itemStatus.length==0){
            setItemSaved(false);
        } else{
            setItemSaved(true)
        }
    },[productId,savedProducts])


    // useEffect(()=>{
    //     dispatch(updateQty({id:productDetails.id, qty:itemQty}));
    // },[itemQty])

    return(

        <div className="m-[2rem] max-sm:m-[0]">
                <div className="flex m-[2rem] gap-12 max-lg:flex-col">

                        {/* left Section */}

                        <div className="flex flex-1 gap-5 max-lg:flex-col">

                            <div className="w-[5rem] flex flex-col gap-4 max-lg:order-2 max-lg:flex-row max-lg:w-[10rem] max-lg:mx-auto">
                                <div className="w-full"
                                    onMouseEnter={()=>setCurrenImage('img1')}
                                >
                                    <img src={productDetails.img1} alt="" className="w-full hover:border-4 hover:border-blue-400 rounded-lg"/>
                                </div>

                                <div className="w-full"
                                    onMouseEnter={()=>setCurrenImage('img2')}
                                >
                                    <img src={productDetails.img2} alt="" className="w-full hover:border-4 hover:border-blue-400 rounded-lg"/>
                                </div>
                            </div>

                            <div className="flex-5 max-lg:order-1">
                                <img src={productDetails[currentImage]} alt="" className="w-full"/>

                            </div>
                        </div>

                        {/* Right Section */}

                        <div className="flex-1 p-5 max-sm:m-auto">
                            <div className="flex flex-col gap-5">
                                <div>
                                    <p className="text-sm text-blue-600 underline cursor-pointer mb-2">Visit FashionCart's Store</p>
                                    <h2 className="text-3xl font-bold max-sm:text-xl">{productDetails.title}</h2>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                    </svg>
                                    <p className="font-medium text-lg max-sm:text-md">({productDetails.rating}) Ratings</p>
                                </div>
                                
                                <div className='max-sm:text:md'>
                                    <p className="text-2xl flex gap-2 items-center mb-1 max-sm:text-xl"> <span className="font-bold">{productDetails.price}</span> <span className="text-lg text-gray-500 max-sm:text-md">MRP:</span> <span className="text-lg line-through text-gray-500 max-sm:text-md">{productDetails.mrp}</span>
                                    
                                        <span className="font-bold text-red-600 max-sm:text-md">({productDetails.offerPercentage + '%'})</span>
                                    </p>
                                    <p>Inclusive of all taxes</p>
                                </div>
                                
                                <div>
                                    <p className={`text-xl font-bold mb-4 max-sm:text-lg`}>Select Size:</p>
                                    <p className={`text-sm text-red-500 mb-4 ${sizeSelected==false ? 'block' : 'hidden'}`}>Please select any size</p>

                                    <div className="flex gap-4 max-sm:text-md max-sm:gap-2"
                                        onClick={()=>setSizeSelected(true)}
                                    >
                                        <div className={`rounded-full h-[3.5rem] w-[3.5rem] max-sm:h-[2.5rem] max-sm:w-[2.5rem] flex items-center justify-center border-2 hover:border-blue-500 cursor-pointer ${size=='S' ? 'border-blue-500' : ''}`}
                                            onClick={()=>setSize('S')}
                                        >
                                            <span>S</span>
                                        </div>
                                        <div className={`rounded-full h-[3.5rem] w-[3.5rem] max-sm:h-[2.5rem] max-sm:w-[2.5rem] flex items-center justify-center border-2 hover:border-blue-500 cursor-pointer ${size=='M' ? 'border-blue-500' : ''}`}
                                            onClick={()=>setSize('M')}
                                        >
                                            <span>M</span>
                                        </div>
                                        <div className={`rounded-full h-[3.5rem] w-[3.5rem] max-sm:h-[2.5rem] max-sm:w-[2.5rem] flex items-center justify-center border-2 hover:border-blue-500 cursor-pointer ${size=='L' ? 'border-blue-500' : ''}`}
                                            onClick={()=>setSize('L')}
                                        >
                                            <span>L</span>
                                        </div>
                                        <div className={`rounded-full h-[3.5rem] w-[3.5rem] max-sm:h-[2.5rem] max-sm:w-[2.5rem] flex items-center justify-center border-2 hover:border-blue-500 cursor-pointer ${size=='XL' ? 'border-blue-500' : ''}`}
                                            onClick={()=>setSize('XL')}
                                        >
                                            <span>XL</span>
                                        </div>
                                        <div className={`rounded-full h-[3.5rem] w-[3.5rem] max-sm:h-[2.5rem] max-sm:w-[2.5rem] flex items-center justify-center border-2 hover:border-blue-500 cursor-pointer ${size=='XXL' ? 'border-blue-500' : ''}`}
                                            onClick={()=>setSize('XXL')}
                                        >
                                            <span>XXL</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={`flex items-center mt-2 ${itemadded ? 'hidden' : 'block'}`}>
                                    <p className='text-xl font-medium'>Qty:</p>
                                    <div className={` ml-4 flex items-center gap-4 font-medium`}>
                                                <button className='h-10 px-5 bg-gray-200 text-3xl align-center rounded-md'
                                                    onClick={()=>qtyDecrement()}
                                                >-</button>
                                                <span className='text-xl w-5 text-center'>{itemQty}</span>
                                                <button className='h-10 px-5 bg-gray-200 text-2xl align-center rounded-md'
                                                    onClick={()=>qtyIncrement()}
                                                >+</button>
                                    </div>
                                </div>

                                

                                <div className="w-2/3 flex gap-5 mt-2 items-center max-sm:flex-col">
                                    <div className="w-full flex items-center justify-center">
                                        <button className={`py-2 w-full text-center text-xl bg-red-700 font-medium rounded-md text-white ${itemadded ? 'hidden' : 'block'}`}
                                            onClick={()=>{
                                                if(size === ''){
                                                    setSizeSelected(false);
                                                } else{
                                                    setItemAdded(true);
                                                    addToCartHandler();
                                                    setSizeSelected(true);
                                                }
                                                
                                            }}
                                        >Add to Cart</button>  

                                        <div className={`w-full ${itemadded ? 'block' : 'hidden'}`}>
                                             <Link to='/checkout'>
                                                <button className={`py-2 w-full text-center text-xl bg-blue-500 font-medium rounded-md text-white`}
                                                >Go to Cart</button>
                                            </Link>  
                                        </div>
                                       
                                    </div>

                                    

                                    <div className={`py-2 w-full border-[1px]  text-center text-xl rounded-md flex items-center justify-center gap-2 ${itemSaved ? 'bg-gray-500 text-white' : 'border-gray-500'}`}
                                    
                                            // onClick={()=>{addtoSavedHandler()}}

                                            
                                    >

                                        <div className={`flex items-center gap-2 ${itemSaved ? 'hidden' : 'block'}`}
                                            onClick={()=>{
                                                    addtoSavedHandler();
                                                    setItemSaved(true);
                                                
                                            }}
                                        >   
                                            <svg xmlns="http://www.w3.org/2000/svg" fill='none' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                    </svg>
                                            <button className="font-medium">WishList</button>
                                        </div>
                                        <Link to='/productCollection'>
                                        <div className={`flex items-center gap-2 ${itemSaved ? 'block' : 'hidden'}`}>
                                            
                                            <svg xmlns="http://www.w3.org/2000/svg" fill='currentcolor' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                    </svg>
                                            <button className="font-medium">WishListed</button>
                                           
                                        </div>
                                        </Link>

                                    
                                    </div>
                                </div>

                                <hr/>

                                <div className="px-6">
                                    <ul className="list-disc">
                                        <li>Easy 10 days Return & Exchange</li>
                                        <li>Free Delivery</li>
                                        <li>Cash On Delivery (COD) Available</li>
                                        <li>100% Quality Products</li>
                                    </ul>
                                </div>

                                <hr />

                                <div>
                                    <p className="text-xl font-bold mb-2">Product Details:</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloribus ullam minima quaerat placeat. Quasi sunt dignissimos pariatur obcaecati quae.</p>

                                    <p className="text-lg font-bold mb-2 mt-2">Size & Fit</p>
                                    <ul>
                                        <li>Brand Fit:</li>
                                        <li>Fit: Slim Fit</li>
                                    </ul>

                                    <p className="text-lg font-bold mb-2 mt-2">Material & Care</p>
                                    <ul>
                                        <li>Material: Cotton</li>
                                        <li>Machine Wash Only</li>
                                    </ul>
                                </div>

                                <hr />

                                <div>
                                    <p className="text-xl font-bold mb-2">Additional Information:</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque ad sint esse vitae, aperiam dicta cum accusantium repudiandae iusto aliquam dolorem soluta sequi tempora?</p>
                                </div>

                            </div>
                        </div>
                 </div>

                 <hr />

                 <div className='flex flex-wrap justify-center items-center'>
                    <p className='text-3xl font-bold pt-10 px-10'>Similar Products</p>
                 </div>

                <div className=' p-10 pt-6 m-auto mt-6 flex flex-wrap justify-center gap-10 items-center' 
                    onClick={()=> window.scrollTo({
                        top:0,
                        behavior: 'smooth'
                    })}
                >
                    {
                        allItems.filter((value)=>value.category == productDetails.category).map((product)=>{
                            return(
                                <div key={product.id}>
                                    <Card productDetails={product} />
                                </div>
                            )
                        })
                    }

                </div>
                 
        </div>
        
    )
}

export default Product;