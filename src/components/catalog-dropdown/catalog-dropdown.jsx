import React, {useEffect, useState} from 'react';
import {ButtonUI} from "@/components";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoChevronDownOutline } from "react-icons/io5";
import {useDispatch, useSelector} from "react-redux";
import {changleFiter, changleQueryByOrder} from "@/slice/catalogFilter";
import {useTranslation} from "react-i18next";
const CatalogDropdown = () => {
    const [openDropdown , setOpenDropdown] = useState(false)
    const dispatch = useDispatch()
    const {t, i18n} = useTranslation()
    const {filter} = useSelector(state => state.catalogFilter)
    const lists = [
        {
            text: t('catalog.filterDropdownAll'),
            value: '',
            id: 0,
        },
        {
            text: t('catalog.filterDropdownAZ'),
            value: 'title_',
            id: 1
        },
        {
            text: t('catalog.filterDropdownZA'),
            value: '-title_',
            id: 2
        },
    ]

    useEffect(() => {
        dispatch(changleFiter(lists[0]))
        dispatch(changleQueryByOrder(lists[0].value))
    } , [])


    const handleyOrderBy = (list) =>  {
        if(list.value === '') {
            dispatch(changleFiter(list))
            dispatch(changleQueryByOrder(list.value))
        }else {
            let item = {...list}
            item.value = `${list.value}${i18n.language}`
            dispatch(changleFiter({...item}))
            dispatch(changleQueryByOrder(item.value))
        }
        setOpenDropdown(false)
    }

    // document.window.scrollY
    const openList = () => {
        setOpenDropdown(prevState => !prevState)
    }
    return (
        <>
          <ButtonUI type={'button'} leftIcon={<BiMenuAltLeft />} text={filter?.text} rightIcon={<IoChevronDownOutline />} onClick={openList}/>
            <div className={'relative z-50 '}>
                <div className={`absolute w-full top-3 z-50  grid duration-200     ${openDropdown ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div  className={' overflow-hidden w-full flex flex-col items-center'}>
                      <div className={'px-2 py-2 bg-white shadow-lg border mb-2 rounded-lg w-[90%] flex flex-col gap-2'}>
                          {
                              lists.map(list =>(
                                  <p  onClick={ () => handleyOrderBy(list) } className={`cursor-pointer font-notoSansDisplay px-2  rounded-lg  ${list.active ? "bg-currentBlue/20" : ""} `} key={list?.id}>{list.text}</p>
                              ))
                          }
                      </div>
                  </div>
                </div>
            </div>

        </>
    );
};

export default CatalogDropdown;