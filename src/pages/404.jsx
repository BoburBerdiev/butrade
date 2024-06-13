import { useTranslation } from 'react-i18next';
import { indexSEO } from '@/SEO/SEO.config';
import SEO from '@/SEO/SEO';
import { ImageUI, SectionUI } from '@/components';

const Page404 = () => {
  const { t, i18n } = useTranslation();

  return (
      <>
        <SEO
            ogImage="/image/logo.png"
            title={indexSEO[i18n.language].title}
            description={indexSEO[i18n.language].description}
            canonical="https://www.butrate.uz"
            ogTitle={indexSEO[i18n.language].title}
            ogDescription={indexSEO[i18n.language].description}
            ogUrl="https://www.butrate.uz"
        />
        <SectionUI>
          <div className="flex flex-col items-center gap-5 md:gap-10">
            <div className="relative w-[200px] md:w-[300px] lg:w-[400px] aspect-video">
              <ImageUI src="/image/not-found.jpg" alt={t('404Page.altText')} />
            </div>
            <h2 className="font-notoSans text-lg text-center md:text-xl lg:text-2xl text-currentBlue">
              {t('404Page.title')}
            </h2>
          </div>
        </SectionUI>
      </>
  );
};
export default Page404;
