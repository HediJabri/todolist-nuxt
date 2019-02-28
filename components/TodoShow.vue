<template>
  <v-card class="mt-4" v-if="todo">
    <v-card-actions class="px-2">
      <v-btn color="blue lighten-3" flat icon @click="backToHome()">
        <v-icon class="back-icon">forward</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        v-if="!editMode"
        flat
        icon
        color="blue"
        @click="setEditMode(todo.title)"
      >
        <v-icon color="blue lighten-3">edit</v-icon>
      </v-btn>
      <v-btn v-else @click="resetEditMode" flat icon color="blue">
        <v-icon color="blue lighten-4">replay</v-icon>
      </v-btn>
      <v-btn
        color="red lighten-3"
        flat
        icon
        @click="load(deleteTodoShow, todo)"
      >
        <v-icon>close</v-icon>
      </v-btn>
    </v-card-actions>
    <v-divider></v-divider>
    <v-card-title class="px-2 subheading blue--text">
      <v-btn
        v-if="!editMode"
        @click="load(toggleTodo, todo)"
        flat
        icon
        color="blue"
      >
        <v-icon v-if="todo.completed" color="blue">done_all</v-icon>
        <v-icon v-else color="blue lighten-4">done</v-icon>
      </v-btn>
      <v-btn v-else @click="load(editTodo, todo)" flat icon color="blue">
        <v-icon color="blue lighten-2">edit</v-icon>
      </v-btn>
      <v-layout
        v-if="!editMode"
        align-center
        justify-start
        @dblclick="setEditMode(todo.title)"
      >
        <span :class="(todo.completed && 'completed') || 'text--lighten-2'">{{
          todo.title
        }}</span>
      </v-layout>
      <v-text-field
        v-else
        v-model="editTitle"
        @keyup.enter="load(editTodo, todo)"
        @keyup.esc="resetEditMode"
        autofocus
        hide-details
        full-width
      >
      </v-text-field>
      <v-progress-circular
        v-if="isLoading"
        class="ma-2"
        indeterminate
        size="24"
        color="blue"
      >
      </v-progress-circular>
    </v-card-title>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TodoShow',
  data() {
    return {
      isLoading: false,
      editMode: false,
      editTitle: ''
    }
  },
  computed: {
    ...mapGetters(['todo'])
  },
  methods: {
    ...mapActions(['updateTodo', 'removeTodo', 'resetTodo']),
    async load(funct, args) {
      this.isLoading = true
      await funct(args)
      this.isLoading = false
    },
    async toggleTodo(todo) {
      const params = { completed: !todo.completed, title: this.todo.title }
      await this.updateTodo({ params, todo })
    },
    async editTodo(todo) {
      const params = { completed: todo.completed, title: this.editTitle }
      await this.updateTodo({ params, todo })
      this.resetEditMode()
    },
    async deleteTodo(todo) {
      await this.removeTodo(todo)
    },
    async deleteTodoShow(todo) {
      await this.removeTodo(todo)
      this.backToHome()
    },
    setEditMode(title) {
      this.editTitle = title
      this.editMode = true
    },
    resetEditMode() {
      this.editTitle = ''
      this.editMode = false
    },
    backToHome() {
      this.$router.push('/')
    }
  },
  destroyed() {
    this.resetTodo()
  }
}
</script>

<style scoped>
.input-group--text-field {
  padding: 0 !important;
}
.back-icon {
  transform: rotate(180deg);
}
.completed {
  text-decoration: line-through !important;
}
</style>
