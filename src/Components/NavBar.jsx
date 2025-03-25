import { useState } from "react";
import logo from "../assets/react.svg";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navTabs = [
    { tabName: "Home", id: 1 },
    { tabName: "Service", id: 2 },
    { tabName: "Most Popular", id: 3 }, 
    { tabName: "Modern Furniture", id: 4 }, 
    { tabName: "About", id: 5 },
    { tabName: "Contact", id: 6 },
  ];

  return (
    <section className="bg-[#58673e] text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          
          <div className="log px-3">
            <img src={logo} alt="Logo" />
          </div>

         
          <button
            className="md:hidden px-3 py-2 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>

          
          <ul
            className={`md:flex items-center space-x-4 ${
              isOpen ? "block" : "hidden"
            } md:block absolute md:relative bg-[#58673e] md:bg-transparent w-full md:w-auto left-0 top-16 md:top-0 md:p-0`}
          >
            {navTabs.map((tab) => (
              <li key={tab.id} className="px-3 py-2 text-lg">
                <a href="#" className="text-white hover:text-gray-300">
                  {tab.tabName}
                </a>
              </li>
            ))}
          </ul>

         
          <div className="hidden md:block px-3 py-2">
            <a
              href="#"
              className="bg-[#a6d457] rounded-md px-4 py-2 text-white hover:bg-[#98c144] hover:transition duration-500 ease-in-out"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nav;
