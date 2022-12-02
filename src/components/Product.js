import React from 'react';

const Product = ({displayedImage, productId, setProductId, longueur, color}) => {

    const handlePrevious = () => {
        if (productId === 0) {
            setProductId(4)
        } else if (productId === 5) {
            setProductId(longueur)
        } else {
            setProductId(productId - 1)
        }
    }
    const handleNext = () => {
        productId === longueur ? setProductId(5)
            : setProductId(productId + 1)
    }


    return (
        <div className="md:w-2/3 h-full pt-3 md:pt-0">
            {/*Partie Photo produit*/}
            <div className="h-2/5 w-full flex flex-col justify-center items-center bg-white py-2 rounded-xl">
                <h1 className="text-2xl title font-bold text-center mb-1 couleurSignature">MyShirt Essentials</h1>
                <span className="capitalize m-0 md:mb-6">{color}</span>
                <span className="md:hidden text-xs italic mt-0 mb-6 text-gray-400 font-extralight">Clique sur l'image pour défiler</span>
                <div className="w-full flex justify-evenly items-center">
                    <div className="md:block hidden p-3 rounded-xl cursor-pointer w-24 text-center"
                         onClick={handlePrevious}>
                        <img className="md:min-h-[50px] md:w-full md:mx-auto"
                             src="/images/left-arrow.svg"
                             alt=""/>
                    </div>
                    <img className="rounded-xl md:h-[550px] h-[380px] mx-auto my-2"
                         src={displayedImage}
                         alt="chemise écossais"
                         onClick={handleNext}/>

                    <div className="md:block hidden p-3 rounded-xl cursor-pointer w-24 text-center"
                         onClick={handleNext}>
                        <img className="md:min-h-[50px] md:w-full md:mx-auto"
                             src="/images/right-arrow.svg"
                             alt=""/>
                    </div>
                </div>
            </div>

            {/*Partie Description produit*/}
            <div className="max-h-3/5 p-2">
                <h2 className="text-xl font-bold mt-3 title couleurSignature">
                    DESCRIPTION
                </h2>
                <p>
                    MyShirt Essentials se concentre sur la création de vêtements abordables, de haute qualité et
                    durables au quotidien. Notre gamme de vêtements indispensables pour homme comprend des polos, des
                    pantalons chinos, des shorts classiques et des t-shirts à col rond.
                </p>
                <p>
                    Nos tailles cohérentes vous évitent les essayages inutiles, et chaque pièce est testée pour
                    maintenir
                    les normes les plus élevées en matière de qualité et de confort.
                </p>

                <h2 className="text-xl font-bold mt-5 title couleurSignature">
                    CARACTÉRISTIQUES
                </h2>
                <ul>
                    <li>100% coton</li>
                    <li>Lavage en machine</li>
                    <li>Sans fermeture</li>
                    <li>Col : boutonné</li>
                    <li>Manches : longues</li>
                </ul>
            </div>
        </div>
    );
};

export default Product;