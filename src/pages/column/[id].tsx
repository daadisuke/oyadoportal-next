// components : layout
import type { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Breadcrumb from '@/components/common/Breadcrumb';

import ColumnCategoryTag from '@/components/common/ColumnCategoryTag';

import ColumnSupervisor from '@/components/common/ColumnSupervisor';

//libs
import { getPath } from '@/libs/pathManager';

import Default from '@/components/layouts/Default';
import styles from './index.module.scss';

//= ===========================各種インポートここまで

// レイアウトを定義
ColumnId.getLayout = (page: ReactElement) => (
    <>
        <Default>{page}</Default>
    </>
);

export const getStaticPaths = async () => {
    const res=await fetch("https://012cloud.jp/oyado-portal/wp-json/wp/v2/column?_embed")
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
    const res02 = await fetch(`https://012cloud.jp/oyado-portal/wp-json/wp/v2/column/${id}`)
    const datacolumn = await res02.json()

    // console.log(datacolumn['supervisor'][0]);

    const res03 = await fetch("https://012cloud.jp/oyado-portal/wp-json/wp/v2/column_category")
    const datacolumntag = await res03.json()

    const supervisor=datacolumn['supervisor'][0]
    const res04 = await fetch(`https://012cloud.jp/oyado-portal/wp-json/wp/v2/supervisor/${supervisor}`)
    const datasupervisor = await res04.json()

    return {
        props:{
            datacolumn:datacolumn,
            datacolumntag:datacolumntag,
            datasupervisor:datasupervisor
        }
    }
}

export default function ColumnId(data) {
    console.log(data.datacolumn);
    // console.log(data.datacolumntag);
    // console.log(data.datacolumn['supervisor'][0]);
    // console.log(data.datasupervisor);
    return (
        <>
            <section className={`${styles['detail']} ${styles['l-section']}`}>

                <div className={`${styles['p-detail']} ${styles['l-section__inner']}`}>

                    <p className={styles['tag__column']}>
                    <ColumnCategoryTag
                        data={[
                            {
                                id: data.datacolumn['column_category'][0],
                                tag: data.datacolumntag,
                            },
                        ]}
                    />
                    </p>

                    <h1>{data.datacolumn.title.rendered}</h1>

                    <div dangerouslySetInnerHTML={{__html: data.datacolumn.lead}}/>

                    <div dangerouslySetInnerHTML={{__html: data.datacolumn.body}}/>

                    <ColumnSupervisor
                        data={[
                            {
                                id: data.datacolumn['supervisor'][0],
                                tag: data.datasupervisor,
                            },
                        ]}
                    />

                </div>

                <Breadcrumb
                    data={[
                        {
                            name: 'TOP',
                            path: `${getPath('dashboard')}`,
                        },
                        {
                            name: 'お役立ちコラム',
                            path: `${getPath('column')}`,
                        },
                    ]}
                />

            </section>

        </>
    );
}