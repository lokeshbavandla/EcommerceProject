import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrderPlaced } from "../../redux/cartReducer";
import { useNavigate } from "react-router-dom";
import { resetCart } from "../../redux/cartReducer";

function OrderPage(){

    const [address,setAddress] = useState(true);
    const [continuePayment,setContinuePayment] = useState(false);
    const orderSummary = useSelector((state)=>state.cart.orderSummary);

    const [fullName,setFullName] = useState('');
    const [pincode,setPincode] = useState('');
    const [addressdetails,setAddressdetails] = useState('');
    const [number,setNumber] = useState('');

    const navigate = useNavigate();

    // const [paymentMode,setPaymentMode] = useState('cash');
    const dispatch = useDispatch();
    return(
        <div className="w-1/2 min-h-2/3 bg-white p-5 rounded-lg shadow-xl max-[850px]:w-3/4 relative max-[450px]:w-full">
            
                    <div className="absolute right-6 top-5 cursor-pointer z-[10000]"
                        onClick={()=>dispatch(setOrderPlaced(false))}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    </div>

                    <div className={`w-full ${address ? 'block' : 'hidden'}`}>
                        <div className="w-full text-center text-2xl font-bold py-2">
                                Shopping Address
                            </div>

                            <div className="w-full px-10 py-4 flex flex-col gap-4 max-md:px-4 max-[400px]:placeholder:text-md">
                                <input type="text" placeholder="Enter Full Name" className="w-full py-2 px-4 placeholder:text-lg bg-gray-200 outline-blue-500 max-[400px]:placeholder:text-sm"
                                    value={fullName} 
                                    onChange={(e)=>setFullName(e.target.value)}

                                />
                                <input type="text" placeholder="Enter Mobile Number" className="w-full py-2 px-4 placeholder:text-lg bg-gray-200 outline-blue-500 max-[400px]:placeholder:text-sm" 
                                    onChange={(e)=>setNumber(e.target.value)}
                                    value={number}

                                />
                                <input type="text" placeholder="Enter Pincode" className="w-full py-2 px-4 placeholder:text-lg bg-gray-200 outline-blue-500 max-[400px]:placeholder:text-sm" 
                                    onChange={(e)=>setPincode(e.target.value)}
                                    value={pincode}

                                />
                                <textarea type="text" placeholder="Enter Full Address" className="w-full py-2 px-4 placeholder:text-lg bg-gray-200 outline-blue-500 resize-none max-[400px]:placeholder:text-sm" 
                                    onChange={(e)=>setAddressdetails(e.target.value)}
                                    value={addressdetails}

                                />
                            </div>

                            <div className="text-center mt-4">
                                <button className="px-10 py-4 bg-blue-500 text-xl text-white rounded-md max-md:text-md max-md:px-5 max-md:py-2 max-[400px]:text-sm"
                                    onClick={()=>{

                                        if(number!='' && address!='' && fullName!='' && addressdetails!=''){
                                            setAddress(false);
                                            setContinuePayment(true);
                                        } else {
                                            alert('Fill all the Details')
                                        }
                                        
                                    }}
                                >Continue To Payment</button>
                            </div>
                    </div>

                    <div className={`flex max-xl:flex-col items-center px-5 py-10 gap-10 max-md:gap-4 max-md:p-2 relative ${continuePayment ? 'block' : 'hidden'} z-[1500]`} onChange={(e)=>setPaymentMode(e.target.value)}>

                            <div className="absolute top-0 left-0 cursor-pointer"
                                onClick={()=>{setContinuePayment(false)
                                    setAddress(true);
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                                </svg>

                            </div>
                            
                            <div className="flex-1 mt-5 max-md:mt-10">
                                    <div className="border-blue-500 border-2 rounded-md p-5 flex items-start justify-center gap-2 cursor-pointer max-xl:justify-start max-sm:p-3">
                                        {/* <input type="radio" name="payment" id="payment" value='cash' className="w-[1.5rem] h-[1.5rem] max-sm:w-[1rem] mt-1"/> */}
                                        <div>
                                            <label htmlFor="payment" className="text-xl font-bold max-md:text-lg max-sm:text-md"> Cash On Delivery</label>
                                            <p className="text-sm text-gray-500">Pay the amount once the products are delivered to your home.</p>
                                        </div>
                                    </div>

                                    <div className="border-gray-400 text-gray-400 border-2 rounded-md p-5 flex items-start justify-center gap-2 mt-5 pointer-events-none max-xl:justify-start max-sm:p-3">
                                        {/* <input type="radio" name="payment" id="Online Payment" value='online' className="w-[1.5rem] h-[1.5rem] max-sm:w-[1rem] mt-1"/> */}
                                        <div>
                                            <label htmlFor="Online Payment" className="text-xl font-bold max-md:text-lg max-sm:text-md"> Online Payment</label>
                                            <p className="text-sm text-gray-500">Pay the amount digitally while placing the order.</p>
                                        </div>
                                    </div>

                                    <div className="text-sm text-red-500 mt-2">
                                        Currently, this payment option is not available. You can pay the amount during the product delivery.
                                    </div>
                            </div>

                            <div className=" flex-1 w-[20rem] h-[20rem] max-[450px]:w-[15rem] p-4 pt-7 border-2 border-gray-100 rounded-md flex flex-col gap-2 text-[14px] tracking-wide">
                                <p className="text-slate-700 font-medium text-md mb-4">Price Details <span className="text-sm">({2} items)</span></p>
                                <div className="flex justify-between items-center">
                                <p>Total MRP</p>  
                                <p>₹{orderSummary?.totalMrp}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                <p>Discount on MRP</p>  
                                <p className="text-green-600 ">-₹{orderSummary?.discountedAmount}</p>
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
                                    <p>₹{orderSummary?.totalAmount}</p>
                                </div>

                                <div className="w-full mt-4">
                                    <button className="w-full py-2 bg-blue-500 font-bold text-white tracking-wider"
                                        onClick={()=>{
                                            setContinuePayment(false);
                                            setAddress(true);  
                                            dispatch(setOrderPlaced(false));
                                            dispatch(resetCart());
                                            navigate('/orders');
                                            setAddressdetails('');
                                            setFullName('');
                                            setPincode('')
                                            setFullName('');
                                        }}
                                    >PLACE ORDER</button>
                                </div>
                            </div>
                    </div>
                        
        </div>
    )
}

export default OrderPage;