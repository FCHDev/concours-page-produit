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

            <div className="md:h-2/5
            h-full
            w-full
            flex flex-col justify-center items-center
            bg-white
            rounded-xl
            md:py-2
            md:mb-0
            mb-5">
                {/*<h1 className="text-2xl title font-bold text-center mb-1 couleurSignature">MyShirt Essentials</h1>*/}
                <span className="capitalize m-0 md:mb-6">{color}</span>

                <div className="w-full flex justify-evenly items-center">
                    <div className="md:relative absolute -left-4 md:top-0 md:right-0 p-3 rounded-xl cursor-pointer w-24 text-center"
                         onClick={handlePrevious}>
                        <img className="md:min-h-[50px] h-[50px] md:w-full md:mx-auto"
                             src="/images/left-arrow.svg"
                             alt="previous"/>
                    </div>
                    <img className="md:rounded-xl md:h-[550px] h-[76vh] w-full object-cover md:object-contain md:mx-auto md:my-2"
                         src={displayedImage}
                         alt="chemise écossais"
                    />

                    <div className="md:relative absolute -right-9 md:top-0 md:right-0 p-3 rounded-xl cursor-pointer w-24 text-center"
                         onClick={handleNext}>
                        <img className="md:min-h-[50px] h-[50px] md:w-full md:mx-auto"
                             src="/images/right-arrow.svg"
                             alt="next"/>
                    </div>
                </div>
            </div>

    );
};

export default PhotoSlider;