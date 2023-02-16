// components : layout
import type { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SiteHead from '@/components/layouts/includes/SiteHead'

import Breadcrumb from '@/components/common/Breadcrumb';
import CaseList from '@/components/common/CaseList';

//libs
import { getPath } from '@/libs/pathManager';

import Default from '@/components/layouts/Default';
import styles from './index.module.scss';

//= ===========================各種インポートここまで

<SiteHead
    title='事例紹介'
/>

// レイアウトを定義
Case.getLayout = (page: ReactElement) => (
    <>
        <Default>{page}</Default>
    </>
);

export const getStaticProps = async () => {
    const res = await fetch("https://012cloud.jp/oyado-portal/wp-json/wp/v2/case?_embed")
    const datacase = await res.json()

    return {
        props:{datacace:datacase}
    }
}

export default function Case({datacace}) {
    return (
        <>
            <div className={styles['c-heading']}>
                <h1 className={styles['c-heading__pageTitle']}>
                事例紹介
                </h1>
            </div>

            <section className={`${styles['seminar-list']} ${styles['l-section']}`}>

                <div className={styles['l-section__inner']}>

                    <figure className={styles['p-case__title']}>
                        <Image src="/case/case__copy.svg" alt="累計160件以上のサポート実績コスト削減から集客までトータルサポートが可能です！" width={830} height={104} />
                    </figure>

                    <CaseList datacace={datacace} />

                </div>

                <Breadcrumb
                    data={[
                        {
                            name: 'TOP',
                            path: `${getPath('dashboard')}`,
                        },
                        {
                            name: '事例紹介',
                        },
                    ]}
                />

            </section>

        </>
    );
}
