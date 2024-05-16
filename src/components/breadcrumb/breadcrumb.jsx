
import { FaChevronRight } from "react-icons/fa6";
import Link from "next/link";
const Breadcrumb = ({pageName, links}) => {
    return (
        <div className={'w-full '}>
            <div className={'flex items-center gap-2 font-notoSansDisplay pb-5 md:pb-[30px]'}>
                <Link href={'/'} className={'text-currentGray'}>Главная</Link>
                <FaChevronRight className={'w-3 h-3'}/>
                <p className={'text-currentBlue'}>{pageName}</p>
            </div>
        </div>

    );
};

export default Breadcrumb;