/**
 *
 * セミナー一覧のコンポーネントです。
 *
 */

import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// next.jsの機能
import Link from 'next/link';

import Image from 'next/image';

// // components
import SeminarCategoryTag from '@/components/common/SeminarCategoryTag';



// style
import styles from './SeminarList.module.scss';

//= ===========================各種インポートここまで

type Props = {
    dataseminar: DataSeminarList;
    count?: number | undefined;
};

type DataSeminarItem = {
    id: number;
    overview_period_start_time: string;
    overview_period_end_time: string;
    period_start_time: string;
    company_name: string;
    title: any;
    _embedded: any;
    rendered: string;
    description: string;
};

type DataSeminarList = DataSeminarItem[];

export default function SeminarList({ dataseminar ,count }: Props) {
    // console.log(dataseminar);
  return (
      <>
        <div className={`${styles['swiper-wrapper']} ${styles['c-list']} ${styles['seminar']}`}>

            {dataseminar.map((value,index)=>{
                console.log(value.period_start_time);
                
                if(count){
                    if(index < count){
                        return(
                            <div key={index} className={`${styles['swiper-slide']} ${styles['c-list__li']}`}>
                            <Link href={`/seminar/${value.id}`}>
                                <SeminarCategoryTag
                                    dateperiodstart={value.overview_period_start_time}
                                    dateperiodend={value.overview_period_end_time}
                                 />
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
                                <SeminarCategoryTag
                                    dateperiodstart={value.overview_period_start_time}
                                    dateperiodend={value.overview_period_end_time}
                                 />
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
