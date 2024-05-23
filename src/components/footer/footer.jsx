import React from 'react'
import { ImageUI } from '..'
import {useTranslation} from "react-i18next";

const Footer = () => {
    const {t} = useTranslation()
  return (
    <div className=' py-[18px] bg-currentBlue text-white lg:pb-4'>
      <div className='container flex max-md:flex-col items-center justify-between gap-y-2.5'>
      <div className='flex items-center gap-1'>
        <p className='text-xs font-notoSans text-[#CECFDB]'> {t('footer.siteCreated')}</p>
        <a href="https://abduganiev.uz" target='_blank' className='flex group items-center gap-2 relative w-[88px] h-6 overflow-hidden'>
          <div className='max-md:hidden w-6 h-6 object-cover relative duration-200 group-hover:scale-50 group-hover:opacity-0 group-hover:-translate-x-10'>
            <ImageUI src={'/image/abduganiev-A.png'} alt={"Abdug'aniev"} priority={true} quality={100} objectFitContain={true}/>
          </div>
          <div className='shrink-0  duration-300  md:opacity-0 md:translate-x-10 group-hover:translate-x-0 group-hover:opacity-100 md:absolute left-0  w-full h-full flex justify-center items-center'>
            <ImageUI src={'/image/abduganiev.png'} alt={"Abdug'aniev"}  priority={true} objectFitContain={true} quality={100} imageStyle={'object-contain'}/>
          </div>
        </a>
      </div>
      <p className='text-xs font-notoSans text-[#CECFDB]'>©{new Date().getFullYear()} <span>{t('footer.allrights')}</span> </p>
      </div>
    </div>
  )
}

export default Footer