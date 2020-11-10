# vue.js チャレンジ

![](https://jp.vuejs.org/images/logo.png)

## 3 日目

### vue を使ってみよう

- v-bind

a タグの href などの属性を v-bind で書き換えることができる

```
v-bind:href='dataプロパティの名前'
v-bind:scr='dataプロパティの名前'
など
```

ex

```js
      <a v-bind:href="url">沖縄クイズ</a>

      ,,,

        data: {
          url: "https://ok-okinawa-quiz.herokuapp.com/"
        }
```

について書いていきました。
