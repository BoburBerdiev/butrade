import {Breadcrumb, CardPositionBtn, ProductCard, ProductSlider, SectionTitle, SectionUI} from "@/components";
import {useEffect ,useState} from "react";
import apiService from "@/service/axois";
import {useQuery} from "react-query";
import {useSelector} from "react-redux";
import {AiOutlineLoading3Quarters} from "react-icons/ai";
import InfiniteScroll from "react-infinite-scroll-component";
import {langSelect} from "@/helper";


import {useTranslation} from "react-i18next";
const index = () => {
  const {lang} = useSelector(state => state.langSlice)
  const {isRow} = useSelector(state => state.cardPosition)


  const [page, setPage] = useState(1)
  const {query ,catalogQuery} = useSelector(state => state.queryParams)
  const [productInfinity, setProductInfinity] = useState([])
  const [hasMore, setHasMore] = useState(false)
  const {t} = useTranslation()
  const {
    data: productFiltered,
    refetch: productFilteredRefetch,
    isSuccess: productFilteredSuccess,
  } = useQuery(
      "filter",
      () =>
          apiService.getData(
              `products-filter?${query}&page=${page}&page_size=5`
          ),
      {
        enabled: false,
      }
  );
  useEffect(() => {
    if (query !== null && page === 1) {
      productFilteredRefetch()
    }
  }, [query, page]);
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

  return (
      <>
      <SectionUI>
        <Breadcrumb catalog={langSelect(lang , catalogQuery?.title_ru , catalogQuery?.title_uz)}/>
        <div className={'pb-[30px]'}>
           <SectionTitle title={langSelect(lang , catalogQuery?.title_ru , catalogQuery?.title_uz)}/>
        </div>
        <div className={'flex items-center pb-5 justify-between'}>
          <div></div>
          <div>
            <CardPositionBtn/>
          </div>
        </div>
          <InfiniteScroll
              next={productFilteredRefetch}
              hasMore={hasMore}
              loader={<div className={'flex  justify-center items-center mt-5 mb-3 w-full col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 '}> <AiOutlineLoading3Quarters
                  className={'animate-spin text-currentBlue '}/> </div>}
              className={`w-full grid ${isRow ? "grid-cols-1 gap-5" : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10'} relative z-10 !overflow-visible`}
              dataLength={productFiltered?.count || []}>
          {
            productInfinity?.map(card => (
                    <ProductCard key={card.id} isCatalog={true} product={card} />
            ))
          }
          </InfiniteScroll>

      </SectionUI>
        <SectionUI  paddingStyle={'py-10 md:py-[50px]  z-20'}>
          <div className="pb-5 md:pb-[30px]">
            <SectionTitle title={t('catalog.viewedProducts')} />
          </div>

          {/*<ProductSlider/>*/}
        </SectionUI>
      </>
  );
};

export default index;

