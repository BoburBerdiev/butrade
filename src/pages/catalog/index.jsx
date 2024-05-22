import {ProductCard, SectionTitle, SectionUI} from "@/components";
import Product from "@/pages/catalog/[slug]";

const index = () => {
  const cards = [
    {
      title_uz: "Трубы пластиковые",
      title_ru: "Трубы пластиковые",
      image: "/image/card-image.png",
      link: "/catalog/2",
      alt: "Butrate Image",
      id: 12
    },
    {
      title_uz: "Трубы из нержавеющей стали разного диаметра",
      title_ru: "Трубы из нержавеющей стали разного диаметра",
      image: "/image/card-image.png",
      link: "/catalog/2",
      alt: "Butrate Image",
      id: 11
    },
    {
      title_uz: "Керамогранит Netto Ceramika Markinia Silver High GL R 60*60 см черный",
      title_ru: "Керамогранит Netto Ceramika Markinia Silver High GL R 60*60 см черный",
      image: "/image/card-image.png",
      link: "/catalog/2",
      alt: "Butrate Image",
      id: 5
    },
    {
      title_uz: "Керамогранит плитка глянцевая поверхность",
      title_ru: "Керамогранит плитка глянцевая поверхность",
      image: "/image/card-image.png",
      link: "/catalog/2",
      alt: "Butrate Image",
      id: 2
    },
    {
      title_uz: "Цемент М400 Евроцемент 50кг.",
      title_ru: "Цемент М400 Евроцемент 50кг.",
      image: "/image/card-image.png",
      link: "/catalog/2",
      alt: "Butrate Image",
      id: 3
    },
    {
      title_uz: "Трубы пластиковые",
      title_ru: "Трубы пластиковые",
      image: "/image/card-image.png",
      link: "/catalog/2",
      alt: "Butrate Image",
      id: 4
    },
  ]
  return (
      <SectionUI>
        <SectionTitle title={'Металлопрокат'}/>'
        <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-5">
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

export default index;

