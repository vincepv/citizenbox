<template>
  <Header />
  <div class="row">
    <a href="/" class="col-1">
      <i class="bi bi-arrow-left"></i>
    </a>
    <p class="display-6 mb-4 col">Request #61383</p>
  </div>

  <RequestDetail />



</template>

<script setup>

import Header from '@/components/Header.vue';
import RequestDetail from '@/components/RequestDetail.vue';


</script>

<style scoped>

a {
  color: black;
  text-decoration: none;
  font-size: 2.5rem;
}

</style>