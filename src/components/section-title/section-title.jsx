
const SectionTitle = ({title, href, centerTrue, subTitle}) => {
  return (
    <div className={`flex justify-between  ${centerTrue ? 'flex items-center' : "items-end" }`}>
      <h2 className='section-title'>{title}</h2>
      {
        subTitle &&
        <div className="flex flex-col items-center m    ">
          <p className="font-notoSans text-xs md:font-notoSansDisplay text-black ">{subTitle}</p>
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