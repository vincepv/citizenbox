<template>

<OneColumn>
  <template v-slot:col1>
    <p class="display-6">Détails Contact</p>
    
    <div class="row">
    <p class="mt-4 text-muted">CONTACT</p>
    <hr /> 
    </div>

    <div class="row">
    <p class="mt-4 text-muted">DEMANDE</p>
    <hr /> 
    </div> 

    <div class="row">
    <p class="mt-4 text-muted">LOCALISATION</p>
    <hr /> 
    </div> 

    <div class="row">
    <p class="mt-4 text-muted">COORDONNEES</p>
    <hr /> 
    </div> 

    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
    </div>



  </template>
</OneColumn>

</template>

<script setup>
import OneColumn from "@/layouts/OneColumn.vue";

</script>

<style>

</style>