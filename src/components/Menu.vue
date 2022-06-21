
<script setup>
import { RouterLink } from "vue-router";
</script>


<template>
  <nav class="fs-5 d-flex flex-column">
    <RouterLink class="link-dark" to="/">
      <i class="bi bi-house"></i>
      Home
    </RouterLink>

    <RouterLink class="link-dark" to="/add-request">
      <i class="bi bi-plus-circle"></i>
      Add Request
    </RouterLink>

    <RouterLink class="link-dark" to="/archiving">
      <i class="bi bi-archive"></i>
      Archiving
    </RouterLink>
    
  </nav>
</template>

<style scoped>
nav a {
  text-decoration: none;
  overflow-wrap: break-word;
}
</style>