import { ButtonUI, ImageUI } from ".."
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import {langSelect} from "@/helper";
import {useDispatch, useSelector} from "react-redux";
import {useMemo} from "react";
import {changleBasket} from "@/slice/basket";
import {Counter, InfoProductUI} from "@/components";
import {useTranslation} from "react-i18next";
import {useRouter} from "next/router";
import  {changleLastProductList} from "@/slice/lastProduct";
import { FaArrowRightToBracket } from "react-icons/fa6";
import i18next from "i18next";
import {motion} from "framer-motion";

const ProductCard = ({product , isCatalog = false , isCardInner = false}) => {
  const dispatch = useDispatch()
  const {isRow} = useSelector(state =>  state.cardPosition)
  const {basket ,allProductItemCount} = useSelector(state => state.basketSlice)
  const {lang } = useSelector(state => state.langSlice)
  const {t} = useTranslation()
  const router = useRouter()
   const handleBasket  =(product) => {
      dispatch(changleBasket(product))
  }

  const addLastSeeProduct = () => {
    dispatch(changleLastProductList(product))
    router.push(isCardInner ? `${product?.slug}` : `catalog/${product?.slug}`);
  }

  const CountActiveProductBasket = useMemo(() => {
    const findProduct = basket?.find((item) => item?.id === product?.id);
    return findProduct?.count
  } ,[allProductItemCount])
  return (
    <div className={`${isRow && isCatalog ? 'grid grid-cols-7 md:grid-cols-11 gap-x-3 justify-end p-2 md:p-3 lg:p-4 gap-y-3' :'flex-col px-2 py-3 lg:px-2.5 lg:py-4 gap-3 lg:gap-4 hover:rounded-b-none '} w-full  bg-white rounded-lg h-full shadow-md -z-[1]  flex   relative group duration-200 hover:shadow-lg hover:max-md:rounded-b-lg`}>
      <div className={`${isRow && isCatalog ? 'w-full  col-span-3 md:col-span-4 aspect-[3/4] md:aspect-[16/8] h-full' : 'w-full aspect-square'}  relative rounded-lg overflow-hidden`}>
        <ImageUI src={product?.index_image?.image} alt={langSelect(i18next.language , product?.title_ru , product?.title_uz)}/>
      </div>
        <div className={`${isRow && isCatalog ? '  col-span-4 space-y-3 md:col-span-4' : ''}`}>
            <h2 className=" line-clamp-2 xl:px-2 font-notoSansDisplay font-semibold text-black leading-[-1px] text-sm md:text-[16px] h-10 ">{langSelect(i18next.language , product?.title_ru , product?.title_uz)}</h2>
            {
                isRow && isCatalog &&
            <div className={'grid grid-cols-1 gap-y-1'}>
                {
                   product?.characteristic?.map(info => (
                    <InfoProductUI key={info?.id} title={langSelect(i18next.language , info?.key_ru , info?.key_uz)} card={true} text={langSelect(i18next.language , info?.value_ru , info?.value_uz)}/>
                   ))
                }
            </div>

            }
        </div>
      <div className={` ${isRow && isCatalog ? 'w-full col-span-7 md:col-span-3' : 'md:grid md:grid-rows-[0fr] !z-[999] md:group-hover:grid-rows-[1fr] md:absolute top-full duration-200 left-0 right-0 w-full md:bg-white px-2  xl:px-5 md:shadow-lg rounded-b-lg  '} `}>
        <div className="overflow-hidden ">
          <div className={`md:pb-4 grid ${isRow && isCatalog ? 'grid-cols-7 md:grid-cols-4 gap-x-3' : `grid-cols-4 gap-x-1 md:gap-x-2.5 ${CountActiveProductBasket && '!gap-x-2 lg:!gap-x-5 !grid-cols-3 md:!grid-cols-4' }`}  items-center  `}>
            <div className={` ${isRow && isCatalog ? ` flex flex-col items-center col-span-3 md:col-span-1 ${CountActiveProductBasket ? ' !col-span-2' :'col-span-1'} ` : `${CountActiveProductBasket ? 'col-span-2' :'col-span-1'} `}`}>
                {
                CountActiveProductBasket > 0  ?
                    <motion.div
                        initial={{ opacity: 0 , scale: 0.5}}
                        animate={{ opacity: 1 ,scale: 1 }}
                    >
                       <Counter count={CountActiveProductBasket} id={product?.id}  />
                    </motion.div>
                    :
                      <ButtonUI clasName={'col-span-1'} leftIcon={<PiShoppingCartSimpleLight className="text-sm md:text-base lg:text-xl"/>} onClick={() => handleBasket(product)} btnIcon={true}/>
                }

            </div>
              {
                  CountActiveProductBasket ?
                      <ButtonUI onClick={() => addLastSeeProduct(product)}  clasName={' col-span-1 md:col-span-2'} btnCard leftIcon={<FaArrowRightToBracket />} />
                      :
                      <ButtonUI onClick={() => addLastSeeProduct(product)} clasName={ `${isRow && isCatalog && `col-span-4 md:col-span-3 ${CountActiveProductBasket > 0 ? ' !col-span-2' :'col-span-3'}` }  ${CountActiveProductBasket > 0 ? ' md:col-span-2' :'col-span-3'} ` } btnCard text={t('btn.more')}/>
              }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard