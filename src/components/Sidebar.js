import React, {useEffect} from 'react';
import SizeRectangle from "./SizeRectangle";
import ColorRectangle from "./ColorRectangle";
import ButtonAddToCart from "./ButtonAddToCart";
import ButtonPayPal from "./ButtonPayPal";
import ButtonEmptyCart from "./ButtonEmptyCart";
import PhotoSlider from "./PhotoSlider";

const Sidebar = ({
                     produits,
                     setProductId,
                     setColor,
                     sidebarImg,
                     setSidebarImg,
                     setCounter,
                     counter,
                     displayedImage, productId, longueur, color
                 }) => {

    const handleAddToCart = () => {
        setCounter(counter + 1)
    }

    const handleReset = () => {
        setCounter(0)
    }

    useEffect(() => {
        setSidebarImg(produits[3].data.url)
    }, [produits, setSidebarImg])

    return (
        <div className="md:w-1/4 h-screen flex flex-col md:items-start items-center md:h-4/5 p-2 ">
            <h1 className="text-2xl title font-bold text-center md:pt-0 pt-3 mb-5 md:mb-10 couleurSignature">MyShirt
                Essentials</h1>
            <div className="w-full flex justify-center items-center bg-white py-2 rounded-xl">
                <img className="hidden md:block rounded-xl h-[300px]" src={sidebarImg} alt="chemise écossais"/>
                <div className="md:hidden">
                    <PhotoSlider displayedImage={displayedImage}
                                 productId={productId}
                                 setProductId={setProductId}
                                 longueur={longueur}
                                 color={color}/>
                </div>
            </div>
            <h2 className="text-2xl mt-2 font-bold title couleurSignature">59,90€ HT</h2>
            <h2 className="text-base font-bold title line-through">79,90€ HT</h2>
            <h3 className="text-base mt-4">COULEUR</h3>
            <ColorRectangle
                setProductId={setProductId}
                setColor={setColor}
                produits={produits}
                setSidebarImg={setSidebarImg}/>
            <h3 className="text-base mt-2">TAILLE</h3>
            <SizeRectangle></SizeRectangle>
            <ButtonAddToCart hanldeAddToCart={handleAddToCart}/>
            <ButtonPayPal/>
            <ButtonEmptyCart counter={counter} handleReset={handleReset}/>

        </div>
    );
};

export default Sidebar;