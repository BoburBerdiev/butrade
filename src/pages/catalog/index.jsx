import {ProductCard, SectionTitle, SectionUI} from "@/components";

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
        <SectionTitle title={'Металлопрокат'}/>
        {/*grid-cols-2 md:grid-cols-5*/}

        <div className="w-full grid grid-cols-1  gap-5">
          {
            cards.map(card => (
                <div key={card.id}>
                    <ProductCard product={card} />
                </div>
            ))
          }
        </div>
      </SectionUI>
  );
};

export default index;