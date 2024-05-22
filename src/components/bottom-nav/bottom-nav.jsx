import { RxHamburgerMenu } from "react-icons/rx";
import { IoGridOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { Rubik } from "next/font/google";
import { useState } from "react";
import Link from "next/link";

const rubik = Rubik( {
  subsets:['cyrillic', 'latin'],
  weight: ['500'],
  variable: '--font-rubik'
})
const BottomNav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const openMenu = () => {
    setIsOpenMenu(prevstate => !prevstate)
  }
  return (
    <>
    <div className={`bg-currentBlue md:hidden  text-white  z-20 fixed bottom-0 left-0 w-full  ${isOpenMenu? " ": "overflow-hidden"} `}>
      <div className="w-full border-t border-[#243957] pb-2 pt-3.5 relative z-20">
      <div className="container flex items-center justify-center gap-20">
        <div className='flex flex-col items-center gap-1 text-[11px] font-notoSansDisplay cursor-pointer' onClick={openMenu}>
          <RxHamburgerMenu className="w-5 h-5 "/>
          <span>Меню</span>
        </div>
        <Link href="/catalog" className='flex flex-col items-center gap-1 text-[11px] font-notoSansDisplay cursor-pointer'>
          <IoGridOutline className="w-5 h-5 "/>
          <span>Каталог</span>
        </Link>
        <Link href="/contact" className='flex flex-col items-center gap-1 text-[11px] font-notoSansDisplay cursor-pointer'>
          <div className="relative">
            <LuShoppingCart className="w-5 h-5 "/>
            <span className=' rounded-full bg-white text-currentBlue absolute -top-1 -right-1.5 text-[8px] font-bold px-1 font-rubik'>0</span>        
          </div>
          <span>Корзина</span>
        </Link>
      </div>
      </div>
      <div className={`w-full absolute bottom-full bg-currentBlue duration-500 ${isOpenMenu ? '' : 'h-0 overflow-hidden'}  z-10 text-white flex flex-col items-center py-5 rounded-t-lg`}>
          <p>;efkkwef;kwe</p>
          <p>;efkkwef;kwe</p>
          <p>;efkkwef;kwe</p>
          <p>;efkkwef;kwe</p>
          <p>;efkkwef;kwe</p>
      </div>
    </div>
    </>

  )
}

export default BottomNav