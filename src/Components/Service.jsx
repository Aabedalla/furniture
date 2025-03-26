import React from "react";
import furnitures from '../assets/furnitures.png'
import delivery from '../assets/delivery.png'
import mechanic from '../assets/mechanic.png'
import paint from '../assets/paint.png'
function Service(){
    return(
        <section className="bg-[#58673e] my-5">
        <div className="container">
            <h1 className="text-center py-4 text-white">Our services</h1>

            <div className="flex flex-wrap justify-center items-center my-3 gap-6 py-1 pb-5">
                <div className="col-md-2">
                <div className="flex flex-col items-center">
                <div className="bg-gray-50 flex items-center justify-center w-24 h-24 border-2 rounded-full border-gray-50 p-3 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    <img src={furnitures} className="w-20 h-20 object-contain" />
                </div>
                <p className="text-center text-white mt-2">Furniture design and manufacturing </p>
                </div>
                </div>

                <div className="col-md-2">
                <div className="flex flex-col items-center">
                <div className="bg-gray-50 flex items-center justify-center w-24 h-24 border-2 rounded-full border-gray-50 p-3 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    <img src={delivery} className="w-20 h-20 object-contain" />
                </div>
                <p className="text-center text-white mt-2">Delivery and installation </p>
                </div>
                </div>

                <div className="col-md-2">
                <div className="flex flex-col items-center">
                <div className="bg-gray-50 flex items-center justify-center w-24 h-24 border-2 rounded-full border-gray-50 p-3 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    <img src={mechanic} className="w-20 h-20 object-contain" />
                </div>
                <p className="text-center text-white mt-2">Reupholstery and maintenance </p>
                </div>
                </div>

                <div className="col-md-2">
                <div className="flex flex-col items-center">
                <div className="bg-gray-50 flex items-center justify-center w-24 h-24 border-2 rounded-full border-gray-50 p-3 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    <img src={paint} className="w-20 h-20 object-contain" />
                </div>
                <p className="text-center text-white mt-2">Integrated interior design </p>
                </div>
                </div>

                <div className="col-md-2">
                <div className="flex flex-col items-center">
                <div className="bg-gray-50 flex items-center justify-center w-24 h-24 border-2 rounded-full border-gray-50 p-3 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    <img src={furnitures} className="w-20 h-20 object-contain" />
                </div>
                <p className="text-center text-white mt-2">Customized furniture manufacturing </p>
                </div>
                </div>

                
            </div>
        </div>
        </section>

    )
}

export default Service;

