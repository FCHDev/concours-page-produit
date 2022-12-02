import React from 'react';

const PhotoSlider = ({displayedImage, productId, setProductId, longueur, color}) => {
    const handlePrevious = () => {
        if (productId === 0) {
            setProductId(4)
        } else if (productId === 5) {
            setProductId(9)
        } else if (productId === 10) {
            setProductId(longueur)
        } else {
            setProductId(productId - 1)
        }
    }
    const handleNext = () => {
        console.log("prout")
        productId === longueur ? setProductId(11)
            : setProductId(productId + 1)
    }


    return (
        <div>
            <div className="h-2/5 w-full flex flex-col justify-center items-center bg-white py-2 rounded-xl">
                {/*<h1 className="text-2xl title font-bold text-center mb-1 couleurSignature">MyShirt Essentials</h1>*/}
                <span className="capitalize m-0 md:mb-6">{color}</span>

                <div className="w-full flex justify-evenly items-center">
                    <div className="md:relative absolute -left-4 md:top-0 md:right-0  p-3 rounded-xl cursor-pointer w-24 text-center"
                         onClick={handlePrevious}>
                        <img className="md:min-h-[50px] h-[50px] md:w-full md:mx-auto"
                             src="/images/left-arrow.svg"
                             alt=""/>
                    </div>
                    <img className="rounded-xl md:h-[550px] h-[380px] mx-auto my-2"
                         src={displayedImage}
                         alt="chemise écossais"
                         // onClick={handleNext}
                    />

                    <div className="md:relative absolute -right-9 md:top-0 md:right-0  p-3 rounded-xl cursor-pointer w-24 text-center"
                         onClick={handleNext}>
                        <img className="md:min-h-[50px] h-[50px] md:w-full md:mx-auto"
                             src="/images/right-arrow.svg"
                             alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoSlider;