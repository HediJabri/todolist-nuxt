import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      todos: [],
      todo: null
    },
    mutations: {
      RESET_TODO(state) {
        state.todo = null
      },
      SET_TODO(state, todo) {
        state.todo = todo
      },
      SET_TODOS(state, todos) {
        state.todos = todos
      },
      ADD_TODO(state, todo) {
        state.todos.push(todo)
      },
      UPDATE_TODO(state, data) {
        let todo
        if (state.todos.length)
          todo = state.todos.find(todo => todo._id === data._id)
        if (todo) {
          todo.completed = data.completed
          todo.title = data.title
        }
        if (state.todo && state.todo._id === data._id) state.todo = data
      },
      REMOVE_TODO(state, todo) {
        const index = state.todos.indexOf(todo)
        state.todos.splice(index, 1)
      }
    },
    actions: {
      resetTodo({ commit }) {
        commit('RESET_TODO')
      },
      async setTodo({ commit }, id) {
        try {
          const { data } = await this.$axios.get(`/todos/${id}`)
          if (data) commit('SET_TODO', data)
        } catch (error) {
          // TODO notif error
        }
      },
      async setTodos({ commit }) {
        try {
          const { data } = await this.$axios.get('/todos')
          if (data) commit('SET_TODOS', data)
        } catch (error) {
          // TODO notif error
        }
      },
      async addTodo({ commit }, todo) {
        try {
          const { data } = await this.$axios.post('/todos', todo)
          if (data) commit('ADD_TODO', data)
        } catch (error) {
          // TODO notif error
        }
      },
      async updateTodo({ commit }, { params, todo }) {
        try {
          const { data } = await this.$axios.patch(`/todos/${todo._id}`, params)
          if (data) commit('UPDATE_TODO', data)
        } catch (error) {
          // TODO notif error
        }
      },
      async removeTodo({ commit }, todo) {
        try {
          await this.$axios.delete(`/todos/${todo._id}`)
          commit('REMOVE_TODO', todo)
        } catch (error) {
          // TODO notif error
        }
      }
    },
    getters: {
      todos(state) {
        return state.todos
      },
      todo(state) {
        return state.todo
      }
    }
  })
}

export default createStore
