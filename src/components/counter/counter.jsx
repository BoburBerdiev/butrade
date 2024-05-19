import React from 'react';
import {FiMinus} from "react-icons/fi";
import {LuPlus} from "react-icons/lu";
import {useDispatch} from "react-redux";
import { countMinusProduct, countPlusProduct} from "@/slice/basket";

const Counter = ({count , id}) => {
    const dispatch = useDispatch()
    const handleMinus = (id) => {
        dispatch(countMinusProduct(id))
    }
    const handlePlus = (id) => {
        dispatch(countPlusProduct(id))
    }
    return (
        <div>
            <div className={'flex items-center gap-x-2 '}>
                <button
                    onClick={() => handleMinus(id)}
                    className={'p-1 rounded-full bg-[#F5F5F5] text-currentBlue hover:text-white hover:bg-currentBlue'}>
                    <FiMinus/>
                </button>
                <p className={'font-semibold'}>
                    {count}
                </p>
                <button
                    onClick={() => handlePlus(id)}
                    className={'p-1 rounded-full bg-[#F5F5F5] text-currentBlue hover:text-white hover:bg-currentBlue'}>
                    <LuPlus/>
                </button>
            </div>
        </div>
    );
};

export default Counter;