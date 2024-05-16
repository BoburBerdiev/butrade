import { ButtonUI, ImageUI } from ".."
import { PiShoppingCartSimpleLight } from "react-icons/pi";

const ProductCard = ({title , image, link, alt}) => {
  return (
    <div className="w-full px-2 py-3 lg:px-2.5 lg:py-4 bg-white rounded-lg h-full shadow-md z-[5] hover:rounded-b-none flex flex-col gap-3 lg:gap-4 relative group duration-200 hover:shadow-lg">
      <div className="w-full aspect-square relative rounded-lg overflow-hidden">
        <ImageUI src={image} alt={alt}/>
      </div>
      <h2 className=" line-clamp-2 lg:px-2 font-notoSansDisplay font-semibold text-black leading-[-1px] text-sm md:text-[16px] h-10 ">{title}</h2>
      <div className="md:grid md:grid-rows-[0fr] z-10 md:group-hover:grid-rows-[1fr] md:absolute top-full duration-200 left-0 right-0 w-full md:bg-white px-2  lg:px-5 md:shadow-lg md:rounded-b-lg">
        <div className="overflow-hidden ">
          <div className="md:pb-4 grid grid-cols-4 gap-2.5 ">
          <ButtonUI clasName={'col-span-1'} leftIcon={<PiShoppingCartSimpleLight className=" text-sm md:text-base lg:text-xl"/>} btnIcon={true}/>
          <ButtonUI clasName={'col-span-3'} btnCard href={''} text={'Подробнее'}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard