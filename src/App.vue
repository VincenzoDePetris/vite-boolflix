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
    fetchFilms(endpoint) {
      axios.get(endpoint).then((response) => {});
    },
  },
};
</script>

<template>
  <appHeader />
  <appMain />
</template>

<style scoped lang="scss"></style>
