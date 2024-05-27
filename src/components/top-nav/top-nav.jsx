import Link from 'next/link'
import { LuMapPin } from "react-icons/lu";
import { DropdownUI } from '..'
import {useTranslation} from "react-i18next";
import {langSelect} from "@/helper";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const TopNav = ({contact}) => {
  const {t} = useTranslation()
  const {lang} = useSelector(state => state.langSlice)

  const links = [
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
    },
  ]
  const listLang = [
    {
      title: t('lang.ru'),
      value: 'ru',
      id: 0
    },
    {
      title: t('lang.uz'),
      value: 'uz',
      id: 1
    },
  ]
  return (
    <div className=' py-2.5 bg-currentBlue text-white font-notoSansDisplay max-md:hidden'>
      <div className="container flex items-center justify-between">
        <ul className='flex gap-3 '>
          {
            links?.map(link => (
              <li key={link.id} className='text-xs lg:text-sm ' >
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))
          }
        </ul>
        <div className='flex items-center gap-10'>
          <div className='flex items-center gap-1.5'>
            <LuMapPin className='text-lg' />
            <p className='text-sm '>{langSelect(lang , contact?.address_ru , contact?.address_uz)?.split(',')?.slice(-4)}</p>
          </div>
          <DropdownUI list={listLang}/>
        </div>
      </div>
    </div>
  )
}

export default TopNav