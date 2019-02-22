<template>
   <v-list-tile>
    <v-list-tile-action>
      <v-btn v-if="!editMode" @click="load(toggleTodo, todo)" flat icon color="blue">
        <v-icon v-if="todo.completed" color="blue">done_all</v-icon>
        <v-icon v-else color="blue lighten-4">done</v-icon>
      </v-btn>
      <v-btn v-else @click="load(editTodo, todo)" flat icon color="blue">
        <v-icon color="blue lighten-2">edit</v-icon>
      </v-btn>
    </v-list-tile-action>
    <v-list-tile-content @dblclick="setEditMode(todo.title)">
      <v-list-tile-title
        v-if="!editMode"
        class="blue--text"
        :class="todo.completed && 'completed' || 'text--lighten-2'"
      >
        <span>{{ todo.title }}</span>
      </v-list-tile-title>
      <v-text-field
        v-else
        v-model="editTitle"
        @keyup.enter="load(editTodo, todo)"
        @keyup.esc="resetEditMode"
        flat
        solo
        autofocus
        hide-details
      >
      </v-text-field>
    </v-list-tile-content>
    <v-list-tile-action>
      <v-progress-circular
        v-if="isLoading"
        class="ma-1"
        indeterminate
        size="24"
        color="blue"
      >
      </v-progress-circular>
      <v-btn v-else-if="!editMode" @click="load(deleteTodo, todo)" color="red lighten-3" flat icon>
        <v-icon>close</v-icon>
      </v-btn>
      <v-btn v-else @click="resetEditMode" flat icon color="blue">
        <v-icon color="blue lighten-4">replay</v-icon>
      </v-btn>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'TodoItem',
  props: {
    todo: { type: Object, required: true },
  },
  data() {
    return {
      isLoading: false,
      editMode: false,
      editTitle: ''
    }
  },
  methods: {
    ...mapActions(['updateTodo', 'removeTodo']),
    async load(funct, args) {
      this.isLoading = true
      await funct(args)
      this.isLoading = false
    },
    async toggleTodo(todo) {
      const params = { completed: !todo.completed, title: this.todo.title };
      await this.updateTodo({ params, todo });
    },
    async editTodo(todo) {
      const params = { completed: todo.completed, title: this.editTitle };
      await this.updateTodo({ params, todo });
      this.resetEditMode()
    },
    async deleteTodo(todo) {
      await this.removeTodo(todo);
    },
    setEditMode(title) {
      this.editTitle = title
      this.editMode = true
    },
    resetEditMode() {
      this.editTitle = ''
      this.editMode = false
    }
  }
}
</script>

<style scoped>
  .completed {
    text-decoration: line-through!important;
  }
</style>
