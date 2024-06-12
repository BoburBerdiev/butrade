import {
  Breadcrumb,
  InfoProductPrice,
  InfoProductUI,
  ProductSlider,
  SectionTitle,
  SectionUI,
  SwiperBanner
} from "@/components";
import {langSelect} from "@/helper";
import {useTranslation} from "react-i18next";
import SEO from "@/SEO/SEO";
import i18next from "i18next";

const Product = ({product}) => {
  const {t} = useTranslation()
  return (
      <>
        <SEO
            ogImage={'/image/logo.png'}
            title={langSelect(i18next.language, product?.title_ru , product?.title_uz)}
            description={langSelect(i18next.language , product?.text_ru , product?.text_uz)}
            canonical={'www.butrate.uz'}
            ogTitle={langSelect(i18next.language , product?.title_ru , product?.title_uz)}
            ogDescription={langSelect(i18next.language, product?.text_ru , product?.text_uz)}
            ogUrl={'www.butrate.uz'}
        />
        <SectionUI>
          <Breadcrumb catalog={product?.categories?.title_ru} productInner={langSelect(i18next.language , product?.title_ru , product?.title_uz)}/>
          <div className="pb-5 md:pb-[30px]">
            <SectionTitle title={langSelect(i18next.language , product?.title_ru , product?.title_uz)}/>
          </div>
          <div className={'grid grid-cols-1 md:grid-cols-11 gap-10 pb-5'}>
              <SwiperBanner styleSlider={'col-span-1 md:col-span-4 aspect-[3/2] order-1 rounded-lg overflow-hidden border '} productSlider list={product?.images}/>
            <div className={'col-span-1 md:col-span-4 order-3 md:order-2'}>
              <h2 className='font-medium md:text-lg mb-2.5 text-currentBlue'>{t('catalogInner.littleInfo')}</h2>
              <div className={'space-y-2'}>
                {
                  product?.characteristic?.map(item => (
                <InfoProductUI key={item?.id} title={langSelect(i18next.language , item?.key_ru , item?.key_uz)} text={langSelect(i18next.language, item?.value_ru , item?.value_uz)}/>
                  ))
                }
              </div>
            </div>
            <div className=" col-span-1 md:col-span-3 order-2 ">
              <InfoProductPrice product={product}  />
            </div>
          </div>

          <div>
            <h2 className='font-medium text-lg md:text-xl mb-2.5 text-currentBlue'>{t('catalogInner.aboutProduct')}</h2>
            <p>
              {langSelect(i18next.language , product?.text_ru , product?.text_uz)}
            </p>
          </div>
        </SectionUI>
        {
          product.length < 0 &&
        <SectionUI>
          <div className={'space-y-6 md:space-y-[30px]'}>
          <SectionTitle title={t('catalogInner.releatedProducts')}/>
          <ProductSlider isCardInner={true}  cards={product?.related_products}/>
          </div>
        </SectionUI>
        }
      </>
  );
};

export async function getServerSideProps({params}) {
  const { slug } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${slug}`);
  const product = await res.json();

  if (!product) {
    return {
      notFound: true,
    };
  }
  return {
    props: { product },
  };
}

export default Product;


