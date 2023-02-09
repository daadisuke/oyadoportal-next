## 使い方

- 前提として react-hook-form の初期設定が終わっていること。
- `FormProvider`でラップしていること。（useFormContext 使用しているため）

```tsx
<RhfInputSelect name='hoge'>
  <option value=''>選択してください</option>
  <option value="1">セレクト1</option>
  <option value="2">セレクト2</option>
  <option value="3">セレクト3</option>
  <option value="4">セレクト4</option>
  <option value="5">セレクト5</option>
</RhfInputSelect>
```

optionはchildrenで渡します。  
APIから情報をオブジェクトで受け取った場合などはmapなどを使ってoptionを表示してください。

```tsx
<RhfInputSelect name='hoge'>
  <option value=''>選択してください</option>
  {api.items.map(
    (item: any, index: number) => {
      return (
        <option key={index} value={item.id}>
          {item.name}
        </option>
      )
    }
  )}
</RhfInputSelect>
```

### control props について

control props は useForm から呼び出すことのできる control を渡すことで`useForm`もしくは`useFormContext`に設定した型定義を反映することができます。

```tsx
type FormType = {
  hoge: string
  mail: string
}

const methods = useForm<FormType>();

-------------------------------

<RhfInputSelect
  name='hogehoge' //存在しないnameなので型エラーがでる
  control={methods.control}
>
  <option>選択してください</option>
  <option value="1">セレクト1</option>
  <option value="2">セレクト2</option>
  <option value="3">セレクト3</option>
  <option value="4">セレクト4</option>
  <option value="5">セレクト5</option>
</RhfInputSelect>
```

## Props

Props の一覧です。  
一部 react-hook-form の機能があるのでそちらは公式のドキュメントを確認してください。

| props     | type     | default | description                                        | required |
| --------- | -------- | ------- | -------------------------------------------------- | -------- |
| name      | string   |         | チェックボックスの name 属性の値                                | ○        |
| width     | string   |         | セレクトボックスの幅<br/>'original'はセレクトボックスの元々の幅            | ○        |
| required  | string   |         | 必須項目にするかどうか（react-hook-form の機能）                   |          |
| validate  |          |         | カスタムバリデーション（react-hook-form の機能）                   |          |
| onChange  | function |         | Changeイベント（react-hook-form の機能）                    |          |
| onBlur    | function |         | Blurイベント（react-hook-form の機能）                      |          |
| control   |          |         | useForm から呼び出すことのできる control を渡すことで型定義を反映させることができる |          |
| className | string   |         | 任意の class 名を設定<br/>スタイルを変更したいときなどに使用する             |          |
