<template>
   <v-card class="mt-4">
    <v-list class="pa-0">
      <v-list-tile>
        <v-list-tile-action>
          <v-btn flat icon color="blue">
            <v-icon color="blue">assignment</v-icon>
          </v-btn>
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
          <v-btn v-if="newTodo.title.length" @click="createTodo" flat icon color="blue">
            <v-icon color="blue">add_circle</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TodoInput',
  data () {
    return {
      newTodo: {
        title: '',
        completed: false,
      }
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    async createTodo() {
      if (this.newTodo.title.length) {
        let todo = this.newTodo
        await this.addTodo(todo);
        this.newTodo.title = ''
      }
    }
  }
}
</script>

<style scoped>
</style>
