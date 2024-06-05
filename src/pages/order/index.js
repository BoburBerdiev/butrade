import {
  ButtonUI, FormModal,
  InfoProductsPrice, ProductSlider,
  SectionTitle,
  SectionUI,
} from "@/components";
import {useRouter} from "next/router";
import InputUI from "@/components/ui/Input-UI";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import apiService from "@/service/axois";
import {useMutation} from "react-query";
import {useEffect} from "react";
import {clearOrder} from "@/slice/basket";

import {useState} from "react";
import { orderSEO} from "@/SEO/SEO.config";
import SEO from "@/SEO/SEO";

const Index = () => {
  const {basket ,allProductItemCount} =  useSelector(state =>state.basketSlice)
  const dispatch = useDispatch()
  const router = useRouter();
  const { lastProductList} = useSelector(state => state.lastProductSlice)

    const {
      register,
      handleSubmit , reset,

    } = useForm()
  const {t} = useTranslation()
  const [isOpenModal, setIsOpenModal] = useState(false)
const openModal = () => {
    setIsOpenModal(true)
}
  const {
    mutate: userPost,
    data: userPostData,
    isSuccess: userPostSuccess,
  } = useMutation(({url, data}) => apiService.postData(url, data));

  const onSubmit = (data) => {
    let userBasket = null
    let orderList =[]
    basket?.map(item => {
      orderList.push({product_id : item?.id , count: item?.count})

    })
    userBasket= {
      name: data?.name,
      phone: data?.phone,
      address: data?.address,
      order: orderList
    }


    if(orderList.length === basket.length) {
      userPost({url: "/product-orders/", data: userBasket});
      reset();
    }
  }
  useEffect(() => {
    if (userPostSuccess) {
      dispatch(clearOrder())
      setTimeout(() => {
        router.push("/catalog");
      }, 2000);
    }
  }, [userPostData]);


  return (
      <>
        <SEO
            ogImage={'/image/logo.png'}
            title={orderSEO[lang].title}
            description={orderSEO[lang].description}
            canonical={orderSEO[lang].canonical}
            ogTitle={orderSEO[lang].ogTitle}
            ogDescription={orderSEO[lang].ogDescription}
            ogUrl={'url?'}
        />
      <SectionUI className={''}>
        <div className="pb-5 md:pb-[30px]">
          <SectionTitle title={t('order.title')}/>
        </div>
        <div className={'grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-5 lg:gap-x-10 pb-5'}>
          <form onSubmit={handleSubmit(onSubmit)} className={'col-span-2 grid grid-cols-2 gap-5 '}>
            <div className={'col-span-1'}>
              <InputUI type={'text'} register={...register("name" )} placeholder={t('order.inputName')} />
            </div>
            <div className={'col-span-1'}>
            <InputUI  type={'number'} register={...register("phone")} placeholder={t('order.inputPhone')} />
            </div>
            <div className={'col-span-2'}>
              <InputUI type={'text'} register={...register("address")} placeholder={t('order.inputAddress')} />
            </div>
            <div className={'col-span-2 flex items-center gap-x-7 justify-start'}>
              <ButtonUI btnFill text={t('btn.sendRequest')} type={'submit'} onClick={openModal} />
              <ButtonUI text={t('btn.back')} href={'/basket'} />
            </div>
          </form>
          <div className=" col-span-1 ">
            <InfoProductsPrice basket={basket} allProductItemCount={allProductItemCount} />
          </div>
        </div>
      </SectionUI>
      <FormModal isOpen={isOpenModal} setIsOpen={setIsOpenModal}/>
        {
            lastProductList?.length > 0 &&
            <SectionUI className={'relative z-20'}>
              <div className="pb-5 md:pb-[30px] ">
                <SectionTitle title={t('catalog.viewedProducts')}/>
              </div>
              <ProductSlider cards={lastProductList}/>
            </SectionUI>
        }
      </>
  );
};

export default Index;