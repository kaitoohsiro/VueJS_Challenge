<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ $store.state.counter }}
    <button @click="increment">increment</button>
  </div>
</template>


<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    }
  }
};
</script>