import {SectionUI} from "@/components";
import {LuMail, LuMapPin, LuPhone} from "react-icons/lu";
import {ImTelegram} from "react-icons/im";
import {FaFacebook, FaInstagram} from "react-icons/fa";

const Contact = () => {
  return (
      <SectionUI>
        <div className="w-full flex flex-col justify-center items-center gap-[30px]">
          <div className="flex flex-col items-center gap-4 md:gap-[30px]">
            <h1 className="font-oswald font-medium text-2xl md:text-3xl lg:text-4xl text-textblue">Свяжитесь с нами</h1>
            <div className="flex flex-col gap-3 md:gap-[25px] items-center text-sm sm:text-base md:text-lg">
              <div className="font-notoSans flex flex-col sm:flex-row items-center gap-1.5 md:gap-[30px]">
                <LuMail className={'w-6 h-[18px] shrink-0 text-currentBlue'}/>
                <a
                  href="mailto:olimkhonov@butrade.uz">olimkhonov@butrade.uz</a>
              </div>
              <div className="font-notoSans flex flex-col sm:flex-row items-center gap-1.5 md:gap-[30px]">
                <LuPhone  className={'w-6 h-[18px] shrink-0 text-currentBlue'}/>
                <div className="flex flex-col sm:flex-row sm:gap-[30px]">
                  <a href="tel:+998555110088">+998 55 511 00 88</a>
                  <a href="tel:+998998855444">+998 99 885 54 44</a>
                  <a href="tel:+998771120088">+998 77 112 00 88</a>
                </div>
              </div>
              <div className="font-notoSans flex flex-col sm:flex-row items-center gap-1.5 md:gap-[30px]">
                <LuMapPin className={'w-6 h-[18px] shrink-0 text-currentBlue'} />
               <a href="#" className="line-clamp-2 text-center">Узбекистан,
                Город: Ташкент, Район: Мирабад, ул.Айбек, 38А, БЦ “AVALON”, 3-этаж</a></div>
            </div>
            <div className="w-3/4 h-[1px] bg-linegrey"></div>
            <div className="flex text-white gap-5 md:gap-10">
              <div className="w-10 h-10 bg-currentBlue rounded-full flex justify-center items-center">
              <FaInstagram  className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-currentBlue rounded-full flex justify-center items-center">
                <FaFacebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-currentBlue rounded-full flex justify-center items-center">
                <ImTelegram  className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div className="w-full h-60 md:h-96">
            <iframe className="size-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.83987056918!2d69.11455464074837!3d41.28273794656098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1715947003841!5m2!1sru!2s"
                     allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"/>
          </div>
        </div>
      </SectionUI>
  );
};

export default Contact;