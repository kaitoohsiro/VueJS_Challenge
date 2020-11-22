<template>
  <div class="home">
    <h1>{{ $store.state.counter }}</h1>
    <button @click="increment">increment</button>
    <h1>{{ cartItemsCount }}</h1>
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
      this.$store.dispatch("increment");
    }
  },
  computed: {
    cartItemsCount() {
      return this.$store.getters.cartItemsCount;
    }
  }
};
</script>
