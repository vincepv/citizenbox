<template>

<OneColumn>
  <template v-slot:col1> 
    <p class="display-6">Ajouter une demande</p>
    <CreateRequest />
  </template>
</OneColumn>

</template>

<script setup>
import OneColumn from "@/layouts/OneColumn.vue";
import CreateRequest from "@/components/CreateRequest.vue";
</script>

<style>

</style>