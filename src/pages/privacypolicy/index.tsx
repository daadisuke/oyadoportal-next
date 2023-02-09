// components : layout
import type { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Breadcrumb from '@/components/common/Breadcrumb';

//libs
import { getPath } from '@/libs/pathManager';

import Default from '@/components/layouts/Default';
import styles from './index.module.scss';

//= ===========================各種インポートここまで

// レイアウトを定義
Privacypolicy.getLayout = (page: ReactElement) => (
  <>
    <Default>{page}</Default>
  </>
);

export default function Privacypolicy() {
  return (
    <>
        <div className={styles['c-heading']}>
            <h1 className={styles['c-heading__pageTitle']}>
                プライバシーポリシー
            </h1>
        </div>

        <section className={`${styles['privacypolicy-main']} ${styles['l-section']}`}>

            <div className={styles['l-section__inner']}>
                
                <h3 className={styles['c-heading__tertiary-detail']}>
                    個人情報保護法
                </h3>

                <p>株式会社お宿ポータル（以下「当社」といいます。）は、ユーザーの個人情報が、個人情報保護法および個人の人格尊重(プライバシー保護)の理念の下に、適正かつ慎重に取り扱われるべきものであり、法令遵守のみならず個人の権利利益と密接に関わるものであるという認識に基づき、適切な個人情報の保護に努めます。</p>
                
                <h3 className={styles['c-heading__tertiary-detail']}>
                    個人情報の取扱いについて
                </h3>

                <p>当社は、当社が提供するサービス（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。</p>

                <h4 className={styles['c-heading__quaternary-detail']}>
                    第1条（個人情報）
                </h4>

                <p>「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、氏名・生年月日・住所・電話番号・電子メールアドレスその他の連絡先・記述等により特定の個人を識別できる情報およびその他付随する情報を指します。</p>
            
                <h4 className={styles['c-heading__quaternary-detail']}>
                    第2条（個人情報の取得方法）
                </h4>

                <p>当社は、ユーザーが利用登録をする際または当社のサービスを利用する際、氏名（法人の場合は法人名）・生年月日・住所・電話番号・メールアドレスなど、個人を特定できる情報を取得させていただきます。</p>
            
                <h4 className={styles['c-heading__quaternary-detail']}>
                    第3条（個人情報を取得・利用する目的）
                </h4>

                <p>当社が個人情報を取得・利用する目的は、以下のとおりです。</p>

                <ol className={styles['c-list__number-circle']}>
                    <li><span>&#9312;</span>当社サービスの提供・運営のため</li>
                    <li><span>&#9313;</span>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                    <li><span>&#9314;</span>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等および当社が提供する他のサービスの案内のメールを送付するため</li>
                    <li><span>&#9315;</span>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                    <li><span>&#9316;</span>その他、前各号に係る業務の遂行上必要な範囲</li>
                </ol>

                <h4 className={styles['c-heading__quaternary-detail']}>
                    第4条（利用目的の変更）
                </h4>

                <ol className={styles['c-list__number']}>
                    <li>当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。</li>
                    <li>利用目的の変更を行った場合には、変更後の目的について、当社所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。</li>
                </ol>

                <h4 className={styles['c-heading__quaternary-detail']}>
                    第5条（個人情報の第三者提供）
                </h4>

                <ol className={styles['c-list__number']}>
                    <li>当社は、以下の各号に該当する場合を除いて、第三者に個人情報を開示または提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
                        <ol className={styles['c-list__number-circle']}>
                            <li><span>&#9312;</span>ユーザーの同意がある場合</li>
                            <li><span>&#9313;</span>統計的なデータなどユーザーを識別することができない状態で開示・提供する場合</li>
                            <li><span>&#9314;</span>法令に基づき開示・提供を求められた場合</li>
                            <li><span>&#9315;</span>人の生命、身体または財産の保護のために必要な場合であって、ユーザーの同意を得ることが困難である場合</li>
                            <li><span>&#9316;</span>国または地方公共団体等が公的な事務を実施するうえで、協力する必要がある場合であって、ユーザーの同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合</li>
                        </ol>
                    </li>
                    <li>前項の定めにかかわらず、次に掲げる場合には、当該情報の提供先は第三者に該当しないものとします。
                        <ol className={styles['c-list__number-circle']}>
                            <li><span>&#9312;</span>当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合</li>
                            <li><span>&#9313;</span>合併その他の事由による事業の承継に伴って個人情報が提供される場合</li>
                            <li><span>&#9314;</span>業務を円滑に進めるため、当社のグループ会社との間で共同して利用する場合であって、その旨並びに共同して利用される個人情報の項目、共同して利用する者の範囲、利用する者の利用目的および当該個人情報の管理について責任を有する者の氏名または名称について、あらかじめ本人に通知し、または本人が容易に知り得る状態に置いた場合</li>
                        </ol>
                    </li>
                </ol>

                <h4 className={styles['c-heading__quaternary-detail']}>
                    第6条（個人情報の開示）
                </h4>

                <ol className={styles['c-list__number']}>
                    <li>当社は、ユーザーから個人情報の開示を求められたときは、ユーザーに対し、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。なお、個人情報の開示に際しては、1件あたり1、000円の手数料を申し受けます。
                        <ol className={styles['c-list__number-circle']}>
                            <li><span>&#9312;</span>本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</li>
                            <li><span>&#9313;</span>当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
                            <li><span>&#9314;</span>その他法令に違反することとなる場合</li>
                        </ol>
                    </li>
                    <li>前項の定めにかかわらず、次に掲げる場合には、当該情報の提供先は第三者に該当しないものとします。</li>
                </ol>

                <h4 className={styles['c-heading__quaternary-detail']}>
                    第7条（個人情報の訂正および削除）
                </h4>

                <ol className={styles['c-list__number']}>
                    <li>ユーザーは、当社の保有する自己の個人情報が誤った情報である場合には、当社が定める手続きにより、当社に対して個人情報の訂正、追加または削除（以下、「訂正等」といいます。）を請求することができます。</li>
                    <li>当社は、ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の訂正等を行うものとします。</li>
                    <li>当社は、前項の規定に基づき訂正等を行った場合、または訂正等を行わない旨の決定をしたときは遅滞なく、これをユーザーに通知します。</li>
                </ol>

                <h4 className={styles['c-heading__quaternary-detail']}>
                    第8条（個人情報の利用停止等）
                </h4>

                <p>当社の保有個人データに関して、お客様の情報の利用停止または消去（以下「利用停止」等といいます。）をご希望される場合には、当社のお問い合わせ窓口宛てにお申し出をお願いいたします。お申し出いただいた方がご本人であることを確認したうえで、原則として合理的な期間および範囲で利用停止または消去します。</p>

                <h4 className={styles['c-heading__quaternary-detail']}>
                    第9条（プライバシーポリシーの変更）
                </h4>

                <p>法令・各種ガイドライン等の制定や変更等に伴い、このプライバシーポリシーを変更することがあります。方針の変更につきましては当社ホームページ上において公表します。</p>

                <h4 className={styles['c-heading__quaternary-detail']}>
                    第10条（お問い合わせ窓口）
                </h4>

                <p>本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。</p>

                <div className={styles['company-info']}>

                    <p>住所：〒102-0093&nbsp;東京都千代田区平河町2-5-5 全国旅館会館2F</p>
                    <p>社名：株式会社お宿ポータル</p>
                    <p>Eメールアドレス：<a href="mailto:info@ryokan-hotel.jp">info@ryokan-hotel.jp</a></p>

                </div>

                <p className={styles['c-text__right']}>制定日&nbsp;2022年11月2日</p>

            </div>

            <Breadcrumb
                data={[
                {
                    name: 'TOP',
                    path: `${getPath('dashboard')}`,
                },
                {
                    name: 'プライバシーポリシー',
                },
                ]}
            />

        </section>

    </>
  );
}
