<template>
  <div>
    <ul class="todo-list">
      <TodoItem
        v-for="todo in computedListOfTodos"
        :key="todo.id"
        :todo="todo"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
import { mapState, mapGetters } from "vuex";

export default {
  name: "todo-list",
  components: {
    TodoItem: TodoItem
  },
  data() {
    return {
      newTodo: "",
      curId: 2
    };
  },
  computed: {
    ...mapState({
      todos: state => state.anotherStore.todos
    }),
    ...mapGetters({ filtedTodos: "filtedTodos" }),
    computedListOfTodos() {
      if (this.$route.name === "all") {
        return this.todos;
      } else {
        return this.todos.filter(item => !item.completed);
      }
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length == 0) {
        return;
      }
      this.$store.dispatch("addTodo", {
        id: this.curId,
        title: this.newTodo.trim(),
        completed: false
      });
      this.newTodo = "";
      this.curId++;
    }
  }
};
</script>

<style scoped lang="scss">
.todo-list {
  list-style-type: none;
}
</style>
