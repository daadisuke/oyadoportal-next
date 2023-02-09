/**
 *
 * インプット要素のレイアウト調整用コンポーネントです。
 * 主に横並びなどに使用します。
 * 年、月、日などのサブテキストを入れたりもできます。
 *
 * @usage
 * import { AssistInputLayout, AssistInputLayoutItem } from 'components/common/form/AssistInputLayout'
 *
 * <AssistInputLayout layoutType='liquid'>
 *   <AssistInputLayoutItem>
 *     //ここにinput要素
 *   </AssistInputLayoutItem>
 *   <AssistInputLayoutItem>
 *     //ここにinput要素
 *   </AssistInputLayoutItem>
 * </AssistInputLayout>
 *
 */

// reactの機能
import { useState, useEffect, Children } from 'react';

// style
import styles from './AssistInputLayout.module.scss';

//= ===========================各種インポートここまで

type LayoutProps = {
  children: React.ReactNode;
  layoutType: 'liquid' | 'col1' | 'col2' | 'col3' | 'col4';
  sideMarginSize?: 's' | 'l'; // 現状はlayoutType: liquidのみ対応
};

export const AssistInputLayout = ({ layoutType, sideMarginSize, children }: LayoutProps) => {
  return (
    <>
      <div
        className={`${styles['c-assistInput-layout']} ${styles['-layoutType--' + layoutType]} ${
          sideMarginSize ? styles['-sideMarginSize--' + sideMarginSize] : ''
        }`}
      >
        {children}
      </div>
    </>
  );
};

type ItemProps = {
  children: React.ReactNode;
  className?: string;
  rightText?: string;
  rightTextPosition?: 'top' | 'center' | 'bottom';
  leftText?: string;
  leftTextPosition?: 'top' | 'center' | 'bottom';
};

export const AssistInputLayoutItem = ({
  className,
  rightText, // input要素の右に表示するテキスト
  rightTextPosition,
  leftText, // input要素の左に表示するテキスト
  leftTextPosition,
  children,
}: ItemProps) => {
  return (
    <>
      <div className={[styles['c-assistInput-layout__item'], className || ''].join(' ')}>
        {leftText && (
          <span
            className={[
              styles['c-assistInput-layout__item-text'],
              leftTextPosition ? styles[`-${leftTextPosition}`] : styles['-bottom'],
            ].join(' ')}
          >
            {leftText}
          </span>
        )}
        {children}
        {rightText && (
          <span
            className={[
              styles['c-assistInput-layout__item-text'],
              rightTextPosition ? styles[`-${rightTextPosition}`] : styles['-bottom'],
            ].join(' ')}
          >
            {rightText}
          </span>
        )}
      </div>
    </>
  );
};
