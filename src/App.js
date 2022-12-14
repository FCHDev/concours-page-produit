import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Sidebar from "./components/Sidebar";
import products from "./datas/products.json"
import {useEffect, useState} from "react";
import React from "react";
import Footer from "./components/Footer";

function App() {
    const produits = products
    const [productId, setProductId] = useState(0)
    const [color, setColor] = useState("yellow")
    const [displayedImage, setDisplayedImage] = useState()
    const [sidebarImg, setSidebarImg] = useState("")
    const totalImgItems = Object.keys(produits).length - 1
    const [counter, setCounter] = useState(0)

    const cartCounter =
        <div
            className={`${counter === 0 ? "opacity-0 duration-500 cursor-default" : "opacity-100 bg-red-800 duration-500"} 
        rounded-full h-6 w-6 absolute top-1 right-10 flex justify-center items-center text-sm text-center bg-red-700 text-white font-bold`}>
            {counter}
        </div>


    useEffect(() => {
        // Boucle infinie des photos sur le couleur sélectionnée
        if (productId > 4 && color === "yellow") {
            setDisplayedImage(produits[0].data.url)
            setProductId(0)
        }
        if (productId > 9 && color === "blue") {
            setDisplayedImage(produits[5].data.url)
            setProductId(5)
        }
        if (productId > totalImgItems && color === "gray") {
            setDisplayedImage(produits[totalImgItems].data.url)
            setProductId(10)
        }
        // Rendu de la première image vue
        setDisplayedImage(produits[productId].data.url)
    }, [produits, productId, color, totalImgItems])

    return (
        <div className="w-full min-h-screen mx-auto">
            <div className="md:w-4/5 w-full flex flex-col md:min-h-[95vh] md:flex md:justify-start items-center mx-auto">
                <Navbar cartCounter={cartCounter}/>
                <div className="h-full w-full mx-auto
                flex flex-col-reverse items-center
                md:flex-row
                md:justify-center
                md:items-start
                flex-wrap">
                    <Product
                        displayedImage={displayedImage}
                        productId={productId}
                        setProductId={setProductId}
                        longueur={totalImgItems}
                        color={color}/>
                    <Sidebar
                        productId={productId}
                        setProductId={setProductId}
                        sidebarImg={sidebarImg}
                        setSidebarImg={setSidebarImg}
                        counter={counter}
                        setCounter={setCounter}
                        color={color}
                        setColor={setColor}
                        displayedImage={displayedImage}
                        produits={produits}
                        longueur={totalImgItems}/>
                </div>
            <Footer/>
            </div>
        </div>
    );
}

export default App;
