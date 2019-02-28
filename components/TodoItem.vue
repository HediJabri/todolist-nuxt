<template>
  <todo-wrapper-actions>
    <template
      slot-scope="{ load, todoData, todoActions, todoEditMode, todoInput }"
    >
      <v-list-tile>
        <v-list-tile-action>
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
        </v-list-tile-action>
        <v-list-tile-content @dblclick="todoEditMode.set(todo.title)">
          <v-layout v-if="!todoData.editMode" align-center justify-start>
            <v-list-tile-title
              class="blue--text"
              :class="(todo.completed && 'completed') || 'text--lighten-2'"
            >
              <span>{{ todo.title }}</span>
            </v-list-tile-title>
            <div class="item">
              <v-btn
                color="blue lighten-3"
                flat
                icon
                @click="routeTo(todo._id)"
              >
                <v-icon>forward</v-icon>
              </v-btn>
            </div>
          </v-layout>
          <v-text-field
            v-else
            v-bind="todoInput.value"
            v-on="todoInput.event"
            @keyup.enter="load(todoActions.edit, todo)"
            @keyup.esc="todoEditMode.reset"
            flat
            solo
            autofocus
            hide-details
          >
          </v-text-field>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-progress-circular
            v-if="todoData.isLoading"
            class="ma-1"
            indeterminate
            size="24"
            color="blue"
          >
          </v-progress-circular>
          <v-btn
            v-else-if="!todoData.editMode"
            @click="load(todoActions.delete, todo)"
            color="red lighten-3"
            flat
            icon
          >
            <v-icon>close</v-icon>
          </v-btn>
          <v-btn v-else @click="todoEditMode.reset" flat icon color="blue">
            <v-icon color="blue lighten-4">replay</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </template>
  </todo-wrapper-actions>
</template>

<script>
import TodoWrapperActions from '@/components/TodoWrapperActions'

export default {
  name: 'TodoItem',
  components: {
    TodoWrapperActions
  },
  props: {
    todo: { type: Object, required: true }
  },
  methods: {
    routeTo(id) {
      this.$router.push(`todos/${id}`)
    }
  }
}
</script>

<style scoped>
.list__tile__content .item {
  display: none;
}
.list__tile__content:hover .item {
  display: flex;
}
.list__tile__title:hover span {
  cursor: pointer;
}
.completed {
  text-decoration: line-through !important;
}
</style>
