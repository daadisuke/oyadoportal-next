/**
 *
 * コラム詳細のこの記事の監修者のコンポーネントです
 *
 */

import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// next.jsの機能
import Link from 'next/link';
import Image from 'next/image';



// style
import styles from './ColumnSupervisor.module.scss';

//= ===========================各種インポートここまで

// type Props = {
//   id: string;
//   tag: object;
// };

const ColumnSupervisor = (data) => {

    return (
      <>
        <div className={`${styles['supervision']}`}>
            <h4 className={`${styles['supervision__title']}`}>この記事の監修者</h4>
            <div className={`${styles['supervision__info']}`}>
                <figure className={`${styles['supervision__info-ph']}`}>
                  {/* <Image src={`${value._embedded['wp:featuredmedia'][0].source_url}`} width={500} height={300} alt="" />           */}
                </figure>
                <dl className={`${styles['supervision__info-text']}`}>
                    <dt><span>株式会社お宿ポータル代表</span>野井 裕司</dt>
                    <dd>帰国後は複数のベンチャー企業のスタートアップ、経営に携わり、2001年、経営コンサルタントとして独立。事業再生、海外市場進出、コンテンツマーケティングなどを中心に指導を行っている。米国のベストセラー『インバウンド
                        マーケティング』（すばる舎リンケージ）の翻訳者。明治学院大学院経済学部経営学科博士課程修了、経営学修士。</dd>
                </dl>
            </div>
        </div>
      </>
    );

};

export default ColumnSupervisor;