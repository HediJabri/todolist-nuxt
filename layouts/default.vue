<template>
  <v-app id="default-layout">
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
  }
</script>
<style>
  #default-layout {
    background-image: linear-gradient(to bottom, #1f69bd, #39A4F0);
    min-height: 100vh;
  }
</style>
