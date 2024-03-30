
const SectionTitle = ({title, href, centerTrue, subTitle, subTitle2}) => {
  return (
    <div className={`flex justify-between ${subTitle && 'flex-col'}  ${centerTrue ? 'flex-col items-center' : ` ${subTitle ? '' : '"items-end"' }` }`}>
      <h2 className='section-title max-md:text-center'>{title}</h2>
      {
        subTitle &&
        <div className={`flex flex-col gap-2.5 md:gap-5 max-md:items-center pt-2.5 md:pt-5  ${centerTrue ? 'md:items-center': ' items-start' } `}>
          <p className="section-text max-md:text-center">{subTitle}</p>
          <p className="section-text max-md:text-center ">{subTitle2}</p>
        </div>
      }
      {
        href && 
        <a href={href} className=' font-notoSansDisplay font-semibold max-md:hidden block text-currentBlue'>Посмотреть товары</a>
      }
    </div>
  )
}

export default SectionTitle