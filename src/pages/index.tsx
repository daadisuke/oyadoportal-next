// components : layout
import type { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Button from '@/components/common/button';

import CaseList from '@/components/common/CaseList';
import ColumnList from '@/components/common/ColumnList';
import SeminarListSwiper from '@/components/common/SeminarListSwiper';

import { Swiper, SwiperSlide } from 'swiper/react' //カルーセル用のタグをインポート
import SwiperCore, { Pagination, Navigation ,Scrollbar} from 'swiper' //使いたい機能をインポート

import Default from '@/components/layouts/Default';
import styles from '@/styles/Home.module.scss';

//= ===========================各種インポートここまで

// レイアウトを定義
Home.getLayout = (page: ReactElement) => (
  <>
    <Default>{page}</Default>
  </>
);

export const getStaticProps = async () => {
    const res01 = await fetch("https://012cloud.jp/oyado-portal/wp-json/wp/v2/case?_embed")
    const datacase = await res01.json()

    const res02 = await fetch("https://012cloud.jp/oyado-portal/wp-json/wp/v2/column?_embed")
    const datacolumn = await res02.json()

    const res03 = await fetch("https://012cloud.jp/oyado-portal/wp-json/wp/v2/column_category")
    const datacolumntag = await res03.json()

    const res04 = await fetch("https://012cloud.jp/oyado-portal/wp-json/wp/v2/seminar?_embed")
    const dataseminar = await res04.json()

    return {
        props:{
            datacace:datacase,
            datacolumn:datacolumn,
            datacolumntag:datacolumntag,
            dataseminar:dataseminar
        }
    }
}

export default function Home({datacace,datacolumn,datacolumntag,dataseminar}) {

  return (
    <>
      <main>

          <div className={styles['p-kv']}>

              <div className={styles['p-kv__ph']}>
                <Image src="/top/kv__ph.jpg" alt="" width={1088} height={175} />
              </div>

              <div className={styles['p-kv__copyarea']}>
                  <h2 className={styles['p-kv__copyarea-maincopy']}>
                    <Image src="/top/kv__copy.svg" alt="" width={72} height={16} />
                  </h2>
                  <p className={styles['p-kv__copyarea-bodycopy']}>ITを活用した豊富な実績とノウハウが<br className={styles['sp-br']} />あります！！<br />集客や人材確保、業務効率化、<br />資金の調達などお困りの際は<br className={styles['sp-br']} />お任せください！</p>
              </div>

          </div>

        </main>

        <section id="seminar" className={`${styles['seminar']} ${styles['l-section']}`}>

              <div className={styles['l-section__inner']}>

                  <h3 className={styles['top-heading__main-center']}>
                      ホテル・旅館のための<br className={styles['sp-br']} />実践セミナー<span>毎月開催</span>
                  </h3>

                  <div className={styles['swiper']}>

                      <SeminarListSwiper
                        dataseminar={dataseminar}
                        dateperiodstart={dataseminar.overview_period_start_time}
                        dateperiodend={dataseminar.overview_period_end_time}
                        count={3}
                      />

                  </div>

                  <div className={styles['p-top']}>
                      <p className={styles['c-btn__more']}>
                      <Button
                            tagType="a"
                            href="/seminar/"
                            theme="basic"
                            text="セミナー一覧へ"
                            />
                      </p>
                  </div>

              </div>

          </section>

          <section className={`${styles['result']} ${styles['l-section']}`}>

              <div className={styles['l-section__inner']}>

                  <h3 className={`${styles['top-heading__main-center']} ${styles['white']}`}>
                      弊社グループ実績・規模
                  </h3>

                  <div className={`${styles['c-list']} ${styles['result']}`}>
                      <dl>
                          <dt>IT化支援数</dt>
                          <dd>
                              <Image src="/top/results__it.png" width={370} height={235} alt="累計160万件" />
                          </dd>
                      </dl>
                      <dl>
                          <dt>補助金導入支援総額</dt>
                          <dd>
                              <Image src="/top/results__subsidy.png" width={370} height={235}  alt="累計130億円" />
                          </dd>
                      </dl>
                      <dl>
                          <dt>グループ規模</dt>
                          <dd>
                                <Image src="/top/results__group.png" width={370} height={235}  alt="全国12支社グループ22社従業員数約1,000人" />
                          </dd>
                      </dl>
                  </div>

              </div>

          </section>

          <section id="problem" className={`${styles['problem']} ${styles['l-section']}`}>

              <div className={styles['l-section__inner']}>

                  <h3 className={`${styles['top-heading__main-center']}`}>
                      ホテル、旅館のお悩み<br className={styles['sp-br']} />解決します
                  </h3>

                  <div className={styles['problem__detail-wrap']}>

                      <div className={styles['problem__detail']}>

                          <figure className={styles['problem__detail-ph']}>
                              <Image src="/top/problem__it.jpg" width={384} height={402} alt="" />
                          </figure>

                          <div className={styles['problem__detail-contents']}>
                              <h4 className={styles['problem__detail-contents-question']}>
                                  ITで何をしたらいいか分からない
                              </h4>
                              <div className={styles['problem__detail-contents-answer']}>
                                  <Image src="/top/problem__answer__it.svg" width={875} height={135} alt="累計160万件以上のIT化を支援した弊社にお任せください！" />
                              </div>
                              <dl className={styles['problem__detail-contents-item']}>
                                  <dt>業務効率化に効果的な商材例</dt>
                                  <dd>
                                      <ul>
                                          <li>
                                              <Image src="/top/item__01.svg" width={80} height={57} alt="" />
                                              <span>WEBサイト<br />構築・改善</span></li>
                                          <li>
                                              <Image src="/top/item__02.svg" width={80} height={57} alt="" />
                                              <span>館内インターネット</span>
                                          </li>
                                          <li>
                                              <Image src="/top/item__03.svg" width={80} height={57} alt="" />
                                              <span>ホテル管理<br />システム導入</span>
                                          </li>
                                          <li>
                                              <Image src="/top/item__04.svg" width={80} height={57} alt="" />
                                              <span>キャッシュレス<br />会計ソフト導入</span>
                                          </li>
                                      </ul>
                                  </dd>
                              </dl>
                          </div>

                      </div>

                      <div className={styles['problem__detail']}>

                          <figure className={styles['problem__detail-ph']}>
                              <Image src="/top/problem__attracting.jpg" width={384} height={402} alt="" />
                          </figure>

                          <div className={styles['problem__detail-contents']}>
                              <h4 className={styles['problem__detail-contents-question']}>
                                  もっとお客さんを増やしたい
                              </h4>
                              <div className={styles['problem__detail-contents-answer']}>
                                  <Image src="/top/problem__answer__attracting.svg" width={875} height={135} alt="地域内外、インバウンドでお客さん獲得に貢献できます！" />
                              </div>
                              <dl className={styles['problem__detail-contents-item']}>
                                  <dt>集客に効果的な商材例</dt>
                                  <dd>
                                      <ul>
                                          <li>
                                              <Image src="/top/item__05.svg" width={80} height={57} alt="" />
                                              <span>広告運用</span>
                                          </li>
                                          <li>
                                              <Image src="/top/item__06.svg" width={80} height={57} alt="" />
                                              <span>SNS運用</span></li>
                                          <li>
                                              <Image src="/top/item__07.svg" width={80} height={57} alt="" />
                                              <span>インバウンド集客</span></li>
                                          <li>
                                              <Image src="/top/item__08.svg" width={80} height={57} alt="" />
                                              <span>OTA運用代行</span>
                                          </li>
                                      </ul>
                                  </dd>
                              </dl>
                          </div>

                      </div>

                      <div className={styles['problem__detail']}>

                          <figure className={styles['problem__detail-ph']}>
                              <Image src="/top/problem__shorthanded.jpg" width={384} height={402} alt="" />
                          </figure>

                          <div className={styles['problem__detail-contents']}>
                              <h4 className={styles['problem__detail-contents-question']}>
                                  人手不足を解消したい
                              </h4>
                              <div className={styles['problem__detail-contents-answer']}>
                                  <Image src="/top/problem__answer__shorthanded.svg" width={875} height={135} alt="弊社の豊富な実績を持つマッチングサービスをご紹介します" />
                              </div>
                              <dl className={styles['problem__detail-contents-item']}>
                                  <dt>人手不足の解消に効果的な商材例</dt>
                                  <dd>
                                      <ul>
                                          <li>
                                              <Image src="/top/item__09.svg" width={80} height={57} alt="" />
                                              <span>日本人人材採用</span>
                                          </li>
                                          <li>
                                              <Image src="/top/item__10.svg" width={80} height={57} alt="" />
                                              <span>外国人人材採用</span>
                                          </li>
                                          <li>
                                              <Image src="/top/item__11.svg" width={80} height={57} alt="" />
                                              <span>派遣,パート採用</span>
                                          </li>
                                          <li>
                                              <Image src="/top/item__12.svg" width={80} height={57} alt="" />
                                              <span>受電代行</span>
                                          </li>
                                      </ul>
                                  </dd>
                              </dl>
                          </div>

                      </div>

                      <div className={styles['problem__detail']}>

                          <figure className={styles['problem__detail-ph']}>
                              <Image src="/top/problem__funds.jpg" width={384} height={402} alt="" />
                          </figure>

                          <div className={styles['problem__detail-contents']}>
                              <h4 className={styles['problem__detail-contents-question']}>
                                  資金不足を解消したい
                              </h4>
                              <div className={styles['problem__detail-contents-answer']}>
                                  <Image src="/top/problem__answer__funds.svg" width={875} height={135} alt="累計130億円の補助金導入支援！弊社にお任せください！" />
                              </div>
                              <dl className={styles['problem__detail-contents-item']}>
                                  <dt>資金不足の解消に効果的な商材例</dt>
                                  <dd>
                                      <ul>
                                          <li>
                                              <Image src="/top/item__13.svg" width={80} height={57} alt="" />
                                              <span>補助金</span>
                                          </li>
                                          <li>
                                              <Image src="/top/item__14.svg" width={80} height={57} alt="" />
                                              <span>助成金</span>
                                          </li>
                                          <li>
                                              <Image src="/top/item__15.svg" width={80} height={57} alt="" />
                                              <span>融資</span>
                                          </li>
                                          <li>
                                              <Image src="/top/item__16.svg" width={80} height={57} alt="" />
                                              <span>売却相談</span>
                                          </li>
                                      </ul>
                                  </dd>
                              </dl>
                          </div>

                      </div>

                      <div className={styles['problem__detail']}>

                          <figure className={styles['problem__detail-ph']}>
                              <Image src="/top/problem__equipment.jpg" width={384} height={402} alt="" />
                          </figure>

                          <div className={styles['problem__detail-contents']}>
                              <h4 className={styles['problem__detail-contents-question']}>
                                  設備を充実させたい
                              </h4>
                              <div className={styles['problem__detail-contents-answer']}>
                                  <Image src="/top/problem__answer__equipment.svg" width={875} height={135} alt="館内がいの改修から大規模修繕まで！弊社にお任せください！" />                       
                              </div>
                              <dl className={styles['problem__detail-contents-item']}>
                                  <dt>設備の充実に効果的な商材例</dt>
                                  <dd>
                                      <ul>
                                          <li>
                                              <Image src="/top/item__17.svg" width={80} height={57} alt="" />
                                              <span>館内電話</span></li>
                                          <li>
                                              <Image src="/top/item__18.svg" width={80} height={57} alt="" />
                                              <span>空調</span></li>
                                          <li>
                                              <Image src="/top/item__19.svg" width={80} height={57} alt="" />
                                              <span>ボイラー</span></li>
                                          <li>
                                              <Image src="/top/item__20.svg" width={80} height={57} alt="" />
                                              <span>内装・外装・<br />大規模修繕</span></li>
                                      </ul>
                                  </dd>
                              </dl>
                          </div>

                      </div>

                  </div>

              </div>

          </section>

          <section id="case" className={`${styles['case']} ${styles['l-section']}`}>

              <div className={styles['l-section__inner']}>

                  <h3 className={`${styles['top-heading__main-center']} ${styles['white']}`}>
                      事例紹介
                  </h3>

                  <p className={`${styles['c-text__lead']} ${styles['white']}`}>商品をご活用頂いているお客様の導入事例や実績についてご紹介します。</p>

                  <CaseList
                    datacace={datacace}
                    count={3}
                    />

                  <div className={styles['p-top']}>
                      <p className={styles['c-btn__more']}>
                        <Button
                            tagType="a"
                            href="/case/"
                            theme="basic"
                            text="事例紹介一覧へ"
                            />
                      </p>
                  </div>

              </div>

          </section>

          <section id="column" className={`${styles['column-top']} ${styles['l-section']}`}>

              <div className={`${styles['l-section__inner']}`}>

                  <h3 className={`${styles['top-heading__main-center']}`}>
                      お役立ちコラム
                  </h3>

                  <p className={`${styles['c-text__lead']}`}>ホテル・旅館の運営に役立つ情報をコラム形式でお届けしています。</p>

                  <ColumnList
                    datacolumn={datacolumn}
                    datacolumntag={datacolumntag}
                    count={3}
                  />

                  <div className={styles['p-top']}>
                      <p className={styles['c-btn__more']}>
                        <Button
                        tagType="a"
                        href="/column/"
                        theme="basic"
                        text="お役立ちコラム一覧へ"
                        />
                      </p>
                  </div>

              </div>

          </section>

    </>
  );
}
