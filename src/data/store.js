import { reactive } from "vue";

export const store = reactive({
  baseUri: "https://api.themoviedb.org/3",
  apiKey: "api_key=e8f7059410b9f51c614d2ed5b727c27f",
  film: [],
});
