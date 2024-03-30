import Image from "next/image";
import { Inter } from "next/font/google";
import { ButtonUI, CategoryBtn, FigureAnimation, Header, ImageUI, SectionTitle, SectionUI } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
  return (
    <>
      <Header/>
      <div className="relative w-full overflow-x-hidden">
        <SectionUI className={'overflow-x-hidden'} paddingStyle={'pt-[30px] pb-6 md:pt-16 md:pb-10 lg:pt-[100px] lg:pb-[50px]'}>
        <div className="grid md:grid-cols-8">
          <div className="md:col-span-5 flex flex-col gap-5 md:gap-[30px]">
            <SectionTitle title={'OOO “Beaming universe trade”'} subTitle={'Мы специализируемся на предоставлении качественных строительных материалов и готовы предложить вам надежные поставки товаров для ваших проектов.'}
              subTitle2={'Миссия компании — осуществление поставок только качественной продукции путем прозрачной торговли, обеспечивая удобную платежную систему исовременные решения цепочек поставок.'}
            />
            <ButtonUI text={'Подробнее'} href={'/about'} clasName={'self-center	md:self-start'}/>
          </div>
        </div>
        <div className="absolute top-10 right-4 z-10 w-[250px] xl:w-[350px] aspect-square xl:top-0 max-md:hidden ">
          <ImageUI src={'/image/pipe.png'} alt={"Butrate Image"} objectFitContain/>
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
          <SectionTitle title={'Все категории'}/>
          <div className="pt-5 md:pt-[30px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
            {
              categoryBtns.map((card) => (
                <CategoryBtn title={card.text} image={card.img} key={card.id}/>
              ))
            }
          </div>
        </SectionUI>

      </div>
    </>
  );
}
