import React from 'react';
import {Counter, ImageUI} from "@/components";
import { FaRegTrashAlt } from "react-icons/fa";
import {useDispatch} from "react-redux";
import { deleteProduct} from "@/slice/basket";
const OrderCard = ({image ,title ,saleText, count  , id}) => {
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
  }
    return (
        <div className={'flex items-center max-md:flex-col gap-x-3 md:justify-between gap-y-5'}>
            <div className={'flex items-center gap-5 w-full'}>
                <div className={'relative w-16 h-16 lg:w-24 lg:h-24 rounded-lg overflow-hidden shrink-0'}>
                    <ImageUI src={image} alt={'Basket image'} />
                </div>
                <p className={'font-notoSans text-sm md:text-base max-w-[240px]'}>
                    {title}
                </p>
            </div>
            <div className={'flex items-center gap-5 md:justify-between w-full'}>
                <p className={'font-notoSans text-sm md:text-base text-[#CECFDB]'}>
                    {saleText}
                </p>
                <Counter count={count} id={id}/>
                <button onClick={() => handleDelete()}>
                    <FaRegTrashAlt className={'w-[23px] h-[23px] text-[#CECFDB] hover:text-red-600'} />
                </button>
            </div>
        </div>
    );
};

export default OrderCard;