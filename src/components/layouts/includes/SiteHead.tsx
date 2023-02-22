/**
 *
 * Headのベースを設定しているコンポーネントです
 * meta情報などを制御出来ます
 *
 * @usege
 * import SiteHead from '@/components/layouts/includes/SiteHead'
 *
 * 他のページで呼び出すことでtitleやdescriptionをページ単位で設定できます
 * <SiteHead
 *  title='ページタイトル'
 *  description='ページの説明'
 *  image='ogimageのurl'
 *  url='ページのurl'
 * />
 *
 */

// next.jsの機能
import Head from 'next/head';

// import { baseUrl } from 'utils/constants'

//= ===========================各種インポートここまで

interface Props {
  title?: string;
  titleAllReplace?: boolean; // タイトルを全て置き換えるかどうか
  description?: string;
  keyword?: string;
  ogimage?: string;
  ogurl?: string;
}

const SiteHead = ({ title, titleAllReplace, description, keyword, ogimage, ogurl }: Props) => {
  return (
    <Head>
      <meta
        name="robots"
        content="noindex"
      />
      {/* 基本 */}
      <title>{title ? `${title}${!titleAllReplace ? ' | 株式会社お宿ポータル' : ''}` : `株式会社お宿ポータル`}</title>
      <meta
        name="description"
        content={description ? `${description}` : `株式会社お宿ポータルは全国旅館会館2階に入居しており、ホテル・旅館のコンサルティングを行っている会社です。IT商材から補助金や設備の改修など幅広くお困りごとを解決いたします。`}
        key="description"
      />

      {/* OGP 共通設定 */}
      <meta
        property="og:title"
        content={title ? `${title}${!titleAllReplace ? ' | 株式会社お宿ポータル' : ''}` : `株式会社お宿ポータル`}
        key="og:title"
      />
      <meta
        property="og:description"
        content={description ? `${description}` : `株式会社お宿ポータルは全国旅館会館2階に入居しており、ホテル・旅館のコンサルティングを行っている会社です。IT商材から補助金や設備の改修など幅広くお困りごとを解決いたします。`}
        key="og:description"
      />
      <meta
        property="og:type"
        content="website"
        key="og:type"
      />
      <meta
        property="og:url"
        content={ogurl ? `${ogurl}` : `https://012cloud.jp/oyado-portal/`}
        key="og:url"
      />
      <meta
        property="og:site_name"
        content="株式会社お宿ポータル"
        key="og:site_name"
      />
      <meta
        property='og:image'
        content={ogimage ? `${ogimage}` : `https://012cloud.jp/img/ogimage.png`}
        key='og:image'
      />

      {/* OGP twitter用設定 */}
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
      <meta
        name="twitter:title"
        content={title ? `${title}${!titleAllReplace ? ' | 株式会社お宿ポータル' : ''}` : `株式会社お宿ポータル`}
        key="twitter:title"
      />
      <meta
        name="twitter:description"
        content={description ? `${description}` : `株式会社お宿ポータルは全国旅館会館2階に入居しており、ホテル・旅館のコンサルティングを行っている会社です。IT商材から補助金や設備の改修など幅広くお困りごとを解決いたします。`}
        key="twitter:description"
      />
      <meta
        name="twitter:url"
        content={ogurl ? `${ogurl}` : `https://012cloud.jp/oyado-portal/`}
        key="twitter:url"
      />
      <meta
        name='twitter:image'
        content={ogimage ? `${ogimage}` : `https://012cloud.jp/img/ogimage.png`}
        key='twitter:image'
      />
      <link
        rel="shortcut icon"
        href="https://012cloud.jp/oyado-portal/assets/img/base/favicon.ico">
      </link>
    </Head>
  );
};

export default SiteHead;
