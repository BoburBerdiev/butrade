import React from 'react';
import {RxGrid} from "react-icons/rx";
import {PiListLight} from "react-icons/pi";
import {useDispatch, useSelector} from "react-redux";
import {changleIsRow} from  "@/slice/cardPosition"

const CardPositionBtn = () => {
    const dispatch = useDispatch()
    const {isRow} = useSelector(state => state.cardPosition)

    const setToRow = () => {
        dispatch(changleIsRow(true))
    }

    const  setToCol = () => {
        dispatch(changleIsRow(false))
    }

    return (
        <div className={'flex items-center gap-3.5'}>
            <div onClick={setToCol}>
                <RxGrid className={`w-[26px] h-[26px] cursor-pointer ${isRow ? "text-[#8A8A8A]  " : "text-currentBlue"} `}/>
            </div>
            <div onClick={setToRow}>
                <PiListLight className={`w-[26px] h-[26px] cursor-pointer ${isRow ? " text-currentBlue " : " text-[#8A8A8A]"} `}/>
            </div>
        </div>
    );
};

export default CardPositionBtn;