<template>
  <v-card class="mt-4">
    <v-list class="pa-0">
      <v-list-tile :class="{ disabled: isLoading }">
        <v-list-tile-action>
          <v-icon color="blue">assignment</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-text-field
            v-model="newTodo.title"
            @keydown.enter.native="createTodo"
            autofocus
            browser-autocomplete="off"
            color="blue"
            flat
            minlength="1"
            maxlength="150"
            placeholder="Enter your next task"
            solo
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
          <v-btn
            v-else-if="newTodo.title.length"
            @click="createTodo"
            flat
            icon
            color="blue"
          >
            <v-icon color="blue">add_circle</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TodoInput',
  data() {
    return {
      isLoading: false,
      newTodo: {
        title: '',
        completed: false,
        user: 1
      }
    }
  },
  methods: {
    ...mapActions('todos', ['addTodo']),
    async createTodo() {
      if (this.newTodo.title.length) {
        this.isLoading = true
        let todo = { ...this.newTodo }
        this.newTodo.title = ''
        await this.addTodo(todo)
        this.isLoading = false
      }
    }
  }
}
</script>

<style scoped>
.disabled {
  opacity: 0.7;
}
</style>
