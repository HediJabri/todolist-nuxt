import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      todos: [],
    },
    mutations: {
      SET_TODOS(state, todos) {
        state.todos = todos;
      },
      ADD_TODO(state, todo) {
        state.todos.push(todo)
      },
    },
    actions: {
      async setTodos ({ commit }) {
        try {
          const { data } = await this.$axios.get('/todos?userId=11')
          if (data) commit('SET_TODOS', data)
        } catch (error) {
          console.error(error)
        }
      },
      async addTodo ({ commit }, todo) {
        try {
          const { data } = await this.$axios.post('/todos', todo)
          if (data) commit('ADD_TODO', data)
        } catch (error) {
          console.error(error)
        }
      },
    },
    getters: {
      todos(state) {
        return state.todos;
      },
    }
  });
};

export default createStore;
