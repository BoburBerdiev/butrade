import {ImageUI, SectionUI} from "@/components";
import {useTranslation} from "react-i18next";
import {indexSEO} from "@/SEO/SEO.config";
import SEO from "@/SEO/SEO";
import {useSelector} from "react-redux";

const Page404 = () => {
    const {t} = useTranslation()
    const {lang} = useSelector(state => state.langSlice)
    return (
        <>
            <SEO
                ogImage={'/image/logo.png'}
                title={indexSEO[lang].title}
                description={indexSEO[lang].description}
                canonical={'www.butrate.uz'}
                ogTitle={indexSEO[lang].title}
                ogDescription={indexSEO[lang].description}
                ogUrl={'www.butrate.uz'}
            />
            <SectionUI >
                    <div className={'flex flex-col items-center gap-5 md:gap-10 '}>
                        <div className={'relative w-[200px] md:w-[300px] lg:w-[400px] aspect-video'}>
                            <ImageUI src={'/image/not-found.jpg'} alt={'Page is not defined'}/>
                        </div>
                        <h2 className={'font-notoSans text-lg text-center md:text-xl lg:text-2xl text-currentBlue'}>
                            {t('404Page.title')}
                        </h2>
                    </div>
            </SectionUI>
        </>
    );
};

export default Page404;