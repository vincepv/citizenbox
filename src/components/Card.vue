<template>
  <div class="card m-3">
    <div class="card-body">
      <p class="card-title fw-bold">{{ title }}</p>
      <p id="description" class="text-muted fw-light">
        {{ contact }} | {{ dateStart }}
      </p>
      <div class="row">
        <div class="col">
          <p class="badge rounded-pill bg-primary">{{ departement }}</p>
        </div>
        <div class="col d-flex justify-content-end">
          
          <div class="dropdown">
            <button
              class="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
            <i class="bi bi-gear"></i>
            </button>
            <ul class="dropdown-menu" >
              <li><RouterLink class="dropdown-item" to="/request">Editer</RouterLink></li>
              <li><a class="dropdown-item text-danger" id="delete" href="#">Supprimer</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { RouterLink } from "vue-router";

defineProps({
  title: String,
  contact: String,
  dateStart: String,
  departement: String,
});



</script>

<style scoped>
#description {
  font-size: 14px;
}

#delete {
  color: aqua;

}
</style>
