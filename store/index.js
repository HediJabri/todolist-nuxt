import Vuex from 'vuex'
import * as todos from '@/store/modules/todos.js'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      todos
    }
  })
}
export default createStore
