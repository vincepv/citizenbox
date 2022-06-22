<template>
  <div class="row">
    <div class="col-10">
      <Breadcrumb />
    </div>
    <div class="col-1">
      <Notification />
    </div>
    <div class="col-1">
      <Profil />
    </div>
  </div>
</template>

<script setup>
import Profil from "@/components/Profil.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import Notification from "@/components/Notification.vue";
</script>

<style>
</style>