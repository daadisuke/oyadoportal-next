/**
 *
 * コラムのカテゴリタグのコンポーネントです
 *
 */

import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// next.jsの機能
import Link from 'next/link';



//= ===========================各種インポートここまで

// type Props = {
//   id: number;
//   tag: DataColumnTagList;
// };

// type DataColumnTagItem = {
//   id: number;
//   company_name: string;
//   title: any;
//   _embedded: any;
//   rendered: string;
//   description: string;
// };

// type DataColumnTagList = DataColumnTagItem[];

export default function ColumnCategoryTag(data:any) {

  if(data['data'][0].id === 2){
    return (
      <>
        <Link href={`/column_category/${data['data'][0]['tag'][0].slug}`}>
          ITサポート
        </Link>
      </>
    );
  } else if(data['data'][0].id === 4){
    return (
      <>
        <Link href={`/column_category/${data['data'][0]['tag'][1].slug}`}>
          人手不足解消
        </Link>
      </>
    );
  } else if(data['data'][0].id === 6){
    return (
      <>
        <Link href={`/column_category/${data['data'][0]['tag'][2].slug}`}>
          設備導入・改修
        </Link>
      </>
    );
  } else if(data['data'][0].id === 5){
    return (
      <>
        <Link href={`/column_category/${data['data'][0]['tag'][3].slug}`}>
          資金不足解消
        </Link>
      </>
    );
  } else if(data['data'][0].id === 3){
    return (
      <>
        <Link href={`/column_category/${data['data'][0]['tag'][4].slug}`}>
          集客サポート
        </Link>
      </>
    );
  }

};