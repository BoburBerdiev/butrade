import {useTranslation} from "react-i18next";
import {FaCircleCheck} from "react-icons/fa6";
import {useEffect} from "react";
import {AnimatePresence , motion} from 'framer-motion'

const overlayVariants = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            duration: 0.3,
            delayChildren: 0.4
        }
    },
    hidden: {
        opacity: 0,
        transition: {
            when: "afterChildren",
            duration: 0.3,
            delay: 0.4
        }
    }
};

const FormModal = ({isOpen, setIsOpen}) => {
    const closeModal = () => {
        setIsOpen(false)
    }
    const stopPropagation = (e) => {
        e.stopPropagation()
    }

    const {t} = useTranslation()
    return (
        <>
            <AnimatePresence>
            {
                isOpen &&
        <motion.div initial="hidden"
               animate="visible"
               exit="hidden"
               variants={overlayVariants}  className={'w-screen flex flex-col items-center justify-center  h-screen fixed top-0 left-0 right-0 bottom-0 bg-currentBlue/60 z-[99999]'} onClick={(e ) =>  closeModal(e)}>
            <motion.div initial={{ y: "100vh" ,scaleY: 0 }}
                        animate={{ y: 0 , scaleY: 1 }}
                        exit={{  y: "100vh" , scaleY:0 }}
                        transition={{ duration: 0.4 }} className={'bg-white rounded-lg p-5 min-w-[300px] md:p-10 md:w-[500px] flex flex-col items-center gap-5'} onClick={stopPropagation}>
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
            </motion.div>
        </motion.div>
            }
                </AnimatePresence>
        </>
    );
};

export default FormModal;