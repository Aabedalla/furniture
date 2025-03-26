import React from "react";

function CardAds({cards}) {
    return (
        <div className="flex flex-wrap justify-center my-3 gap-6 py-1">
            {cards.map((card) => (
                <div key={card.id} className="bg-[#f3e9dd] shadow-lg rounded-md overflow-hidden w-64 flex flex-col items-center">                    
                    <div className="w-full h-40 flex justify-center">
                        <img src={card.img} alt={card.title} className="w-full object-cover" />
                    </div>
                    
                   
                    <div className="text-center mt-2 p-2">
                        <h6 className="text-lg text-left font-bold text-[#444444]">{card.title}</h6>
                        <div className="flex justify-between">
                        <button className="bg-[#58673e] text-white hover:text-white px-4 py-2 rounded mt-2">{card.add}</button>
                        <span className="bg-white text-[#444444] px-4 py-2 rounded mt-2">{card.price}</span>
                        </div>
                        
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardAds;
