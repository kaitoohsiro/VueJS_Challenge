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

    <v-flex style="margin:10px;" xs12 v-for="(album, i) in albums" :key="i">
      <v-card
        color="black"
        class="white--text"
        :href="album.collectionViewUrl"
        target="_blank"
      >
        <v-layout row>
          <v-flex xs7>
            <v-card-title primary-title style="text-align: center;">
              <div>
                <div class="headline" v-text="album.collectionName"></div>
                <span class="grey--text" v-text="album.artistName"></span>
              </div>
            </v-card-title>
          </v-flex>
          <v-flex xs5>
            <v-img :src="album.artworkUrl100" height="125px" contain></v-img>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  data() {
    return {
      albums: []
    };
  },
  created() {
    const vm = this;
    axios
      .get(
        `https://itunes.apple.com/search?term=${this.$route.params.keyword}&entity=album`
      )
      .then(response => {
        console.log(response);
        vm.albums = response.data.results;
      });
  }
};
</script>
