import Image from "next/image";
import { Inter } from "next/font/google";
import { Header, SectionUI } from "@/components";
import SectionTitle from "@/components/section-title/section-title";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header/>
      <SectionUI content={true} isRelative={true} className={'overflow-x-hidden'} paddingStyle={'pt-[30px] pb-6 md:pt-16 md:pb-10 lg:pt-[100px] lg:pb-[50px]'}>
        <div className="grid md:grid-cols-3">
          <div className="md:col-span-2">
            <SectionTitle title={'OOO “Beaming universe trade”'}/>
          </div>
        </div>
      </SectionUI>
    </>
  );
}
