import { useSelector, useDispatch } from "react-redux";
import { removeFromSavedItems,addToCart } from "../../redux/cartReducer";
import { Card } from "../../components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SavedItems(){
    const [savedItemsPresent,setSavedItemsPresent] = useState(false);
    const [size,setSize] = useState('');
    const [sizeSelected,setSizeSelected] = useState(true);
    const [displaySize,setDisplaySize] = useState(false);
    const [selectedItem,setSelectedItem] = useState(null);
    const savedProducts = useSelector((state)=>state.cart.savedItems);


    const dispatch = useDispatch();
    
    const removeFromSavedItemsHandler = (id)=>{
        dispatch(removeFromSavedItems(id))
    }

    const addToCartHandler = (product)=>{
        dispatch(addToCart({...product,qty:1,size}));
    }

    useEffect(()=>{
        if(savedProducts.length ==0){
            setSavedItemsPresent(false);
        } else {
            setSavedItemsPresent(true);
        }
    },[savedProducts])

    return(
        <div className="min-h-[75vh] mx-[2rem] max-[580px]:mx-[0] my-[2rem] flex gap-5 flex-wrap flex-col items-center sm:flex-row relative">
            {savedProducts.length>0 && savedProducts.map((product)=>{

               return <div className="border-2 border-gray-100 px-4 py-4 mx-[auto] relative" key={product.title}>
                            <Card productDetails={product}/>
                            <div className="flex gap-2 mt-2.5">
                                <button className="w-1/2 py-1 font-medium text-blue-500 border-2 border-blue-500"
                                    onClick={()=>{
                                        setSelectedItem(product);
                                        setDisplaySize(true);
                                    }}
                                >Add To Cart</button>
                                <button className="w-1/2 py-1 font-medium text-red-500 border-2 border-red-500 "
                                    onClick={()=>removeFromSavedItemsHandler(product.id)}
                                >Delete</button>
                            </div>
                            
                        </div>
            })
                
            }

            <div className={`text-xl font-bold text-center w-full flex flex-col gap-5 justify-center ${savedItemsPresent ? 'hidden' : 'block'}`}>
                <p>There are No Items in this Section.</p>
                <Link to='/'>
                    <button className="border-2 rounded-md px-2 py-2 border-blue-500 text-blue-500 font-medium">Continue Shopping</button>
                    </Link>
            </div>

            <div className={`absolute w-[100vw] h-[85vh] top-0 left-0 right-0 bottom-0 ${displaySize ? 'block' : 'hidden'} flex items-center justify-center`}>
                <div className="bg-white shadow-xl py-4 px-5 border-2 border-gray-100 max-[375px]:w-[85vw]">
                                    <p className={`text-xl font-bold mb-4 text-center`}>Select Size:</p>
                                    <p className={`text-sm text-red-500 mb-4 ${sizeSelected==false ? 'block' : 'hidden'}`}>Please select any size</p>

                                    <div className="flex gap-4 max-[375px]:gap-2"
                                        onClick={()=>setSizeSelected(true)}
                                    >
                                        <div className={`rounded-full max-[375px]:rounded-sm max-[375px]:h-[2.5rem] max-[375px]:w-[3rem]  h-[3.5rem] w-[3.5rem] flex items-center justify-center border-2 hover:border-blue-500 cursor-pointer ${size=='S' ? 'border-blue-500' : ''}`}
                                            onClick={()=>setSize('S')}
                                        >
                                            <span>S</span>
                                        </div>
                                        <div className={`rounded-full  max-[375px]:rounded-sm max-[375px]:h-[2.5rem] max-[375px]:w-[3rem] h-[3.5rem] w-[3.5rem] flex items-center justify-center border-2 hover:border-blue-500 cursor-pointer ${size=='M' ? 'border-blue-500' : ''}`}
                                            onClick={()=>setSize('M')}
                                        >
                                            <span>M</span>
                                        </div>
                                        <div className={`rounded-full max-[375px]:rounded-sm max-[375px]:h-[2.5rem] max-[375px]:w-[3rem]  h-[3.5rem] w-[3.5rem] flex items-center justify-center border-2 hover:border-blue-500 cursor-pointer ${size=='L' ? 'border-blue-500' : ''}`}
                                            onClick={()=>setSize('L')}
                                        >
                                            <span>L</span>
                                        </div>
                                        <div className={`rounded-full max-[375px]:rounded-sm max-[375px]:h-[2.5rem] max-[375px]:w-[3rem]  h-[3.5rem] w-[3.5rem] flex items-center justify-center border-2 hover:border-blue-500 cursor-pointer ${size=='XL' ? 'border-blue-500' : ''}`}
                                            onClick={()=>setSize('XL')}
                                        >
                                            <span>XL</span>
                                        </div>
                                        <div className={`rounded-full max-[375px]:rounded-sm max-[375px]:h-[2.5rem] max-[375px]:w-[3rem]  h-[3.5rem] w-[3.5rem] flex items-center justify-center border-2 hover:border-blue-500 cursor-pointer ${size=='XXL' ? 'border-blue-500' : ''}`}
                                            onClick={()=>setSize('XXL')}
                                        >
                                            <span>XXL</span>
                                        </div>
                                    </div>

                                    <div className="w-full flex gap-5 max-[375px]:gap-4 max-[375px]:flex-col mt-7">
                                        <button className="flex-1 py-2 font-medium text-blue-500 border-2 border-blue-500 "
                                            onClick={()=>{
                                                if(size === ''){
                                                    setSizeSelected(false);
                                                } else{
                                                    addToCartHandler(selectedItem);
                                                    removeFromSavedItemsHandler(selectedItem.id);
                                                    setSizeSelected(true);
                                                    setDisplaySize(false);
                                                }
                                                
                                            }}
                                            >Add To Cart</button>

                                            <button className="flex-1 py-2 font-medium text-red-500 border-2 border-red-500"
                                                onClick={()=>setDisplaySize(false)}
                                            >Cancel</button>
                                        </div>

                                    
                                </div>
            </div>
            
        </div>
    )
}

export default SavedItems;