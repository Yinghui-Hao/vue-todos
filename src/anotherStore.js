import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  todos: [
    {
      id: 1,
      title: 'first to do',
      completed: false
    }
  ]
}

const mutations = {
  ADD_TODO(state, todo) {
    state.todos.push(todo)
  },
  DELETE_TODO(state, id) {
    state.todos = state.todos.filter(todo => todo.id !== id)
  },
  TOGGLE_TODO(state, id) {
    state.todos.map(
      todo =>
        (todo.completed = todo.id === id ? !todo.completed : todo.completed)
    )
  },
  SAVE_EDIT(state, editTodo) {
    state.todos.map(todo => (todo.id === editTodo.id ? editTodo : todo))
  }
}

const actions = {
  addTodo({ commit }, payload) {
    commit('ADD_TODO', payload)
  },
  deleteTodo({ commit }, payload) {
    commit('DELETE_TODO', payload)
  },
  toggleTodo({ commit }, payload) {
    commit('TOGGLE_TODO', payload)
  },
  saveEdit({ commit }, payload) {
    commit('SAVE_EDIT', payload)
  }
}

const getters = {}

const anotherStore = {
  state,
  getters,
  mutations,
  actions
}

export default anotherStore
