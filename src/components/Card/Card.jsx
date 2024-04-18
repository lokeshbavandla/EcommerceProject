import { Link } from "react-router-dom";

function Card({productDetails=[], img = 'img1'}){
    return(
        <>

        <Link to={`/product/${productDetails.id}`}>
            <div className="w-[15rem]">
                <div className="mb-2 relative w-full">
                    <img src={productDetails[img]} alt="image" className="max-w-full min-w-[5rem] object-cover object-center shrink-0"/>
                    {productDetails.isNew && <span className="absolute top-1 left-1 bg-white px-2 py-0.5 rounded-sm text-[0.75rem] text-green-700 font-bold">New Arrival</span>}
                </div>
                <p className="ml-2 font-medium text-wrap">{productDetails.title}</p>

                <div className="ml-2 flex gap-2 my-1 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-500">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
                <p className="font-medium">({productDetails.rating})</p>
                </div>
                <div className="w-full ml-2">
                    <span className="mr-2 line-through text-gray-500 font-bold">₹{productDetails.mrp}</span>
                    <span className="font-bold mr-2">₹{productDetails.price}</span>
                    <span className="font-bold text-red-500">{`(${productDetails.offerPercentage}%)`}</span>
                </div>
            </div>
        </Link>

        </>
    )
}

export default Card;