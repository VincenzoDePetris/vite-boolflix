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
  <div class="dad container mt-3">
    <div class="card m-2" v-for="movie in store.movies" :key="movie.id">
      <div class="info">
        <p>Titolo: {{ movie.title }}</p>
        <p>Titolo originale: {{ movie.original_title }}</p>
        <img
          class="flag"
          v-if="store.lenguages.includes(movie.original_lenguage)"
          :src="'/flags/' + movie.original_lenguage + '.png'"
          alt=""
        />
        <img class="flag" v-else :src="'/flags/noflag.png'" alt="" />
        <p>Voto: {{ movie.vote }}</p>
        <p>Overview: {{ movie.overview }}</p>
      </div>
      <div>
        <img class="poster" :src="movie.poster" alt="" />
      </div>
    </div>

    <div class="card m-2" v-for="serie in store.series" :key="serie.id">
      <div class="info">
        <p>Titolo: {{ serie.title }}</p>
        <p>Titolo originale: {{ serie.original_name }}</p>
        <img
          class="flag"
          v-if="store.lenguages.includes(serie.original_lenguage)"
          :src="'/flags/' + serie.original_lenguage + '.png'"
          alt=""
        />
        <img class="flag" v-else :src="'/flags/noflag.png'" alt="" />
        <p>Voto: {{ serie.vote }}</p>
        <p>Overview: {{ serie.overview }}</p>
        <div>
          <img class="poster" :src="serie.poster" alt="" />
        </div>
      </div>
    </div>
  </div>

  <CardDetail />
</template>

<style lang="scss" scoped>
.info {
  display: none;
}

img {
  max-height: 100%;
}
.dad {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.card {
  width: 300px;
  height: 400px;
  :hover {
    .info {
      display: inline-block;
    }

    .poster {
      display: none;
    }
  }
}

.poster {
  width: 300px;
  height: 400px;
}

.flag {
  width: 50px;
}
</style>
