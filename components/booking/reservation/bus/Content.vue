<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row no-gutters>
      <h1 class="text-xl text-grey mb-4">Choose your Seats</h1>
    </v-row>
    <BusDetails :bus="Buses[3]" />
  </v-container>
</template>
 
<script lang="ts" setup>
import { Bus } from '@/classes/Bus'
import busData from '~/assets/data/buses.json'
const Buses: Bus[] = busData


</script>

<style scoped></style>