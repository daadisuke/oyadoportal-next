/**
 *
 * 共通のヘッダーコンポーネントです。
 *
 */

// next.jsの機能
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';

//= ===========================各種インポートここまで

export const Header = () => {
  return (
    <><header id="header" className={styles['l-header']}>
        <div className={styles['l-header__inner']}>
             <h1 className={styles['l-header__inner-logo']}>
                <Link href="/">
                    <Image src="/common/header__logo.svg" alt="お宿ポータル" width={160} height={151} />
                </Link>        
            </h1>
            <div className={styles['l-header__inner-rblock-wrap']}>
                <div className={styles['l-header__inner-consultation']}>
                    <p className={styles['l-header__inner-consultation-text']}>無料ご相談はこちら</p>
                    <div className={styles['l-header__inner-consultation-button']}><Link href="tel:03-6823-2455">
                        <p className={styles['l-header__inner-consultation-button-contacttext']}>お電話でのお問い合わせ</p>
                        <p className={styles['l-header__inner-consultation-button-tel']}><Image src="/common/header__tel.svg" alt="電話番号" width={30} height={29} />03-6823-2455</p>
                    </Link></div>
                </div>
                <nav className={styles['l-header__inner-navi']}>
                    <ul className={styles['l-header__inner-navi-gnavi']}>
                        <li><Link href="/#problem">サービス内容</Link></li>
                        <li><Link href="/case/">事例紹介</Link></li>
                        <li><Link href="/column/">コラム</Link></li>
                        <li><Link href="/seminar/">セミナー</Link></li>
                        <li><Link href="/company/">会社概要</Link></li>
                    </ul>
                </nav>
            </div>

            <button className={styles['fullScreenMenu-button']} type="button" aria-label="メニューを開く">
                <span className={styles['fullScreenMenu-button__line']}></span>
                <span className={styles['fullScreenMenu-button__line']}></span>
                <span className={styles['fullScreenMenu-button__line']}></span>
            </button>

        </div>

       </header>
       
        {/* <Modal showFlg={showModal} /> */}

       </>
  );
};
