// components : layout
import type { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Breadcrumb from '@/components/common/Breadcrumb';

//libs
import { getPath } from '@/libs/pathManager';

import Default from '@/components/layouts/Default';
import styles from './index.module.scss';

//= ===========================各種インポートここまで

// レイアウトを定義
Company.getLayout = (page: ReactElement) => (
  <>
    <Default>{page}</Default>
  </>
);

export default function Company() {
  return (
    <>
      <div className={styles['c-heading']}>
        <h1 className={styles['c-heading__pageTitle']}>会社概要</h1>
      </div>

      <section className={`${styles['company-main']} ${styles['l-section']}`}>
        <div className={styles['l-section__inner']}>
          <div className={styles['company-scale']}>
            <h2 className={styles['c-heading__secondary__line']}>グループ企業の規模</h2>

            <h3 className={styles['c-heading__tertiary__gray']}>支社数</h3>

            <figure className={styles['company-scale__map']}>
              <Image
                src="/company/company__map.svg"
                alt=""
                width={690}
                height={253}
              />
            </figure>

            <div className={styles['company-scale__bottom']}>
              <div className={styles['company-scale__bottom-graph']}>
                <h3 className={styles['c-heading__tertiary__gray']}>従業員数推移</h3>
                <figure className={styles['company-scale__bottom-graph-l']}>
                  <Image
                    src="/company/company__graph.svg"
                    alt="図：従業員数推移"
                    width={460}
                    height={253}
                  />
                </figure>
              </div>
              <div className={styles['company-scale__bottom-graph']}>
                <h3 className={styles['c-heading__tertiary__gray']}>創業10年の累計獲得実績</h3>
                <figure className={styles['company-scale__bottom-graph-r-scale']}>
                  <Image
                    src="/company/company__total.svg"
                    alt="累計IT支援数160万件以上"
                    width={380}
                    height={253}
                  />
                </figure>
                <figure className={styles['company-scale__bottom-graph-r-results']}>
                  <Image
                    src="/company/company__results.svg"
                    alt="図:光回線1,177,770件 ライフライン401,961件 キャッシュレス53,374件 フードデリバリー17,830件 運用代行14,355件 SaaS14,329件"
                    width={460}
                    height={253}
                  />
                </figure>
              </div>
            </div>
          </div>

          <div className={styles['company-table']}>
            <dl>
              <dt>会社名</dt>
              <dd>株式会社お宿ポータル</dd>
            </dl>
            <dl>
              <dt>所在地</dt>
              <dd>
                〒102-0093
                <br />
                東京都千代田区平河町２丁目５−５全国旅館会館2階
              </dd>
            </dl>
            <dl>
              <dt>資本金</dt>
              <dd>6,000万円（グループ全体）</dd>
            </dl>
            <dl>
              <dt>代表者</dt>
              <dd>野井&nbsp;裕司</dd>
            </dl>
            <dl>
              <dt>グループ会社</dt>
              <dd>22社</dd>
            </dl>
            <dl>
              <dt>従業員数</dt>
              <dd>1,171人（グループ全体）</dd>
            </dl>
            <dl>
              <dt>全国支社数</dt>
              <dd>12支社（グループ全体）</dd>
            </dl>
          </div>
        </div>

        <Breadcrumb
          data={[
            {
              name: 'TOP',
              path: `${getPath('dashboard')}`,
            },
            {
              name: '会社概要',
            },
          ]}
        />
      </section>
    </>
  );
}
