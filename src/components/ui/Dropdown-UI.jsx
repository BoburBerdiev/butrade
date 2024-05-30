import { useState} from "react"
import { CiGlobe } from "react-icons/ci";
import {useDispatch, useSelector} from "react-redux";
import {changleLang} from "@/slice/lang";
import i18next from "i18next";
import {useTranslation} from "react-i18next";
import {langSelect} from "@/helper";

const DropdownUI = ({list  ,  onClick}) => {
  const  [dropdown , setDropdown] = useState(false)
    const dispatch = useDispatch()
  const {lang} = useSelector(state => state.langSlice)
    const {t} = useTranslation()
  const openDropdown  = () => {
    setDropdown(!dropdown)
  }
  const setLang = (item) => {
    dispatch(changleLang(item.value))
    i18next.changeLanguage(item.value)
    setDropdown(!dropdown)
  }


 
  return (
    <div className="relative font-notoSansDisplay text-sm z-[2000]">

            <button onClick={openDropdown} className=" text-currentBlue md:text-white flex items-center gap-1.5">
              <CiGlobe className="text-lg max-md:hidden"/>
              <span className={'text-sm'}>
                {
                  langSelect(lang ,t('lang.ru') ,  t('lang.uz'))
                }
              </span>

            </button>

            <div className={`grid ${dropdown ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} max-md:shadow-2xl  max-md:-ml-5 md:-mr-10 absolute left-0 rounded-b top-[30px] bg-white md:bg-currentBlue z-[101] border-light transition-all ease duration-500`}>
             <div className=" text-base overflow-hidden">
              <div className=" px-3 py-1 flex flex-col gap-2">
                {
                  list?.map(item => (
                    <div className="text-[13px] cursor-pointer " key={item.id} onClick={() => setLang(item)}>
                      {
                        item.title
                      }
                    </div>
                  ))    
                }
              </div>
            </div>
          </div>
          
        </div>
  )
}

export default DropdownUI