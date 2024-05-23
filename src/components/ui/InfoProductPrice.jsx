import {ButtonUI, Counter} from "@/components";
import {useMemo} from "react";
import {useSelector} from "react-redux";


const InfoProductPrice = ({product}) => {
  const {basket ,allProductItemCount} = useSelector(state => state.basketSlice)
  const CountActiveProductBasket = useMemo(() => {
    const findProduct = basket?.find((item) => item?.id ===product?.id);
    return findProduct?.count
  } ,[allProductItemCount  ])
  return (
      <div className={'shadow-infoProductPrice py-[30px] px-[18px] bg-white rounded-lg'}>


          <div className={'flex  flex-col items-center justify-center gap-y-3'}>
            {
                CountActiveProductBasket > 0?
                    <Counter count={CountActiveProductBasket} id={product?.id}  />
                    :
              <ButtonUI text={'покупать'}
                        clasName={'text-center	flex items-center justify-center w-full'}/>
            }
        <div className={'flex flex-col lg:flex-row gap-5  items-center'}>
          <h6 className={'font-semibold space-x-2'}>
                Количество:
          </h6>
          <div>
            {/*<Counter count={count} id={id}  />*/}
          </div>
        </div>
        <div className={'space-y-2.5'}>

          <ButtonUI text={'Подробнее'} href={'/basket'}
                    clasName={'text-center	flex items-center justify-center w-full'}/>
        </div>
      </div>

</div>
)
  ;
};

export default InfoProductPrice;