<template>
  <div class="container my-2">
    <Header />
    <p class="display-6 mb-4">Archives</p>
    <p>
      Rechercher vos demandes en fonction de critères : date, nom, service...
    </p>

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
      <div class="col-1">
        <button type="button" class="btn btn-primary">Filtrer</button>
      </div>
      <div class="col-1">
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
          <th scope="col">Ville</th>
          <th scope="col">Date arrivée</th>
          <th scope="col">Date sortie</th>
          <th scope="col">Service</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>Habitat +</td>
          <td>Tours</td>
          <td>01-06-2022</td>
          <td>29-06-2022</td>
          <td>LOGEMENT</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Jean</td>
          <td>ARC</td>
          <td>EDF</td>
          <td>Tours</td>
          <td>01-06-2022</td>
          <td>29-06-2022</td>
          <td>URBANISME</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Dadiv</td>
          <td>DOUILLET</td>
          <td>JUDO ASSO CLUB</td>
          <td>Liles</td>
          <td>01-06-2022</td>
          <td>29-06-2022</td>
          <td>SPORT</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Harry</td>
          <td>Poter</td>
          <td>Club Magie enfant</td>
          <td>Marseille</td>
          <td>11-06-2022</td>
          <td>17-06-2022</td>
          <td>CULTURE</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Kylian</td>
          <td>BUTTEUR</td>
          <td>PSG</td>
          <td>Paris</td>
          <td>01-02-2022</td>
          <td>22-04-2022</td>
          <td>SPORT</td>
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
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
</script>

<style>
</style>