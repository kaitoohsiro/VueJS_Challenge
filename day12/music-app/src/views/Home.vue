<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          音楽検索
        </h1>
        <v-text-field
          :counter="100"
          v-model="keyword"
          label="アーティスト名を入力してください。"
          required=""
        >
        </v-text-field>
        <v-btn @click="serch">検索</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      keyword: ""
    };
  },
  methods: {
    serch() {
      this.$router.push(`/result/${this.keyword}`);
    }
  }
};
</script>
