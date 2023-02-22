/**
 *
 * 事例紹介のコンポーネントです。
 *
 */

import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// next.jsの機能
import Link from 'next/link';

import Image from 'next/image';

// // components
import IconFont from './IconFont';

// style
import styles from './CaseList.module.scss';

//= ===========================各種インポートここまで

type Props = {
    datacace: DatacaseList;
    count?: number | undefined;
};

type DatacaseItem = {
    id: number;
    company_name: string;
    title: any;
    _embedded: any;
    rendered: string;
    description: string;
};

type DatacaseList = DatacaseItem[];

export default function CaseList({ datacace, count }: Props) {

  return (
      <>

          <ul className={styles['p-case__list']}>
              {datacace.map((value,index:number)=>{
                //   console.log(value.company_name);
                if(index < count ){
                  return(
                      <li key={index} className={styles['p-case__list-li']}>
                          <Link href={`/case/${value.id}`}>
                              <p className={styles['p-case__list-li-name']}>{value.company_name}</p>
                              <div className={styles['p-case__list-li-wrap']}>
                                  <p className={styles['p-case__list-li-ph']}>
                                      <Image src={`${value._embedded['wp:featuredmedia'][0].source_url}`} width={420} height={166} alt="" />
                                  </p>
                                  <dl>
                                      <dt>{value.title.rendered}</dt>
                                      <dd>{value.description}</dd>
                                  </dl>
                              </div>
                          </Link>
                      </li>
                  )
              } else {
                    return(
                        <li key={index} className={styles['p-case__list-li']}>
                            <Link href={`/case/${value.id}`}>
                                <p className={styles['p-case__list-li-name']}>{value.company_name}</p>
                                <div className={styles['p-case__list-li-wrap']}>
                                    <p className={styles['p-case__list-li-ph']}>
                                        <Image src={`${value._embedded['wp:featuredmedia'][0].source_url}`} width={420} height={166} alt="" />
                                    </p>
                                    <dl>
                                        <dt>{value.title.rendered}</dt>
                                        <dd>{value.description}</dd>
                                    </dl>
                                </div>
                            </Link>
                        </li>
                    )
                }
              })}
        </ul>

      </>
  );
}
