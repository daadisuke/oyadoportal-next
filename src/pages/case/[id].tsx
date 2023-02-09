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
CaseId.getLayout = (page: ReactElement) => (
    <>
        <Default>{page}</Default>
    </>
);

export const getStaticPaths = async () => {
    const res=await fetch("https://012cloud.jp/oyado-portal/wp-json/wp/v2/case?_embed")
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
    const res = await fetch(`https://012cloud.jp/oyado-portal/wp-json/wp/v2/case/${id}`)
    const datacase = await res.json()

    return {
        props:{
            datacase:datacase,
        }
    }
}

export default function CaseId(data) {
    // console.log(data.datacolumn['column_category'][0]);
    // console.log(data.datacolumntag);
    // console.log(data.datacolumn['supervisor'][0]);
    // console.log(data.datacase);
    return (
        <>
            <section className={`${styles['detail']} ${styles['l-section']}`}>

                <div className={`${styles['p-detail']} ${styles['l-section__inner']}`}>

                    <p className={styles['tag__case']}>
                        <span className={styles['name']}>ビジネスホテルバンさん</span>
                    </p>

                    <h1>{data.datacase.title.rendered}</h1>

                    <div dangerouslySetInnerHTML={{__html: data.datacase.content.rendered}}/>
                </div>

                <Breadcrumb
                    data={[
                        {
                            name: 'TOP',
                            path: `${getPath('dashboard')}`,
                        },
                        {
                            name: '事例紹介',
                            path: `${getPath('case')}`,
                        },
                        {
                            name: data.datacase.title.rendered,
                        },
                    ]}
                />

            </section>

        </>
    );
}