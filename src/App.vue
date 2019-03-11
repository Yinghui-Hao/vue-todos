<template>
  <div id="app">
    <div class="title">
      <TodoInput msg="Welcome to Your Todo List" />

      <div id="nav">
        <router-link to="/">Unchecked</router-link>
        |
        <router-link to="/all">All</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoInput from "@/components/TodoInput.vue";

export default {
  name: "app",
  components: {
    TodoInput
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
