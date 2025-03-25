import ModernFurniture from "../assets/2-196.jpg"
function SectionOne(){
    return(
        <>

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="my-5 px-3 topSection">
                        <h1 className="text-6xl pb-3 text-[#333]">Modern Furniture</h1>
                        <p className="text-[#333] py-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Qui, modi iste ut esse cupiditate numquam itaque. Itaque, doloremque
                            Qui, modi iste ut esse cupiditate numquam itaque. Itaque, doloremque
                        </p>
                        <a href="#" className="bg-[#58673e] rounded-2xl text-white mr-1 hover:bg-[#a6d457] transition duration-500 ease-in-out py-2 px-3">Shop Now</a>
                        <a href="#" className="bg-[#58673e] rounded-2xl text-white mx-1 hover:bg-[#a6d457] transition duration-500 ease-in-out py-2 px-3">Learn More</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div>
                    <img src={ModernFurniture} className="my-5 border-0 drop-shadow-xl rounded-lg" />

                    </div>

                    </div>  
                </div>
            </div>
        </section>

        </>
    )
}

export default SectionOne;