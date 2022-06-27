<template>
  <OneColumn>
    <template v-slot:col1>
      <p class="display-6">Configuration</p>
      <SubTitle title="Réglages" />
      <p>Heure, langue</p>

      <SubTitle title="Email" />
      <p>Email expéditeur, nom expéditeur</p>
      <SubTitle title="Ticket : reglage par défaut" />
      <p>cp, ville, pays </p>
    </template>
  </OneColumn>
</template>

<script setup>
import OneColumn from "@/layouts/OneColumn.vue";
import SubTitle from "@/layouts/SubTitle.vue";

</script>

<style>

</style>