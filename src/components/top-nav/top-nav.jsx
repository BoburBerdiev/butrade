import Link from 'next/link'
import { LuMapPin } from "react-icons/lu";
import { DropdownUI } from '..'

const links = [
  {
    name: 'Главная',
    link: '/',
    id: 0
  },
  {
    name: 'О компании',
    link: '/about',
    id: 1
  },
  {
    name: 'Контакты',
    link: '/contact',
    id: 2
  },
]
const listLang = [
  {
    title: 'Русский',
    id: 0
  },
  {
    title: "O'zbek",
    id: 1
  },
]
const TopNav = () => {
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
            <p className='text-sm'>Ташкент, ул. Айбек, 38А</p>
          </div>
          <DropdownUI list={listLang}/>
        </div>
      </div>
    </div>
  )
}

export default TopNav