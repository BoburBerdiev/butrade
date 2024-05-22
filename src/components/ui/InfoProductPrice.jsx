import {FiMinus} from "react-icons/fi";
import {LuPlus} from "react-icons/lu";
import {ButtonUI, Counter, OrderCard} from "@/components";
const InfoProductPrice = ({basket}) => {
  return (
      <div className={'shadow-infoProductPrice py-[30px] px-[18px] bg-white rounded-lg'}>
          {
             basket ?
                 <div className={'w-full'}>
                  <div className={'flex flex-col gap-2.5 overflow-y-scroll max-h-[120px]'}>
                      {
                          basket?.map(card => (
                              <OrderCard orderCard key={card?.id} id={card?.id} image={card?.image} title={card?.title_ru}
                                         saleText={card?.count} count={card?.count}/>
                          ))
                      }
                  </div>
                     <div className={'flex w-full justify-center items-center pt-5 gap-5'}>
                        <p className={'font-notoSans font-semibold md:text-lg lg:text-xl'}>
                            Итого:
                        </p>
                         <p className={'font-notoSans text-sm'}>
                             <span>{basket.length} </span>
                             <span>
                                    товара
                             </span>
                         </p>
                     </div>
                 </div>

                  :
                  <div className={'flex  flex-col items-center justify-center gap-y-6'}>
          <div className={'flex flex-col lg:flex-row gap-5  items-center'}>
            <h6 className={'font-semibold'}>
              Количество:
            </h6>
            <Counter/>
          </div>
          <div className={'space-y-2.5'}>
            <ButtonUI text={'Подробнее'} href={'/order'} clasName={'text-center	flex items-center justify-center w-full'}/>
       </div>
        </div>

          }
      </div>
  );
};

export default InfoProductPrice;