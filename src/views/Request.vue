<template>
  <Header />
  <div class="row mb-4">
    <a href="/" class="col-1 d-flex justify-content-center align-items-center">
      <i class="bi bi-arrow-left"></i>
    </a>

    <div class="col display-6">{{title}}</div>
    <div class="col-2 d-flex justify-content-center align-items-center"><ChangeState /></div>
    
    
  </div>

  <RequestDetail />



</template>

<script setup>

import Header from '@/components/Header.vue';
import RequestDetail from '@/components/RequestDetail.vue';
import ChangeState from '@/components/ChangeState.vue';

const title = "Demande de logement lotissement Jaurès"

</script>

<style scoped>

a {
  color: black;
  text-decoration: none;
  font-size: 2.5rem;
}

</style>