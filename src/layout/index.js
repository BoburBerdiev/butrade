import { BottomNav, Footer, Navbar, TopNav } from '@/components'
import apiService from "@/service/axois";
import {useQuery} from "react-query";
import {useEffect} from "react";

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

  return (
    <div className='relative '>
        <TopNav contact={contact}/>
        <Navbar catalog={catalog} contact={contact}/>
        <BottomNav catalog={catalog}/>
        <div className={'min-h-screen bg-white'}>
          {
            children
          }
        </div>
        <Footer/>
    </div>
  )
}

export default Layout