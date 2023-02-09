/**
 *
 * パンくずのコンポーネントです。
 *
 * @usage
 *
 */

import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// next.jsの機能
import Link from 'next/link';

//= ===========================各種インポートここまで

const ColumnCategoryName = (data) => {

  if(data['data'][0].id === 2){
    return (
      <>
        ITサポート
      </>
    );
  } else if(data['data'][0].id === 4){
    return (
      <>
        人手不足解消
      </>
    );
  } else if(data['data'][0].id === 6){
    return (
      <>
        設備導入・改修
      </>
    );
  } else if(data['data'][0].id === 5){
    return (
      <>
        資金不足解消
      </>
    );
  } else if(data['data'][0].id === 3){
    return (
      <>
        集客サポート
      </>
    );
  }

};

export default ColumnCategoryName;