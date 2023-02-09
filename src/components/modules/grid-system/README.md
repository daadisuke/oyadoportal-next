# グリッドシステムコンポーネント

12 カラムのシステムと 4 段階のレスポンシブによる汎用のレイアウト作成コンポーネントです。

## インポート

```ts

import { Row, Col } from "components/modules/grid-system";

```

`Row`と`Col`の２つのコンポーネントをインポートします。

### Row コンポーネント

Col コンポーネントをラップするコンポーネントです。  
**props でブレイクポイントごとの Col コンポーネント間の余白を設定**します。

### Col コンポーネント

**props でブレイクポイントごとの 12 カラムの内いくつ使用するか**設定します。

## 使い方

```tsx
<Row margins={[{ md: { x: 20, y: 20 } }, { lg: { x: 30, y: 40 } }]} notGridMargins={[{ md: 30 }]}>
  <Col md={6} lg={4}>
    768px以上: 12/6、 1024px以上: 12/4
  </Col>
  <Col md={6} lg={4}>
    768px以上: 12/6、 1024px以上: 12/4
  </Col>
  <Col md={12} lg={4}>
    768px以上: 12/12、 1024px以上: 12/4
  </Col>
</Row>
```

`Row`に  
**margins** props で  
md（768px 以上）は横方向に 20px の余白、縦方向に 20px の余白,  
lg（1024px 以上）は横方向に 30px の余白、縦方向に 40px の余白,

**notGridMargins** props で  
md（768px 未満）は縦方向に 30px の余白

`Col`に  
**md**や**lg** props で各ブレイクポイントに応じた**12 カラムの内いくつ使用するか**の設定をしています。

## 余白やブレイクポイントの設定変更方法について

ブレイクポイントや余白の設定は全て css（`./style/index.module.scss`）に設定しています。  
この値は**margins や notGridMargins などの props に指定できる値**となります。

```scss
//ブレイクポイント
$gridBreakpoints: (
  "sm": 599px,
  "md": 768px,
  "lg": 1024px,
  "xl": 1280px,
) !default;

//marginリスト
$marginList: 0, 10, 20, 30, 40 !default;
```

変更する場合は`./style/index.module.scss`内の上記箇所を編集します。  
しかし、編集出来ると言ってもsm、md、lg、xlのブレイクポイントは基本的に編集しないでください。  
`"ex": 1500px`のように追加はOK。  

`$marginList`は必要に応じて追加してOKです。  
追加例  
`$marginList: 0, 10, 15, 20, 30, 40, 50, 55 !default;`

## Options（props）

### Row

`Row`コンポーネントのprops

| props          | type            | default | description                                                                                         | required |
| -------------- | --------------- | ------- | --------------------------------------------------------------------------------------------------- | -------- |
| margins        | {key: number}[] |         | Col コンポーネント間の余白<br/>keyは`./style/index.module.scss`で設定した`$gridBreakpoints`のkeyです。                   | ○        |
| notGridMargins | {key: number}[] |         | margins未満のブレイクポイントのCol コンポーネント間の縦方向余白<br/>`./style/index.module.scss`で設定した`$gridBreakpoints`のkeyです。 | ○        |
| className      | string          |         | 任意にclass名を設定                                                                                        |          |

### Col

`Col`コンポーネントのprops

`./style/index.module.scss`で設定した`$gridBreakpoints`のkeyがpropsになります。

| props     | type   | default | description  | required |
| --------- | ------ | ------- | ------------ | -------- |
| sm        | number |         | 1〜12の値を指定    |          |
| md        | number |         | 1〜12の値を指定    |          |
| lg        | number |         | 1〜12の値を指定    |          |
| xl        | number |         | 1〜12の値を指定    |          |
| className | string |         | 任意にclass名を設定 |          |
