import { BottomNav, Footer, Navbar, TopNav } from '@/components'
import apiService from "@/service/axois";
import {useQuery} from "react-query";
import {useEffect} from "react";
import {domAnimation, LazyMotion} from "framer-motion";

const Layout = ({children}) => {
  const { data: catalog,refetch:refetchCatalog } = useQuery("catalog", () =>
          apiService.getData("/categories/"),
      {
        enabled:false
      }
  );
    const { data: contact,refetch:refetchContact } = useQuery("contact", () =>
            apiService.getData("/about/contact/"),
        {
            enabled:false
        }
    );

  useEffect(() => {
    refetchCatalog()
    refetchContact()
  }, []);

    console.log('doda')
  return (
    <div className='relative '>
      <LazyMotion features={domAnimation}>
        <TopNav contact={contact}/>
        <Navbar links={catalog} contact={contact}/>
        <BottomNav catagorys={catalog}/>
        <div className={'min-h-screen bg-white'}>
          {
            children
          }
        </div>
        <Footer/>
      </LazyMotion>
    </div>
  )
}

export default Layout