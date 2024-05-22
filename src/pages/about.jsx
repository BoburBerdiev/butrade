import React from 'react'
import {Advantages, ImageUI, PartnorsSlider, SectionTitle, SectionUI} from "@/components";
import {useSelector} from "react-redux";
import axios from "axios";
import {langSelect} from "@/helper";

const About = ({advantage_title , advantages , about ,partners}) => {
  const {lang} = useSelector(state => state.langSlice)

  return (
<>
  <SectionUI>
    <div className="container">
      <div className="flex flex-col gap-2 md:gap-5 items-center">
        <SectionTitle centerTrue={true} title={langSelect(lang , about?.title_ru , about?.title_uz)}   subTitle={langSelect(lang , about?.text_ru , about?.text_uz)}
        />
      </div>
    </div>
  </SectionUI>
  <SectionUI>
    <Advantages title={langSelect(lang , advantage_title?.title_ru , advantage_title?.title_uz)} subTitle={langSelect(lang , advantage_title?.title_ru , advantage_title?.title_uz)} advantagesList={advantages} />
  </SectionUI>
  <SectionUI>
    <div className="pb-5 md:pb-[30px]">
      <SectionTitle title={langSelect(lang , partners?.title_ru  , partners?.title_uz)} />
    </div>
    <PartnorsSlider partnors={partners.partner_images} />
  </SectionUI>

</>

  )
}

export default About

export async function getServerSideProps({req, res}) {
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
