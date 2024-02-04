<template>
  <v-container fluid class="ma-0 pa-0">
    <h1 class="text-xl text-grey mb-4">Choose your Seats</h1>
    <BusReservation13 />
  </v-container>
</template>
 
<script lang="ts" setup>
</script>

<style scoped>
.color-button {
  border: 3px;
  border-radius: 5px;
  /* Add your desired border style */
  padding: 2px;
  /* Add padding for better appearance */
  cursor: pointer;
}

.color-button:hover {
  background-color: green;
}

.bg-green-lighten-1 {
  background-color: #64DD17 !important;
}
</style>