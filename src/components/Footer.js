import React from 'react';

const Footer = () => {
    return (
        <div className="w-full md:min-h-[5vh] bg-black md:flex hidden justify-center items-center mt-3">
            <div className="md:w-1/4 w-full flex mx-auto justify-evenly items-center">
                <img className="md:h-8 h-7 cursor-pointer" src="/images/instagram.svg" alt="instagram"/>
                <img className="md:h-8 h-7 cursor-pointer" src="/images/pinterest-circular-logo-symbol.svg" alt="pinterest"/>
                <img className="md:h-8 h-7 cursor-pointer" src="/images/tiktok.svg" alt="tiktok"/>
                <img className="md:h-8 h-7 cursor-pointer" src="/images/twitter.svg" alt="twitter bird"/>
                <img className="md:h-8 h-7 cursor-pointer" src="/images/meta.svg" alt="meta facebook"/>
            </div>
        </div>
    );
};

export default Footer;