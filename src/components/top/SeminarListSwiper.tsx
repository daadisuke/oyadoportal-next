/**
 *
 * トップページのセミナー一覧のコンポーネントです。
 *
 */

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react' //カルーセル用のタグをインポート
import SwiperCore, {Navigation ,Scrollbar} from 'swiper' //使いたい機能をインポート

// // components
import SeminarCategoryTag from '@/components/common/SeminarCategoryTag';

import Link from 'next/link';
import styles from './SeminarListSwiper.module.scss';
import 'swiper/css';

SwiperCore.use([Navigation, Scrollbar]) 

export default function SeminarListSwiper(data:any) {
  return (
    <Swiper
      slidesPerView={1} //一度に表示するスライドの数
      navigation //スライドを前後させるためのボタン、スライドの左右にある
      loop={true}
      spaceBetween={0}
      scrollbar={{ draggable: true }}
      breakpoints={{
        // when window width is >= 320px
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: false,
          scrollbar: false,
          navigation: false,
          allowTouchMove: false
        },
      }}
      
    >
      {data.dataseminar.map((value,index:number) => {
        return (
          <SwiperSlide key={index} className={`c-list__li`}>
            <Link href={`/seminar/${value.id}`}>
            <SeminarCategoryTag dateperiodstart={value.overview_period_start_time} dateperiodend={value.overview_period_end_time}></SeminarCategoryTag>
            <p className={'c-list__li-ph'}>
            <Image
                src={`${value._embedded['wp:featuredmedia'][0].source_url}`}
                layout="responsive"
                width={640}
                height={400}
                alt="test_image"
              />
            </p>
            <div className={'c-list__li-textarea'}>
                <p className={'c-list__li-textarea-date'}>
                  {value.period_start_time}
                </p>
                <p className={'c-list__li-textarea-seminartitle'}>
                  {value.title.rendered}
                </p>
            </div>
            </Link>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
