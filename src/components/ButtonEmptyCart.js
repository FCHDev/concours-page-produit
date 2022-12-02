import React from 'react';

const ButtonEmptyCart = ({counter, handleReset}) => {
    return (
        <button
            className={`${counter === 0 ? "opacity-0 duration-500 cursor-default" : "opacity-100 bg-red-800 duration-500"} w-full mx-auto h-12 border-red-800 border flex justify-center items-center mt-0 text-white text-center text-lg rounded-xl font-bold border-red-800 cursor-pointer bg-red-800}`}
            onClick={handleReset}>
            <img className="h-10 mr-3 object-cover" src="/images/empty-cart.svg" alt="empty cart"/>
            Empty Cart
        </button>
    );
};

export default ButtonEmptyCart;