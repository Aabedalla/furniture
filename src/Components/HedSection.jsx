import ModernFurniture from "../assets/2-196.jpg"
import React from "react";
import CardAds from "./CardAds";
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';
import card4 from '../assets/card4.jpg';
import Service from "../Components/Service";
import furnitures from '../assets/furnitures.png'
import delivery from '../assets/delivery.png'
import mechanic from '../assets/mechanic.png'
import paint from '../assets/paint.png'


const cardImg = [
    { img: card1, add: "add to cart" , id: 1 , price: "200$" , title: "The finest luxury and royal sofa sets and professional "},
    { img: card2, add: "add to cart" , id: 2 , price: "120$" , title: "The finest types of luxurious and professional covers"},
    { img: card3, add: "add to cart" , id: 3 , price: "365$" , title: "The latest types of high-end European antiques"},
    { img: card4, add: "add to cart" , id: 4 , price: "85$" , title:  "Global graphics and amazing bedroom "},
];
const ServicesCard = [
    { img: furnitures, add: "add to cart" , id: 1 , title: "The finest"},
    { img: delivery, add: "add to cart" , id: 2 , title: "The finest"},
    { img: mechanic, add: "add to cart" , id: 3 ,  title: "The latest"},
    { img: paint, add: "add to cart" , id: 4 ,  title:  "Global graphics"},
];
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
        
        <section>
            <div className="container">
                <h1 className="text-center pt-3 modernF">Modern Furniture</h1>
                <div>
                    <CardAds cards={cardImg} />
                </div>
            </div>
        </section>

       

        </>
    )
}

export default SectionOne;