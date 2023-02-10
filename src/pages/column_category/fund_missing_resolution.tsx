// components : layout
import type { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Breadcrumb from '@/components/common/Breadcrumb';

import ColumnCategoryList from '@/components/common/ColumnCategoryList';
import ColumnCategoryTagLink from '@/components/common/ColumnCategoryTagLink';

//libs
import { getPath } from '@/libs/pathManager';

import Default from '@/components/layouts/Default';
import styles from './index.module.scss';

//= ===========================各種インポートここまで

// レイアウトを定義
Column.getLayout = (page: ReactElement) => (
    <>
        <Default>{page}</Default>
    </>
);

export const getStaticProps = async () => {
    const res = await fetch("https://012cloud.jp/oyado-portal/wp-json/wp/v2/column?_embed")
    const datacolumn = await res.json()

    const res02 = await fetch("https://012cloud.jp/oyado-portal/wp-json/wp/v2/column_category")
    const datacolumntag = await res02.json()

    return {
        props:{
            datacolumn:datacolumn,
            datacolumntag:datacolumntag
        }
    }
}

export default function Column({datacolumn,datacolumntag}) {

    // console.log(datacolumntag);

    return (
        <>
            <div className={styles['c-heading']}>
                <h1 className={styles['c-heading__pageTitle']}>
                    お役立ちコラム
                </h1>
            </div>

            <section className={`${styles['column-list']} ${styles['l-section']}`}>

                <div className={styles['l-section__inner']}>

                    <ul className={styles['p-column__tag-list']}>
                        <li><Link href={`/column/`}>全て</Link></li>
                        <ColumnCategoryTagLink
                            datacolumn={datacolumn}
                        />
                    </ul>

                    <h2 className={styles['column-main__descTitle--secondary']}>資金不足解消</h2>

                    <ColumnCategoryList
                        datacolumn={datacolumn}
                        datacolumntag={datacolumntag}
                        tagId={5}
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
