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
import ColumnCategoryTag from './ColumnCategoryTag';

// 型
// import { BreadcrumbList } from 'types/breadcrumb'

// style
import styles from './ColumnList.module.scss';

//= ===========================各種インポートここまで

export default function ColumnList(data) {

  console.log(data);
  
  // console.log(data.count);
  // if(data.count){
  //   datacolumn = data.datacolumn.slice(3);
  // } else {
  //   datacolumn = data.datacolumn;
  // }

  return (
      <>
        <ul className={`${styles['c-list']} ${styles['seminar']}`}>
                {data.datacolumn.map((value,index)=>{
                  // console.log(data.count);
                  if(data.count){
                    if(index < data.count ){
                      return(
                          <li className={`${styles['c-list__li']}`}>
                              
                              <p className={`${styles['c-list__li-tag']} ${styles['it']}`}>
                                <ColumnCategoryTag
                                data={[
                                    {
                                        id: value['column_category'][0],
                                        tag: data.datacolumntag,
                                    },
                                ]}
                                />
                              </p>

                              <Link href={`/column/${value.id}`}>

                                  <p className={`${styles['c-list__li-ph']}`}>
                                    <Image src={`${value._embedded['wp:featuredmedia'][0].source_url}`} width={420} height={166} alt="" />
                                  </p>
                                  <div className={`${styles['c-list__li-textarea']}`}>
                                      <p className={`${styles['c-list__li-textarea-seminartitle']}`}>
                                        {value.title.rendered}
                                      </p>
                                      <p className={`${styles['c-list__li-textarea-column']}`}>{value.description}</p>
                                  </div>
                              </Link>

                          </li>
                      )
                    }
                } else {
                return(
                      <li className={`${styles['c-list__li']}`}>
                          
                          <p className={`${styles['c-list__li-tag']} ${styles['it']}`}>
                            <ColumnCategoryTag
                            data={[
                                {
                                    id: value['column_category'][0],
                                    tag: data.datacolumntag,
                                },
                            ]}
                            />
                          </p>

                          <Link href={`/column/${value.id}`}>

                              <p className={`${styles['c-list__li-ph']}`}>
                                <Image src={`${value._embedded['wp:featuredmedia'][0].source_url}`} width={420} height={166} alt="" />
                              </p>
                              <div className={`${styles['c-list__li-textarea']}`}>
                                  <p className={`${styles['c-list__li-textarea-seminartitle']}`}>
                                    {value.title.rendered}
                                  </p>
                                  <p className={`${styles['c-list__li-textarea-column']}`}>{value.description}</p>
                              </div>
                          </Link>

                      </li>
                  )
                }
                    
                }
              )}
          </ul>
      </>
  );
}
