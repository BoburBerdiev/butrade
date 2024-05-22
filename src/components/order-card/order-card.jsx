import React from 'react';
import {Counter, ImageUI} from "@/components";
import { FaRegTrashAlt } from "react-icons/fa";
import {useDispatch} from "react-redux";
import { deleteProduct} from "@/slice/basket";
const OrderCard = ({image ,title ,saleText, count  , id, orderCard}) => {
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
  }
    return (
        <div className={'flex items-center max-md:flex-col gap-x-3 md:justify-between gap-y-5'}>
            <div className={`flex items-center gap-5 w-full`}>
                <div className={`relative ${orderCard ? 'w-10 h-10 md:h-14 md:w-14x lg:w-[60px] lg:h-[60px]' : 'w-16 h-16 lg:w-24 lg:h-24'} rounded-lg overflow-hidden shrink-0`}>
                    <ImageUI src={image} alt={'Basket image'} />
                </div>
                <p className={`font-notoSans ${orderCard ? 'text-xs md:text-[13px] line-clamp-3 max-w-[180px]' : 'text-sm md:text-base max-w-[240px]'}`}>
                    {title}
                </p>
            </div>
            <div className={`flex items-center gap-5 md:justify-between ${orderCard ? 'w-fit shrink-0' : 'w-full '}`}>
                <p className={'font-notoSans text-sm md:text-base text-[#CECFDB]'}>
                    {saleText}
                    {
                        orderCard &&
                        <span>шт.</span>
                    }
                </p>
                <div className={'flex items-center gap-5 md:justify-between'}>
                    {
                        orderCard ? <></> :
                        <Counter count={count} id={id}/>
                    }
                    {
                        orderCard ? <></> :
                            <button onClick={() => handleDelete(id)}>
                                 <FaRegTrashAlt className={' w-[23px] h-[23px] text-[#CECFDB] hover:text-red-600'} />
                            </button>
                    }


                </div>
            </div>
        </div>
    );
};

export default OrderCard;