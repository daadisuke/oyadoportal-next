# コールシェアのフロント環境

## 環境セットアップ（初回のみ）

```
$ npm i
```

## ローカルサーバー起動（開発環境立ち上げ）

```
$ npm run dev
```

その後、[http://localhost:3000](http://localhost:3000)にアクセス。  
※すでに3000が使用されている場合は自動で3001などになる

## ディレクトリ構成
```
.
├ public //静的ファイルを配置
└ src
　 ├ components //コンポーネント
　 ├ hooks //カスタムフック
　 ├ iconfont //アイコンフォント
　 ├ libs //ライブラリなどを使用した固有のロジック
　 ├ pages //Next.jsでルーティングされるページコンポーネント
　 ├ stores //グローバルステート
　 ├ styles //スタイルを配置
　 ├ types //カスタム型定義
　 └ utils //便利関数などを配置
```

## importのエイリアス

下記のように`@`を付けることでsrcディレクトリ内を絶対パスで指定可能

```
import Button from '@/components/common/Button'
```

## モックサーバー立ち上げ

```
npm run mock
```
参考サイト  
[https://speakerdeck.com/kandai/openapiwoshi-tuteapidokiyumentotomotukusabawoliang-igan-zinisitahua](https://speakerdeck.com/kandai/openapiwoshi-tuteapidokiyumentotomotukusabawoliang-igan-zinisitahua)