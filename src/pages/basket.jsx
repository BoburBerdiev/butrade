import {Breadcrumb, ImageUI, InfoProductsPrice, OrderCard, ProductSlider, SectionTitle, SectionUI} from "@/components";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {langSelect} from "@/helper";
import {basketSEO} from "@/SEO/SEO.config";
import SEO from "@/SEO/SEO";
import {AnimatePresence} from 'framer-motion'
const Basket = () => {

const {basket ,allProductItemCount} =  useSelector(state =>state.basketSlice)
    const {t, i18n} = useTranslation()
    const { lastProductList} = useSelector(state => state.lastProductSlice)

    return (
        <div>
            <SEO
                ogImage={'/image/logo.png'}
                title={t('basket.title')}
                description={basketSEO[i18n.language].description}
                canonical={'www.butrate.uz'}
                ogTitle={t('basket.title')}
                ogDescription={basketSEO[i18n.language].description}
                ogUrl={'url?'}
            />
            <SectionUI >
                <Breadcrumb />
                <div className={'pb-4 md:pb-6 lg:pb-[30px]'}>
                   <SectionTitle title={t('basket.title')}/>
                </div>
              {
                basket?.length > 0 ?
                     <div className={'grid grid-cols-1 sm:grid-cols-8 gap-5'}>
                        <div
                            className={'rounded-[9px] sm:col-span-6 p-4 lg:p-[30px] flex flex-col gap-y-5 max-h-[300px] overflow-y-scroll shadow md:shadow-lg'}>
                          <AnimatePresence mode={"popLayout"}>

                          {
                            basket?.map(card => (
                                <OrderCard key={card?.id} id={card?.id} image={card?.index_image?.image} title={langSelect(i18n.language, card?.title_ru, card?.title_uz)}
                                           saleText={card?.saleText} count={card?.count} />
                            ))
                          }
                          </AnimatePresence>

                        </div>
                  <div className={'sm:col-span-2'}>
                    <InfoProductsPrice allProductItemCount={allProductItemCount}/>
                  </div>
                </div>
                    :
                    <div className={'flex flex-col items-center justify-center '}>
                        <div className={'relative w-[200px] aspect-square '}>
                            <ImageUI src={'/image/empty_cart.png'} objectFitContain={true}/>
                        </div>
                        <h3 className={'text-currentBlue font-notoSans font-semibold pt-5 text-xl md:text-2xl text-center'}>{t('basket.noProducts')}</h3>

                    </div>
              }
            </SectionUI>
            {
                lastProductList?.length > 0 &&
                <SectionUI className={'relative z-20'}>
                    <div className="pb-5 md:pb-[30px] ">
                        <SectionTitle title={t('catalog.viewedProducts')}/>
                    </div>
                    <ProductSlider cards={lastProductList}/>
                </SectionUI>
            }
        </div>
    );
};

export default Basket;