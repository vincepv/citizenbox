<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Logo from '@/components/Logo.vue'
</script>

<template>
  <div class="row">
  <header class="col-2 bg-light ">
    <div class="m-2">
      <div>
        <Logo />
        <nav class="fs-5 d-flex flex-column">
          <RouterLink class="link-dark"  to="/">
            <i class="bi bi-house"></i>
            Home
          </RouterLink> 
        </nav>
      </div>
    </div>
  </header>

  <div class="col-10">
    <RouterView />
  </div>

  </div>
</template>

<style scoped>
.logo {
  box-sizing: border-box;
  overflow-wrap: break-word;
  color:rgb(119, 118, 118)
}

header {
  height: 100vh;
}

nav a {
  text-decoration: none;
  overflow-wrap: break-word;

}

</style>

