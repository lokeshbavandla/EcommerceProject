import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import ProductDisplay from '../../components/CartPageProduct/ProductDispay'
import { OrderPage } from "../../components";
import { orderSummaryHandler,setOrderPlaced } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";

function CartPage(){

    const productsInCart = useSelector((state)=>state.cart.products);
    const [discountedAmount,setDiscountedAmount] = useState(0);
    const [totalAmount,setTotalAmount] = useState(0);
    const [totalMrp,setTotalMrp] = useState(0);
    const [cartItemsPresent,setCartItemsPresent] = useState(false);
    // const [orderPlaced,setOrderPlaced] = useState(false);

    const orderPlaced = useSelector((state)=>state.cart.orderPlaced);

    const dispatch = useDispatch();

    useEffect(()=>{
       setTotalAmount(productsInCart.reduce((prev,curr)=> (prev + curr.price * curr.qty),0));
       setTotalMrp(productsInCart.reduce((prev,curr)=> (prev + curr.mrp * curr.qty),0));
       setDiscountedAmount(productsInCart.reduce((prev,curr)=> (prev + (curr.mrp - curr.price) * curr.qty),0));
       if(productsInCart.length == 0){
            setCartItemsPresent(true);
        } else{
            setCartItemsPresent(false);
        }

    },[productsInCart])

    return(

        <>
        <div>
            <header className={`px-[4rem] md:max-lg:px-[1rem] max-sm:px-[0rem] sm:max-md:px-[1rem] py-1 h-[5rem] border-b-2 border-b-gray-100 flex items-center max-sm:justify-center justify-between gap-[4rem]`}>
                
                <Link to='/'>
                    <div className="text-3xl font-bold max-sm:hidden sm:block sm:text-xl md:text-2xl">
                        FashionCart
                    </div>
                </Link>

                <div className="flex items-center gap-2 justify-center tracking-wider max-md:text-sm">
                    <p className="">BAG</p>
                    <div className="w-[3rem] max-md:w-[1rem] h-[1px] border-b-2 border-b-gray-500 border-dotted  mt-[1px]"></div>
                    <p>ADDRESS</p>
                    <div className="w-[3rem] max-md:w-[1rem] h-[1px] border-b-2 border-b-gray-500 border-dotted mt-[1px]"></div>
                    <p>PAYMENT</p>
                    {/* <div className="w-[5rem] h-[1px] border-b-2 border-b-gray-500 border-dotted"></div> */}
                </div>

                <Link to='/'>
                    <div className="text-blue-500 underline max-sm:hidden">
                        Return to Homepage
                    </div>
                </Link>
            </header>

            <div className={`xl:mx-[12rem] max-[360px]:mx-1 xl:my-[1rem] lg:mx-[5rem] md:mx-[2.5rem] md:my-[2.5rem] sm:my-[1.5rem] max-sm:my-[2rem] lg:my-[2.5rem] flex flex-col max-md:items-center max-md:flex-wrap md:flex-row justfiy-center lg:justify-evenly gap-5 m-4 ${!cartItemsPresent ? 'block' : 'hidden'} ${!orderPlaced ? 'block' : 'hidden'}`}>

                <div className="">
                    <div className="text-2xl font-bold mb-5 max-sm:text-xl">
                        <p>Shopping Cart:</p>
                    </div>

                    {
                        productsInCart.length>0 && productsInCart.map((product)=>{
                            return( <ProductDisplay product={product}/>)
                        })
                    }
                    
                </div>

                <div className="w-[20rem] h-[20rem] max-md:w-full md:mt-[3.27rem] p-4 pt-7 border-2 border-gray-100 rounded-md flex flex-col gap-2 text-[14px] tracking-wide">
                    <p className="text-slate-700 font-medium text-md mb-4">Price Details <span className="text-sm">({2} items)</span></p>
                    <div className="flex justify-between items-center">
                      <p>Total MRP</p>  
                      <p>₹{totalMrp}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p>Discount on MRP</p>  
                      <p className="text-green-600 ">-₹{discountedAmount}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p>Platform Fee</p>  
                      <p className="text-green-600">FREE</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p>Shipping Fee</p>
                      <div className="flex gap-2">
                        <p className="line-through">₹75</p>
                        <p className="text-green-600">FREE</p>
                      </div>
                    </div>

                    <hr />
                    
                    <div className="text-md font-bold flex justify-between items-center mt-2">
                        <p>Total Amount</p>
                        <p>₹{totalAmount}</p>
                    </div>

                    <div className="w-full mt-4">
                        <button className="w-full py-2 bg-blue-500 font-bold text-white tracking-wider"
                            onClick={()=> {dispatch(orderSummaryHandler({totalMrp,totalAmount,discountedAmount}))
                                    dispatch(setOrderPlaced(true))
                        }}
                        >PLACE ORDER</button>
                    </div>
                </div>

            </div>

            <div className={`bg-[rgba(0,0,0,0.25)] absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center ${orderPlaced ? 'block' : 'hidden'}`}>
                    <OrderPage/>
            </div>
        </div>
        

        <div className={`flex flex-col gap-5 mt-[15rem] mx-2 justify-center w-full text-wrap text-center items-center ${cartItemsPresent ? 'block' : 'hidden'}`}>
                    <p className="text-xl font-medium">There are No Products in the Cart</p>
                    <Link to='/'>
                    <button className="border-2 rounded-md px-2 py-2 border-blue-500 text-blue-500 font-medium">Continue Shopping</button>
                    </Link>
        </div>
    </>    
    )
}

export default CartPage;