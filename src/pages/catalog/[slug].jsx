import {
  Breadcrumb,
  InfoProductPrice,
  InfoProductUI,
  SectionTitle,
  SectionUI,
  SwiperBanner,
} from "@/components";
import { langSelect } from "@/helper";
import { useTranslation } from "react-i18next";
import SEO from "@/SEO/SEO";
import axios from "axios";
import {useQuery} from "react-query";
import apiService from "@/service/axois";
import {useEffect} from "react";
import dynamic  from "next/dynamic";

const ProductSlider =  dynamic(() => import('@/components/products-slider/products-slider'), {
  ssr: false
})


const Product = ({ product }) => {
  const { t, i18n } = useTranslation();
  const {
    data: relatedProduct,
    refetch: relatedProductRefetch,
    isSuccess: relatedProductSuccess,
  } = useQuery(
      "filter",
      () =>
          apiService.getData(
              `products-filter?category=${product?.categories?.title_ru}&page_size=7`
          ),
      {
        enabled: false,
      }
  );

  useEffect(() => {
    relatedProductRefetch()
  } , [product])




  return (
      <>
        <SEO
            ogImage={'/image/logo.png'}
            title={langSelect(i18n.language, product?.title_ru, product?.title_uz)}
            description={langSelect(i18n.language, product?.text_ru, product?.text_uz)}
            canonical={'www.butrate.uz'}
            ogTitle={langSelect(i18n.language, product?.title_ru, product?.title_uz)}
            ogDescription={langSelect(i18n.language, product?.text_ru, product?.text_uz)}
            ogUrl={'www.butrate.uz'}
        />
        <SectionUI>
          <Breadcrumb
              catalog={product?.categories?.title_ru}
              productInner={langSelect(i18n.language, product?.title_ru, product?.title_uz)}
          />
          <div className="pb-5 md:pb-[30px]">
            <SectionTitle title={langSelect(i18n.language, product?.title_ru, product?.title_uz)} />
          </div>
          <div className={'grid grid-cols-1 md:grid-cols-11 gap-10 pb-5'}>
            <SwiperBanner
                styleSlider={'col-span-1 md:col-span-4 aspect-[3/2] order-1 rounded-lg overflow-hidden border'}
                productSlider
                list={product?.images}
            />
            <div className={'col-span-1 md:col-span-4 order-3 md:order-2'}>
              <h2 className="font-medium md:text-lg mb-2.5 text-currentBlue">{t('catalogInner.littleInfo')}</h2>
              <div className={'space-y-2'}>
                {product?.characteristic?.map((item) => (
                    <InfoProductUI
                        key={item?.id}
                        title={langSelect(i18n.language, item?.key_ru, item?.key_uz)}
                        text={langSelect(i18n.language, item?.value_ru, item?.value_uz)}
                    />
                ))}
              </div>
            </div>
            <div className="col-span-1 md:col-span-3 order-2">
              <InfoProductPrice product={product} />
            </div>
          </div>

          <div>
            <h2 className="font-medium text-lg md:text-xl mb-2.5 text-currentBlue">
              {t('catalogInner.aboutProduct')}
            </h2>
            <p>{langSelect(i18n.language, product?.text_ru, product?.text_uz)}</p>
          </div>
        </SectionUI>
        {  relatedProduct?.count > 0 && (
            <SectionUI>
              <div className={'space-y-6 md:space-y-[30px]'}>
                <SectionTitle title={t('catalogInner.relatedProducts')} />
                <ProductSlider isCardInner={true} cards={relatedProduct?.results} />
              </div>
            </SectionUI>
        )}
      </>
  );
};


export async function getServerSideProps({ params, res }) {
  const { slug } = params;

  // Set Cache-Control header for caching
  res.setHeader(
      "Cache-Control",
      "public, s-maxage=10, stale-while-revalidate=59"
  );

  try {
    // Fetch data from the API
    const apiRes = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/${slug}`);

    // Check if data was fetched successfully
    if (!apiRes.data) {
      return {
        notFound: true,
      };
    }

    // Return fetched data as props
    return {
      props: {
        product: apiRes.data,
      },
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return {
      notFound: true,
    };
  }
}


export default Product;
