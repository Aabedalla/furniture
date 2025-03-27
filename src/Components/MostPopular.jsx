import pop1 from '../assets/card1.jpg'
import pop2 from '../assets/card2.jpg'
import pop3 from '../assets/card3.jpg'

function MostPopular(){
    return(
        <>

        <section>
            <div className="container">
            <h1 className="text-center pt-3 modernF">Most Popular</h1>
                <div className="Popular1 flex-wrap flex">
                   <div className='col-md-6'>
                        <div>
                                <img src={pop1} className='my-5 float-right border-0 drop-shadow-xl rounded-lg'></img>
                            </div>
                        </div>
                    <div className='col-md-6'>
                        <div className='popInfo px-3 my-5'>
                            <p className='text-[#333] text-justify py-3'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, 
                                modi iste ut esse cupiditate numquam itaque. Itaque, 
                                doloremque Qui, modi iste ut esse cupiditate numquam itaque.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, 
                                modi iste ut esse cupiditate numquam itaque. Itaque, 
                                doloremque Qui, modi iste ut esse cupiditate numquam itaque.
                            </p>
                            <button className='bg-[#58673e] rounded-2xl text-white mr-1 hover:bg-[#a6d457] transition duration-500 ease-in-out py-2 px-3'>Bay Now</button>
                        </div>
                    </div>
                </div>

                <div className="Popular1 flex-wrap flex">
                   
                    <div className='col-md-6'>
                        <div className='popInfo px-3 my-5'>
                            <p className='text-[#333]  text-right py-3'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, 
                                modi iste ut esse cupiditate numquam itaque. Itaque, 
                                doloremque Qui, modi iste ut esse cupiditate numquam itaque.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, 
                                modi iste ut esse cupiditate numquam itaque. Itaque, 
                                doloremque Qui, modi iste ut esse cupiditate numquam itaque.
                            </p>
                            <button className='bg-[#58673e] float-right rounded-2xl text-white mr-1 hover:bg-[#a6d457] transition duration-500 ease-in-out py-2 px-3'>Bay Now</button>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div>
                                <img src={pop2} className='my-5 float-left border-0 drop-shadow-xl rounded-lg'></img>
                            </div>
                    </div>
                </div>

                <div className="Popular1 flex-wrap flex">
                   <div className='col-md-6'>
                        <div>
                                <img src={pop3} className='my-5 float-right border-0 drop-shadow-xl rounded-lg'></img>
                            </div>
                        </div>
                    <div className='col-md-6'>
                        <div className='popInfo px-3 my-5'>
                            <p className='text-[#333] text-justify py-3'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, 
                                modi iste ut esse cupiditate numquam itaque. Itaque, 
                                doloremque Qui, modi iste ut esse cupiditate numquam itaque.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, 
                                modi iste ut esse cupiditate numquam itaque. Itaque, 
                                doloremque Qui, modi iste ut esse cupiditate numquam itaque.
                            </p>
                            <button className='bg-[#58673e] rounded-2xl text-white mr-1 hover:bg-[#a6d457] transition duration-500 ease-in-out py-2 px-3'>Bay Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default MostPopular;