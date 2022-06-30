<template >
  <option v-for="item in FirstNames" v-bind:key="item.id">
    {{ item.name }}
  </option>
</template>

<script setup>
const FirstNames = [
  { id: 0, name: "Paul" },
  { id: 1, name: "Johny" },
  { id: 2, name: "Marco" },
  { id: 3, name: "Paulette" },
  { id: 4, name: "Poly" },
  { id: 5, name: "Paul-Victor" },
];
</script>

