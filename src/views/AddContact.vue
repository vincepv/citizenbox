<template>

<OneColumn>
  <template v-slot:col1>
    <p class="display-6">Ajouter un Contact</p>
    <ContactInformation/>    

  </template>
</OneColumn>

</template>

<script setup>
import { RouterLink } from "vue-router";

import OneColumn from "@/layouts/OneColumn.vue";
import ContactInformation from "@/components/ContactInformation.vue"
</script>

<style>

</style>