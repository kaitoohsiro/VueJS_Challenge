<template>
  <div class="home">
    <h1>TODOリスト</h1>
    <div>
      <input type="text" v-model="newTodoName" />
      <button @click="addTodo()">追加</button>
    </div>

    <ul>
      <li v-for="(todo, key) in todos" :key="key">
        <input
          type="checkbox"
          v-model="todo.isComplete"
          @click="updateTodo(todo, key)"
        />
        {{ todo.name }}
        <button @click="removeTodo(key)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Home",
  data() {
    return {
      db: null,
      todosRef: null,
      newTodoName: "",
      todos: {}
    };
  },
  created() {
    this.db = firebase.firestore();
    this.todosRef = this.db.collection("todos");
    this.todosRef.onSnapshot(querySnapshot => {
      const obj = {};
      querySnapshot.forEach(doc => {
        obj[doc.id] = doc.data();
      });
      this.todos = obj;
    });
  },
  methods: {
    addTodo() {
      if (this.newTodoName === "") {
        return;
      }
      this.todosRef.add({
        name: this.newTodoName,
        isComplete: false
      });
      this.newTodoName = "";
    },
    updateTodo(todo, key) {
      todo.isComplete = !todo.isComplete;
      this.todosRef.doc(key).update(todo);
    },
    removeTodo(key) {
      this.todosRef.doc(key).delete();
    }
  }
};
</script>
