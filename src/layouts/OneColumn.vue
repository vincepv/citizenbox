<template>
<div class="container my-2">
    <Header />
  <div class="row">
    <div class="col">
      <slot name="col1"></slot>
    </div>
  </div>

</div>

  
</template>

<script setup>

import Header from "@/components/Header.vue";

</script>

<style>

</style>