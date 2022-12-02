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
        <div className={`${counter === 0 ? "opacity-0 duration-500 cursor-default" : "opacity-100 bg-red-800 duration-500"} 
        rounded-full h-6 w-6 absolute top-1 right-10 flex justify-center items-center text-sm text-center bg-red-700 text-white font-bold`}>
            {counter}
        </div>


    useEffect(() => {
        // Boucle infinie des photos sur le couleur sélectionnée
        if (productId > 4 && color === "yellow") {
            setDisplayedImage(produits[0].data.url)
            setProductId(0)
        }
        if (productId > totalImgItems && color === "blue") {
            setDisplayedImage(produits[totalImgItems].data.url)
            setProductId(5)
        }
        // Rendu de la première image vue
        setDisplayedImage(produits[productId].data.url)
    }, [produits, productId, color, totalImgItems])

    return (
        <div className="md:w-4/5 flex flex-col md:flex md:justify-start align-middle min-h-screen mx-auto">

            <Navbar cartCounter={cartCounter}/>
            <div className="h-full flex flex-col-reverse md:flex-row md:justify-evenly md:mt-5 flex-wrap">
                <Product
                    displayedImage={displayedImage}
                    productId={productId}
                    setProductId={setProductId}
                    longueur={totalImgItems}
                    color={color}/>
                <Sidebar
                    setProductId={setProductId}
                    sidebarImg={sidebarImg}
                    setSidebarImg={setSidebarImg}
                    produits={produits}
                    setColor={setColor}
                    counter={counter}
                    setCounter={setCounter}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
