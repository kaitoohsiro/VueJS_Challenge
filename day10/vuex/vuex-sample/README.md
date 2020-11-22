# vue.js チャレンジ

## vuex-sample

![](https://jp.vuejs.org/images/logo.png)

## 10 日目

### vuex を使ってみよう

- mutation
- state

について書いていきました。

### mutation

- mutation は vuex 内の methods と同じ

### state

- state は vuex の武器である状態管理センターの状態を管理するところ
- 要するに data でありコンポーネント間の管理ではなく vuex で管理することで全コンポーネントからデータを呼び出せる

```
$store.state.プロパティ名
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
