import {InfoProductPrice, InfoProductUI, SectionTitle, SectionUI, SwiperBanner} from "@/components";

const headerBanner = [
  {
    src: '/image/banner.png',
    alt: "Header image",
    id: 0
  },
  {
    src: '/image/image 1.png',
    alt: "Header image",
    id: 1
  },
]
const product = () => {
  return (
      <>
        <SectionUI>
          <div className="pb-5 md:pb-[30px]">
            <SectionTitle title={'Труба стальная бесшовная'}/>
          </div>
          <div className={'grid grid-cols-1 md:grid-cols-11 gap-10 pb-5'}>
            <div className={'col-span-1 md:col-span-4 aspect-square order-1'}>
              <SwiperBanner list={headerBanner}/>
            </div>
            <div className={'col-span-1 md:col-span-4 order-3 md:order-2'}>
              <h2 className='font-medium md:text-lg mb-2.5 text-currentBlue'>Короткое описание</h2>
              <div className={'space-y-2'}>
                <InfoProductUI/>
                <InfoProductUI/>
                <InfoProductUI/>
                <InfoProductUI/>
              </div>
            </div>
            <div className=" col-span-1 md:col-span-3 order-2 ">
              <InfoProductPrice />
            </div>
          </div>
          <div>
            <h2 className='font-medium md:text-lg mb-2.5 text-currentBlue'>Короткое описание</h2>
            <p>
              Марки 304 (08 Х 18 Н 10) Сталь марки AISI 304 (The American Iron and Steel Institute) — это аустенитная сталь с низким содержанием углерода. В России согласно ГОСТ её аналогом является сталь марки 08Х18Н10. Нержавеющая сталь марки AISI 304 является кислотостойкой и выдерживает краткосрочное поднятие температуры до 900 градусов по Цельсию.
              Основное применение:  — Изготовление дымоходов — Систем дымоудаления и вентиляции — Оборудование для химических и пищевых предприятий и предприятий общественного питания. — Оборудование для хранения и транспортировки молока, пива, вина и других напитков.
              Применение данная марка стали находит в изготовлении сборных и сварных металлоконструкций, составных частей трубопроводной арматуры, а также бытового оборудования. Например, ограждения балконов и лестниц, кухонная аппаратура, автомобильные выхлопные системы. В форме листа сталь AISI 304 делится на холоднокатаный и горячекатаный материал, что определяется методом производства. Форма продажи плоского металлопроката – листы и рулоны (ссылки на другую продукцию). й, криогенной, пищевой, молочной и фармацевтических отраслях промышленности.
            </p>
          </div>
        </SectionUI>
      </>
  );
};

export default product;