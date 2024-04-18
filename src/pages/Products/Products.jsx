import { useCallback, useEffect, useMemo, useState } from "react";
import {Card} from '../../components'
import { useParams } from "react-router-dom";
import allItems from "../../constants/allItems/allItems";

const Products = ()=>{
    const [editOption,setEditOption] = useState(false);

    const [minPrice,setMinPrice] = useState(0);
    const [maxPrice,setMaxPrice] = useState(0);


    const [products,setProducts] = useState([]);

    const [sortValue,setSortValue] = useState('');

    const {productCategory} = useParams(); 
    const [rangeValue,setRangeValue] = useState(4000);

    // useEffect(()=>{
    //     const value = ;
    //     // console.log(value);
    // }, [productCategory]) 

    const sortChanges = useMemo(()=>{
        if(sortValue == 'price-low'){
            // setProducts((prev)=>products.sort((a,b)=>a.price-b.price))
            products.sort((a,b)=>a.price-b.price)
        } else if(sortValue == 'price-high') {
            // setProducts((prev)=>products.sort((a,b)=>b.price-a.price))
            products.sort((a,b)=>b.price-a.price)
        } else if(sortValue == 'rating') {
            // setProducts((prev)=>products.sort((a,b)=>b.rating-a.rating))
            products.sort((a,b)=>b.rating-a.rating)
        } else if(sortValue == 'newarrival') {
            // setProducts((prev)=>products.sort((a,b)=>b.isNew-a.isNew))
            setProducts(products.filter((product)=>product.isNew==true).concat(products.filter((product)=>product.isNew==undefined)))
        } else if(sortValue == 'discount') {
            // setProducts((prev)=>products.sort((a,b)=>b.isNew-a.isNew))
            products.sort((a,b)=>b.offerPercentage-a.offerPercentage);
        }  
    },[sortValue])

    useEffect(()=>{
        setProducts(allItems.filter((product)=> product.category?.toLowerCase() == productCategory));
        // setMinPrice(Math.round(allItems.filter((product)=> product.category?.toLowerCase() == productCategory).sort((a,b)=>a.price-b.price)[0]?.price));
        // setMaxPrice(Math.round(allItems.filter((product)=> product.category?.toLowerCase() == productCategory).sort((a,b)=>b.price-a.price)[0]?.price));
        // setRangeValue(maxPrice);

        if(productCategory == 'newarrivals'){
            setProducts(allItems.filter((product)=> product.isNew == true));
            // setMinPrice(Number(Math.round(allItems.filter((product)=> product.isNew == true).sort((a,b)=>a.price-b.price)[0]?.price)));
            // setMaxPrice(Math.round(allItems.filter((product)=> product.isNew == true).sort((a,b)=>b.price-a.price)[0]?.price));
            // setRangeValue(maxPrice)
        }
    },[productCategory])

    // const productSetting = useMemo(()=>{
    //     setProducts(allItems.filter((product)=> product.category?.toLowerCase() == productCategory));
    //     setMinPrice(Math.round(allItems.filter((product)=> product.category?.toLowerCase() == productCategory).sort((a,b)=>a.price-b.price)[0]?.price));
    //     setMaxPrice(Math.round(allItems.filter((product)=> product.category?.toLowerCase() == productCategory).sort((a,b)=>b.price-a.price)[0]?.price));
    //     setRangeValue(maxPrice);

    //     if(productCategory == 'newarrivals'){
    //         setProducts(allItems.filter((product)=> product.isNew == true));
    //         setMinPrice(Number(Math.round(allItems.filter((product)=> product.isNew == true).sort((a,b)=>a.price-b.price)[0]?.price)));
    //         setMaxPrice(Math.round(allItems.filter((product)=> product.isNew == true).sort((a,b)=>b.price-a.price)[0]?.price));
    //         setRangeValue(maxPrice)
    //     }
    // }, [productCategory])

    const filter = useMemo(()=>{
        setProducts(allItems.filter((product)=> product.category?.toLowerCase() == productCategory).filter((product)=>product.price <= rangeValue));
        // console.log(Math.round(allItems.filter((product)=> product.category?.toLowerCase() == productCategory).sort((a,b)=>a.price-b.price)[0]?.price));
        if(productCategory=='newarrivals'){
            setProducts(allItems.filter((product)=> product.isNew == true).filter((product)=>product.price <= rangeValue));
        }
        // console.log(allItems.filter((product)=> product.isNew == true).filter((product)=>product.price <= rangeValue));

    },[rangeValue])

    // useEffect(()=>{
    //     sortChanges(;
    //     // console.log( products.filter((product)=>product.isNew==true).concat(products.filter((product)=>product.isNew==undefined)))
    // },[sortValue])

    return(
        <>
            <div className="flex mx-[2rem] my-[2.5rem] gap-10 ">
                <div className="flex-1 flex flex-col gap-5 max-sm:hidden">
                    {/* <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-bold">Product Categories</h2>

                        <div className="flex flex-col gap-1">
                            <div>
                                <input type="checkbox" id="tshirt" name="tshirt" className="mr-2" />
                                <label htmlFor="tshirt">T-Shirt</label>
                            </div>

                            <div>
                                <input type="checkbox" id="shirt" name="shirt" className="mr-2"/>
                                <label htmlFor="shirt">Shirt</label>
                            </div>
                            
                            
                        </div>
                    </div> */}


                <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-bold">Sort By</h2>

                        <div className="flex flex-col gap-1"
                        
                            onChange={(e)=>setSortValue(e.target.value)}
                        >
                            <div>
                                <input type="radio" id="price-low" name="sort-by" value='price-low' className="mr-2" />
                                <label htmlFor="price-low">Price: Low to High</label>
                            </div>

                            <div
                                // onClick={()=>products.sort((a,b)=>a.price-b.price)}
                            >
                                <input type="radio" id="price-high" name="sort-by" value='price-high' className="mr-2"/>
                                <label htmlFor="price-high">Price: High to Low</label>
                            </div>
                            <div>
                                <input type="radio" id="rating" name="sort-by" value='rating' className="mr-2"/>
                                <label htmlFor="rating">Customer's Rating</label>
                            </div>
                            <div>
                                <input type="radio" id="newarrival" name="sort-by" value='newarrival' className="mr-2"/>
                                <label htmlFor="newarrival">Popularity</label>
                            </div>
                            <div>
                                <input type="radio" id="discount" name="sort-by" value='discount' className="mr-2"/>
                                <label htmlFor="discount">Discount</label>
                            </div>
                            
                            
                        </div>
                    </div>

                    
                    <div className="flex flex-col gap-4 ">
                        <h2 className="text-xl font-bold">Filter By Price</h2>

                        <div className="flex items-center gap-2 relative">
                            <div>
                                <label htmlFor="range">{100}</label>
                            </div>
                            
                            {/* <input type="number" className="border-2 w-10" step="100"/> */}
                            <input type="range" name="range" id="range" min={100} max={4000} 
                                onChange={(e)=>setRangeValue(e.target.value)}
                                value={rangeValue}
                            />
                            <input type="number" className={`hover:bg-gray-200 hover:pl-4 hover:pr-2 rounded-md w-[5rem] py-0.5 outline-none text-md ${editOption ? 'bg-gray-100 pl-4 pr-2' : 'bg-white' }`} value={rangeValue} readOnly={!editOption}
                                onChange={(e)=>setRangeValue(e.target.value)}
                                onClick={()=>setEditOption(true)}
                                onBlur={()=>setEditOption(false)}
                                />
                        </div>
                    </div>


                   
                </div>

                <div className="flex-[3_3_0%] flex flex-col gap-10">
                    <div className="w-full">
                        <img src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/bc89bda3-e7dc-42fc-91f8-e380f36303c11651599573964-Tops---Tees_Desk.jpg' alt="image" className="border-2" />
                    </div>

                    <div className="flexgap-[2rem]mx-[4rem]flex-wrap grid grid-rows-1 m-auto max-md:m-auto min-[598px]:grid-cols-2 md:grid-cols-2 gap-[2rem] lg:grid-cols-3 xl:mx-[5rem]"
                    >
                        {/* <Card />
                        <Card />
                        <Card />
                        <Card /> */}

                        {
                            products.map((value)=>{
                              return(<div key={value.id} onClick={()=> window.scrollTo({
                                top:0,
                                behavior: 'smooth'
                            })}>
                                    <Card productDetails={value} />
                              </div>)
                            })
                        }

                        {/* {
                                products.map((value)=>{
                                return(<div key={value.id} onClick={()=> window.scrollTo({
                                    top:0,
                                    behavior: 'smooth'
                                })}>
                                        <Card productDetails={value} img='img2' />
                                </div>)
                                 })
                        } */}

                        {
                            productCategory == 'newarrivals' && products.map((value)=>{
                                return(<div key={value.id} onClick={()=> window.scrollTo({
                                    top:0,
                                    behavior: 'smooth'
                                })}
                                >
                                      <Card productDetails={value} />
                                </div>)
                              })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;