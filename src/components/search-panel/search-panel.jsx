import React, {useEffect, useState} from 'react';
import {CgSearch} from "react-icons/cg";
import { IoIosClose } from "react-icons/io";
import {ImageUI, ProductCard} from "@/components";
const SearchPanel = () => {
    const products = [
        {
            title_uz: "Керамогранит плитка глянцевая поверхность",
            title_ru: "Керамогранит плитка глянцевая поверхность",
            image: "/image/card-image.png",
            link: "/catalog/2",
            alt: "Butrate Image",
            id: 2
        },
        {
            title_uz: "Цемент М400 Евроцемент 50кг.",
            title_ru: "Цемент М400 Евроцемент 50кг.",
            image: "/image/card-image.png",
            link: "/catalog/2",
            alt: "Butrate Image",
            id: 3
        },
        {
            title_uz: "Трубы пластиковые",
            title_ru: "Трубы пластиковые",
            image: "/image/card-image.png",
            link: "/catalog/2",
            alt: "Butrate Image",
            id: 4
        },
    ]
    const [searchPanel , setSearchPanel] = useState(false)
    const [productsHave , setProductsHave] = useState(true)

    const inputClick = () => {
        setSearchPanel(true)
    }
    const closeSearchPanel = () => {
        setSearchPanel(false)
    }
    const scrollHidden = () => {
        searchPanel ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden')
    }
    useEffect(() => {
        scrollHidden()
    }, [searchPanel])
    return (
        <>
            <div className='w-full border border-currentBlue rounded-[50px] overflow-hidden relative'>
                <input type="text" placeholder='Поиск товаров ' className='w-full px-5 py-2 lg:px-[30px] lg:py-3 text-xs md:text-sm outline-none lg:text-base text-[#757575] font-notoSansDisplay block' onClick={inputClick}/>
                <button className='absolute -right-0.5 top-0 h-full px-3 pe-3.5 flex items-center text-white bg-currentBlue text-sm md:text-base md:px-4 md:pe-[18px] lg:text-xl'><CgSearch /></button>
            </div>
            <div className={`fixed  left-0 right-0 w-full duration-200 overflow-hidden h-screen z-[90] ${searchPanel ? "top-[102px] md:top-[125px] lg:top-[131px] " : " -top-full"}   bg-currentBlue/80`}>
                <div className={'absolute top-5 right-5 z-50 cursor-pointer'} onClick={closeSearchPanel}>
                    <IoIosClose className={'text-white text-4xl'}/>
                </div>
                {
                    productsHave ?
                         <div className={'grid grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4 py-2 md:py-8 lg:py-14 container'}>
                             {
                                 products.map(card => (
                                     <div key={card.id}>
                                       <ProductCard product={card}/>
                                     </div>
                                 ))
                             }
                         </div>
                        :
                        <div className={'container flex flex-col items-center justify-center w-full h-full'}>
                            <div className={'aspect-square w-[300px] md:w-[500px] relative'}>
                                <ImageUI src={'/image/image.webp'} objectFitContain={false}/>
                            </div>
                        </div>


                }
            </div>
        </>
    );
};

export default SearchPanel;