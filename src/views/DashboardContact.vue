<template>
  <OneColumn>
    <template v-slot:col1> 
      <p class="display-6 mb-4">Contacts</p>
     
      <SubTitle title="AJOUTER DE NOUVEAUX CONTACTS" />
      <div class="row">
        <div class="col-1 m-1">
          <button type="button" class="btn btn-primary">Ajouter</button>
        </div>
        <div class="col-1 m-1">
          <button type="button" class="btn btn-primary">Importer</button>
        </div>
      </div>

      <SubTitle title="CHERCHER DES CONTACTS" />

      <div class="row">
        <div class="col">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label fw-bold">
              Nom
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder=""
            />
          </div>
        </div>
        <div class="col">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label fw-bold">
              Prénom
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder=""
            />
          </div>
        </div>
        <div class="col">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label fw-bold">
              Date
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder=""
            />
          </div>
        </div>
      </div>
    
      <div class="row">
        <div class="col-1 m-1">
          <button type="button" class="btn btn-primary">Filtrer</button>
        </div>
        <div class="col-1 m-1">
          <button type="button" class="btn btn-primary">Exporter</button>
        </div>
      </div>

      <table class="table mt-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Prénom</th>
            <th scope="col">Nom</th>
            <th scope="col">Organisme</th>
            <th scope="col">Adresse</th>
            <th scope="col">Ville</th>
            <th scope="col">CP</th>
            <th scope="col">Date de Naissance</th>
            <th scope="col">Mobile</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <i class="bi bi-pencil"></i>
              <i class="bi bi-trash"></i>
            </th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Habitat +</td>
            <td>15 rue du four</td>
            <td>Marseille</td>
            <td>13001</td>
            <td>05-09-1983</td>
            <td>0662331161</td>
            <td>m.otto@gmail.com</td>
          </tr>
          
        </tbody>
      </table>

      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
              >Précédent</a
            >
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Suivant</a>
          </li>
        </ul>
      </nav>
    </template>
  </OneColumn>
</template>

<script setup>

import OneColumn from "@/layouts/OneColumn.vue";
import SubTitle from "@/layouts/SubTitle.vue";

</script>

<style>

</style>