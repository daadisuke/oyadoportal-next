/**
 *
 * パンくずのコンポーネントです。
 *
 * @usage
 * import Breadcrumb from '@/components/common/Breadcrumb'
 *
 * <Breadcrumb
 *   data={[
 *     {
 *       name: 'home',
 *       path: '/mypage',
 *     },
 *     {
 *       name: 'プロフィール',
 *       path: '/mypage/profile',
 *     },
 *     {
 *       name: 'プロフィール編集',
 *     },
 *   ]}
 * />
 *
 */

import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// next.jsの機能
import Link from 'next/link';

import Image from 'next/image';

// // components
import IconFont from './IconFont';

// 型
// import { BreadcrumbList } from 'types/breadcrumb'

// style
import styles from './CaseList.module.scss';

//= ===========================各種インポートここまで

export default function CaseList(datacace) {
//   console.log(datacace);
  return (
      <>

          <ul className={styles['p-case__list']}>
              {datacace.datacace.map((value,index)=>{
                //   console.log(value.company_name);
                if(index < datacace.count ){
                  return(
                      <li className={styles['p-case__list-li']}>
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
              }})}
        </ul>

      </>
  );
}
