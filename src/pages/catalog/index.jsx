import {CardPositionBtn, ProductCard, SectionTitle, SectionUI} from "@/components";
import {useEffect ,useState} from "react";
import apiService from "@/service/axois";
import {useQuery} from "react-query";
import {useSelector} from "react-redux";
const index = () => {

  const {isRow} = useSelector(state => state.cardPosition)


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
  console.log(isRow)
  return (
      <SectionUI>
        <div className={'pb-[30px]'}>
           <SectionTitle title={'Металлопрокат'}/>
        </div>
        {/*md:grid-cols-5 */}
        <div className={'flex items-center pb-5 justify-between'}>
          <div></div>
          <div>
            <CardPositionBtn/>
          </div>

        </div>
        <div className={`w-full grid ${isRow ? "grid-cols-1 gap-5" : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'}`}>
          {
            productFiltered?.map(card => (
                <div key={card.id} className={'relative z-[5]'}>
                    <ProductCard product={card} />
                </div>
            ))
          }
          {
            cards?.map(card => (
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

