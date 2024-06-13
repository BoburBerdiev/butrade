import {FiMinus} from "react-icons/fi";
import {LuPlus} from "react-icons/lu";
import {useDispatch} from "react-redux";
import { countMinusProduct, countPlusProduct} from "@/slice/basket";
import {m} from 'framer-motion'
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
            <div className={'flex items-center gap-x-2 xl:gap-x-4 '}>
                <m.button
                    whileTap={{scale:0.9, opacity:0.6}}
                    onClick={() => handleMinus(id)}
                    className={'p-1 rounded-full bg-[#F5F5F5] text-currentBlue hover:text-white hover:bg-currentBlue'}>
                    <FiMinus/>
                </m.button>
                <p className={'font-semibold'}>
                    {count}
                </p>
                <m.button
                    whileTap={{scale:0.9, opacity:0.6}}
                    onClick={() => handlePlus(id)}
                    className={'p-1 rounded-full bg-[#F5F5F5] text-currentBlue hover:text-white hover:bg-currentBlue'}>
                    <LuPlus/>
                </m.button>
            </div>
        </div>
    );
};

export default Counter;