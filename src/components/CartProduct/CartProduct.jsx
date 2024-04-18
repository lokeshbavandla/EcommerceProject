import { Link } from "react-router-dom";
import { removeProduct } from "../../redux/cartReducer"
import { useDispatch } from "react-redux"

function CartProduct({product=[]}){

    const dispatch = useDispatch();

    const removeProductHandler =()=>{
        dispatch(removeProduct({id:product.id}));
    }
    return(
        <div className="flex mt-4 gap-2">
                    {/* <div className="shrink-0 w-[100px]">
                        <img src="https://m.media-amazon.com/images/I/81nfWlo2KPL._SX569_.jpg" alt="" className="w-full"/>
                    </div>
                    <div className="flex-4 py-1 px-1">
                        <p className="text-md font-medium text-wrap">FashionCart's Regular Polo Tshirt</p>
                        <p className="font-normal text-sm">Qty: <span>2</span></p>
                        <p className="font-normal text-sm">Size: <span>S</span></p>
                        <p className="font-normal text-sm">Price: <span>Rs.699</span></p>
                        <button className="py-1 px-4 bg-red-700 rounded-sm text-white mt-2 text-sm font-normal">Remove</button>
                    </div> */}

                    <div className="shrink-0 w-[75px]">
                        <Link to={`/product/${product.id}`}>
                            <img src={product.img1} alt="" className="w-full"/>
                        </Link>
                    </div>
                    <div className="flex-4 px-1 mt-1">
                        <p className="text-[1em] font-medium text-wrap mb-1">{product.title}</p>

                        <div className="flex gap-4">
                            <span className="font-normal text-sm">Qty: <span>{product.qty}</span></span>
                            <span className="font-normal text-sm">Size: <span>{product.size}</span></span>
                            <span className="font-normal text-sm">Price: <span>₹{product.price}</span></span>
                            {/* <button className="py-1 px-4 bg-red-700 rounded-sm text-white mt-2 text-sm font-normal">Remove</button> */}
                        </div>

                    </div>

                    <div className="flex-1 mt-5 ml-5 text-red-600"
                        onClick={()=>removeProductHandler()}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>

                    </div>
        </div>
    )
}

export default CartProduct;