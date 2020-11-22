<template>
    <div class="user">
<!--        urlで表示 prams-->
<!--        <h1>{{ this.$route.params.id }}</h1>-->
<!--        getで表示     urlの最後にこれをつける?q=-->
<!--        <p>{{ this.$route.query.q }}</p>-->
<!--ユーザーコンポーネントの中にルータを入れっる
-->
        <h1>This is User page</h1>
<!--        tagで属性ボタンを追加できる-->
        <router-link tag="button" to="/first">first</router-link> |
        <router-link tag="button" to="/second">second</router-link>
<!--バインディングする時-->
<!--        <router-link :to="{name: 'first'}">first</router-link> |-->
<!--        <router-link :to="{name: 'second'}">second</router-link>-->
        <router-view/>
    </div>
</template>

<style>
    .router-link-exact-active {
        font-size: 20px;
        color: palegoldenrod;;
    }
</style>
