function Contact(){

    return(
        <>
            <div className="mt-[4rem] bg-blue-500 py-4 flex justify-center items-center gap-[5rem] max-sm:flex-col max-sm:gap-[1rem]">
                    <span className="font-medium text-white">BE IN TOUCH WITH US:</span>

                    <div>
                        <input type="text" placeholder="Enter your E-mail" className="rounded-l-md py-1.5 px-4 outline-none"/>
                        <button className="bg-slate-700 py-1.5 px-4 rounded-r-md text-white font-medium">Join Us</button>
                    </div>
            </div>
        </>
    )

}

export default Contact;