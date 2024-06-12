import {Advantages, Breadcrumb, FigureAnimation, PartnorsSlider, SectionTitle, SectionUI} from "@/components";
import axios from "axios";
import {langSelect} from "@/helper";
import SEO from "@/SEO/SEO";
import {useTranslation} from "react-i18next";

const About = ({advantage_title , advantages , about ,partners}) => {
    const {i18n} = useTranslation()
  return (
<>
  <SEO
      ogImage={'/image/logo.png'}
      title={langSelect(i18n.language , about?.title_ru , about?.title_uz)}
      description={langSelect(i18n.language , about?.text_ru , about?.text_uz)}
      canonical={'www.butrate.uz'}
      ogTitle={langSelect(i18n.language , about?.title_ru , about?.title_uz)}
      ogDescription={langSelect(i18n.language , about?.text_ru , about?.text_uz)}
      ogUrl={'www.butrate.uz'}
  />
  <SectionUI>
    <Breadcrumb/>
    <div className="container relative z-10">
      <div className="flex flex-col gap-2 md:gap-5 items-center">
        <SectionTitle centerTrue={true} title={langSelect(i18n.language , about?.title_ru , about?.title_uz)}   subTitle={langSelect(i18n.language , about?.text_ru , about?.text_uz)}
        />
      </div>
    </div>
  </SectionUI>
  <div className={'relative'}>
  <SectionUI>
    <Advantages title={langSelect(i18n.language , advantage_title?.title_ru , advantage_title?.title_uz)} subTitle={langSelect(i18n.language , advantage_title?.title_ru , advantage_title?.title_uz)} advantagesList={advantages} />
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
  <SectionUI paddingStyle={'py-10 md:py-[50px] lg:pb-[100px] z-20'} className={'relative z-10'}>
    <div className="pb-5 md:pb-[30px]">
      <SectionTitle title={langSelect(i18n.language , partners?.title_ru  , partners?.title_uz)} />
    </div>
    <PartnorsSlider partnors={partners.partner_images} />
  </SectionUI>

</>

  )
}

export default About

export async function getServerSideProps({ res}) {
  res.setHeader(
      "Cache-Control",
      "public, s-maxage=10, stale-while-revalidate=59"
  );
  // Fetch data from external API
  const [advantage_title ,advantages , about,partners  ] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about/advantage-title/`),
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about/advantages/`),
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about/index-about-section/`),
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about/partners/`),

  ]);
  return {
    props: {
      advantage_title: advantage_title?.data,
      advantages: advantages?.data,
      about: about?.data,
      partners: partners?.data,
    },
  };
}
