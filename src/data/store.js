import { reactive } from "vue";

export const store = reactive({
  movies: [],
  series: [],
  languages: ["en", "it", "ja"],
});
