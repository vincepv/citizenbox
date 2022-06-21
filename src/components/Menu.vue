
<script setup>
import { RouterLink } from "vue-router";
</script>


<template>
  <nav class="fs-5 d-flex flex-column">
    <RouterLink class="link-dark" to="/">
      <i class="bi bi-house"></i>
      Home
    </RouterLink>
  </nav>
</template>

<style scoped>
nav a {
  text-decoration: none;
  overflow-wrap: break-word;
}
</style>