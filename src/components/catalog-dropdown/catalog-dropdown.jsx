import React, {useState} from 'react';
import {ButtonUI} from "@/components";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoChevronDownOutline } from "react-icons/io5";
const CatalogDropdown = () => {
    const [openDropdown , setOpenDropdown] = useState(false)
    const lists = [
        {
            text: "По алфавиту",
            id: 0
        },
        {
            text: "По алфавиту",
            id: 0
        },
        {
            text: "По алфавиту",
            id: 0
        },
    ]
    const openList = () => {
        setOpenDropdown(prevState => !prevState)
    }
    return (
        <>
          <ButtonUI type={'button'} leftIcon={<BiMenuAltLeft />} text={'По алфавиту'} rightIcon={<IoChevronDownOutline />} onClick={openList}/>
            <div className={'relative z-50 '}>
                <div className={`absolute w-full top-3 z-50  grid duration-200     ${openDropdown ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div  className={' overflow-hidden w-full flex flex-col items-center'}>
                      <div className={'px-4 py-2 bg-white shadow-lg border mb-2 rounded-lg w-[90%] flex flex-col gap-2'}>
                          {
                              lists.map(list =>(
                                  <p className={'cursor-pointer font-notoSans'} key={list.id}>{list.text}</p>
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