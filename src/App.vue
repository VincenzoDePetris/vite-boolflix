<script>
import axios from "axios";
import { store } from "./data/store";

import appHeader from "./components/appHeader.vue";
import appMain from "./components/appMain.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: { appHeader, appMain },

  methods: {
    fetchFilms(research) {
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            query: research,
            api_key: "e8f7059410b9f51c614d2ed5b727c27f",
          },
        })
        .then((response) => {
          store.movies = response.data.results.map((movie) => {
            const {
              id,
              title,
              original_title,
              original_lenguage,
              vote_average,
            } = movie;

            return {
              id,
              title,
              lenguage: original_lenguage,
              vote: Math.ceil(vote_average / 2),
              original_title,
            };
          });
        });
    },
  },
};
</script>

<template>
  <appHeader
    @search="fetchFilms"
    placeholder="Film o serie TV"
    buttonSubmitText="Cerca"
  />
  <ul>
    <li v-for="movie in store.movies" :key="movie.id">
      {{ movie.title }}
      {{ movie.original_title }}
      {{ movie.lenguage }}
      {{ movie.vote }}
    </li>
  </ul>
  <appMain />
</template>

<style scoped lang="scss"></style>
