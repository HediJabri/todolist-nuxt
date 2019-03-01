<template>
  <todo-wrapper-actions>
    <template
      slot-scope="{ load, todoData, todoActions, todoEditMode, todoInput }"
    >
      <v-card class="mt-4" v-if="todo">
        <v-card-actions class="px-2">
          <v-btn color="blue lighten-3" flat icon @click="$router.push('/')">
            <v-icon class="back-icon">forward</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            v-if="!todoData.editMode"
            flat
            icon
            color="blue"
            @click="todoEditMode.set(todo.title)"
          >
            <v-icon color="blue lighten-3">edit</v-icon>
          </v-btn>
          <v-btn v-else @click="todoEditMode.reset" flat icon color="blue">
            <v-icon color="blue lighten-4">replay</v-icon>
          </v-btn>
          <v-btn
            color="red lighten-3"
            flat
            icon
            @click="load(todoActions.deleteAndBackHome, todo)"
          >
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-actions>
        <v-divider></v-divider>
        <v-card-title class="px-2 subheading blue--text">
          <v-btn
            v-if="!todoData.editMode"
            @click="load(todoActions.toggle, todo)"
            flat
            icon
            color="blue"
          >
            <v-icon v-if="todo.completed" color="blue">done_all</v-icon>
            <v-icon v-else color="blue lighten-4">done</v-icon>
          </v-btn>
          <v-btn
            v-else
            @click="load(todoActions.edit, todo)"
            flat
            icon
            color="blue"
          >
            <v-icon color="blue lighten-2">edit</v-icon>
          </v-btn>
          <v-layout
            v-if="!todoData.editMode"
            align-center
            justify-start
            @dblclick="todoEditMode.set(todo.title)"
          >
            <span
              :class="(todo.completed && 'completed') || 'text--lighten-2'"
              >{{ todo.title }}</span
            >
          </v-layout>
          <v-text-field
            v-else
            v-bind="todoInput.value"
            v-on="todoInput.event"
            @keyup.enter="load(todoActions.edit, todo)"
            @keyup.esc="todoEditMode.reset"
            autofocus
            hide-details
            full-width
          ></v-text-field>
          <v-progress-circular
            v-if="todoData.isLoading"
            class="ma-2"
            indeterminate
            size="24"
            color="blue"
          ></v-progress-circular>
        </v-card-title>
      </v-card>
    </template>
  </todo-wrapper-actions>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TodoWrapperActions from '@/components/TodoWrapperActions'

export default {
  name: 'TodoShow',
  components: {
    TodoWrapperActions
  },
  computed: {
    ...mapGetters('todos', ['todo'])
  },
  methods: {
    ...mapActions('todos', ['resetTodo'])
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
