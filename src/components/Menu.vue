
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
      <i class="bi bi-people"></i>
      Contacts
    </RouterLink>

    <RouterLink class="link-dark m-2" to="/archiving">
      <i class="bi bi-archive"></i>
      Archive
    </RouterLink>

    <a
      class="m-2 link-dark"
      role="button"
      data-bs-toggle="collapse" 
      aria-expanded="false"
      href="#collapseConfig" 
      data-bs-target="#collapseConfig"
      aria-controls="collapseConfig">
      <i class="bi bi-gear"></i>
      Config
    </a>
    <RouterLink id="collapseConfig" class="link-dark ms-4" to="/setting">
      Configuration
    </RouterLink>
    <RouterLink id="collapseConfig" class="link-dark ms-4" to="/user">
      Utilisateurs
    </RouterLink>
    <RouterLink id="collapseConfig" class="link-dark ms-4" to="/role">
      Rôles
    </RouterLink>


    <RouterLink class="link-dark m-2" to="#">
      <i class="bi bi-life-preserver"></i>
      Aide en ligne
    </RouterLink>
    
  </nav>
</template>

<style scoped>
nav a {
  text-decoration: none;
  overflow-wrap: break-word;
}
</style>