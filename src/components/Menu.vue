
<script setup>
import { RouterLink } from "vue-router";
</script>


<template>
  <nav class="fs-5 d-flex flex-column ">
    <RouterLink class="link-dark m-2" to="/">
      <i class="bi bi-kanban"></i>
      Demandes
    </RouterLink>

    <RouterLink class="link-dark m-2" to="/add-request">
      <i class="bi bi-plus-circle"></i>
      Ajouter demande
    </RouterLink>

    <RouterLink class="link-dark m-2" to="/dashboard-contact">
      Contacts
    </RouterLink>

    <RouterLink class="link-dark m-2" to="/contact">
      Individu
    </RouterLink>

    <RouterLink class="link-dark m-2" to="/archiving">
      <i class="bi bi-archive"></i>
      Archive
    </RouterLink>
    
  </nav>
</template>

<style scoped>
nav a {
  text-decoration: none;
  overflow-wrap: break-word;
}
</style>