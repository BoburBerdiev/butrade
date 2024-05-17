import {Breadcrumb, InfoProductPrice, OrderCard, ProductSlider, SectionTitle, SectionUI} from "@/components";

const Basket = ({}) => {
    const orderCards = [
        {
            image: "/image/card-image.png",
            title: "Труба стальная бесшовная",
            saleText : "Цена договорная",
            id: 1
        },
        {
            image: "/image/card-image.png",
            title: "Керамогранит Netto Ceramika Markinia Silver High GL R 60*60 см черный",
            saleText : "Цена договорная",
            id: 1
        },
        {
            image: "/image/card-image.png",
            title: "Труба стальная бесшовная",
            saleText : "Цена договорная",
            id: 1
        },
    ]
    return (
        <div>
            <SectionUI>
                <Breadcrumb pageName={'Корзина'}/>
                <div className={'pb-4 md:pb-6 lg:pb-[30px]'}>
                   <SectionTitle title={'Корзина'}/>
                </div>
                <div className={'grid grid-cols-1 sm:grid-cols-8 gap-5'}>
                    <div className={'rounded-[9px] sm:col-span-6 p-4 lg:p-[30px] flex flex-col gap-y-5 max-h-[300px] overflow-y-scroll shadow-[0px_4px_14px_0px_rgba(0,_0,_0,_0.12)]'}>
                           {
                               orderCards.map(card => (
                                  <OrderCard image={card.image} title={card.title} saleText={card.saleText}/>
                               ))
                           }
                        </div>
                    <div className={'sm:col-span-2'}>
                        <InfoProductPrice/>
                    </div>
                </div>
            </SectionUI>
            <SectionUI>
                <div className={'pb-[30px]'}>
                    <SectionTitle title={'Вам может понравиться'}/>
                </div>
                <ProductSlider/>
            </SectionUI>
        </div>
    );
};

export default Basket;