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
  methods: {
    star(n) {
      return n <= store.movies.vote ? "fa-regular fa-star" : "fa-solid fa-star";
    },
  },
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
        <p>Voto: <font-awesome-icon :icon="star(n)" v-for="n in 5" /></p>
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
  overflow: hidden;
  width: 300px;
  height: 400px;

  .poster {
    width: 100%;
    height: 100%;
    position: absolute;
    box-sizing: border-box;
    transition: 0.5s;
  }
  .info {
    width: 100%;
    height: 100%;
    padding: 5px;
    position: absolute;
    box-sizing: border-box;
    transition: 0.5s;
  }

  .poster {
    top: 0;
    left: 0;
  }

  &:hover {
    .poster {
      top: 0;
      left: -100%;
    }

    .info {
      bottom: 0;
      left: 0;

      overflow-x: auto;
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
