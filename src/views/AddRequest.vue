<template>

<OneColumn>
  <template v-slot:col1> 
      <p class="display-6">Ajouter une demande</p>
      <div class="row">
        <button type="button" class="btn btn-primary col-2">
          <i class="bi bi-paperclip"></i>
          Ajouter fichiers
        </button>
        <AssignDepartement class="col-2"/>
      </div>
    
    <SubTitle title="DEMANDE"/>
    <div class="row">
      <div class="col">Sujet</div>
      <div class="col">Date arrivée</div>
      <div class="col">Date de fin</div>
    </div>
    
    <ContactInformation />
    

  </template>
</OneColumn>

</template>

<script setup>
import OneColumn from "@/layouts/OneColumn.vue";
import SubTitle from "@/layouts/SubTitle.vue";

import ContactInformation from "@/components/ContactInformation.vue";
import AssignDepartement from "@/components/AssignDepartement.vue";

</script>

<style>

</style>