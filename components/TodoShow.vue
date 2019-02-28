<template>
  <v-card class="mt-4">
    <v-card-actions class="px-2">
      <v-btn color="blue lighten-3" flat icon @click="backToHome()">
        <v-icon class="back-icon">forward</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn flat icon color="blue">
        <v-icon color="blue lighten-3">edit</v-icon>
      </v-btn>
      <v-btn color="red lighten-3" flat icon>
        <v-icon>close</v-icon>
      </v-btn>
    </v-card-actions>
    <v-divider></v-divider>
    <v-card-title class="px-2 subheading blue--text">
        <v-btn flat icon color="blue">
        <v-icon color="blue">done_all</v-icon>
      </v-btn>
      <span>{{ todo.title }}</span>
    </v-card-title>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TodoShow',
  computed: {
    ...mapGetters(['todo']),
  },
  methods: {
    backToHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.input-group__input {
  padding: 0 !important;
}
.back-icon {
  transform: rotate(180deg);
}
</style>
