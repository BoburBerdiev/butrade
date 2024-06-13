import {ImageUI} from "@/components";
import {langSelect} from "@/helper";
import {useTranslation} from "react-i18next";
import  {changleLastProductList} from "@/slice/lastProduct";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import { FaChevronRight } from "react-icons/fa";
const SearchPanelCard = ({card}) => {
    const {i18n} = useTranslation()
    const dispatch = useDispatch()
    const router = useRouter()

    const addLastSeeProduct = () => {
        dispatch(changleLastProductList(card))
        router.push(`/catalog/${card?.slug}`);
    }

    return (
        <div className={'px-2 md:px-5  py-2 bg-white hover:bg-currentBlue/20 group duration-200 flex gap-4 cursor-pointer items-center justify-between'} onClick={() => addLastSeeProduct()}>
            <div className={'flex gap-4 items-center'}>
                  <div className={'relative w-10 h-10 bg-white rounded overflow-hidden'}>
                      <ImageUI src={card?.index_image?.image} alt={langSelect(i18n.language, card?.title_ru, card?.title_uz )} imgStyle={'object-cover'}/>
                  </div>
                  <div className={'flex gap-1 flex-col '}>
                      <p className={'font-notoSans text-currentBlue max-md:text-sm font-semibold'}>{langSelect(i18n.language, card?.title_ru, card?.title_uz )}</p>
                      <p className={'font-notoSans text-neutral-500 text-xs md:text-sm'}>{langSelect(i18n.language, card?.category?.title_ru, card?.category?.title_uz )}</p>
                  </div>
            </div>
            <FaChevronRight className={'text-xs lg:text-sm text-currentBlue group-hover:translate-x-2 duration-200'} />
        </div>
    );
};
export default SearchPanelCard;