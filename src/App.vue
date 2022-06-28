<script setup>
import { RouterView } from "vue-router";
import Logo from "@/components/Logo.vue";
import TheMenu from "@/components/TheMenu.vue";
import TheLogin from "@/components/TheLogin.vue";


const isLog = true;

</script>

<template>

  <div v-if="isLog" class="row">
    <header class="col-2 bg-light">
      <div class="m-2">
        <div>
          <Logo />
          <TheMenu />
          
        </div>
      </div>
    </header>

    <div class="col-10">
      <RouterView />
    </div>
  </div>

  <div v-else>
    <TheLogin />
  </div>

</template>



<style scoped>
header {
  flex-grow: 1;
  min-height: 100vh;
}
</style>

