/**
 *
 * パンくずのコンポーネントです。
 *
 * @usage
 * import Breadcrumb from '@/components/common/Breadcrumb'
 *
 * <Breadcrumb
 *   data={[
 *     {
 *       name: 'home',
 *       path: '/mypage',
 *     },
 *     {
 *       name: 'プロフィール',
 *       path: '/mypage/profile',
 *     },
 *     {
 *       name: 'プロフィール編集',
 *     },
 *   ]}
 * />
 *
 */

import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// next.jsの機能
import Link from 'next/link';

// // components
import IconFont from './IconFont';



// style
import styles from './Breadcrumb.module.scss';

//= ===========================各種インポートここまで

type Props = {
  data: BreadcrumbList;
  anchorType?: 'a' | 'Link';
};

type BreadcrumbItem = {
  name: string;
  path?: string;
};

type BreadcrumbList = BreadcrumbItem[];

const Breadcrumb = ({ data, anchorType }: Props) => {
  // is mounted
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  //= ===========is mounted

  if (!mounted) return null;

  return (
    <div className={styles['c-pankuzu']}>
      <ul className={styles['c-pankuzu__items']}>
        {data.map((v, index: number) => {
          return (
            <li
              className={styles['c-pankuzu__item']}
              key={index}
            >
              {v.path ? (
                <>
                  {/* nameがhomeだったら家のアイコンにする */}
                  {v.name === 'home' ? (
                    <>
                      {anchorType === 'a' ? (
                        <>
                          <a
                            href={v.path}
                            className={styles['c-breadcrumb-list__item-icon']}
                          >
                            <IconFont
                              icon="home"
                              className={styles['c-breadcrumb-list__item-icon-content']}
                            />
                          </a>
                        </>
                      ) : (
                        <>
                          <Link
                            href={v.path}
                            className={styles['c-breadcrumb-list__item-icon']}
                          >
                            <IconFont
                              icon="home"
                              className={styles['c-breadcrumb-list__item-icon-content']}
                            />
                          </Link>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      {anchorType === 'a' ? (
                        <>
                          <a
                            href={v.path}
                            className={styles['c-breadcrumb-list__item-text']}
                            {...{
                              ...(data.length - 1 === index && {
                                'aria-current': 'page',
                              }),
                            }}
                          >
                            {v.name}
                          </a>
                        </>
                      ) : (
                        <>
                          <Link
                            href={v.path}
                            className={styles['c-breadcrumb-list__item-text']}
                            {...{
                              ...(data.length - 1 === index && {
                                'aria-current': 'page',
                              }),
                            }}
                          >
                            {v.name}
                          </Link>
                        </>
                      )}
                    </>
                  )}
                </>
              ) : (
                <span
                  className={styles['c-breadcrumb-list__item-text']}
                  {...{
                    ...(data.length - 1 === index && {
                      'aria-current': 'page',
                    }),
                  }}
                >
                  {v.name}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;

/**
 *
 * 以下使ってないコンポーネント
 *
 * こんな感じでLinkでラップすると動かなかった
 *  <Link href={'/hoge'}>
 *    <AnchorIcon />
 *  </Link>
 *
 */

type AnchorIconProps = {
  path?: string;
};

const AnchorIcon = ({ path }: AnchorIconProps) => {
  return (
    <>
      <a
        {...(path && { href: path })}
        className={styles['c-breadcrumb-list__item-icon']}
      >
        <IconFont
          icon="home"
          className={styles['c-breadcrumb-list__item-icon-content']}
        />
      </a>
    </>
  );
};

type AnchorProps = {
  path?: string;
  name: string;
  dataLength: number;
  dataIndex: number;
};

const Anchor = ({ path, name, dataLength, dataIndex }: AnchorProps) => {
  return (
    <a
      {...(path && { href: path })}
      className={styles['c-breadcrumb-list__item-text']}
      {...{
        ...(dataLength - 1 === dataIndex && {
          'aria-current': 'page',
        }),
      }}
    >
      {name}
    </a>
  );
};
