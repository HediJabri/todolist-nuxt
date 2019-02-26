<template>
  <v-card class="mt-4" v-if="todos.length">
    <v-card-actions class="px-2" v-show="todos.length">
      <v-icon color="blue" :class="{'text--lighten-4': !allTodosDone}">
        playlist_add_check
      </v-icon>
      <v-spacer></v-spacer>
      <v-btn
        v-for="(filter, i) in filters" :key="i"
        :class="{'btn--active': activeFilter === filter}"
        color="blue" flat small
        @click="activeFilter = filter"
      >
        {{ filter }}
      </v-btn>
    </v-card-actions>
    <v-list class="pa-0">
      <template v-for="(todo, i) in filteredTodos">
        <v-divider :key="`${i}-divider`"></v-divider>
        <todo-item :todo="todo" :key="todo._id" />
      </template>
    </v-list>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import  TodoItem from '@/components/TodoItem';

export default {
  name: 'TodoList',
  components: { TodoItem },
  data() {
    return {
      filters: ['todo', 'done', 'all'],
      activeFilter: 'all',
    }
  },
  computed: {
    ...mapGetters(['todos']),
    filteredTodos() {
      if (this.activeFilter === 'todo') return this.todos.filter(todo => !todo.completed)
      if (this.activeFilter === 'done') return this.todos.filter(todo => todo.completed)
      return this.todos
    },
    allTodosDone() {
      return this.todos.filter(todo => todo.completed).length === this.todos.length
    }
  },
}
</script>

<style scoped>
.btn {
  min-width: 40px;
}
</style>
