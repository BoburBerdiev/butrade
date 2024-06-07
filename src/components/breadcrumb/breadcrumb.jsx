
import { FaChevronRight } from "react-icons/fa6";
import Link from "next/link";
import {useTranslation} from "react-i18next";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {changleCatalogQuery, changleQuery} from "@/slice/queryParams";
import {useDispatch, useSelector} from "react-redux";
import {langSelect} from "@/helper";
import i18next from "i18next";

const Breadcrumb = ({catalog, productInner}) => {
    const router = useRouter()
    const {lang} = useSelector(state => state.langSlice)
    const {catalogQuery} = useSelector(state => state.queryParams)
    const {t} = useTranslation()
    const {asPath} = useRouter()
    const dispatch = useDispatch()
    const [page, setpage] = useState(null)

    const selectPage = (pageAsPath) => {
        const pageSplit= pageAsPath.split('/')
        if (pageSplit[1] === 'basket') {
            setpage(t('navbar.basket'))
        }else  if (pageSplit[1] === 'contact') {
            setpage(t('navbar.contact'))
        }else  if (pageSplit[1] === 'about') {
            setpage(t('navbar.about'))
        }
    }
    useEffect(() => {
        selectPage(asPath)
    }, [])
    const selectCatalog = () => {
        dispatch(changleCatalogQuery(catalogQuery))
        dispatch(changleQuery(catalog));
        router.push('/catalog')
    }
    return (
        <div className={'w-full '}>
            <div className={'flex flex-wrap items-center text-sm lg:text-base gap-2 font-notoSansDisplay pb-5 md:pb-[30px]'}>
                <Link href={'/'} className={'text-currentGray'}>{t('navbar.home')}</Link>
                <FaChevronRight className={'w-3 h-3'}/>

                {
                    productInner ?
                    <div onClick={() => (selectCatalog())} className={'text-currentGray cursor-pointer'}>{langSelect(i18next.language, catalogQuery?.title_ru, catalogQuery?.title_uz)}</div>
                        :
                    <p  className={productInner ? 'text-currentGray' : 'text-currentBlue'}>{catalog ? langSelect(i18next.language , catalogQuery?.title_ru , catalogQuery?.title_uz) : page}</p>
                }

                {
                    productInner &&
                    <>
                    <FaChevronRight className={'w-3 h-3'}/>
                    <p className={'text-currentBlue cursor-pointer'}>{  productInner && productInner}</p>
                    </>
                }
            </div>
        </div>

    );
};

export default Breadcrumb;