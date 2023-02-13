/**
 *
 * コラム一覧ページのカテゴリタグのリンクボタンのコンポーネントです
 * 
 */
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// next.jsの機能
import Link from 'next/link';



//= ===========================各種インポートここまで

// type Props = {
//   id: string;
//   tag: object;
// };

export default function ColumnCategoryTagLink(data:any) {

  let categoryFlag01:boolean = false;
  let categoryFlag02:boolean = false;
  let categoryFlag03:boolean = false;
  let categoryFlag04:boolean = false;
  let categoryFlag05:boolean = false;

  return (
    <>
      {data.datacolumn.map((value:any)=>{
        console.log(value['column_category'][0]);
            
            if(value['column_category'][0] === 2 && categoryFlag01 == false){
              categoryFlag01 = true
              return (
                <>
                  <li>
                    <Link href={`/column_category/it_support`}>
                      ITサポート
                    </Link>
                  </li>
                </>
              );
            } else if(value['column_category'][0] === 4 && categoryFlag02 == false){
              categoryFlag02 = true
              return (
                <>
                  <li>
                    <Link href={`/column_category/human_resources_missing_resolution}`}>
                      人手不足解消
                    </Link>
                  </li>
                </>
              );
            } else if(value['column_category'][0] === 6 && categoryFlag03 == false){
              categoryFlag03 = true
              return (
                <>
                  <li>
                    <Link href={`/column_category/facility_introduction`}>
                      設備導入・改修
                    </Link>
                  </li>
                </>
              );
            } else if(value['column_category'][0] === 5 && categoryFlag04 == false){
              categoryFlag04 = true
              return (
                <>
                  <li>
                    <Link href={`/column_category/fund_missing_resolution`}>
                      資金不足解消
                    </Link>
                  </li>
                </>
              );
            } else if(value['column_category'][0] === 3 && categoryFlag05 == false){
              categoryFlag05 = true
              return (
                <>
                  <li>
                    <Link href={`/column_category/customer_acquisition_support`}>
                      集客サポート
                    </Link>
                  </li>
                </>
              );
            }
          }
      )}

    </>
  );

};