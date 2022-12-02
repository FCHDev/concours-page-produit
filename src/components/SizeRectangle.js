import React from 'react';
import {v4} from "uuid"

const SizeRectangle = ({tailles}) => {
    // console.log([tailles])
    return (
        <div className="w-[90%] flex justify-evenly">
            {tailles.map(el => (
                <div className="
                        h-10 w-12 text-center
                        flex justify-center items-center
                        rounded-xl
                        bg-[#D3D3D3]
                        cursor-pointer
                        hover:bg-[#AF1B3F]
                        hover:text-white
                        hover:font-bold
                        after:bg-[#AF1B3F]
                        after:text-white
                        after:font-bold
                        active:bg-[#AF1B3F]
                        active:text-white
                        active:font-bold
                        mt-1"
                     key={v4()}>
                    {el}
                </div>
            ))}

        </div>

    );
};

export default SizeRectangle;