import { useState } from 'react';
import { Header,Footer } from '../../components';
import { Outlet } from 'react-router-dom';

const Layout = ()=>{

  const [displayButton,setDisplayButton] = useState(false);

  const buttonDisplayHandler = ()=>{
    const scrolled = document.documentElement.scrollTop;

    if(scrolled > 300) {
      setDisplayButton(true);
    } else if(scrolled<=300){
      setDisplayButton(false);
    }
  }

  const scrollToTop = ()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  window.addEventListener('scroll', buttonDisplayHandler);

    return(
      <>

      <div className='relative'>
        <Header />
        <Outlet />
        <Footer />
        <div className={`fixed h-12 w-12 bg-blue-500 bottom-10 right-10 rounded-full flex items-center justify-center text-white cursor-pointer ${displayButton ? 'block' : 'hidden'}`}
            onClick={()=> scrollToTop()}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
            </svg>
        </div>
      </div>
        {/* <Header />
        <Outlet />
        <Footer /> */}
      </>
    )
}

export default Layout;