<template>
  <div class="row">
    <div class="col-9 ">
      <Breadcrumb />
    </div>

    <div class="col-1 d-flex justify-content-center align-items-center">
      <LangSwitcher />
    </div>

    <div class="col-1 d-flex justify-content-center align-items-center">
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
import LangSwitcher from "@/components/LangSwitcher.vue";
</script>

