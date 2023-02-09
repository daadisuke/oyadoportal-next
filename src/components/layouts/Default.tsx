/**
 *
 * 基本のレイアウトコンポーネントです。
 *
 * <ヘッダー>
 * <メインコンテンツ>
 * <フッター>
 *
 */

// Reactの機能
import React, { ReactNode } from 'react';

// components : layout
import { Header } from './includes/Header';
import { Footer } from './includes/Footer';

//= ===========================各種インポートここまで

type Props = {
  children: ReactNode;
};

const Default = ({ children }: Props) => {
  return (
    <div className="siteWrapper">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Default;
