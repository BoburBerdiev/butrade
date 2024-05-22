import {ProductCard, SectionTitle, SectionUI} from "@/components";
import Product from "@/pages/catalog/[slug]";

const index = () => {
  const cards = [
    {
      title_uz: "Трубы пластиковые",
      title_ru: "Трубы пластиковые",
      image: "/image/not-found.png",
      link: "/catalog/2",
      alt: "Butrate Image",
      id: 12,
      infoProduct: [
        {
          title: 'Диаметр',
          text: '240 мм',
          id: 1
        },
        {
          title: 'Металл',
          text: 'сталь',
          id: 2
        },
        {
          title: 'Толщина',
          text: '8 мм',
          id: 3
        },
        {
          title: 'Вид',
          text: 'бесшовные',
          id: 4
        },
        
      ]
    },
    {
      title_uz: "Трубы из нержавеющей стали разного диаметра",
      title_ru: "Трубы из нержавеющей стали разного диаметра",
      image: "/image/card-image.png",
      link: "/catalog/2",
      alt: "Butrate Image",
      id: 11,
      infoProduct: [
        {
          title: 'Диаметр',
          text: '240 мм',
          id: 1
        },
        {
          title: 'Металл',
          text: 'сталь',
          id: 2
        },
        {
          title: 'Толщина',
          text: '8 мм',
          id: 3
        },
        {
          title: 'Вид',
          text: 'бесшовные',
          id: 4
        },
        {
          title: 'Свойства I',
          text: 'конструкционный',
          id: 5
        },
        {
          title: 'Свойства II',
          text: 'рессорно-пружинный',
          id: 6
        },
        {
          title: 'Сечение',
          text: 'круглые',
          id: 7
        },
        {
          title: 'Вид покрытия',
          text: 'без покрытия',
          id: 8
        },
      ]
    },
    {
      title_uz: "Керамогранит Netto Ceramika Markinia Silver High GL R 60*60 см черный",
      title_ru: "Керамогранит Netto Ceramika Markinia Silver High GL R 60*60 см черный",
      image: "/image/card-image.png",
      link: "/catalog/2",
      alt: "Butrate Image",
      id: 5,
      infoProduct: [
        {
          title: 'Диаметр',
          text: '240 мм',
          id: 1
        },
        {
          title: 'Металл',
          text: 'сталь',
          id: 2
        },
        {
          title: 'Толщина',
          text: '8 мм',
          id: 3
        },
        {
          title: 'Вид',
          text: 'бесшовные',
          id: 4
        },
        {
          title: 'Свойства I',
          text: 'конструкционный',
          id: 5
        },
        {
          title: 'Свойства II',
          text: 'рессорно-пружинный',
          id: 6
        },
        {
          title: 'Сечение',
          text: 'круглые',
          id: 7
        },
        {
          title: 'Вид покрытия',
          text: 'без покрытия',
          id: 8
        },
      ]
    },
    {
      title_uz: "Керамогранит плитка глянцевая поверхность",
      title_ru: "Керамогранит плитка глянцевая поверхность",
      image: "/image/card-image.png",
      link: "/catalog/2",
      alt: "Butrate Image",
      id: 2,
      infoProduct: [
        {
          title: 'Диаметр',
          text: '240 мм',
          id: 1
        },
        {
          title: 'Металл',
          text: 'сталь',
          id: 2
        },
        {
          title: 'Толщина',
          text: '8 мм',
          id: 3
        },
        {
          title: 'Вид',
          text: 'бесшовные',
          id: 4
        },
        {
          title: 'Свойства I',
          text: 'конструкционный',
          id: 5
        },
        {
          title: 'Свойства II',
          text: 'рессорно-пружинный',
          id: 6
        },
        {
          title: 'Сечение',
          text: 'круглые',
          id: 7
        },
        {
          title: 'Вид покрытия',
          text: 'без покрытия',
          id: 8
        },
      ]
    },
    {
      title_uz: "Цемент М400 Евроцемент 50кг.",
      title_ru: "Цемент М400 Евроцемент 50кг.",
      image: "/image/card-image.png",
      link: "/catalog/2",
      alt: "Butrate Image",
      id: 3,
      infoProduct: [
        {
          title: 'Диаметр',
          text: '240 мм',
          id: 1
        },
        {
          title: 'Металл',
          text: 'сталь',
          id: 2
        },
        {
          title: 'Толщина',
          text: '8 мм',
          id: 3
        },
        {
          title: 'Вид',
          text: 'бесшовные',
          id: 4
        },
        {
          title: 'Свойства I',
          text: 'конструкционный',
          id: 5
        },
        {
          title: 'Свойства II',
          text: 'рессорно-пружинный',
          id: 6
        },
        {
          title: 'Сечение',
          text: 'круглые',
          id: 7
        },
        {
          title: 'Вид покрытия',
          text: 'без покрытия',
          id: 8
        },
      ]
    },
    {
      title_uz: "Трубы пластиковые",
      title_ru: "Трубы пластиковые",
      image: "/image/card-image.png",
      link: "/catalog/2",
      alt: "Butrate Image",
      id: 4,
      infoProduct: [
        {
          title: 'Диаметр',
          text: '240 мм',
          id: 1
        },
        {
          title: 'Металл',
          text: 'сталь',
          id: 2
        },
        {
          title: 'Толщина',
          text: '8 мм',
          id: 3
        },
        {
          title: 'Вид',
          text: 'бесшовные',
          id: 4
        },
        {
          title: 'Свойства I',
          text: 'конструкционный',
          id: 5
        },
        {
          title: 'Свойства II',
          text: 'рессорно-пружинный',
          id: 6
        },
        {
          title: 'Сечение',
          text: 'круглые',
          id: 7
        },
        {
          title: 'Вид покрытия',
          text: 'без покрытия',
          id: 8
        },
      ]
    },
  ]
  return (
      <SectionUI>
        <SectionTitle title={'Металлопрокат'}/>
        {/*md:grid-cols-5 */}
        <div className="w-full grid grid-cols-1 gap-5">
          {
            cards.map(card => (
                <div key={card.id} className={'relative z-[5]'}>
                    <ProductCard product={card} />
                </div>
            ))
          }
        </div>
      </SectionUI>
  );
};
//
// export async function getServerSideProps({params}) {
//   const { slug } = params;
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${slug}`);
//   const product = await res.json();
//
//   if (!product) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: { product },
//   };
// }
//
export default index;

