<template>
  <OneColumn>
    <template v-slot:col1>
      <h1>Settings</h1>
      <SubTitle title="email" />
      <SubTitle title="ticket Reglage par défaut" />
    </template>
  </OneColumn>
</template>

<script setup>
import OneColumn from "@/layouts/OneColumn.vue";
import SubTitle from "@/layouts/SubTitle.vue";

</script>

<style>

</style>