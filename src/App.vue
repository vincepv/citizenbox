<script setup>
import { RouterView } from 'vue-router'


import Logo from '@/components/Logo.vue'
import Menu from '@/components/Menu.vue'
</script>

<template>
  <div class="row">
  <header class="col-2 bg-light ">
    <div class="m-2">
      <div>
        <Logo />
        <Menu/>
      </div>
    </div>
  </header>

  <div class="col-10">
    <RouterView />
  </div>

  </div>
</template>

<style scoped>


header {
  height: 100vh;
}



</style>

