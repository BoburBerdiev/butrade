import React from 'react';
import {RxGrid} from "react-icons/rx";
import {PiListLight} from "react-icons/pi";
import {useDispatch, useSelector} from "react-redux";
import {changleIsRow} from  "@/slice/cardPosition"
import {motion} from 'framer-motion'
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
            <motion.button whileTap={{scale:0.9 , opacity:0.5}} onClick={setToCol}>
                <RxGrid className={`text-xl md:text-2xl ${isRow ? "text-currentGray  " : "text-currentBlue"} `}/>
            </motion.button>
            <motion.button whileTap={{scale:0.9 , opacity:0.5}} onClick={setToRow}>
                <PiListLight className={`text-xl md:text-2xl ${isRow ? " text-currentBlue " : " text-currentGray"} `}/>
            </motion.button>
        </div>
    );
};

export default CardPositionBtn;