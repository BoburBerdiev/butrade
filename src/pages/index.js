import {
  Advantages,
  ButtonUI,
  CategoryBtn,
  FigureAnimation,
  Header,
  ImageUI,
  PartnorsSlider,
  ProductSlider,
  SectionTitle,
  SectionUI
} from "@/components";
import axios from "axios";
import {useSelector} from "react-redux";
import {langSelect} from "@/helper";
import {useTranslation} from "react-i18next";


export default function Home({banners  , advantage_title, partners , advantages ,about}) {

  const {lang} = useSelector(state => state.langSlice)
  const categoryBtns = [
    {
      text: "Металлопрокат",
      img: "/image/category1.png",
      id: 0,
    },
    {
      text: "Трубы",
      img: "/image/category2.png",
      id: 1
    },
    {
      text: "Кладочные материалы",
      img: "/image/category3.png",
      id: 2
    },
    {
      text: "Отделочные материалы",
      img: "/image/category4.png",
      id: 3
    },
    {
      text: "Строительные смеси",
      img: "/image/category5.png",
      id: 4
    },
    {
      text: "Сыпучие материалы",
      img: "/image/category6.png",
      id: 5
    },
    {
      text: "Изолирующие материалы",
      img: "/image/category7.png",
      id: 6
    },
    {
      text: "Прочие",
      img: "/image/category8.png",
      id: 7
    },
  ]
  const {t} = useTranslation()
  return (
    <>
      <Header banner={banners}/>
      <div className="relative w-full overflow-x-hidden">
        <SectionUI className={'overflow-x-hidden'} paddingStyle={'pt-[30px] pb-6 md:pt-16 md:pb-10 lg:pt-[100px] lg:pb-[50px]'}>
        <div className="grid md:grid-cols-8">
          <div className="md:col-span-5 flex flex-col gap-5 md:gap-[30px]">

            <SectionTitle title={langSelect(lang , about?.title_ru , about?.title_uz)}   subTitle={langSelect(lang , about?.text_ru , about?.text_uz)}
            />
            <ButtonUI text={t('btn.more')} href={'/about'} clasName={'self-center	md:self-start'}/>
          </div>
        </div>
        <div className="absolute top-10 right-4 z-10 w-[250px] xl:w-[350px] aspect-square xl:top-0 max-md:hidden ">
          <ImageUI src={about?.image} alt={langSelect(lang , about?.title_ru , about?.title_uz)} objectFitContain={true}/>
        </div>
        </SectionUI>
        <div className="w-[400px] h-[400px] xl:w-[600px] xl:h-[600px] xl:top-[-100px] xl:right-[-140px] max-lg:hidden absolute top-[-50px] right-[-50px] z-[5] flex items-center justify-center">
          <div className="w-full h-full">
            <FigureAnimation variableID={1} duration={15} radioCircleLg={200} radioCircleXl={300}/>
          </div>
          <div className="w-[300px] h-[300px] xl:w-[420px] xl:h-[420px] absolute z-0">
            <FigureAnimation variableID={2} duration={12} radioCircleLg={150} radioCircleXl={210}/>
          </div>
        </div>
        <SectionUI >
          <SectionTitle title={t('index.allCategory')} />
          <div className="pt-5 md:pt-[30px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
            {
              categoryBtns.map((card) => (
                <CategoryBtn title={card.text} image={card.img} key={card.id}/>
              ))
            }
          </div>
        </SectionUI>

      </div>
      <SectionUI>
        <div className="pb-5 md:pb-[30px]">
          <SectionTitle title={t('index.popularProducts.title')} href={'/catalog'}/>
        </div>

        <ProductSlider/>
      </SectionUI>
      <div className={'relative z-10'}>
      <SectionUI className={'relative z-10'}>
        <div className={'relative z-10'}>
        <Advantages  title={langSelect(lang , advantage_title?.title_ru , advantage_title?.title_uz)} subTitle={langSelect(lang , advantage_title?.title_ru , advantage_title?.title_uz)} advantagesList={advantages} />
        </div>
      </SectionUI>
        <div className="w-[400px] h-[400px] xl:w-[600px] xl:h-[600px] max-lg:hidden absolute top-[-60px] left-[-20px] z-[5] flex items-center justify-center">
          <div className="w-full h-full">
            <FigureAnimation variableID={1} duration={15} radioCircleLg={200} radioCircleXl={300}/>
          </div>
          <div className="w-[300px] h-[300px] xl:w-[420px] xl:h-[420px] absolute z-0">
            <FigureAnimation variableID={2} duration={12} radioCircleLg={150} radioCircleXl={210}/>
          </div>
        </div>
      </div>
      <SectionUI paddingStyle={'py-10 md:py-[50px] lg:pb-[100px] z-20'}>
        <div className="pb-5 md:pb-[30px]">
          <SectionTitle title={langSelect(lang , partners?.title_ru  , partners?.title_uz)} />
        </div>
        <PartnorsSlider partnors={partners.partner_images} />
      </SectionUI>
    </>
  );
}


export async function getServerSideProps({req, res}) {
  res.setHeader(
      "Cache-Control",
      "public, s-maxage=10, stale-while-revalidate=59"
  );
  // Fetch data from external API
  const [banners ,advantage_title ,advantages ,partners ,about  ] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about/banner/`),
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about/advantage-title/`),
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about/advantages/`),
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about/partners/`),
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about/index-about-section/`),

  ]);
  return {
    props: {
      banners: banners?.data,
      advantage_title: advantage_title?.data,
      partners: partners?.data,
      advantages: advantages?.data,
      about: about?.data,
    },
  };
}

