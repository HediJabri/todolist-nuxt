<template>
  <v-card class="mt-4" v-if="todos.length">
    <v-list class="pa-0">
      <template v-for="(todo, i) in todos">
        <v-divider :key="`${i}-divider`"></v-divider>
        <todo-item :todo="todo" :i="i" :key="`${i}-${todo.id}`" />
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
  computed: {
    ...mapGetters(['todos'])
  },
}
</script>

<style scoped>
</style>
