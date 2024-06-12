import {ButtonUI, Counter} from "@/components";
import {useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changleBasket} from "@/slice/basket";
import {langSelect} from "@/helper";
import {useTranslation} from "react-i18next";


const InfoProductPrice = ({product}) => {
  const {basket, allProductItemCount} = useSelector(state => state.basketSlice)
  const dispatch = useDispatch()

  const selectProduct = (product) => {
    let sendProduct = null
    sendProduct = {
      title_ru: product?.title_ru,
      title_uz: product?.title_uz,
      id: product?.id,
      index_image: product?.images[0]
    }
    dispatch(changleBasket(sendProduct))
  }
    const {t, i18n} = useTranslation()
  const CountActiveProductBasket = useMemo(() => {
    const findProduct = basket?.find((item) => item?.id === product?.id);
    return findProduct?.count
  }, [allProductItemCount])
  return (
      <div className={'shadow-infoProductPrice py-[26px] px-[16px] bg-white rounded-lg'}>
        <div className={'flex  flex-col items-center justify-center gap-y-3'}>

                <div className={'flex flex-col gap-y-6 justify-center'}>
                  {
                    CountActiveProductBasket > 0 ?
                  <>
                  <div className={'flex flex-col lg:flex-row gap-5  items-center'}>
                    <h6 className={'font-semibold space-x-2'}>
                        {t('order.quantity')}
                    </h6>
                    <div>
                      <Counter count={CountActiveProductBasket} id={product?.id}/>
                    </div>
                  </div>

                  <ButtonUI text={t('btn.addToOrder')} href={'/basket'}
                            clasName={'text-center	flex items-center justify-center w-full'}/>
                  </>
                  :
                  <>
                    <h6 className={'text-xl md:text-2xl text-currentBlue font-oswald text-center'}>
                      {langSelect(i18n.language , product?.title_ru , product?.title_uz)}
                    </h6>
                    <ButtonUI onClick={() => selectProduct(product)} text={t('btn.addToBasket')}
                              clasName={'text-center	flex items-center justify-center w-full'}/>
                  </>
                  }
                </div>
        </div>
      </div>
  )
      ;
};

export default InfoProductPrice;