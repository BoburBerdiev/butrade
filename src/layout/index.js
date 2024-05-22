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

  useEffect(() => {
    refetchCatalog()
  }, []);
  return (
    <div className='relative '>
      <TopNav/>
      <Navbar links={catalog}/>
      <BottomNav/>
      <div className={'h-[calc(100vh - 88px)] bg-white'}>
        {
          children
        }
      </div>
      <Footer/>
    </div>
  )
}

export default Layout