<template>
  <div>
    <li class="todo-item" v-if="todo.id !== cacheTodo.id">
      <div class="todo-item__input">
        <input
          type="checkbox"
          :id="todo.id"
          :checked="todo.completed"
          @change="toggleTodo"
        />
      </div>
      <div class="todo-item__label">
        <label :for="todo.id">{{ todo.title }}</label>
      </div>
      <div class="todo-item__actions">
        <b-button variant="success" @click="editTodo">Edit</b-button>
        <b-button variant="danger" @click="deleteTodo">Delete</b-button>
      </div>
    </li>
    <input
      type="text"
      class="list-edit-input"
      v-model="cacheTodoTitle"
      v-if="todo.id === cacheTodo.id"
      @keyup.enter="saveEdit"
      @keyup.esc="escEdit"
    />
  </div>
</template>

<script>
export default {
  name: "todo-item",
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      cacheTodo: {},
      cacheTodoTitle: this.todo.title
    };
  },
  methods: {
    deleteTodo() {
      this.$store.dispatch("deleteTodo", this.todo.id);
    },
    toggleTodo() {
      this.$store.dispatch("toggleTodo", this.todo.id);
    },
    editTodo() {
      this.chacheTodoTitle = this.todo.title;
      this.cacheTodo = this.todo;
    },
    saveEdit() {
      this.cacheTodo.title = this.cacheTodoTitle;
      this.$store.dispatch("saveEdit", this.cacheTodo);
      this.cacheTodoTitle = "";
      this.cacheTodo = {};
    },
    escEdit() {
      this.cacheTodo = {};
    }
  }
};
</script>
<style lang="scss">
li {
  padding-left: 1em;
}
li span {
  margin: 0 20px;
}
li button {
  margin-right: 10px;
}
.todo-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.todo-item__label {
  label {
    margin-bottom: 0;
  }
}
.todo-item__input,
.todo-item__label,
.todo-item__actions {
  margin-right: 20px;
}
</style>
