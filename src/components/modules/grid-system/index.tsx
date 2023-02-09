/**
 *
 * グリッドシステムコンポーネントです。
 *
 * bootstrapの機能のグリッドシステムのようなことが可能です。
 *
 *
 * @usage
 * import { Row, Col } from 'components/modules/grid-system'
 *
 * Rowコンポーネントでブレイクポイントごとの余白を設定
 * Colコンポーネントでブレイクポイントごとの分割を設定
 * ※ブレイクポイントは全てmin-screenです
 *
 * ブレイクポイントや余白の設定は全てscssに設定しています。（propsに指定できる値）
 * 変更する場合は以下のファイルを編集してください。
 * _grid-system.scss
 *
 * ブレイクポイント: $gridBreakpoints ←scssの変数
 * 余白: $marginList ←scssの変数
 *
 * <Row
 *   margins={[
 *     { "md": { x: 30, y: 40 } },
 *     { "lg": { x: 30, y: 40 } }
 *   ]}
 *   notGridMargins={[
 *     { "md": 30 }
 *   ]}
 * >
 *   <Col md={6} lg={4}>
 *     768px以上: 12/6、 1024px以上: 12/4
 *   </Col>
 *   <Col md={6} lg={4}>
 *     768px以上: 12/6、 1024px以上: 12/4
 *   </Col>
 *   <Col md={12} lg={4}>
 *     768px以上: 12/12、 1024px以上: 12/4
 *   </Col>
 * </Row>
 *
 */

// reactの機能
import React from 'react';

// style
import styles from './style/index.module.scss';

//= ===========================各種インポートここまで

type RowProps = {
  margins: {
    [K in Mq]?: {
      [P in XY]: number;
    };
  }[];
  notGridMargins: {
    [K in Mq]?: number;
  }[];
  className?: string;
  children: React.ReactNode;
};

type Mq = 'sm' | 'md' | 'lg' | 'xl';
type XY = 'x' | 'y';

export const Row = ({ ...props }: RowProps) => {
  const margins = props.margins.map((item, index) => {
    const [v] = Object.entries(item);
    return `${styles['-margin-' + v[0] + '-x-' + v[1].x]} ${styles['-margin-' + v[0] + '-y-' + v[1].y]}`;
  });

  const notGridMargins = props.notGridMargins.map((item, index) => {
    const [v] = Object.entries(item);
    return `${styles['-notGrid-margin-' + v[0] + '-y-' + v[1]]}`;
  });

  return (
    <>
      <div
        className={`
        ${styles['p-row']}
        ${margins.join(' ')}
        ${notGridMargins.join(' ')}
        ${props.className ? props.className : ''}
      `}
      >
        {props.children}
      </div>
    </>
  );
};

type ColProps = {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  className?: string;
  children: React.ReactNode;
};

export const Col = ({ sm, md, lg, xl, className, children }: ColProps) => {
  return (
    <>
      <div
        className={`
        ${sm ? styles['p-col-sm-' + sm] : ''}
        ${md ? styles['p-col-md-' + md] : ''}
        ${lg ? styles['p-col-lg-' + lg] : ''}
        ${xl ? styles['p-col-xl-' + xl] : ''}
        ${className || ''}
      `}
      >
        {children}
      </div>
    </>
  );
};
