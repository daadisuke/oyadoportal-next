このコンポーネントはフォームのチェックボックスの横並びや年月日などのラベル付きinputなど、input要素におけるよくあるレイアウトを簡単に作成できます。

## インポート

`AssistInputLayout`と`AssistInputLayoutItem`の2つのコンポーネントをインポートします。

```tsx

import { AssistInputLayout, AssistInputLayoutItem } from '@/components/common/form/assistInput/AssistInputLayout'

```

## 使い方

基本構造は以下のようになります。  
`AssistInputLayout`で複数の`AssistInputLayoutItem`をラップします。  

`AssistInputLayoutItem`のchildrenにはinput要素を設置します。

```tsx
<AssistInputLayout layoutType='liquid'>
  <AssistInputLayoutItem>
    {/* ここにinput要素 */}
  </AssistInputLayoutItem>
  <AssistInputLayoutItem>
    {/* ここにinput要素 */}
  </AssistInputLayoutItem>
</AssistInputLayout>
```

例 : チェックボックスの単純な横並びレイアウト  

```tsx
<AssistInputLayout layoutType='liquid'>
  <AssistInputLayoutItem>
    <RhfInputCheckbox label='フシギダネ' name='pokemon' value='1' />
  </AssistInputLayoutItem>
  <AssistInputLayoutItem>
    <RhfInputCheckbox label='ヒトカゲ' name='pokemon' value='2' />
  </AssistInputLayoutItem>
  <AssistInputLayoutItem>
    <RhfInputCheckbox label='ゼニガメ' name='pokemon' value='3' />
  </AssistInputLayoutItem>
</AssistInputLayout>
```

例 : 姓名ラベル付きの横並びテキストボックス  

```tsx
<AssistInputLayout layoutType='liquid'>
  <AssistInputLayoutItem leftText='性' leftTextPosition='center'>
    <RhfInputText type='text' name='first_name' />
  </AssistInputLayoutItem>
  <AssistInputLayoutItem leftText='名' leftTextPosition='center'>
    <RhfInputText type='text' name='last_name' />
  </AssistInputLayoutItem>
</AssistInputLayout>
```

### AssistInputLayoutコンポーネントについて

コンポーネントのpropsには`layoutType`というのもがあります。  
これは`AssistInputLayoutItem`のレイアウトに影響します。

| type   | description                                           |
| ------ | ----------------------------------------------------- |
| liquid | 要素の幅に応じて可変する。<br/>幅が画面いっぱいになると折り返す。<br/>※これが一番使用頻度が高い |
| col1   | 1カラム                                                  |
| col2   | 2カラム                                                  |
| col3   | 3カラム                                                  |
| col4   | 4カラム                                                  |

※col3、col4についてはスマホのスタイルを設定していないので、画面幅が狭いとレイアウトがおかしくなります。（今後デザイナーと相談して決めます）

### AssistInputLayoutItemコンポーネントについて

propsの`rightText`と`leftText`はinput textやselectの前後に表示することの多い**性、名**や**年、月、日**などのテキストを設定できます。  

そのテキストの上下の位置を`rightTextPosition`と`leftTextPosition`propsで調整できます。

## Props

Propsの一覧です。  

### AssistInputLayoutのProps

| props          | type                                                 | default | description                                                           | required |
| -------------- | ---------------------------------------------------- | ------- | --------------------------------------------------------------------- | -------- |
| layoutType     | "liquid"<br/>"col1"<br/>"col2"<br/>"col3"<br/>"col4" |         | レイアウトタイプを選択                                                           | ○        |
| sideMarginSize | "s"<br/>"l"                                          | l       | 左右の余白（layoutTypeがliquidの場合のみ）<br/>sとかlじゃなくてsmallとかlargeしたほうが良かったかも... |          |

### AssistInputLayoutItemのProps

| props             | type                            | default | description           | required |
| ----------------- | ------------------------------- | ------- | --------------------- | -------- |
| leftText          | string                          |         | input要素の左に表示するテキスト    |          |
| leftTextPosition  | "top"<br/>"center"<br/>"bottom" |         | input要素の左に表示するテキストの位置 |          |
| rightText         | string                          |         | input要素の右に表示するテキスト    |          |
| rightTextPosition | "top"<br/>"center"<br/>"bottom" |         | input要素の右に表示するテキストの位置 |          |
