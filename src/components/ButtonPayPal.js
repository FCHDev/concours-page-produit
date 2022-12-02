import React from 'react';

const ButtonPayPal = () => {


    return (
        <button
            className="w-full h-12 flex justify-center items-center border my-3 text-center rounded-xl bg-[gold] font-bold cursor-pointer">
            <span className="italic">Pay with</span>
            <img className="object-cover ml-3 pt-0.5" src="/images/paypal2.svg" alt="paypal logo"/>
        </button>
    );
};

export default ButtonPayPal;