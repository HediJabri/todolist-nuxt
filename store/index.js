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
    },
    actions: {
      async setTodos ({ commit }) {
        try {
          const { data } = await this.$axios.get('/todos?userId=1')
          if (data) commit('SET_TODOS', data)
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
