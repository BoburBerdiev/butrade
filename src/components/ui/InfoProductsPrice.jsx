import {ButtonUI, OrderCard} from "@/components";

const InfoProductPrice = ({basket, allProductItemCount}) => {
  return (
      <div className={'shadow-infoProductPrice py-[30px] px-[18px] bg-white rounded-lg'}>

          <div className={'w-full mb-5'}>
            <div className={'flex flex-col gap-2.5 overflow-y-scroll max-h-[120px]'}>
              {
                  basket && basket?.map(card => (
                      <OrderCard orderCard key={card?.id} id={card?.id} image={card?.image} title={card?.title_ru}
                                 saleText={card?.count} count={card?.count}/>
                  ))
              }
            </div>
          </div>
          <div className={'flex  flex-col items-center justify-center gap-y-3'}>
        <div className={'flex flex-col lg:flex-row gap-5  items-center'}>
          <h6 className={'font-semibold space-x-2'}>
              <span>
                Количество:
              </span>
            <span>
              {allProductItemCount}
            </span>
          </h6>
        </div>
        <div className={'space-y-2.5'}>
          <ButtonUI text={'Подробнее'} href={'/order'}
                    clasName={'text-center	flex items-center justify-center w-full'}/>
        </div>
      </div>

</div>
)
  ;
};

export default InfoProductPrice;