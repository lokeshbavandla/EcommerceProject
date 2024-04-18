import { Link } from "react-router-dom";

function OrderStatus(){
    return(
        <div className="min-h-[75vh] flex flex-col gap-5 items-center py-10 justify-center">
            <div>
                <p className="text-2xl font-bold text-center">Your Order is Successfully Placed</p>
            </div>

            <div className="text-green-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[5rem] h-[5rem]">
                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                    </svg>
            </div>

            <div>
                <Link to='/'>
                        <button className="border-2 rounded-md px-2 py-2 border-blue-500 text-blue-500 font-medium">Continue Shopping</button>
                </Link>
            </div>
        </div>
    )
}

export default OrderStatus;