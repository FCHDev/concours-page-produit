import React from 'react';
import {v4} from "uuid"

const Navbar = ({cartCounter}) => {
    const menuItems = ["Accueil", "Catalogue", "Contact", "À propos"]

    return (
        <div className="w-full h-16 md:flex rounded-xl md:mt-3 md:mb-6 px-3 md:px-0">
            <ul className="flex h-full text-white md:w-3/4 md:mx-auto md:justify-evenly justify-between items-center">
                {menuItems.map(item => (
                    <li key={v4()} className="md:text-2xl text-base cursor-pointer font-[Poppins] font-bold test text-gray-800">{item}</li>
                ))}
            </ul>
            <div className="hidden md:flex md:justify-center md:items-center md:relative w-1/12 md:mr-3 ">
                <img className="h-8 mr-3 object-cover" src="/images/shopping-cart-black.svg" alt="add to cart"/>
                {cartCounter}
            </div>
        </div>
    );
};

export default Navbar;