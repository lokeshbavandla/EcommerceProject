import {Card} from "../index";
import trendingItems from "../../constants/trendingItems/trendingItems";
import { useCallback, useEffect, useState } from "react";
function FeaturedProducts({type, productsList=[]}){

    // const [productsList,setProductsList] = useState([]);

    // const products = useCallback(()=>{
    //     if(type === 'Featured'){
    //         setProductsList(trendingItems.filter((value)=>value.isfeatured == true))
    //         console.log('done');
    //     } else if(type === 'Trending'){
    //         setProductsList(trendingItems.filter((value)=>value.isTrending == true))
    //         console.log('hi');
    //     }
    // })

    // let productsList = [];

    // if(type == 'Featured') {
    //     productsList = trendingItems.filter((value)=>value.isfeatured == true);
    // }

    // if(type == 'Featured') {
    //     productsList = trendingItems.filter((value)=>value.isTrending == true);
    // }

    useEffect(()=>{
        console.log(productsList);
    }, [])


    return(
        <>
            <div className="mx-[2rem] my-[2rem] min-[520px]:m-[2rem] md:m-[5rem] xl:mx-[10rem]">
                <div className="flex gap-[10rem] items-center mb-10  max-[610px]:hidden">
                    <h2 className="font-bold text-xl md:text-2xl">{type} Products</h2>
                    <p className="flex-[2_2_0%] text-sm md:text-md">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla debitis modi qui enim assumenda, molestias velit aliquam illum sunt officiis facere porro corrupti quo laborum maxime fugiat perferendis culpa expedita consequatur earum consequuntur, natus quod? Nesciunt unde labore illo suscipit.</p>
                </div>

                <div className="flexgap-10flex-wrapshrink-1 grid grid-row-1 gap-10 min-[520px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" 
                     onClick={()=> window.scrollTo({
                        top:0,
                        behavior: 'smooth'
                    })}
                >
                    {productsList.length && productsList.map((product)=>{
                       return (
                        <div key={product.id} className="m-auto">
                            <Card productDetails = {product}/>
                        </div>
                             )
                        
                    })}
                    {/* {trendingItems.filter((value)=>value.isfeatured == true).map((product)=>{
                        <Card imgUrl={product.img1} title={product.title} mrp={product.title} price={product.price}/>
                    })} */}
                </div>
                
            </div>
        </>
    )
}

export default FeaturedProducts;