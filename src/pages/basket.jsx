import {Breadcrumb, ImageUI, InfoProductsPrice, OrderCard, SectionTitle, SectionUI} from "@/components";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

const Basket = () => {

const {basket ,allProductItemCount} =  useSelector(state =>state.basketSlice)
    const {t} = useTranslation()
    return (
        <div>
            <SectionUI>
                <Breadcrumb pageName={'Корзина'}/>
                <div className={'pb-4 md:pb-6 lg:pb-[30px]'}>
                   <SectionTitle title={t('basket.title')}/>
                </div>
              {
                basket?.length > 0 ?
                     <div className={'grid grid-cols-1 sm:grid-cols-8 gap-5'}>


                        <div
                            className={'rounded-[9px] sm:col-span-6 p-4 lg:p-[30px] flex flex-col gap-y-5 max-h-[300px] overflow-y-scroll shadow-[0px_4px_14px_0px_rgba(0,_0,_0,_0.12)]'}>
                          {
                            basket?.map(card => (
                                <OrderCard key={card?.id} id={card?.id} image={card?.index_image?.image} title={card?.title_ru}
                                           saleText={card?.saleText} count={card?.count} />
                            ))
                          }
                        </div>

                  <div className={'sm:col-span-2'}>
                    <InfoProductsPrice allProductItemCount={allProductItemCount}/>
                  </div>
                </div>
                    :
                    <div className={'flex flex-col items-center justify-center '}>
                        <div className={'relative w-[300px] aspect-square '}>
                            <ImageUI src={'/image/empty_cart.png'} objectFitContain={true}/>
                        </div>

                    </div>
              }
            </SectionUI>
            {
                basket?.length > 0 &&
                    <SectionUI>
                        <div className={'pb-[30px]'}>
                            <SectionTitle title={'Вам может понравиться'}/>
                        </div>
                        {/*<ProductSlider/>*/}
                    </SectionUI>

            }
        </div>
    );
};

export default Basket;