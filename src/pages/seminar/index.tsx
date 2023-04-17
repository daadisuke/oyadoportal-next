// components : layout
import type { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SiteHead from '@/components/layouts/includes/SiteHead';

import Breadcrumb from '@/components/common/Breadcrumb';
import SeminarList from '@/components/common/SeminarList';

//libs
import { getPath } from '@/libs/pathManager';

import Default from '@/components/layouts/Default';
import styles from './index.module.scss';

//= ===========================各種インポートここまで

<SiteHead title="ホテル旅館の為の実践セミナー" />;

// レイアウトを定義
Seminar.getLayout = (page: ReactElement) => (
  <>
    <Default>{page}</Default>
  </>
);

export const getStaticProps = async () => {
  const res = await fetch('https://012cloud.jp/oyado-portal/wp-json/wp/v2/seminar?_embed');
  const data = await res.json();
  const dataseminar = data.reverse();

  return {
    props: { dataseminar: dataseminar },
  };
};

export default function Seminar({ dataseminar }) {
  return (
    <>
      <div className={styles['c-heading']}>
        <h1 className={styles['c-heading__pageTitle']}>ホテル旅館の為の実践セミナー</h1>
      </div>

      <section className={`${styles['company-main']} ${styles['l-section']}`}>
        <div className={styles['l-section__inner']}>
          <p className={styles['seminar-title__copy']}>
            <Image
              src="/seminar/seminar__title.svg"
              alt="宿泊事業者必見！ホテル・旅館がすべきインボイス対策"
              width={830}
              height={59}
            />
          </p>

          {/* <div className={`${styles['swiper-wrapper']} ${styles['c-list']} ${styles['seminar']}`}>

                        {props.dataseminar.map((value)=>{
                            console.log(value.overview_period_start_time);
                            console.log(value.overview_period_end_time);
                            return(
                                <div className={`${styles['swiper-slide']} ${styles['c-list__li']}`}>
                                <Link href={`/seminar/${value.id}`}>
                                    <SeminarCategoryTag dateperiodstart={value.overview_period_start_time} dateperiodend={value.overview_period_end_time}></SeminarCategoryTag>
                                    <p className={styles['c-list__li-ph']}>
                                        <Image src={`${value._embedded['wp:featuredmedia'][0].source_url}`} alt="" width={423} height={253} />
                                    </p>
                                    <div className={styles['c-list__li-textarea']}>
                                        <p className={styles['c-list__li-textarea-date']}>
                                            {value.period_start_time}
                                        </p>
                                        <p className={styles['c-list__li-textarea-seminartitle']}>
                                        {value.title.rendered}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            )
                        })}

                    </div> */}

          <SeminarList dataseminar={dataseminar} />
        </div>

        <Breadcrumb
          data={[
            {
              name: 'TOP',
              path: `${getPath('dashboard')}`,
            },
            {
              name: 'ホテル旅館の為の実践セミナー',
            },
          ]}
        />
      </section>
    </>
  );
}
