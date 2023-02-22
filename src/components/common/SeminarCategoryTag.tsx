/**
 *
 * セミナーのカテゴリタグのコンポーネントです
 *
 */

import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// next.jsの機能
import Link from 'next/link';

// import useTime from '@/hooks/useTime';

import styles from './SeminarCategoryTag.module.scss';




//= ===========================各種インポートここまで

// type Props = {
//   id: string;
//   tag: object;
// };


const SeminarCategoryTag = (data) => {

  // const time = useTime(1000);

  // const [date, setDate] = useState(new Date());
  const time = new Date().toLocaleString();

  const yearStart = data.dateperiodstart.substring(0, 4);
  const monthStart = data.dateperiodstart.substring(5, 7) - 1;
  const dateStart = data.dateperiodstart.substring(8, 10);
  const hoursStart = data.dateperiodstart.substring(11, 13);
  const minutesStart = data.dateperiodstart.substring(14, 16);
  const start = new Date(yearStart, monthStart, dateStart, hoursStart, minutesStart).toLocaleString('ja-JP');

  const yearEnd = data.dateperiodend.substring(0, 4);
  const monthEnd = data.dateperiodstart.substring(5, 7) - 1;
  const dateEnd = data.dateperiodend.substring(8, 10);
  const hoursEnd = data.dateperiodend.substring(11, 13);
  const minutesEnd = data.dateperiodend.substring(14, 16);

  const end = new Date(yearEnd, monthEnd, dateEnd, hoursEnd, minutesEnd).toLocaleString('ja-JP');

  if(start > time){
    return (
      <>
        <p className={`${styles['c-list__li-tag']} ${styles['plan']}`}>開催予定</p>
      </>
    );
  } else if(start < time && time < end){
    return (
      <>
        <p className={`${styles['c-list__li-tag']} ${styles['receipt']}`}>募集中</p>
      </>
    );
  } else if(end < time){
    return (
      <>
        <p className={`${styles['c-list__li-tag']} ${styles['end']}`}>終了</p>
      </>
    );
  }

};

export default SeminarCategoryTag;