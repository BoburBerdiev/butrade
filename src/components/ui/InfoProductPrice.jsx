import {FiMinus} from "react-icons/fi";
import {LuPlus} from "react-icons/lu";
import {ButtonUI} from "@/components";

const InfoProductPrice = () => {
  return (
      <div className={'shadow-infoProductPrice py-[30px] px-[18px]'}>
        <div className={'flex  flex-col items-center justify-center gap-y-6'}>
          <div className={'flex flex-col lg:flex-row gap-5  items-center'}>
            <h6 className={'font-semibold'}>
              Количество:
            </h6>
            <div className={'flex items-center gap-x-2 '}>
              <button
                  className={'p-1 rounded-full bg-[#F5F5F5] text-currentBlue hover:text-white hover:bg-currentBlue'}>
                <FiMinus/>
              </button>
              <p className={'font-semibold'}>
                20
              </p>
              <button
                  className={'p-1 rounded-full bg-[#F5F5F5] text-currentBlue hover:text-white hover:bg-currentBlue'}>
                <LuPlus/>
              </button>
            </div>
          </div>
          <div className={'space-y-2.5'}>
            <ButtonUI text={'Подробнее'} href={'/about'} clasName={'text-center	flex items-center justify-center w-full'}/>
       </div>
        </div>
      </div>
  );
};

export default InfoProductPrice;