import {
  Breadcrumb,
  CardPositionBtn,
  CatalogDropdown,
  ProductSlider,
  SectionTitle,
  SectionUI
} from "@/components";
import { useEffect, useState } from "react";
import apiService from "@/service/axois";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import InfiniteScroll from "react-infinite-scroll-component";
import { langSelect } from "@/helper";
import { useTranslation } from "react-i18next";
import { catalogSEO } from "@/SEO/SEO.config";
import SEO from "@/SEO/SEO";
import dynamic from "next/dynamic";
import {MdProductionQuantityLimits} from "react-icons/md";

const ProductCard = dynamic(() => import('@/components/product-card/product-card'), {
  ssr: false
});

const index = () => {
  const { isRow } = useSelector(state => state.cardPosition);
  const { lastProductList } = useSelector(state => state.lastProductSlice);
  const [page, setPage] = useState(1);
  const { queryByOrder } = useSelector(state => state.catalogFilter);
  const { query, catalogQuery } = useSelector(state => state.queryParams);
  const [productInfinity, setProductInfinity] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const { t, i18n } = useTranslation();

  const {
    data: productFiltered,
    refetch: productFilteredRefetch,
    isSuccess: productFilteredSuccess,
  } = useQuery(
      "filter",
      () =>
          apiService.getData(
              `products-filter?${query}&page=${page}&${queryByOrder}&page_size=5`
          ),
      {
        enabled: false,
      }
  );

  useEffect(() =>{
    setPage(1)
    setProductInfinity([])
    if(query !== null && page===1) {
      productFilteredRefetch();
    }
  } , [query ,queryByOrder])

  useEffect(() => {
      productFilteredRefetch();
  }, [ page ]);



  useEffect(() => {
    if (productFilteredSuccess) {
      if (page === 1) {
        setProductInfinity([]);
        setProductInfinity([...productFiltered?.results]);
        if (productFiltered?.next) {
          setHasMore(true);
        }
      } else {
        setProductInfinity([...productInfinity, ...productFiltered?.results]);
      }
      if (!productFiltered?.next) {
        setHasMore(false);
      } else {
        setPage(prop => prop + 1);
        setHasMore(true);
      }
    }
  }, [productFilteredSuccess, productFiltered]);

  return (
      <>
        <SEO
            ogImage={'/image/logo.png'}
            title={langSelect(i18n.language, catalogQuery?.title_ru, catalogQuery?.title_uz)}
            description={catalogSEO[i18n.language].description}
            canonical={"www.butrate.uz"}
            ogTitle={langSelect(i18n.language, catalogQuery?.title_ru, catalogQuery?.title_uz)}
            ogDescription={catalogSEO[i18n.language].description}
            ogUrl={'www.butrate.uz'}
        />
        <SectionUI>
          <Breadcrumb catalog={langSelect(i18n.language, catalogQuery?.title_ru, catalogQuery?.title_uz)} />
          <div className={'pb-[30px]'}>
            <SectionTitle title={langSelect(i18n.language, catalogQuery?.title_ru, catalogQuery?.title_uz)} />
          </div>
          <div className={'flex items-center pb-5 justify-between'}>
            <div className={'relative'}>
              <CatalogDropdown />
            </div>
            <div>
              <CardPositionBtn />
            </div>
          </div>

          {
              productInfinity?.length > 0 ?
            <InfiniteScroll
                next={productFilteredRefetch}
                hasMore={hasMore}
                loader={
                  <div className={'flex  justify-center items-center mt-5 mb-3 w-full col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 '}>
                    <AiOutlineLoading3Quarters className={'animate-spin text-currentBlue '} />
                  </div>
                }
                className={`w-full grid ${isRow ? "grid-cols-1 gap-5" : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-6 lg:gap-10'} relative z-10 !overflow-visible`}
                dataLength={productFiltered?.count || []}
            >
              {
                productInfinity?.map(card => (
                    <ProductCard key={card.id} isCatalog={true} product={card} />
                ))
              }
            </InfiniteScroll>
                  :
                  <div class={'w-full h-full flex justify-center items-center'}>
                      <MdProductionQuantityLimits className={"text-9xl text-currentBlue border p-4 rounded-xl shadow-lg"} />
                  </div>
          }
        </SectionUI>

        {
            lastProductList.length > 0 &&
            <SectionUI paddingStyle={'py-10 md:py-[50px]  z-20'}>
              <div className="pb-5 md:pb-[30px]">
                <SectionTitle title={t('catalog.viewedProducts')} />
              </div>
              <ProductSlider cards={lastProductList} />
            </SectionUI>
        }
      </>
  );
};

export default index;
