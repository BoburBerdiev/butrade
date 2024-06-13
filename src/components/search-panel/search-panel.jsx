import { useEffect, useState, useCallback } from 'react';
import { CgSearch } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useQuery, useQueryClient } from "react-query";
import apiService from "@/service/axois";
import { motion } from 'framer-motion';
import { ImageUI, SearchPanelCard } from "@/components";
import { useRouter } from "next/router";

const SearchPanel = () => {
    const queryClient = useQueryClient();
    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const { t } = useTranslation();
    const { register, handleSubmit, reset } = useForm();
    const [searchProduct, setSearchProduct] = useState("");
    const router = useRouter();

    const {
        data: searchProductFiltered,
        refetch: searchProductFilteredRefetch,
        isSuccess: searchProductIsSuccess
    } = useQuery(
        "search",
        () => apiService.getData(`/product-search?search=${searchProduct}`),
        {
            enabled: false,
        }
    );

    const debounce = (func, delay) => {
        let debounceTimer;
        return function (...args) {
            const context = this;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        };
    };

    const handleInputChange = debounce((e) => {
        const value = e.target.value;
        if (value.length > 2) {
            setSearchProduct(value);
            setIsOpenSearch(true);
        } else {
            setSearchProduct("");
            setIsOpenSearch(false);
        }
    }, 500);

    useEffect(() => {
        if (searchProduct.length > 2) {
            searchProductFilteredRefetch();
        }
    }, [searchProduct, searchProductFilteredRefetch]);

    const eventStopPropagation = (e) => e.stopPropagation();

    const closeSearchPanel = useCallback(() => {
        setIsOpenSearch(false);
    }, []);

    const routerPushClear = () => {
        reset({ search: "" });
        setSearchProduct("");
        setIsOpenSearch(false);
        queryClient.removeQueries("search");
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.search-panel')) {
                closeSearchPanel();
            }
        };
        window.addEventListener('click', handleClickOutside);
        return () => window.removeEventListener('click', handleClickOutside);
    }, [closeSearchPanel]);

    return (
        <div className={'relative search-panel'}>
            <motion.form
                whileTap={{ scale: 0.998 }}
                onSubmit={handleSubmit(() => {})}
                className='w-full border border-currentBlue rounded-[50px] overflow-hidden relative'
                onClick={eventStopPropagation}
            >
                <input
                    type="text"
                    {...register("search")}
                    placeholder={t('navbar.searching')}
                    className='w-full px-5 py-2 lg:px-[30px] lg:py-3 text-sm outline-none lg:text-base text-[#757575] font-notoSansDisplay block'
                    onChange={handleInputChange}
                    onFocus={() => setIsOpenSearch(true)}
                />
                <button
                    type={'submit'}
                    className='absolute -right-0.5 top-0 h-full px-3 pe-3.5 flex items-center text-white bg-currentBlue text-sm md:text-base md:px-4 md:pe-[18px] lg:text-xl'
                >
                    <CgSearch />
                </button>
            </motion.form>
            {isOpenSearch && searchProductIsSuccess && (
                <div className={'absolute top-[110%] w-full bg-white border rounded-[20px] max-h-[300px] overflow-x-hidden overflow-y-scroll'}>
                    {searchProductFiltered?.count > 0 ? (
                        <div className={'w-full divide-y grid grid-cols-1'}>
                            {searchProductFiltered?.results?.map((card, id) => (
                                <div onClick={routerPushClear} key={id}>
                                    <SearchPanelCard card={card} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className={'p-5 flex flex-col items-center gap-y-3'}>
                            <div className={'relative w-14 h-14 md:w-20 md:h-20'}>
                                <ImageUI src={'/image/empty_cart.png'} priority={true} objectFitContain={true} />
                            </div>
                            <p className={'md:text-lg text-currentBlue font-notoSans '}>{t('notFound')}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchPanel;
