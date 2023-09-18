<script>
import axios from "axios";
import { store } from "./data/store";

import appHeader from "./components/appHeader.vue";
import appMain from "./components/appMain.vue";

export default {
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
              poster_path,
              overview,
            } = movie;

            return {
              overview,
              poster: "https://image.tmdb.org/t/p/w300" + poster_path,
              id,
              title,
              original_lenguage,
              vote: Math.ceil(vote_average / 2),
              original_title,
            };
          });
        });
      axios
        .get("https://api.themoviedb.org/3/search/tv?", {
          params: {
            query: research,
            api_key: "e8f7059410b9f51c614d2ed5b727c27f",
          },
        })
        .then((response) => {
          store.series = response.data.results.map((series) => {
            const {
              id,
              original_name,
              original_language,
              name,
              vote_average,
              overview,
              poster_path,
            } = series;

            return {
              poster: "https://image.tmdb.org/t/p/w300" + poster_path,
              overview,
              id,
              original_name,
              original_language,
              title: name,
              vote: Math.ceil(vote_average / 2),
            };
          });
        });
    },
  },
};
</script>

<template>
  <div class="bg">
    <appHeader
      @search="fetchFilms"
      placeholder="Film o serie TV"
      buttonSubmitText="Cerca"
    />

    <appMain />
  </div>
</template>

<style lang="scss">
@use "./components/main.scss" as *;
</style>
