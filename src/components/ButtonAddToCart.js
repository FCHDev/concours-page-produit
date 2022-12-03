import React from 'react';

const ButtonAddToCart = ({hanldeAddToCart}) => {
    return (
        <button
            className="md:w-full w-5/6 md:h-12 h-20 border flex justify-center items-center mt-5 md:mt-10 text-center text-lg rounded-xl bg-black text-white cursor-pointer md:hover:scale-105 md:hover:transition md:hover:duration-500 hover:bg-gray-700"
            onClick={hanldeAddToCart}>
            <img className="h-8 mr-3 object-cover" src="/images/shopping-cart.svg" alt="add to cart"/>
            Add to Cart
        </button>
    );
};

export default ButtonAddToCart;