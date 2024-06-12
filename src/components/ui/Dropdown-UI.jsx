import {useEffect, useState} from "react"
import { CiGlobe } from "react-icons/ci";
import {useDispatch, useSelector} from "react-redux";
import {changleLang} from "@/slice/lang";
import i18next from "i18next";
import {useTranslation} from "react-i18next";
import {langSelect} from "@/helper";
import {AnimatePresence , motion} from 'framer-motion'

const DropdownUI = ({list }) => {
  const  [dropdown , setDropdown] = useState(false)
    const dispatch = useDispatch()
  const {lang} = useSelector(state => state.langSlice)
    const {t , i18n} = useTranslation()
  const openDropdown  = (e) => {
      e.stopPropagation()
    setDropdown(!dropdown)
  }
  const setLang = (item) => {
    dispatch(changleLang(item.value))
    i18next.changeLanguage(item.value)
    setDropdown(!dropdown)
  }
  useEffect(() => {
      const scrollDrop = () => {
          if (window.scrollY > 0) {
              setDropdown(false)
          }
      }

      window.addEventListener('scroll', scrollDrop)
      window.addEventListener('click', () => {
          setDropdown(false)
      })
      return () => {
          window.removeEventListener('scroll', scrollDrop)

      }
  }, [])

  return (
    <div className={`relative font-notoSansDisplay text-sm z-[1100]`}>

            <button onClick={(e) => openDropdown(e)} className=" text-currentBlue md:text-white flex items-center gap-1.5" >
              <CiGlobe className="text-lg max-md:hidden"/>
              <span className={'text-sm'}>
                {
                  langSelect( i18n.language ,t('lang.ru') ,  t('lang.uz'))
                }
              </span>

            </button>

        <AnimatePresence>
        {
            dropdown &&
            <motion.div initial={{   opacity: 0 }}
                         animate={{ opacity: 1}}
                         exit={{ opacity: 0}}
                        className={`grid grid-rows-[1fr] border-[0.1px] px-3 py-2 border-currentBlue max-md:shadow-xl  max-md:-ml-5 md:-mr-10 absolute left-0 rounded-b top-[30px] bg-white text-base md:bg-currentBlue z-[101] border-light transition-all ease duration-500`}>
                        {
                            list?.map(item => (
                                <div className="text-[13px] cursor-pointer " key={item?.id} onClick={() => setLang(item)}>
                                    {
                                        item.title
                                    }
                                </div>
                            ))
                        }
            </motion.div>
        }
        </AnimatePresence>
          
        </div>
  )
}

export default DropdownUI