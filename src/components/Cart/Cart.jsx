import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../../redux/cartReducer";
import CartProduct from '../CartProduct/CartProduct'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart(){

    const productAdded = useSelector(state=>state.cart.products);

    const [cartItemsPresent,setCartItemsPresent] = useState(false);

    const [subTotal,setSubTotalAmount] = useState(0);

    const dispatch = useDispatch();


    const resetCartHandler = ()=>{
        dispatch(resetCart());
    }

    
    useEffect(()=>{

        if(productAdded.length==0){
            setCartItemsPresent(false);
        } else{
            setCartItemsPresent(true);
        }

        setSubTotalAmount(productAdded.reduce((prev,curr)=> (prev+ curr.qty * curr.price),0))
    
    },[productAdded])
    return(
        <>
            <div className={`p-5 bg-white drop-shadow-xl w-[25rem] rounded-md ${cartItemsPresent ? 'block' : 'hidden'} Z-[5000]`}>
                <p className="text-lg">Products in Cart:</p>

                {
                    productAdded.length>0 && productAdded?.map((product)=>{
                        return(<div key={product.id}>
                            <CartProduct product={product}/>
                        </div>)
                    })
                }                

                <div className="mt-5 flex justify-between items-center">
                    <p>SUBTOTAL:</p>
                    <p>Rs.{subTotal}</p>
                </div>

                <div className="flex justify-between items-center mt-2">
                    
                        <div>
                            <Link to='/checkout'>
                            <button className="py-2 font-medium px-4 bg-blue-500 rounded-sm text-white mt-2 text-sm font-normal cursor-pointer">Proceed To Checkout</button>
                            </Link>
                        </div>
                    
                    <button className="text-red-500 font-normal mt-2"
                        onClick={()=>resetCartHandler()}
                    >Reset Cart</button>
                </div>
            </div>

            <div className={`flex flex-col gap-5 justify-center p-5 bg-white drop-shadow-xl w-[25rem] rounded-md items-center ${!cartItemsPresent ? 'block' : 'hidden'}`}>
                    <p className="text-xl font-medium">There are No Products in the Cart</p>
                    <Link to='/'>
                    <button className="border-2 rounded-md px-2 py-2 border-blue-500 text-blue-500 font-medium">Continue Shopping</button>
                    </Link>
            </div>
        </>
    )

}

export default Cart;