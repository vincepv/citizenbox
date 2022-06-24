<template>
  <div class="row">
    <div class="col">
      <h4>Demande</h4> 
      <p class="mt-4 text-muted">INFORMATION</p>
      <hr />

      <div class="row">
        <div class="col">De : {{ contact }}</div>
        <div class="col">
          Pour :
          <p class="badge rounded-pill bg-primary">{{ departement }}</p>
        </div>
      </div>

      <div class="row">
        
        <div class="col">
          Début : {{ startDate }}
          <i class="bi bi-calendar"></i>
        </div>
        <div class="col">
          Fin : {{ endDate }}
          <i class="bi bi-calendar"></i>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">Note : {{ note }}</div>
      </div>
      <p class="mt-4 text-muted">
        PIECE JOINTE
        <i class="bi bi-paperclip"></i>
      </p>
      <hr />
      <img src="@/assets/request.jpg" class="img-thumbnail" alt="..." />
    </div>

    <div class="col">
      <h4>Réponse</h4> 
      <p class="mt-4 text-muted">DESTINATAIRE</p>
      <hr />
      Voir les coordonnées du contact
      <RouterLink 
        to="/contact" 
        class="btn btn-primary" 
        role="button" 
        aria-disabled="true">
        Voir
      </RouterLink> 
      <div class="row m-3">
        Ajouter des personnes en copie de la réponse
      </div>
      <p class="mt-4 text-muted">MODELE DE REPONSE</p>
      <hr />
      Réponse Courrier (A4)
      <AnswerTemplate />

      <p class="mt-4 text-muted">REPONSE PERSONNALISEE</p>
      <hr />
      <TextEditor />

      <p class="mt-4 text-muted">SIGNATURE</p>
      <hr />
      <Signature />

      <p class="mt-4 text-muted">EXPORTATION</p>
      <hr />
      <div class="row">
        <div class="col">
          <button type="button" class="btn btn-primary">Imprimer</button> 
        </div>
        <div class="col">
          <button type="button" class="btn btn-primary">Exporter en PDF</button>
        </div>
      </div>



    </div>
  </div>
</template>

<script setup>


import TextEditor from '@/plugins/TextEditor.vue';
import Signature from '@/components/Signature.vue';
import AnswerTemplate from '@/components/AnswerTemplate.vue';


const contact = "Paul MARCONI";
const departement = "LOGEMENT";
const startDate = "08-06-22";
const endDate = "15-08-22";
const note =
  "Transfére la réponse au service logement pour valider le dossier avant la rentrée.Procédure déjà commencée l'année dernière, voir le réference du dossier #435.Voir si pièce manquantes dans le dossier.";
</script>

<style>
</style>