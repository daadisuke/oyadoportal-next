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
SeminarId.getLayout = (page: ReactElement) => (
    <>
        <Default>{page}</Default>
    </>
);

export const getStaticPaths = async () => {
    const res=await fetch("https://012cloud.jp/oyado-portal/wp-json/wp/v2/seminar?_embed")
    const data=await res.json()
    
    const paths = data.map((value) => ({
        params: { id: `${value.id}` },
    }))

    // console.log(paths);

    return {
        paths,
        fallback:false
    }
}

export const getStaticProps = async (context) => {

    const id=context.params.id
    const res = await fetch(`https://012cloud.jp/oyado-portal/wp-json/wp/v2/seminar/${id}`)
    const dataseminar = await res.json()

    return {
        props:{
            dataseminar:dataseminar,
        }
    }
}

export default function SeminarId(data) {
    // console.log(data.datacolumn['column_category'][0]);
    // console.log(data.datacolumntag);
    // console.log(data.datacolumn['supervisor'][0]);
    console.log(data.dataseminar);
    return (
        <>
            <section className={`${styles['detail']} ${styles['l-section']}`}>

                <div className={`${styles['p-detail']} ${styles['l-section__inner']}`}>

                    {/* <p className={styles['tag__case']}>
                        <span className={styles['name']}>ビジネスホテルバンさん</span>
                    </p> */}

                    <h1>{data.dataseminar.title.rendered}</h1>

                    <div dangerouslySetInnerHTML={{__html: data.dataseminar.content.rendered}}/>

                    <h3>開催概要</h3>

                    <table>
                            <tbody>
                                <tr>
                                    <th>開催日</th>
                                    <td>
                                        {data.dataseminar.overview_period_start_time}
                                    </td>
                                </tr>
                                <tr>
                                    <th>参加費</th>
                                    <td>{data.dataseminar.overview_price}</td>
                                </tr>
                                <tr>
                                    <th>開催場所</th>
                                    <td>{data.dataseminar.overview_place}</td>
                                </tr>
                                <tr>
                                    <th>ウェビナーURL</th>
                                    <td>{data.dataseminar.overview_webinar_url}</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3>お申込みについて</h3>

                        <p>下記の「セミナーのお申し込みはこちらから」よりお申込みをお願いいたします。 お申込み完了確認後、弊社担当より参加用URLを送信させていただきます。</p>

                </div>

                <Breadcrumb
                    data={[
                        {
                            name: 'TOP',
                            path: `${getPath('dashboard')}`,
                        },
                        {
                            name: '事例紹介',
                            path: `${getPath('seminar')}`,
                        },
                        {
                            name: data.dataseminar.title.rendered,
                        },
                    ]}
                />

            </section>

        </>
    );
}