<template>
  <Header />
  <div class="row">
    <a href="/" class="col-1">
      <i class="bi bi-arrow-left"></i>
    </a>
  </div>

  <RequestDetail />



</template>

<script setup>

import Header from '@/components/Header.vue';
import RequestDetail from '@/components/RequestDetail.vue';
import ChangeState from '@/components/ChangeState.vue';


</script>

<style scoped>

a {
  color: black;
  text-decoration: none;
  font-size: 2.5rem;
}

</style>