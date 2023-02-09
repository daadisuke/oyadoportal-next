// reactの機能
import type { ReactElement, ReactNode } from 'react';

// next.jsの機能
import type { NextPage } from 'next';
import { AppProps } from 'next/app';

import SiteHead from '@/components/layouts/includes/SiteHead';

import '@/styles/style.scss';

//= ===========================各種インポートここまで

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  /**
   *
   * getLayoutについて
   * @see {@link https://nextjs.org/docs/basic-features/layouts}
   *
   */
  const getLayout = Component.getLayout ?? ((page) => page);

  return <>
  <SiteHead />
  {getLayout(<Component {...pageProps} />)}
  </>;
}

export default App;
