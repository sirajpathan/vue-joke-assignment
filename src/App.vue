<template>
  <Joke v-if="loaded" />
</template>

<script>
import Joke from "./components/Joke.vue";

export default {
  name: "App",
  components: {
    Joke,
  },
  data() {
    return {
      loaded: false
    };
  },
  async created() {
    await this.$store.dispatch("getEnvConfig");
    this.loaded = true;
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
