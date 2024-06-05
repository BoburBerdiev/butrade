import {useTranslation} from "react-i18next";
import {FaCircleCheck} from "react-icons/fa6";

const FormModal = ({isOpen, setIsOpen}) => {


    const closeModal = () => {
        setIsOpen(false)
    }
    const stopPropagation = (e) => {
        e.stopPropagation()
    }
    isOpen ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden")

    const {t} = useTranslation()
    return (
        <>
            {
                isOpen &&

        <div className={'w-screen flex flex-col items-center justify-center  h-screen fixed top-0 left-0 right-0 bottom-0 bg-currentBlue/60 z-[99999]'} onClick={(e ) =>  closeModal(e)}>
            <div className={'bg-white rounded-lg p-5 min-w-[300px] md:p-10 md:w-[500px] flex flex-col items-center gap-5'} onClick={stopPropagation}>
                <FaCircleCheck className={'w-24 h-24 md:w-32 md:h-32 text-currentBlue'} />
               <div className={'flex flex-col items-center gap-2'}>
                <h3 className={'font-semibold font-notoSans text-xl md:text-2xl lg:text-3xl text-center'}>
                {
                    t('modal.title')
                }

            </h3>
                <p className={'font-notoSans text-center text-currentBlue md:text-lg'}>
                    {t('modal.text')}
                </p>
               </div>

            </div>
        </div>
            }

        </>
    );
};

export default FormModal;