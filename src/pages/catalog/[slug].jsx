import {InfoProductPrice, InfoProductUI, SectionTitle, SectionUI, SwiperBanner} from "@/components";
import {useSelector} from "react-redux";
import {langSelect} from "@/helper";

const Product = ({product}) => {
  const {lang} = useSelector(state => state.langSlice)

  console.log(product)
  return (
      <>
        <SectionUI>
          <div className="pb-5 md:pb-[30px]">
            <SectionTitle title={langSelect(lang , product?.title_ru , product?.title_uz)}/>
          </div>
          <div className={'grid grid-cols-1 md:grid-cols-11 gap-10 pb-5'}>
            <div className={'col-span-1 md:col-span-4 aspect-[3/2] order-1'}>
              <SwiperBanner productSlider list={product?.images}/>
            </div>
            <div className={'col-span-1 md:col-span-4 order-3 md:order-2'}>
              <h2 className='font-medium md:text-lg mb-2.5 text-currentBlue'>Короткое описание</h2>
              <div className={'space-y-2'}>
                {
                  product?.characteristic?.map(item => (
                <InfoProductUI title={langSelect(lang , item?.key_ru , item?.key_uz)} text={langSelect(lang , item?.value_ru , item?.value_uz)}/>
                  ))
                }
              </div>
            </div>
            <div className=" col-span-1 md:col-span-3 order-2 ">
              <InfoProductPrice  />
            </div>
          </div>

          <div>
            <h2 className='font-medium md:text-lg mb-2.5 text-currentBlue'>Короткое описание</h2>
            <p>
              {langSelect(lang , product?.text_ru , product?.text_uz)}
            </p>
          </div>
        </SectionUI>
      </>
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

export default Product;


