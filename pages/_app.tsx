import type { AppProps } from 'next/app';
import { GlobalStyles } from '../src/components/GlobalStyles';
import { initSentry } from '../src/utils/sentry';

initSentry();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
