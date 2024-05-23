import {ImageUI} from "@/components";
import {langSelect} from "@/helper";
import {useSelector} from "react-redux";

const Advantages = ({title , subTitle ,advantagesList}) => {
  const {lang} = useSelector(state => state.langSlice)
  return (
      <div className="flex flex-col md:flex-row items-center gap-5 md:gap-12 lg:gap-20 relative z-20">
        <div className="flex flex-col gap-2 md:gap-5 md:w-1/2">
          <h2 className="font-oswald text-center md:text-start font-medium text-2xl md:text-3xl lg:text-4xl text-currentBlue">{title}</h2>
          <p className="font-notoSans text-sm sm:text-base text-center md:text-start">{subTitle}</p>
        </div>
        <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 md:gap-x-[30px] gap-y-[10px] sm:gap-[10px] md:gap-y-[25px] ">
          {
            advantagesList?.map(item => (
                <div key={item?.id}
                    className="flex  bg-white gap-5 lg:gap-6 items-center justify-between shadow-md p-[10px_15px] xl:p-[25px_20px] rounded-lg">
                  <div className="relative w-10 h-10 shrink-0  ">
                    <ImageUI src={item?.image} alt={langSelect(lang , item?.title_ru , item?.title_uz)}/>
                  </div>
                  <div className="flex flex-col gap-1 text-start">
                    <h3 className="text-iconblue text-base md:text-lg font-notoSansDisplay font-semibold"> {langSelect(lang , item?.title_ru , item?.title_uz)}</h3>
                    <p className="font-notoSans text-sm md:text-base line-clamp-3">{langSelect(lang , item?.sub_title_ru , item?.sub_title_uz)} </p>
                  </div>
                </div>
            ))
          }
        </div>
      </div>
  );
};

export default Advantages;