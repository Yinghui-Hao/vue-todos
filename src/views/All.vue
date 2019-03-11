<template>
  <div class="all">
    <TodoList />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from "@/components/TodoList.vue";

export default {
  name: "all",
  components: {
    TodoList
  }
};
</script>
