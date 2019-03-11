<template>
  <div class="unchecked">
    <TodoList />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from "@/components/TodoList.vue";

export default {
  name: "unchecked",
  components: {
    TodoList
  }
};
</script>
