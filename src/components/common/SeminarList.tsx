/**
 *
 * コラム一覧のコンポーネントです。
 *
 */

import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// next.jsの機能
import Link from 'next/link';

import Image from 'next/image';

// // components
import SeminarCategoryTag from '@/components/common/SeminarCategoryTag';

// 型
// import { BreadcrumbList } from 'types/breadcrumb'

// style
import styles from './SeminarList.module.scss';

//= ===========================各種インポートここまで

export default function SeminarList(data) {

  return (
      <>
        <div className={`${styles['swiper-wrapper']} ${styles['c-list']} ${styles['seminar']}`}>

            {data.dataseminar.map((value,index)=>{
                // console.log(value.overview_period_start_time);
                // console.log(value.overview_period_end_time);
                if(data.count){
                    if(index < data.count){
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
                    }
                    } else {
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
                    }
                }
            )}
        </div>
      </>
  );
}
