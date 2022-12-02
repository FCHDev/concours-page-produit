import React from 'react';

const ButtonAddToCart = ({hanldeAddToCart}) => {
    return (
        <button
            className="w-full h-12 border flex justify-center items-center mt-10 text-center text-lg rounded-xl bg-black text-white cursor-pointer hover:bg-gray-700"
            onClick={hanldeAddToCart}>
            <img className="h-8 mr-3 object-cover" src="/images/shopping-cart.svg" alt="add to cart"/>
            Add to Cart
        </button>
    );
};

export default ButtonAddToCart;