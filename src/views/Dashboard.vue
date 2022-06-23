<script setup>

import { RouterLink } from "vue-router";
import Card from "@/components/Card.vue";
import Header from "@/components/Header.vue";

const totalPending = 16;
const totalReview = 3;
const totalSent = 8;
const totalTodo = 24;
</script>

<template>
  <div class="container my-2">
  
    <Header />
    <p class="display-6 mb-4">Demandes</p>
    <div class="row">
      <div class="col d-flex justify-content">
        <RouterLink to="/add-request" class="btn btn-primary" role="button" aria-disabled="true">+ Ajouter une demande</RouterLink>
      </div>
      <div class="col">
        <div class="input-group">
          <span class="input-group-text">
            <i class="bi bi-search"></i>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="date, tag, contact..."
            aria-label="Username"
          />
        </div>
      </div>
    </div>

    <div class="row mt-5 ">
      <div class="col bg-light rounded-3 m-2">
        <h6 class="m-3 text-muted" >A FAIRE ({{ totalTodo }})</h6>
        <hr>
        <div class="scroller-y">
          <Card 
            title="Association besoin local pour les adhérents" 
            contact="Jean DUPONT" 
            dateStart="21-01-22"
            departement="ASSO"
          />
    
          <Card 
            title="Demande logement 2/3P" 
            contact="Marie FRANCOIX" 
            dateStart="11-06-22"
            departement="LOGEMENT"
          />
          <Card 
            title="Demande salle polyvalente" 
            contact="Asso Musique " 
            dateStart="09-06-22"
            departement="CULTURE"
          />
          
        </div>
      </div>

      <div class="col bg-light rounded-3 m-2">
        <h6 class="m-3 text-muted">EN COURS ({{ totalPending }})</h6>
        <hr>
        <div class="scroller-y">
          <Card 
            title="Renovation route Av. Dupont" 
            contact="riverain" 
            dateStart="11-06-22"
            departement="ROUTE"
          />
          
        </div>
      </div>

      <div class="col bg-light rounded-3 m-2 ">
        <h6 class="m-3 text-muted">A VALIDER({{ totalReview }})</h6>
        <hr>
        <div class="scroller-y">
          <Card 
            title="recherche emploi/stage" 
            contact="Mme DELABORD" 
            dateStart="31-08-22"
            departement="EMPLOI"
          />
          <Card 
            title="urbanisme réunion" 
            contact="Sylvie LAURENT" 
            dateStart="31-09-22"
            departement="URBANISME"
          />
          
        </div>
      </div>

      <div class="col bg-light rounded-3 m-2  ">
        <h6 class="m-3 text-muted">A ENVOYER ({{ totalSent }})</h6>
        <hr>
        <div class="scroller-y">
          <Card
            title="problème voisinage rue du Conservatoire" 
            contact="Mme M MARCONI" 
            dateStart="31-08-22"
            departement="PLAINTE"
          /> 
        </div>
      </div>


    </div>
  </div>
</template>


<style scoped>
.scroller-y {
  height: 60vh;
  overflow-y: scroll;
  scrollbar-color: rgb(94, 94, 94) rgb(249, 249, 249);
  scrollbar-width: thin;
}


</style>
