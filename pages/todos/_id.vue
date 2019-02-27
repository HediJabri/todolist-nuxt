<template>
  <v-layout row>
    <v-flex sm6 offset-sm3 text-xs-center>
      <h1 id="title">TODO LIST</h1>
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
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  methods: {
    backToHome() {
      this.$router.push('/')
    }
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
.input-group__input {
  padding: 0!important;
}
.back-icon {
  transform: rotate(180deg);
}
</style>
