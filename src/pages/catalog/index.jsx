import {ProductCard, SectionTitle, SectionUI} from "@/components";
import {useEffect ,useState} from "react";
import apiService from "@/service/axois";
import {useQuery} from "react-query";

const index = () => {


  const [page, setPage] = useState(1)
  const [query , setQuery ] = useState("Izolyatsiya materiallari")
  const [productInfinity, setProductInfinity] = useState([])
  const [hasMore, setHasMore] = useState(false)
  const {
    data: productFiltered,
    refetch: productFilteredRefetch,
    isSuccess: productFilteredSuccess,
  } = useQuery(
      "filter",
      () =>
          apiService.getData(
              `products-catalog?${query}&page=${page}&page_size=8`
          ),
      {
        enabled: false,
      }
  );
  useEffect(() => {
    if (query !== null && page === 1) {
      productFilteredRefetch()
    }
  }, [ page]);

  useEffect(() => {
    if (productFilteredSuccess) {
      if (page === 1) {
        setProductInfinity([...productFiltered?.results])

        if (productFiltered?.results.length > 0) {
          setHasMore(true)
        }
      } else {
        setProductInfinity([...productInfinity, ...productFiltered?.results])
      }
      if (!productFiltered?.next) {
        setHasMore(false)
      } else {
        setPage(prop => prop + 1)
        setHasMore(true)
      }
    }
  }, [productFiltered])

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
            productFiltered?.map(card => (
                <div key={card.id} className={'relative z-[5]'}>
                    <ProductCard product={card} />
                </div>
            ))
          }
        </div>
      </SectionUI>
  );
};

export default index;
//
