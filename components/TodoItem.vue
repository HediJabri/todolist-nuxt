<template>
   <v-list-tile>
    <v-list-tile-action>
      <v-btn v-if="!editMode" flat icon color="blue">
        <v-icon v-if="todo.completed" color="blue">done_all</v-icon>
        <v-icon v-else color="blue lighten-4">done</v-icon>
      </v-btn>
      <v-btn v-else flat icon color="blue">
        <v-icon color="blue lighten-2">edit</v-icon>
      </v-btn>
    </v-list-tile-action>
    <v-list-tile-content @dblclick="setEditMode(todo.title)">
      <v-list-tile-title
        v-if="!editMode"
        class="blue--text"
        :class="todo.completed && 'completed' || 'text--lighten-2 '"
      >
        <span>{{ todo.title }}</span>
      </v-list-tile-title>
      <v-text-field
        v-else
        v-model="editTitle"
        @keyup.enter="editTodo(todo)"
        @keyup.esc="resetEditMode"
        flat
        solo
        autofocus
        hide-details
      >
      </v-text-field>
    </v-list-tile-content>
    <v-list-tile-action>
      <v-btn v-if="!editMode" color="red lighten-3" flat icon>
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
    i: { type: Number, required: true }
  },
  data() {
    return {
      editMode: false,
      editTitle: ''
    }
  },
  methods: {
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
