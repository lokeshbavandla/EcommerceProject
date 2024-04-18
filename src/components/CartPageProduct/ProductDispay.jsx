import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { updateQty, removeProduct, addToSaved } from "../../redux/cartReducer";
import { Link } from "react-router-dom";


function ProductDisplay({product}){

    const qtyOptions = [1,2,3,4,5,6,7,8,9,10];
    const sizeOptions = ['S','M','L','XL','XXL'];

    // const productDisplay = useSelector((state)=>state.cart.products);
    const [qtyValue,setQtyValue] = useState(product.qty || 1);
    const [size,setSize] = useState(product.size);
    const [itemDelete,setItemsDelete] = useState(false);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(updateQty({id:product.id, qty: qtyValue, size}))
    },[qtyValue,size])

    return(
        <>
        <div className="border-2 border-gray-100 p-3 flex w-full min-w-[22rem] rounded-md gap-4 mt-4 ">
                        <div className="w-[5rem] h-[7rem] sm:w-[7rem] sm:h-[11rem]">
                            <Link to={`/product/${product.id}`}>
                                <img src={product.img1} alt="" className="w-full h-full object-cover"/>
                            </Link>
                        </div>

                        <div className="flex-1 flex flex-col gap-1 my-2">
                            <p className="font-medium  max-sm:text-sm sm:text-md">{product.title}</p>
                            <p className="font-normal sm:text-md max-sm:text-sm"><span className="font-bold">₹{product.price}</span> <span className="line-through text-gray-500">₹{product.mrp}</span> <span className="text-red-500">({product.offerPercentage}% OFF)</span></p>
                            
                            <div className=" flex gap-1 items-center gap-5 mt-2 mb-2 max-sm:text-sm sm:text-md">
                                <div className="font-medium inline-block text-md bg-gray-100 px-2 py-1 flex items-center rounded-lg shadow-md ">
                                    {/* <p className="">Qty: <span>{2}</span></p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 mt-0.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg> */}

                                    <p>Qty:</p>

                                    <select onChange={(e)=>setQtyValue(e.target.value)} value={qtyValue} className="bg-transparent outline-none w-[2.5rem] text-center text-md ">
                                        {qtyOptions.map((value)=>{
                                            return <option value={value} key={value}>{value}</option>
                                        })}
                                    </select>
                                </div>

                                <div className="font-medium inline-block text-md bg-gray-100 px-2 py-1 flex items-center rounded-lg shadow-md ">
                                    {/* <p className="">Size: <span>S</span></p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 mt-0.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg> */}

                                    <p>Size:</p>

                                    <select onChange={(e)=>setSize(e.target.value)} value={size} className=" bg-transparent outline-none w-[2.5rem] text-center text-md ">
                                        {sizeOptions.map((value)=>{
                                            return <option value={value} key={value}>{value}</option>
                                        })}
                                    </select>
                                </div>
                               

                            </div>

                            {/* <p className="font-normal text-md">Size: <span>{'S'}</span></p> */}
                            <div className="flex text-[14px] items-center mt-4 gap-1 text-xs sm:text-[0.75rem]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9.75h4.875a2.625 2.625 0 0 1 0 5.25H12M8.25 9.75 10.5 7.5M8.25 9.75 10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185Z" />
                                </svg>

                                <p><span className="font-bold">10 days</span> return available</p>

                            </div>
                        </div>

                        <div className="w-[2rem] ">
                            <div className="hover:bg-gray-200 rounded-full w-[2rem] h-[2rem] flex items-center justify-center cursor-pointer"
                                onClick={()=>setItemsDelete(true)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className={`absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center bg-[rgba(0,0,0,0.1)] ${itemDelete ? 'block' : 'hidden'}`}>
                            <div className="p-4 bg-white rounded-md w-[25rem] relative">
                                <div className="flex gap-4 items-center border-b-2 pb-4">
                                    <div>
                                    <img src={product.img1} alt="" className="w-[5rem]"/>
                                    </div>
                                    <div>
                                    <p className="font-bold text-gray-700">Move From Cart</p>
                                    <p className="text-wrap">Are you sure you want move this item from the cart?</p>
                                    </div>
                                    
                                    <div className="absolute right-3 top-4 cursor-pointer"
                                        onClick={()=>setItemsDelete(false)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                   
                                </div>
                                {/* <div className="border-2 border-red-500 text-red-500 py-2 px-4 flex gap-2 items-center justify-center rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>

                                    <button className="text-lg font-medium">Delete</button>
                                </div> */}

                                <div className={`flex gap-1 text-center mt-4 font-bold max-[300px]: flex-col max-[300px]:gap-4`}>
                                    <button className="flex-1 text-gray-600 border-r-2 border-r-gray-200"
                                        onClick={()=>{dispatch(removeProduct({id:product.id}));
                                                setItemsDelete(false)
                                    }}     
                                    >Remove</button>
                                    <button className="flex-1 text-blue-500"
                                        onClick={()=>{dispatch(addToSaved(product));
                                            dispatch(removeProduct({id:product.id}));
                                            setItemsDelete(false);
                                        }}
                                    >Move To Wishlist</button>
                                </div>
                            </div>
                    </div>
    </>                
    )
}

export default ProductDisplay;