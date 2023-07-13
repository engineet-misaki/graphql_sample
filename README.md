This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

- アポロのサンプルプロジェクト

### スタック

- node : v16.15.0
- "next": "13.4.6"
- "graphql": "^16.6.0"
- "@apollo/client": "^3.7.15"
- "@apollo/server": "^4.7.4"

- あとやること
  - CURDAPI 実装
  - font の設定
  - UserId の扱いどうするか考える

### 気になる点

- layout に ApolloProvider を書いてる
  - use client 入れないとエラーになったから書いたけど、全ページ use client 化されてそうだからあまりよくないかも
  - ラップして必要なレイアウトのみで入れてくのが正解かなあ。

### ライブラリー

- 入れてよかったライブラリー

  - concurrently
  - prettier
  - prettier-plugin-tailwindcss
  - @graphql-codegen/cli
  - @graphql-codegen/typescript
  - @graphql-codegen/typescript-resolvers
  - yarn add -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-resolvers concurrently prettier prettier-plugin-tailwindcss

- 入れないとエラーになったライブラリー
  - @graphql-codegen/typescript-operations
  - @graphql-codegen/typed-document-node
