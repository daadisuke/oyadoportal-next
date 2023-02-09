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
        content={description ? `${description}` : `ディスクリプションが入ります`}
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
        content={description ? `${description}` : `ディスクリプションが入ります`}
        key="og:description"
      />
      <meta
        property="og:type"
        content="website"
        key="og:type"
      />
      <meta
        property="og:url"
        content={ogurl ? `${ogurl}` : `https://callshare-wiz012.vercel.app/`}
        key="og:url"
      />
      <meta
        property="og:site_name"
        content="サイト名が入ります"
        key="og:site_name"
      />
      {/* <meta
        property='og:image'
        content={ogimage ? `${ogimage}` : `${baseUrl}/img/ogimage.png`}
        key='og:image'
      /> */}

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
        content={description ? `${description}` : `ディスクリプションが入ります`}
        key="twitter:description"
      />
      <meta
        name="twitter:url"
        content={ogurl ? `${ogurl}` : `https://callshare-wiz012.vercel.app/`}
        key="twitter:url"
      />
      {/* <meta
        name='twitter:image'
        content={ogimage ? `${ogimage}` : `${baseUrl}/img/ogimage.png`}
        key='twitter:image'
      /> */}
    </Head>
  );
};

export default SiteHead;
