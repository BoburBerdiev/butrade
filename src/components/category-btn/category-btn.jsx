import React from 'react'
import { ImageUI } from '..'
import {useDispatch, useSelector} from "react-redux";
import {langSelect} from "@/helper";
import {changleCatalogQuery, changleQuery} from "@/slice/queryParams";
import {useRouter} from "next/router";
import i18next from "i18next";

const CategoryBtn = ({ card }) => {
  const {lang} = useSelector(state => state.langSlice)
  const dispatch = useDispatch()
  const router = useRouter()

  const selectCatalog = (catalog) => {
    dispatch(changleCatalogQuery(catalog))
    dispatch(changleQuery(catalog?.title_ru));
    router.push('/catalog')
  }


  return (
    <div  className='flex items-center relative lg:gap-4 gap-2 overflow-hidden px-2.5 py-3 group md:px-5 md:py-4 xl:py-[22px] lg:px-7 xl:px-10 bg-white rounded-lg shadow md:shadow-categoryCard cursor-pointer' onClick={() => (selectCatalog(card))} >
      <div className=' aspect-square relative z-10 w-7 lg:w-10 xl:w-11 shrink-0 group-hover:bg-white duration-300 group-hover:p-4 p-0 rounded-full'>

        <ImageUI src={card?.image} alt={langSelect(i18next.language , card?.title_ru , card?.title_uz)} objectFitContain/>
      </div>
      <h3 className=' font-notoSans relative z-10 group-hover:text-white duration-300 leading-4 line-clamp-2 text-sm lg:text-base lg:leading-[22px]'>{langSelect(i18next.language , card?.title_ru , card?.title_uz)}</h3>
      <div className='w-3 aspect-square rounded-full bg-[#0A1149B3] shrink-0 absolute top-[26px] left-[22px] md:w-4 md:top-9 md:left-8 lg:w-5 lg:top-10 lg:left-11 xl:top-11 xl:left-14 group-hover:scale-[30] duration-300 z-[5]'></div>
    </div>
  )
}
 
export default CategoryBtn