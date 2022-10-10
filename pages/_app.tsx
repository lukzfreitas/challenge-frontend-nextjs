import { GlobalStyyled } from "../styles/globals"
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import pt from "../lang/pt.json";
import en from "../lang/en.json";

const messages = { pt, en };

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  if (locale == 'pt' || locale == 'en') {
    console.log(locale);
    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        <GlobalStyyled /><Component {...pageProps} />
      </IntlProvider>
    )
  }

}

export default MyApp
