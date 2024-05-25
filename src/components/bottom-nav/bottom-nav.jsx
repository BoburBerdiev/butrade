import { RxHamburgerMenu } from "react-icons/rx";
import { IoGridOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {langSelect} from "@/helper";
import {useRouter} from "next/router";
import {changleCatalogQuery, changleQuery} from "@/slice/queryParams";

const BottomNav = ({catagorys}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isOpenCatalog, setIsOpenCatalog] = useState(false)
  const {allCount} = useSelector(state => state.basketSlice)
  const {catalogQuery} = useSelector(state => state.queryParams)
  console.log(catalogQuery)
  const {lang} = useSelector(state => state.langSlice)
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const router = useRouter()


  const href = [
    {
      name: t('navbar.home'),
      link: '/',
      id: 0
    },
    {
      name: t('navbar.about'),
      link: '/about',
      id: 1
    },
    {
      name: t('navbar.contact'),
      link: '/contact',
      id: 2
    }
  ]
  const selectCatalog = (link) => {
    dispatch(changleCatalogQuery(link))
    dispatch(changleQuery(link?.title_ru));
    router.push('/catalog')
  }
  const openMenu = () => {
    setIsOpenCatalog(false)
    setIsOpenMenu(prevstate => !prevstate)
  }
  const openCatalog = () => {
    setIsOpenMenu(false)
    setIsOpenCatalog(prevstate => !prevstate)
  }
  useEffect(() => {
    setIsOpenCatalog(false)
  } , [catalogQuery])

  useEffect(() => {
    setIsOpenMenu(false)
  }, [router])
  return (
    <>
    <div className={`bg-currentBlue md:hidden  text-white  z-50 fixed bottom-0 left-0 w-full   `}>
      <div className="w-full border-t border-[#243957] pb-2 pt-3.5 relative z-50">
      <div className="container grid grid-cols-3 items-center  gap-20">
        <div className='flex flex-col items-center gap-1 text-[11px] font-notoSansDisplay cursor-pointer' onClick={openMenu}>
          <RxHamburgerMenu className="w-5 h-5 "/>
          <span>Меню</span>
        </div>
        <div className='flex flex-col items-center gap-1 text-[11px] font-notoSansDisplay cursor-pointer' onClick={openCatalog}>
          <IoGridOutline className="w-5 h-5 "/>
          <span>Каталог</span>
        </div>
        <Link href="/basket" className='flex flex-col items-center gap-1 text-[11px] font-notoSansDisplay cursor-pointer'>
          <div className="relative">
            <LuShoppingCart className="w-5 h-5 "/>
            <span className=' rounded-full bg-white text-currentBlue absolute -top-1 -right-1.5 text-[8px] font-bold px-1 font-rubik'>{allCount}</span>
          </div>
          <span>Корзина</span>
        </Link>
      </div>
      </div>
      <div className={`w-full absolute bottom-full bg-currentBlue duration-500 ${isOpenMenu ? '' : 'hidden '}  z-[9999] text-white flex flex-col items-center py-5 rounded-t-lg`}>
          <div className={'flex flex-col gap-2 items-center'}>
              {
                href?.map(item => (
                    <Link key={item.id} href={item.link}>{item.name}</Link>
                ))
              }
          </div>
      </div>
      <div className={`w-full absolute bottom-full bg-currentBlue duration-500 ${isOpenCatalog ? '' : 'hidden'}  z-[999999] text-white flex flex-col items-center py-5 rounded-t-lg`}>
        <div className={'grid grid-cols-2 gap-2 '}>
          {
            catagorys?.map(link => (

                <div key={link.id} className={'shrink-0 px-2 text-sm border border-white rounded py-2 '} onClick={() => (selectCatalog(link))} >{langSelect(lang , link?.title_ru , link?.title_uz )}</div>
            ))
          }
        </div>
      </div>
    </div>

    </>

  )
}

export default BottomNav