import {ImageUI, SectionTitle} from "@/components";
import {langSelect} from "@/helper";
import {useTranslation} from "react-i18next";

const Advantages = ({title , subTitle ,advantagesList}) => {
    const {i18n} = useTranslation()
  return (
      <div className="flex flex-col md:flex-row items-center gap-5 md:gap-12 lg:gap-20 relative z-20">
        <div className="flex flex-col gap-2 md:gap-5 md:w-1/2">
          <SectionTitle  title={title} subTitle={subTitle}  />
        </div>
        <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 md:gap-x-[30px] gap-y-[10px] sm:gap-[10px] md:gap-y-[25px] ">
          {
            advantagesList?.map(item => (
                <div key={item?.id}
                    className="flex  bg-white gap-5 lg:gap-6 items-center shadow-md p-[10px_15px] xl:p-[25px_20px] rounded-lg">
                  <div className="relative w-10 h-10 shrink-0  ">
                    <ImageUI src={item?.image} alt={langSelect(i18n.language , item?.title_ru , item?.title_uz)}/>
                  </div>
                  <div className="flex flex-col gap-1 text-start">
                    <h3 className="text-currentBlue text-base md:text-lg font-notoSansDisplay font-semibold"> {langSelect(i18n.language , item?.title_ru , item?.title_uz)}</h3>
                    <p className="font-notoSans text-base ">{langSelect(i18n.language , item?.sub_title_ru , item?.sub_title_uz)} </p>
                  </div>
                </div>
            ))
          }
        </div>
      </div>
  );
};

export default Advantages;