<template>
  <div class="home">{{ $store.state.message }}</div>
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
