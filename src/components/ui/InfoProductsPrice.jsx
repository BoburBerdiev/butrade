import {ButtonUI, OrderCard} from "@/components";
import orderCard from "@/components/order-card/order-card";
import {langSelect} from "@/helper";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";


const InfoProductPrice = ({basket, allProductItemCount}) => {
    const {lang } = useSelector(state => state.langSlice)
    const {t} = useTranslation()
  return (
      <div className={'shadow-infoProductPrice lg:py-[30px] py-4 px-3 lg:px-[18px] bg-white rounded-lg'}>

          <div className={'w-full mb-5'}>
            <div className={'flex flex-col gap-2.5 overflow-y-scroll max-h-[120px]'}>
              {
                  basket && basket?.map(card => (
                      <motion.div
                      initial={{scale:0, opacity:0}}
                      animate={{scale:1, opacity:1}}
                      exit={{scale:0, opacity:0}}

                      >
                           <OrderCard orderCard key={card?.id} id={card?.id} image={card?.index_image?.image} title={langSelect(lang, card?.title_ru , card?.title_uz)}
                                  saleText={card?.count} count={card?.count}/>
                      </motion.div>
                  ))
              }
            </div>
          </div>
          {
              basket ?
            <div className={'w-full flex justify-center'}>
              <div className={'flex items-center gap-2 md:gap-5'}>
                <h3 className={'font-notoSans font-semibold text-lg lg:text-xl'}>{t('order.total')}</h3>
                  <h4 className={'text-sm lg:text-base'}>
                      <span>{basket.length}</span>
                      <span> {t('order.products')}
                      </span>
                  </h4>
              </div>
            </div>


                  :
          <div className={'flex  flex-col items-center justify-center gap-y-3'}>
        <div className={'flex flex-col lg:flex-row gap-5  items-center'}>
          <h6 className={'font-semibold space-x-2'}>

              <span> {t('order.quantity')}
              </span>
            <span>
              {allProductItemCount}
            </span>
              <span>
                  {t('order.count')}
              </span>
          </h6>
        </div>
        <div className={'space-y-2.5'}>
          <ButtonUI text={t('btn.sendRequest')} href={'/order'}
                    clasName={'text-center	flex items-center justify-center w-full'}/>
        </div>
      </div>
          }

</div>
)
  ;
};

export default InfoProductPrice;