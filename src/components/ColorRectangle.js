import React from 'react';

const ColorRectangle = ({
                            setColor,
                            setProductId,
                            setSidebarImg,
                            produits
                        }) => {

    const handleYellowColor = () => {
        setSidebarImg(produits[3].data.url)
        setProductId(0)
        setColor("yellow")
    }
    const handleBlueColor = () => {
        setSidebarImg(produits[8].data.url)
        setProductId(5)
        setColor("blue")
        console.log("prout")
    }

    return (
        <div className="flex justify-evenly w-2/3 md:w-1/3 mb-3">
            <div onClick={handleYellowColor}
                 className="
                        h-10 w-12
                        text-center
                        flex justify-center items-center
                        rounded-xl
                        bg-[#ebc114]
                        cursor-pointer
                        mt-1"
            >
            </div>
            <div onClick={handleBlueColor}
                 className="
                        h-10 w-12
                        text-center
                        flex justify-center items-center
                        rounded-xl
                        bg-[#222737]
                        cursor-pointer
                        mt-1"
            >
            </div>

        </div>
    );
};

export default ColorRectangle;