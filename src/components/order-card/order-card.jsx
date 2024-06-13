import React from 'react';
import {Counter, ImageUI} from "@/components";
import { IoMdTrash } from "react-icons/io";
import {useDispatch} from "react-redux";
import { deleteProduct} from "@/slice/basket";
import {useTranslation} from "react-i18next";
import {motion } from "framer-motion";
const OrderCard = ({image ,title , count  , id, isOrderCard}) => {
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
  }
  const {t} = useTranslation()
    return (
        <motion.div
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
             className={'w-full flex items-center justify-between pe-2'}>
            <div className={`flex items-center gap-2 ${isOrderCard ? "w-[70%]" : " md:gap-5 w-[60%]"} `}>
                <div className={`relative ${isOrderCard ? 'w-10 h-10 md:h-12 md:w-12 lg:w-[60px] lg:h-[60px] ' : 'w-12 h-12 lg:w-24 lg:h-24'} rounded lg:rounded-lg overflow-hidden shrink-0`}>
                    <ImageUI src={image} alt={'Basket image'} />
                </div>
                <p className={`font-notoSans w-fit ${isOrderCard ? "text-xs lg:text-[13px]" : "text-sm  lg:text-base"} lg:line-clamp-3  leading-4 line-clamp-2`}>
                    {title}
                </p>
            </div>
            <div className={`flex items-center justify-end  w-[38%] md:w-[25%]`}>
                {
                    isOrderCard ?
                <p className={'font-notoSans text-xs lg:text-sm  text-[#CECFDB]'}>
                    <span>
                    {count}
                    </span>
                    {
                        isOrderCard &&
                        <span> {t('order.count')}</span>
                    }
                </p>
                        :

                        <div className={'flex items-center w-full justify-between'}>
                            {
                                    <Counter count={count} id={id}/>
                            }
                            {
                                    <motion.button  whileTap={{ scale: 0.6 , opacity:0.9 }}  onClick={() => handleDelete(id)}>
                                        <IoMdTrash className={'text-2xl   md:text-3xl text-red-700 '} />
                                    </motion.button>
                            }
                        </div>

                }

            </div>
        </motion.div>
    );
};

export default OrderCard;