<template>
  <div class="joke">
    <ul>
      <li v-for="joke in jokes" :key="joke">
        {{ joke }}
      </li>
    </ul>
    <button @click="addNew">Add new joke</button>
    <button @click="clearAll">Clear all</button>
  </div>
</template>

<script>
export default {
  name: "Joke",
  computed: {
    jokes() {
      return this.$store.getters.getJokes;
    },
  },
  mounted() {
    this.$store.dispatch("getAllJokes");
  },
  methods: {
    addNew () {
      this.$store.dispatch("getJoke");
    },
    clearAll () {
      this.$store.dispatch("clearJokes");
    }
  },
};
</script>
<style scoped>
.joke li {
  text-align: left;
  padding: 5px;
  font-size: 14px;
}
</style>