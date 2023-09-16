<script>
export default {
  data() {
    return {
      research: "",
    };
  },
  props: {
    placeholder: String,
    buttonSubmitText: String,
  },

  emits: ["search"],
};
</script>

<template>
  <nav class="navbar bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand text-danger">BOOLFLIX</a>
      <form
        class="d-flex"
        role="search"
        @submit.prevent="$emit('search', research)"
      >
        <input
          v-model="research"
          class="form-control me-2"
          type="search"
          :placeholder="placeholder"
          aria-label="Search"
        />
        <button class="btn btn-outline-danger" type="submit">
          {{ buttonSubmitText }}
        </button>
      </form>
    </div>
  </nav>
  <template />
</template>

<style lang="scss" scoped></style>
