import React from 'react';
import {FiMinus} from "react-icons/fi";
import {LuPlus} from "react-icons/lu";

const Counter = () => {
    return (
        <div>
            <div className={'flex items-center gap-x-2 '}>
                <button
                    className={'p-1 rounded-full bg-[#F5F5F5] text-currentBlue hover:text-white hover:bg-currentBlue'}>
                    <FiMinus/>
                </button>
                <p className={'font-semibold'}>
                    20
                </p>
                <button
                    className={'p-1 rounded-full bg-[#F5F5F5] text-currentBlue hover:text-white hover:bg-currentBlue'}>
                    <LuPlus/>
                </button>
            </div>
        </div>
    );
};

export default Counter;