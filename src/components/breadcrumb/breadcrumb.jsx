
import { FaChevronRight } from "react-icons/fa6";
import Link from "next/link";
import {useParams, usePathname} from "next/navigation";
import {useTranslation} from "react-i18next";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
const Breadcrumb = ({catalog}) => {
    const {t} = useTranslation()
    const {asPath} = useRouter()
    const [page, setpage] = useState(null)

    const selectPage = (pageAsPath) => {
        const pageSplit= pageAsPath.split('/')
        if (pageSplit[1] === 'basket') {
            setpage(t('navbar.basket'))
        }else  if (pageSplit[1] === 'contact') {
            setpage(t('navbar.contact'))
        }else  if (pageSplit[1] === 'about') {
            setpage(t('navbar.about'))
        }else  if (pageSplit[1] === 'catalog') {
            setpage(t('navbar.about'))
        }
    }
    useEffect(() => {
        selectPage(asPath)
    }, [])

    return (
        <div className={'w-full '}>
            <div className={'flex items-center gap-2 font-notoSansDisplay pb-5 md:pb-[30px]'}>
                <Link href={'/'} className={'text-currentGray'}>{t('navbar.home')}</Link>
                <FaChevronRight className={'w-3 h-3'}/>

                <Link href={asPath} className={'text-currentBlue'}>{catalog ? catalog  :  page && page}</Link>
            </div>
        </div>

    );
};

export default Breadcrumb;