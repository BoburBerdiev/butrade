import  {useEffect, useState} from 'react';
import {CgSearch} from "react-icons/cg";
import { IoIosClose } from "react-icons/io";
import {ImageUI, ProductCard} from "@/components";
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import {useQuery} from "react-query";
import apiService from "@/service/axois";
const SearchPanel = () => {
    const [searchPanel , setSearchPanel] = useState(false)
    const {t} = useTranslation()
    const {
        register,
        handleSubmit
    } = useForm()
    const [searchProduct, setSearchProduct] = useState(null)
    const {
        data: searchProductFiltered,
        refetch: searchProductFilteredRefetch,
    } = useQuery(
        "search",
        () =>
            apiService.getData(
                `/product-search?search=${searchProduct}`
            ),
        {
            enabled: false,
        }
    );
    useEffect(() => {
        searchProductFilteredRefetch()
    } , [searchProduct])

    const onSubmit = ({search}) => {
        if(search.length > 2) {
            setSearchProduct(search)
        }

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
            <form onSubmit={handleSubmit(onSubmit)} className=' w-full border border-currentBlue rounded-[50px] overflow-hidden relative'>
                <input type="text" {...register("search")} placeholder={t('navbar.searching')}  className='w-full px-5 py-2 lg:px-[30px] lg:py-3 text-xs md:text-sm outline-none lg:text-base text-[#757575] font-notoSansDisplay block' />
                <button type={'submit'} className='absolute -right-0.5 top-0 h-full px-3 pe-3.5 flex items-center text-white bg-currentBlue text-sm md:text-base md:px-4 md:pe-[18px] lg:text-xl'><CgSearch /></button>
            </form>
            {
                searchProductFiltered &&
                <div
                    className={`fixed  left-0 right-0 w-full duration-200 overflow-hidden h-screen z-[90] ${searchPanel ? "top-[102px] md:top-[125px] lg:top-[131px] " : " -top-[150%]"}   bg-currentBlue/80`}>
                    <div className={'absolute top-5 right-5 z-50 cursor-pointer'} onClick={closeSearchPanel}>
                        <IoIosClose className={'text-white text-4xl'}/>
                    </div>
                    {
                        searchProductFiltered?.count > 0 ?
                            <div
                                className={'grid grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4 py-2 md:py-8 lg:py-14 container'}>
                                {
                                    searchProductFiltered?.results?.map(card => (
                                        <ProductCard key={card.id} product={card}/>
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
            }

        </>
    );
};

export default SearchPanel;