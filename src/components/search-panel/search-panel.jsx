import  {useEffect, useState} from 'react';
import {CgSearch} from "react-icons/cg";
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import {useQuery} from "react-query";
import apiService from "@/service/axois";
import {motion} from 'framer-motion'
import {useRouter} from "next/router";
import {SearchPanelCard} from "@/components";
const SearchPanel = () => {
    const [searchPanel , setSearchPanel] = useState(false)
    const {t} = useTranslation()
    const router = useRouter()
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
    useEffect(() => {
        setSearchPanel(false)
    }, [router])

    return (
        <div className={'relative '}>
            <motion.form whileTap={{scale:0.998}} onChange={handleSubmit(onSubmit)} className=' w-full border border-currentBlue rounded-[50px] overflow-hidden relative'>
                <input type="text" {...register("search")} placeholder={t('navbar.searching')}  className='w-full px-5 py-2 lg:px-[30px] lg:py-3 text-sm outline-none lg:text-base text-[#757575] font-notoSansDisplay block' />
                <button type={'submit'} className='absolute -right-0.5 top-0 h-full px-3 pe-3.5 flex items-center text-white bg-currentBlue text-sm md:text-base md:px-4 md:pe-[18px] lg:text-xl'><CgSearch /></button>
            </motion.form>
            {
                searchProduct &&
                <div className={'absolute top-[110%]  w-full bg-white border rounded-[20px] max-h-[300px] overflow-x-hidden overflow-y-scroll'}>
                    {
                        searchProductFiltered?.count > 0 ?
                            <div className={'w-full divide-y grid grid-cols-1'} >
                                {
                                    searchProductFiltered?.results?.map((card, id) => (
                                        <SearchPanelCard key={id} card={card}/>
                                    ))
                                }
                            </div>

                            :

                            <div>

                            </div>
                    }
                </div>
            }
        </div>
    );
};

export default SearchPanel;