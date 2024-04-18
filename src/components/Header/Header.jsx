import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Cart} from '../index';
import { useSelector } from "react-redux";

const Header = ()=>{

    const [cartDisplay,setCartDisplay] = useState(false);
    const [searchValue,setSearchValue] = useState('');
    const [searchResultDisplay,setSearchResultDisplay] = useState(false);

    const productsAdded = useSelector((state)=>state.cart.products);

    const categories = [
            {
                category:'Shirts',
                link: 'shirts'
            },
            {
                category:'Trousers',
                link: 'trousers'
            },
            {
                category:'Shorts',
                link: 'shorts'
            },
            {
                category:'Jackets',
                link: 'jackets'
            },
            {
                category:'T-Shirts',
                link: 'tshirts'
            },
            {
                category:'Track Pants',
                link: 'shorts'
            },
            {
                category:'Jeans',
                link: 'trousers'
            }
]

    return(
//         <>
//             <header className=" pl-[2.5rem] pr-[4rem] h-[5rem] border-b-2 border-b-gray-500 flex items-center justify-center gap-[4rem]">
//                 <div className="text-3xl font-bold">
//                     FashionCart
//                 </div>

//                 <nav className="flex items-center gap-7 font-medium mt-1">
//                     <p>Men</p>
//                     <p>Women</p>
//                     <p>Kids</p>
//                     <p>Home & Living</p>
//                     <p>Studio</p>
//                 </nav>

//                 <div className="flex-1 flex items-center bg-gray-200 px-2 rounded-md min-w-[20rem] mt-1"> 

//                     <div className="mr-4">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
//                         </svg>
//                     </div>
                    
//                     <input type="text" className="bg-transparent w-full py-2 outline-none" placeholder="Search Categories"/>
//                 </div>

//                 <div className="font-bold flex items-center gap-7 mt-2.5">
//                     <div className="flex flex-col items-center">
//                         <div>
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
//                             </svg>
//                         </div>
//                         <span className="text-[12px]">Profile</span>
//                     </div>

//                     <div className="flex flex-col items-center">
//                         <div>
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
//                         </svg>
//                         </div>
//                         <span className="text-[12px]">Wishlist</span>
//                     </div>

//                     <div className="flex flex-col items-center">
//                         <div>
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
// </svg>

//                         </div>
//                         <span className="text-[12px]">Bag</span>
//                     </div>
//                 </div>
//             </header>
//         </>

            <>
            <header className="pl-[1rem] pr-[2rem] sm:pl-[2rem] md:px-[2.5rem] h-[5rem] border-b-2 border-b-gray-500 flex items-center justify-between gap-[1.5rem]">

                <div className="hidden max-[1115px]:block"
                    // onClick={()=>alert('clicked')}
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                </div>
                
                <Link to='/'>
                    <div className="text-2xl font-bold sm:text-3xl min-[1115px]:flex-1">
                        FashionCart
                    </div>
                </Link>

                <nav className="items-center gap-7 text-sm  mt-1  justify-center font-medium hidden lg:flex1 min-[1115px]:flex min-[1115px]:flex-1" >
                    <Link to='/products/tshirts'>
                    <p className="hover:text-md cursor-pointer  hover:border-b-2 hover:border-b-blue-500">Tshirts</p>
                    </Link>
                    <Link to='/products/shirts'>
                    <p className="hover:text-md cursor-pointer hover:border-b-2 hover:border-b-blue-500">Shirts</p>
                    </Link>
                    <Link to='/products/jackets'>
                    <p className="hover:text-md cursor-pointer hover:border-b-2 hover:border-b-blue-500">Jackets</p>
                    </Link>
                    <Link to='/products/trousers'>
                    <p className="hover:text-md cursor-pointer hover:border-b-2 hover:border-b-blue-500">Trousers & Jeans</p>
                    </Link>
                    <Link to='/products/shorts'>
                    <p className="hover:text-md cursor-pointer hover:border-b-2 hover:border-b-blue-500">Tracks & Shorts</p>
                    </Link>
                    <Link to='/products/newarrivals'>
                    <p className="hover:text-md cursor-pointer hover:border-b-2 hover:border-b-blue-500">New Collection</p>
                    </Link>             
                </nav>

                <div className="flex mt-1 relative">

                    <div className="flex items-center bg-gray-100 px-2 rounded-md mt-1 rounded-full mr-5 h-10 relative hidden"> 

                        <div className="mr-4 ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>

                        <input type="text" className="bg-transparent w-[7rem] outline-none" placeholder="Search"
                            value={searchValue}
                            // onFocus={()=>setSearchResultDisplay(true)}
                            onChange={(e)=>setSearchValue(e.target.value)}
                            onClick={()=>setSearchResultDisplay(prev=>!prev)}
                            // onBlur={()=>setSearchResultDisplay(false)}
                        />

                        <div className={`absolute px-4 py-2 bg-white shadow-xl top-10 left-0 right-0 rounded-md flex flex-col ${searchResultDisplay ? 'block' : 'hidden'}`} >
                           { 
                                searchValue == '' && categories.map((productsCategory)=>{
                                    return(<div className="py-1 hover:text-blue-500 hover:font-medium" key={productsCategory.category} onClick={()=>{setSearchResultDisplay(false)
                                        setSearchValue('')
                                    }}>
                                        <Link to={`/products/${productsCategory.link}`}>
                                                <p>{productsCategory.category}</p>
                                         </Link>
                                </div>)
                                })
                           }

                            {

                            searchValue && categories.filter((productsCategory)=>productsCategory.category.toLowerCase().includes(searchValue.toLowerCase())).map((category)=>{
                                    return(
                                        (<div className="py-1 hover:text-blue-500 hover:font-medium" key={category.category} onClick={()=>{setSearchResultDisplay(false)
                                            setSearchValue('')
                                        }}>
                                            <Link to={`/products/${category.link}`}>
                                                    <p>{category.category}</p>
                                            </Link>
                                    </div>)
                                    )
                            })
                            
                           }

                           
                        </div>
                    </div>

                    <div className="font-bold flex items-center gap-4 sm:mt-1">

                            <div className="flex flex-col items-center">
                                
                                    <div>
                                        <Link to='/productCollection'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                        </Link>
                                    </div>
                                    <span className="text-[12px] hidden sm:block">Wishlist</span>
                                
                            </div>

                            
                            <div className="flex flex-col items-center"
                            
                                // onMouseEnter={()=> setCartDisplay(true)}
                                // onMouseLeave={()=>setCartDisplay(false)}
                            >

                                <div className="relative cursor-pointer"
                                    onClick={()=>setCartDisplay(prev=>!prev)}
                                >
                                    <div className="mb-[-3px] realtive">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>

                                    <div className="h-5 w-5 rounded-full bg-red-700 text-white font-medium text-[12px] absolute flex items-center justify-center top-[-7px] right-[-10px]">
                                        <span>{productsAdded.length}</span>
                                    </div>

                                    </div>
                                    <span className="text-[12px] hidden sm:block">Cart</span>
                                </div>
                           

                                {cartDisplay && <div className="absolute top-[50px] right-[0px] z-[5000]">
                                        <Cart />
                                    </div>}

                            </div>

                    </div>
                </div>                            
            </header>
            </>
    )
}

export default Header;