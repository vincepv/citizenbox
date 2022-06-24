<template>

<OneColumn>
  <template v-slot:col1>
    <p class="display-6">Détails Contact</p>
    <ContactInformation/>    

  </template>
</OneColumn>

</template>

<script setup>
import OneColumn from "@/layouts/OneColumn.vue";
import ContactInformation from "@/components/ContactInformation.vue"

</script>

<style>

</style>