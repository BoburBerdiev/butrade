import Layout from "@/layout";
import "@/styles/globals.css";
import {Noto_Sans, Noto_Sans_Display, Oswald} from 'next/font/google'
import {Client, HydrationProvider} from "react-hydration-provider";
import {Provider} from "react-redux";
import {QueryClient, QueryClientProvider} from "react-query";
import "../localization/i18n";
import {PersistGate} from "redux-persist/integration/react";
import store, {persistor} from "@/store";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const oswald = Oswald({
  subsets: ['cyrillic', 'latin'],
  weight: ['500'],
  variable: '--font-oswald'
})
const notoSansDisplay = Noto_Sans_Display({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '600'],
  variable: '--font-noto-sans-display'
})
const notoSans = Noto_Sans({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500'],
  variable: '--font-noto-sans'

})

export default function App({Component, pageProps}) {
  const queryClient = new QueryClient();

  return (
      <>
        <HydrationProvider>
          <QueryClientProvider client={queryClient}>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <Client>
                  <main className={` ${oswald.variable} ${notoSansDisplay.variable}`}>
                    <Layout>
                      <Component {...pageProps}/>
                    </Layout>
                  </main>
                </Client>
              </PersistGate>
            </Provider>
          </QueryClientProvider>
        </HydrationProvider>
      </>
  )
}
