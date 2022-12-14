import React from 'react';

const ButtonPayPal = () => {


    return (
        <button
            className="md:w-full w-5/6 md:h-12 h-16 flex justify-center items-center border my-3 text-center rounded-xl bg-[gold] md:hover:scale-105 md:hover:transition md:hover:duration-500 font-bold cursor-pointer">
            <span className="italic">Pay with</span>
            <img className="object-cover ml-3 pt-0.5" src="/images/paypal2.svg" alt="paypal logo"/>
        </button>
    );
};

export default ButtonPayPal;