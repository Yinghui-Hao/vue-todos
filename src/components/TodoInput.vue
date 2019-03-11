<template>
  <div class="input">
    <h1>{{ msg }}</h1>
    <input
      type="text"
      class="todo-input"
      placeholder="What needs to be done"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
  </div>
</template>

<script>
export default {
  name: 'todo-input',
  props: {
    msg: String
  },
  data() {
    return {
      newTodo: '',
      curId: 2
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length == 0) {
        return
      }
      this.$store.dispatch('addTodo', {
        id: this.curId,
        title: this.newTodo.trim(),
        completed: false
      })
      this.newTodo = ''
      this.curId++
    },
    changeView(view) {
      this.$store.dispatch('changeView', view)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.todo-input {
  width: 50%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;
  &:focus {
    outline: 0;
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
