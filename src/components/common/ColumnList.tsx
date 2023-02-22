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



// style
import styles from './ColumnList.module.scss';

//= ===========================各種インポートここまで

type Props = {
  datacolumn: DataColumnList;
  datacolumntag: any;
  count?: number | undefined;
};

type DataColumnItem = {
  id: number;
  company_name: string;
  title: any;
  _embedded: any;
  rendered: string;
  description: string;
};

type DataColumnList = DataColumnItem[];

export default function ColumnList({ datacolumn, datacolumntag, count }: Props) {

  return (
      <>
        <ul className={`${styles['c-list']} ${styles['seminar']}`}>
                {datacolumn.map((value:any,index:number)=>{

                  if(count){
                    if(index < count ){
                      return(
                          <li key={index} className={`${styles['c-list__li']}`}>
                              
                              <p className={`${styles['c-list__li-tag']} ${styles['it']}`}>
                                <ColumnCategoryTag
                                data={[
                                    {
                                        id: value['column_category'][0],
                                        tag: datacolumntag,
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
                      <li key={index} className={`${styles['c-list__li']}`}>
                          
                          <p className={`${styles['c-list__li-tag']} ${styles['it']}`}>
                            <ColumnCategoryTag
                            data={[
                                {
                                    id: value['column_category'][0],
                                    tag: datacolumntag,
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
