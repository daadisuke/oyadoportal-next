/**
 *
 * 共通のフッターコンポーネントです。
 *
 */

// Reactの機能
import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.scss';

//= ===========================各種インポートここまで

export const Footer = () => {
  return (
    <>
        <section className={styles['contact']}>

            <p className={styles['contact__text']}>お気軽にご相談ください</p>

            <p className={styles['contact__btn']}>
                <Link href="/contact/">
                    <Image src="/top/contact__btn.svg" alt="" width={40} height={32} />お問い合わせはこちら
                </Link>
            </p>

        </section>

        <footer className={styles['l-footer']}>

            <div className={styles['l-footer__inner']}>
        
                <p className={styles['l-footer__inner__company']}>
                    <Image src="/common/footer__logo.svg" alt="お宿ポータル" width={320} height={41} />
                </p>

                <p className={styles['l-footer__inner__address']}>
                    東京都千代田区平河町2丁目5-5 <br className={styles['sp-br']} />全国旅館会館2階
                </p>

                <ul className={styles['l-footer__inner__link']}>
                    <li><Link href="/company/">会社概要</Link></li>
                    <li><Link href="/privacypolicy/">プライバシーポリシー</Link></li>
                </ul>

            </div>

            <p className={styles['l-footer__copyright']}>
                <p className={styles['l-footer__copyright-text']}>&copy; oyadoportal Co.,Ltd.All Rights Reserved.</p>
            </p>

            <div className={styles['l-footer__pagetop']}>
                <Link href="#header">
                    <Image src="/common/footer__pagetop.svg" alt="" width={26} height={16} />
                </Link>
            </div>

        </footer>
    </>
  );
};
