<script>
import { store } from "../../data/store";

import CardDetail from "./CardDetail.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: { CardDetail },
};
</script>

<template>
  <ul>
    <li v-for="movie in store.movies" :key="movie.id">
      <img
        v-if="store.lenguages.includes(movie.original_lenguage)"
        :src="'/flags/' + movie.original_lenguage + '.png'"
        alt=""
      />
      <img v-else :src="'/flags/noflag.png'" alt="" />
      {{ movie.title }} - {{ movie.original_title }} -
      {{ movie.vote }}
    </li>
  </ul>

  <h2>SERIE TV</h2>
  <ul>
    <li v-for="serie in store.series" :key="serie.id">
      <img
        v-if="store.lenguages.includes(serie.original_lenguage)"
        :src="'/flags/' + serie.original_lenguage + '.png'"
        alt=""
      />
      <img v-else :src="'/flags/noflag.png'" alt="" />
      {{ serie.title }} - {{ serie.original_name }} -
      {{ serie.vote }}
    </li>
  </ul>

  <CardDetail />
</template>

<style lang="scss" scoped>
li {
  img {
    width: 50px;
  }
}
</style>
