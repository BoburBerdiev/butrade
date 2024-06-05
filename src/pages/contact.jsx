import {Breadcrumb, SectionTitle, SectionUI} from "@/components";
import {LuMail, LuMapPin, LuPhone} from "react-icons/lu";
import {ImTelegram} from "react-icons/im";
import {FaFacebook, FaInstagram} from "react-icons/fa";
import axios from "axios";
import {formatPhoneNumber} from "@/helper";
import {useSelector} from "react-redux";
import {langSelect} from "@/helper";
import {useTranslation} from "react-i18next";
import SEO from "@/SEO/SEO";
import {contactSEO} from "@/SEO/SEO.config";

const Contact = ({contact}) => {
  const {lang} = useSelector(state => state.langSlice)
  const {t} = useTranslation()
  return (
      <>
        <SEO
            ogImage={'/image/logo.png'}
            title={contactSEO[lang].title}
            description={contactSEO[lang].description}
            canonical={contactSEO[lang].canonical}
            ogTitle={contactSEO[lang].ogTitle}
            ogDescription={contactSEO[lang].ogDescription}
            ogUrl={'url?'}
        />

      <SectionUI>
        <Breadcrumb/>
        <div className="w-full flex flex-col justify-center items-center gap-[30px]">
          <div className="flex flex-col items-center gap-4 md:gap-[30px]">
            <SectionTitle title={t('contact.title')} centerTrue={true} />
            <div className="flex flex-col gap-5 md:gap-[25px] items-center  text-base md:text-lg">
              <div className="font-notoSans flex flex-col sm:flex-row items-center gap-1.5 md:gap-[30px]">
                <LuMail className={'text-2xl md:text-3xl shrink-0 text-currentBlue'}/>
                <a
                  href={`mailto:${ contact?.email}`}> {contact?.email}</a>
              </div>
              <div className="font-notoSans flex flex-col sm:flex-row items-center gap-1.5 md:gap-[30px]">
                <LuPhone  className={'text-2xl md:text-3xl shrink-0 text-currentBlue'}/>
                <div className="flex flex-col sm:flex-row sm:gap-[30px]">
                  <a href={`tel:${contact?.phone1}`}> {formatPhoneNumber(contact?.phone1)}</a>
                  <a href={`tel:${contact?.phone2}`}> {formatPhoneNumber(contact?.phone1)}</a>
                  <a href={`tel:${contact?.phone3}`}> {formatPhoneNumber(contact?.phone1)}</a>
                </div>
              </div>
              <div className="font-notoSans flex flex-col sm:flex-row items-center gap-1.5 md:gap-[30px]">
                <LuMapPin className={'text-2xl md:text-3xl shrink-0 text-currentBlue'} />
               <p className="text-center">{langSelect(lang , contact?.address_ru , contact?.address_uz)}</p>
              </div>
            </div>
            <div className="w-3/4 h-[1px] bg-linegrey"></div>
            <div className="flex text-white gap-5 md:gap-10">
              <a href={contact?.instagram} target={'_blank'} className="w-10 h-10 bg-currentBlue rounded-full flex justify-center items-center">
              <FaInstagram  className="text-xl" />
              </a>
              <a  href={contact?.facebook} target={'_blank'} className="w-10 h-10 bg-currentBlue rounded-full flex justify-center items-center">
                <FaFacebook className="text-xl" />
              </a>
              <a  href={contact?.telegram} target={'_blank'} className="w-10 h-10 bg-currentBlue rounded-full flex justify-center items-center">
                <ImTelegram  className="text-xl" />
              </a>
            </div>
          </div>
          <div className="w-full h-60 md:h-96">
            <iframe className="size-full"
                    src={contact?.map}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"/>
          </div>
        </div>
      </SectionUI>
      </>
  );
};

export default Contact;


export async function getServerSideProps({ res}) {
  res.setHeader(
      "Cache-Control",
      "public, s-maxage=10, stale-while-revalidate=59"
  );
  // Fetch data from external API
  const [contact   ] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about/contact/`),

  ]);
  return {
    props: {
      contact: contact?.data,
    },
  };
}
