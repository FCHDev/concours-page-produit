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
    }

    const handleGrayColor = () => {
        setSidebarImg(produits[14].data.url)
        setProductId(10)
        setColor("gray")
    }

    return (
        <div className="flex justify-evenly mx-auto w-2/3 md:w-3/4 mb-3">
            <div onClick={handleYellowColor}
                 className="
                        h-10 w-12
                        text-center
                        flex justify-center items-center
                        rounded-xl
                        {/*bg-[#ebc114]*/}
                        myclass2
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
                        {/*bg-[#222737]*/}
                        myclass
                        cursor-pointer
                        mt-1"
            >
            </div>
            <div onClick={handleGrayColor}
                 className="
                        h-10 w-12
                        text-center
                        flex justify-center items-center
                        rounded-xl
                        bg-gray-500
                        myclass3
                        cursor-pointer
                        mt-1"
            >
            </div>

        </div>
    );
};

export default ColorRectangle;