// components : layout
import type { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Breadcrumb from '@/components/common/Breadcrumb';

import ColumnCategoryName from '@/components/common/ColumnCategoryName';
import ColumnList from '@/components/common/ColumnList';

import ColumnSupervisor from '@/components/common/ColumnSupervisor';

//libs
import { getPath } from '@/libs/pathManager';

import Default from '@/components/layouts/Default';
import styles from './index.module.scss';

//= ===========================各種インポートここまで

// レイアウトを定義
ColumSlug.getLayout = (page: ReactElement) => (
    <>
        <Default>{page}</Default>
    </>
);

export const getStaticPaths = async () => {

    // console.log(context);

    const res = await fetch(`https://012cloud.jp/oyado-portal/wp-json/wp/v2/column_category`)
    const data=await res.json()
    
    const paths = data.map((value) => ({
        params: { slug: `${value.slug}` },
    }))

    return {
        paths,
        fallback:false
    }
}

export const getStaticProps = async (context) => {

    const slug=context.params.slug
    const res02 = await fetch(`https://012cloud.jp/oyado-portal/wp-json/wp/v2/column/${slug}`)
    const datacolumn = await res02.json()

    const res03 = await fetch("https://012cloud.jp/oyado-portal/wp-json/wp/v2/column_category")
    const datacolumntag = await res03.json()

    return {
        props:{
            datacolumn:datacolumn,
            datacolumntag:datacolumntag
        }
    }
}

export default function ColumSlug(data) {
    console.log(data);
    // console.log(data);
    return (
        <>
            <div className={styles['c-heading']}>
                <h1 className={styles['c-heading__pageTitle']}>
                    お役立ちコラム
                </h1>
            </div>

            <section className={`${styles['column-list']} ${styles['l-section']}`}>

                <div className={styles['l-section__inner']}>

                    <h2 className={styles['column-main__descTitle--secondary']}>
                        {/* <ColumnCategoryName
                            data={[
                                {
                                    id: data.datacolumn['column_category'][0]
                                },
                            ]}
                        /> */}
                    </h2>

                    <ColumnList
                        datacolumn={datacolumn}
                        datacolumntag={datacolumntag}
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
                        },
                    ]}
                />

            </section>

        </>
    );
}