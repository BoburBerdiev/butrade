import Link from "next/link"
import {useTranslation} from "react-i18next";

const SectionTitle = ({title, href, centerTrue, subTitle}) => {
    const {t} = useTranslation()
  return (
    <div className={`flex justify-between max-md:flex-col max-md:items-center  ${subTitle && 'flex-col'} ${href && 'items-center'} ${centerTrue ? 'flex-col items-center' : ` ${subTitle ? '' : '"items-end"' }` }`}>
      <h2 className='section-title max-md:text-center'>{title}</h2>
      {
        subTitle &&
        <div className={`flex flex-col gap-2.5 md:gap-5 max-md:items-center pt-2.5 md:pt-5  ${centerTrue ? 'md:items-center': ' items-start' } `}>
          <p className="section-text max-md:text-center">{subTitle}</p>
        </div>
      }
      {
        href && 
        <Link href={href} className=' font-notoSansDisplay font-semibold max-md:hidden text-sm pt-2 lg:text-base block text-currentBlue'>{t('index.popularProducts.href')}</Link>
      }
    </div>
  ) 
}

export default SectionTitle