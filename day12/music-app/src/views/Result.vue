<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          検索結果
        </h1>
        <p>検索キーワード {{ $route.params.keyword }}</p>
      </v-col>
    </v-row>

    <v-flex xs12>
      <v-card color="blue-grey darken-2" class="white--text">
        <v-card-title primary-title>
          <div>
            <div class="headline" v-text="title"></div>
            <span v-text="artistName"></span>
          </div>
        </v-card-title>
        <v-list-item-avatar size="125" tile>
          <v-img :src="image"></v-img>
        </v-list-item-avatar>
        <v-card-actions>
          <v-btn flat dark>Listen now</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      title: "アルバムタイトル",
      artistName: "アーティスト名",
      image:
        "https://cdn.pixabay.com/photo/2020/08/15/18/26/european-bee-eater-5491117_1280.jpg"
    };
  }
};
</script>
