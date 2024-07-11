import React , {useRef} from 'react'
import { PiShoppingCartSimple } from "react-icons/pi";
import { SlPhone } from "react-icons/sl";
import { DropdownUI, ImageUI } from '..'
import Link from 'next/link';
import {useDispatch, useSelector} from "react-redux";
import {SearchPanel} from "@/components";
import {langSelect} from "@/helper";
import {useTranslation} from "react-i18next";
import {changleCatalogQuery, changleQuery} from "@/slice/queryParams";
import {useRouter} from "next/router";
import {motion} from 'framer-motion'
const listLang = [
  {
    title: 'Русский',
    value:'ru',
    id: 0
  },
  {
    title: "O'zbek",
    value:'uz',
    id: 1
  },
]
const Navbar = ({catalog, contact}) => {
  const {allCount} = useSelector(state => state.basketSlice)
  const {t, i18n} = useTranslation()
  const  dispatch = useDispatch()
  const router = useRouter()
  const catalogRef = useRef();
  const selectCatalog = (link) => {
    dispatch(changleCatalogQuery(link))
    dispatch(changleQuery(link?.slug));
    router.push('/catalog')
  }
  return (
    <>
      <nav className=' font-notoSansDisplay navbar py-4 md:py-5 border-b border-[#CECFDB] bg-white relative z-[100]'>
      <div className="container">
        <div className='flex items-center flex-wrap gap-y-4 md:flex-nowrap justify-between'>
          <div className='max-md:w-full flex items-center justify-between'>
            <motion.a whileTap={{scale:0.99, opacity:0.7}} href={`tel:${contact?.phone1}`} className='block md:hidden w-[50px]'>
              <SlPhone className=' text-currentBlue w-5 h-5'/>
            </motion.a>
            <Link href="/" className='relative block h-14 w-[120px] md:h-16 '>
              <ImageUI src={'/image/beaminguniverse-logo.png'} alt={'Butrate Logo'} objectFitContain/>
            </Link>
            <div className={'md:hidden'}>
              <DropdownUI list={listLang}/>
            </div>
          </div>
          <div className={'md:mx-5 lg:mx-10 xl:mx-12 w-full '}>
            <SearchPanel/>
          </div>
          <div className='hidden md:flex items-center gap-5 xl:gap-10 text-currentBlue'>
            <motion.div whileTap={{scale:0.99, opacity:0.7}}>
            <Link href={'/basket'} className='flex flex-col items-center '>
              <div className='relative '>
                <PiShoppingCartSimple className=' text-currentBlue w-6 h-6 lg:w-7 lg:h-7'/>
                <span className='lg:px-1.5 px-1 py-0.5 rounded-full bg-currentBlue text-white absolute -top-2 -right-1.5 text-[7px] lg:text-[9px]'>{allCount}</span>
              </div>
              <span className=' text-sm '>{t('navbar.basket')}</span>
            </Link>
            </motion.div>
            <motion.a whileTap={{scale:0.99, opacity:0.7}} href={`tel:${contact?.phone1}`} className='flex flex-col items-center '>
              <div className='relative '>
                <SlPhone className=' text-currentBlue w-6 h-6 lg:w-7 lg:h-7'/>
              </div>
              <span className=' text-sm '>{t('navbar.callPhone')}</span>
            </motion.a>
          </div>
        </div>
      </div>
      </nav>
      <div className='max-md:hidden py-4 lg:py-5 bg-white font-notoSansDisplay font-semibold text-sm border-b'>
        <div className="container navbar-list">
          <div className={' w-full overflow-x-hidden'}>
            <div  ref={catalogRef} className={`w-[${catalogRef?.current?.scrollWidth}px] flex gap-3 overflow-x-scroll`}>
              {
                catalog?.map(link => (
                    <div key={link?.id}  className={'shrink-0 px-1 cursor-pointer'} onClick={() => (selectCatalog(link))} >{langSelect(i18n.language , link?.title_ru , link?.title_uz )}</div>
                ))
              }
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar