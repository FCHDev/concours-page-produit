import React from 'react';
import PhotoSlider from "./PhotoSlider";


const Product = ({displayedImage, productId, setProductId, longueur, color}) => {


    return (
        <div className="md:w-2/3 h-full pt-3 md:pt-0">
            {/*Partie Photo produit*/}

            {/*<Carousel/>*/}

            <div className="hidden md:block">
                <PhotoSlider displayedImage={displayedImage}
                             productId={productId}
                             setProductId={setProductId}
                             longueur={longueur}
                             color={color}/>
            </div>

            {/*Partie Description produit*/}
            <div className="max-h-3/5 p-2 md:mb-0 mb-3">
                <h2 className="text-xl font-bold md:mt-3 mt-5 title couleurSignature">
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