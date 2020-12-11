<template>
  <div id="app">
    <header class="header">
      <h1>Chat</h1>
      <!-- ログイン時にはフォームとログアウトボタンを表示 -->
      <div v-if="user.uid" key="login">
        [{{ user.displayName }}]
        <button type="button" @click="doLogout">ログアウト</button>
      </div>
      <!-- 未ログイン時にはログインボタンを表示 -->
      <div v-else key="logout">
        <button type="button" @click="doLogin">ログイン</button>
      </div>
    </header>

    <!--Firebase から取得したリストを描画（トランジション付き）-->
    <transition-group name="chat" tag="div" class="list content">
      <section
        v-for="{ key, name, image, message } in chat"
        :key="key"
        class="item"
      >
        <div class="item-image">
          <img :src="image" width="40" height="40" />
        </div>
        <div class="item-detail">
          <div class="item-name">{{ name }}</div>
          <div class="item-message">
            <nl2br tag="div" :text="message" />
          </div>
        </div>
      </section>
    </transition-group>

    <!-- 入力フォーム -->
    <form action="" @submit.prevent="doSend" class="form">
      <textarea
        v-model="input"
        :disabled="!user.uid"
        @keydown.enter.exact.prevent="doSend"
      ></textarea>
      <button type="submit" :disabled="!user.uid" class="send-button">
        Send
      </button>
    </form>
  </div>
</template>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}
.header {
  background: #3ab383;
  margin-bottom: 1em;
  padding: 0.4em 0.8em;
  color: #fff;
}
.content {
  margin: 0 auto;
  padding: 0 10px;
  max-width: 600px;
}
.form {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  height: 80px;
  width: 100%;
  background: #f5f5f5;
}
.form textarea {
  border: 1px solid #ccc;
  border-radius: 2px;
  height: 4em;
  width: calc(100% - 6em);
  resize: none;
}
.list {
  margin-bottom: 100px;
}
.item {
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.8em;
}
.item-image img {
  border-radius: 20px;
  vertical-align: top;
}
.item-detail {
  margin: 0 0 0 1.4em;
}
.item-name {
  font-size: 75%;
}
.item-message {
  position: relative;
  display: inline-block;
  padding: 0.8em;
  background: #deefe8;
  border-radius: 4px;
  line-height: 1.2em;
}
.item-message::before {
  position: absolute;
  content: " ";
  display: block;
  left: -16px;
  bottom: 12px;
  border: 4px solid transparent;
  border-right: 12px solid #deefe8;
}
.send-button {
  height: 4em;
}
/* トランジション用スタイル */
.chat-enter-active {
  transition: all 1s;
}
.chat-enter {
  opacity: 0;
  transform: translateX(-1em);
}
</style>

<script>
// @ is an alias to /src
import firebase from "firebase";
import Nl2br from "vue-nl2br";

export default {
  name: "Home",
  components: { Nl2br },
  data() {
    return {
      user: {},
      chat: {},
      input: ""
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.user = user ? user : {};
      const ref_message = firebase.database().ref("message");
      if (user) {
        this.chat = [];

        ref_message.limitToLast(10).on("child_added", this.childAdded);
      } else {
        ref_message.limitToLast(10).off("child_added", this.childAdded);
      }
    });
  },
  methods: {
    doLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    },
    doLogout() {
      firebase.auth().signOut();
    },
    scrollBottom() {
      this.$nextTick(() => {
        window.scrollTo(0, document.body.clientHeight);
      });
    },

    childAdded(snap) {
      const message = snap.val();
      this.chat.push({
        key: snap.key,
        name: message.name,
        image: message.image,
        message: message.message
      });
      this.scrollBottom();
    },
    doSend() {
      if (this.user.uid && this.input.length) {
        // firebase にメッセージを追加
        firebase
          .database()
          .ref("message")
          .push(
            {
              message: this.input,
              name: this.user.displayName,
              image: this.user.photoURL
            },
            () => {
              this.input = ""; // フォームを空にする
            }
          );
      }
    }
  }
};
</script>
