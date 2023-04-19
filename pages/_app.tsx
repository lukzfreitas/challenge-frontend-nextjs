import { GlobalStyyled } from "../styles/globals"
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import pt from "../lang/pt.json";
import en from "../lang/en.json";
import Head from "next/head";

const messages = { pt, en };

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  if (locale == 'pt' || locale == 'en') {    
    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Head>
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <GlobalStyyled /><Component {...pageProps} />
      </IntlProvider>
    )
  }

}

export default MyApp
