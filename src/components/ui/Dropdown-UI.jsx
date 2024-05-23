import { useState} from "react"
import { CiGlobe } from "react-icons/ci";

const DropdownUI = ({list  ,  onClick}) => {
  const  [dropdown , setDropdown] = useState(false)
  const [langValue, setLangValue] = useState('Русский')

  const openDropdown  = () => {
    setDropdown(!dropdown)
  }
  const setLang = (item) => {
    setLangValue(item)
    setDropdown(!dropdown)
  }


 
  return (
    <div className="relative font-notoSansDisplay text-sm z-[2000]">

            <button onClick={openDropdown} className=" text-white flex items-center gap-1.5">
              <CiGlobe className="text-lg max-md:hidden"/>
              <span className={'text-sm'}>
                {langValue}
              </span>

            </button>

            <div className={`grid ${dropdown ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} -mr-10 absolute left-0 rounded-b top-[30px] bg-currentBlue z-[101] border-light transition-all ease duration-500`}>
             <div className=" text-base overflow-hidden">
              <div className=" px-3 py-1 flex flex-col gap-2">
                {
                  list?.map(item => (
                    <div className="text-[13px] " key={item.id} onClick={() => setLang(item.title)}>
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