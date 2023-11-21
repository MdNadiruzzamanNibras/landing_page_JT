

const ClaimFrom = () => {
    return (
        <div className="w-[1004px] bg-white pb-14 my-10 shadow-md  mx-auto">
            <div className="flex justify-center items-center ">
                <div>
                <h1 className="text-5xl ml-20 font-bold">Fill in Your <br className="hidden lg:block"/> Details <br className="hidden lg:block"/> 
to Avail Your <br className="hidden lg:block"/>  <span className="text-green-500">Free Resume</span> <br className="hidden lg:block"/>  Today !</h1>
                </div>
                <div className=" w-full my-6  flex justify-center items-center">
                    <div className="border-l-2 border-gray-600  ">
                        <div className="ml-10">
                            <form >
                        <div className="relative my-20">
                            <p className=" text-lg w-fit absolute -top-3 left-0 text-center ml-4 px-1 z-10 bg-white  text-black">Name <span className="mt-3 text-orange-600">*</span></p>
    <input type="text" required className="w-96 py-5 pl-2  border-2 rounded-lg border-black" />
    
</div>
                        <div className="relative my-20">
                            <p className=" text-lg w-fit absolute -top-3 left-0 text-center ml-4 px-1 z-10 bg-white  text-black">Mail <span className="mt-3 text-orange-600">*</span></p>
    <input type="email" required className="w-96 py-5 pl-2  border-2 rounded-lg border-black" />
    
</div>
                        <div className="relative my-20">
                            <p className=" text-lg w-fit absolute -top-3 left-0 text-center ml-4 px-1 z-10 bg-white  text-black">WHATSAPP NUMBER <span className="mt-3 text-orange-600">*</span></p>
    <input type="number" required className="w-96 py-5 pl-2  border-2 rounded-lg border-black" />
    
</div>
                                <div className="flex justify-center ">
                                    <button className="text-white px-6 mt-8 py-3 rounded-lg
                                     bg-green-600 text-xl font-bold">CLAIM NOW</button>
                                    
                                </div>
                                <div className="flex justify-center mt-8">
                                    <p className="text-lg text-red-600">*Only 39 slots left out of 100</p>
                                </div>
                    </form>
                         </div>
                   </div>
                </div>
                
                    
                </div>
            </div>
        
    );
};

export default ClaimFrom;