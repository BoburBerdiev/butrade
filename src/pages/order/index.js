import {
  ButtonUI,
  InfoProductsPrice,
  SectionTitle,
  SectionUI,
} from "@/components";
import InputUI from "@/components/ui/Input-UI";
import {useSelector} from "react-redux";

const Index = () => {
  const {basket ,allProductItemCount} =  useSelector(state =>state.basketSlice)

  return (
      <SectionUI className={'min-h-[80vh]'}>
        <div className="pb-5 md:pb-[30px]">
          <SectionTitle title={'Запрос стоимости'}/>
        </div>
        <div className={'grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-10 pb-5'}>
          <div className={'col-span-2 grid grid-cols-2 gap-5 '}>
            <div className={'col-span-1'}>
              <InputUI placeholder={'Ваше имя'} />
            </div>
            <div className={'col-span-1'}>
            <InputUI placeholder={'Номер телефона'} />
            </div>
            <div className={'col-span-2'}>
              <InputUI placeholder={'Адрес'} />
            </div>
            <div className={'col-span-2 flex items-center gap-x-7'}>
              <ButtonUI text={'Отправить запрос'} href={'/about'} />
              <ButtonUI text={'Назад'} href={'/about'} />

            </div>
          </div>

          <div className=" col-span-1 ">
            <InfoProductsPrice basket={basket} allProductItemCount={allProductItemCount} />
          </div>
        </div>
      </SectionUI>
  );
};

export default Index;