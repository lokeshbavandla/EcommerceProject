const Footer = ()=>{
    return(
       <>
            <footer className="bg-gray-200 px-[6rem] py-[2rem] flex gap-[4rem] md:gap-[7rem] lg:gap-[10rem] flex-wrap">
                <div className="flex flex-col gap-2">
                    <p className="font-bold text-xl">Categories</p>
                    <p>Men</p>
                    <p>Women</p>
                    <p>Kids</p>
                    <p>Home & Living</p>
                    <p>Studio</p>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="font-bold text-xl">Links</p>
                    <p>FAQ</p>
                    <p>Pages</p>
                    <p>Stores</p>
                    <p>Compare</p>
                    <p>Cookies</p>
                </div>

                <div className="flex-1">
                    <p className="font-bold text-xl mb-2">About</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate alias veniam incidunt libero modi assumenda, iure cumque repudiandae dolores maiores non. Enim nobis eum sequi rerum nihil ipsam ducimus, placeat saepe maxime id esse velit eos nam amet voluptatem reprehenderit!</p>
                </div>

                <div className="flex-1">
                    <p className="font-bold text-xl mb-2">Return Policy</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias at, expedita eius, commodi natus quaerat exercitationem doloribus libero quis ducimus doloremque neque quod pariatur sequi!</p>
                </div>
            </footer>
       </>
    )
}

export default Footer;