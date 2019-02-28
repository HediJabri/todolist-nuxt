<template>
  <v-layout row>
    <v-flex sm6 offset-sm3 text-xs-center>
      <h1 id="title">TODO LIST</h1>
      <todo-show />
    </v-flex>
  </v-layout>
</template>

<script>
import TodoShow from '@/components/TodoShow'

export default {
  components: { TodoShow },
  async fetch({ store, params }) {
    await store.dispatch('setTodo', params.id)
  }
}
</script>
<style>
#title {
  font-family: 'Avenir', 'Helvetica', 'sans-serif';
  font-weight: 100;
  color: white;
  opacity: 0.8;
  margin: 35px 0;
  letter-spacing: 6px;
  font-size: 40px;
}
</style>
