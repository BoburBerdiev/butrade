import {
  Advantages,
  ButtonUI,
  CategoryBtn,
  ImageUI,
  SectionTitle,
  SectionUI, SwiperBanner
} from "@/components";
import axios from "axios";
import {useSelector} from "react-redux";
import {langSelect} from "@/helper";
import {useTranslation} from "react-i18next";
import SEO from "@/SEO/SEO";
import {indexSEO} from "@/SEO/SEO.config";
import dynamic  from "next/dynamic";

const FigureAnimation = dynamic(() => import('@/components/figure-animation/figure-animation'), {
  ssr: false
})
const ProductSlider = dynamic(() => import('@/components/products-slider/products-slider'), {
  ssr: false
})
const PartnorsSlider = dynamic(() => import('@/components/partnors-slider/partnors-slider'), {
  ssr: false
})
export default function Home({banners , advantage_title, partners , advantages ,about , catalog ,mostOrderProduct}) {
  const { lastProductList} = useSelector(state => state.lastProductSlice)
  const {t, i18n} = useTranslation()
  return (
      <>
        <SEO
            ogImage={'/image/logo.png'}
            title={indexSEO[i18n.language].title}
            description={indexSEO[i18n.language].description}
            canonical={'www.butrate.uz'}
            ogTitle={indexSEO[i18n.language].title}
            ogDescription={indexSEO[i18n.language].description}
            ogUrl={'www.butrate.uz'}
        />
        <header>
          <SwiperBanner list={banners} styleSlider={'w-full h-[35vh] md:h-[60vh] '} priority={100}/>
        </header>
        <div className="relative w-full overflow-x-hidden">
          <SectionUI className={'overflow-x-hidden'}
                     paddingStyle={'pt-[30px] pb-5  lg:pt-[100px] lg:pb-[50px]'}>
            <div className="grid md:grid-cols-8">
              <div className="md:col-span-5 flex flex-col gap-5 md:gap-[30px]">

                <SectionTitle title={langSelect(i18n.language, about?.title_ru, about?.title_uz)}
                              subTitle={langSelect(i18n.language, about?.text_ru, about?.text_uz)}
                />
                <ButtonUI text={t('btn.more')} href={'/about'} clasName={'self-center	md:self-start'}/>
              </div>
            </div>
            <div className="absolute top-10 right-4 z-10 w-[250px] xl:w-[350px] aspect-square xl:top-0 max-md:hidden ">
              <ImageUI src={about?.image} alt={langSelect(i18n.language, about?.title_ru, about?.title_uz)}
                       objectFitContain={true}/>
            </div>
          </SectionUI>
          <div
              className="w-[400px] h-[400px] xl:w-[600px] xl:h-[600px] xl:top-[-100px] xl:right-[-140px] max-lg:hidden absolute top-[-50px] right-[-50px] z-[5] flex items-center justify-center">
            <div className="w-full h-full">
              <FigureAnimation variableID={1} duration={15} radioCircleLg={200} radioCircleXl={300}/>
            </div>
            <div className="w-[300px] h-[300px] xl:w-[420px] xl:h-[420px] absolute z-0">
              <FigureAnimation variableID={2} duration={12} radioCircleLg={150} radioCircleXl={210}/>
            </div>
          </div>
          <SectionUI>
            <SectionTitle title={t('index.allCategory')}/>
            <div className="pt-5 md:pt-[30px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 ">
              {
                catalog?.map((card) => (
                    <CategoryBtn card={card} key={card?.id}/>
                ))
              }
            </div>
          </SectionUI>

        </div>
        {
            mostOrderProduct?.length > 0 &&
            <SectionUI className={'z-20'}>
              <div className="pb-5 md:pb-[30px]">
                <SectionTitle title={t('index.popularProducts.title')}/>
              </div>
              <ProductSlider cards={mostOrderProduct}/>
            </SectionUI>
        }
        {
            lastProductList?.length > 0 &&
            <SectionUI className={'relative z-20'}>
              <div className="pb-5 md:pb-[30px] ">
                <SectionTitle title={t('catalog.viewedProducts')}/>
              </div>
              <ProductSlider cards={lastProductList}/>
            </SectionUI>
        }

        <div className={'relative z-10'}>

          <SectionUI paddingStyle={'py-5 lg:pb-[50px] lg:pt-[100px]'} className={'z-10'}>
            <div className={'relative z-10'}>
              <Advantages title={langSelect(i18n.language, advantage_title?.title_ru, advantage_title?.title_uz)}
                          subTitle={langSelect(i18n.language, advantage_title?.title_ru, advantage_title?.title_uz)}
                          advantagesList={advantages}/>
            </div>
          </SectionUI>
          <div
              className="w-[400px] h-[400px] xl:w-[600px] xl:h-[600px] max-lg:hidden absolute top-[-60px] left-[-20px] z-[5] flex items-center justify-center">
            <div className="w-full h-full">
              <FigureAnimation variableID={1} duration={15} radioCircleLg={200} radioCircleXl={300}/>
            </div>
            <div className="w-[300px] h-[300px] xl:w-[420px] xl:h-[420px] absolute z-0">
              <FigureAnimation variableID={2} duration={12} radioCircleLg={150} radioCircleXl={210}/>
            </div>
          </div>
        </div>

        <SectionUI paddingStyle={'pt-5 pb-[50px] lg:pt-[50px] lg:pb-[100px] z-50'}>
          <div className="pb-5 md:pb-[30px]">
            <SectionTitle title={langSelect(i18n.language, partners?.title_ru, partners?.title_uz)}/>
          </div>
          <PartnorsSlider partnors={partners?.partner_images}/>
        </SectionUI>
      </>
  );
}


export async function getServerSideProps({res}) {
  res.setHeader(
      "Cache-Control",
      "public, s-maxage=10, stale-while-revalidate=59"
  );
  // Fetch data from external API
  const [banners ,advantage_title ,advantages ,partners ,about, catalog, mostOrderProduct  ] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about/banner/`),
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about/advantage-title/`),
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about/advantages/`),
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about/partners/`),
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about/index-about-section/`),
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories/`),
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/all-orders-list`)
  ]);
  return {
    props: {
      banners: banners?.data,
      advantage_title: advantage_title?.data,
      partners: partners?.data,
      advantages: advantages?.data,
      about: about?.data,
      catalog: catalog?.data,
      mostOrderProduct: mostOrderProduct?.data
    },
  };
}

