<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row no-gutters>
      <h1 class="text-xl text-grey mb-4">Choose your Seats</h1>
    </v-row>
    <v-row no-gutters justify="center" justify-sm="start" justify-md="start">
      <v-col cols="auto" sm="6">
        <BusReservation50 />
      </v-col>
      <v-col cols="12" xs="12" sm="6">
        <v-card width="100%" height="100%" flat>
          <v-card-title>Bus Details: 50</v-card-title>
          {{ }}
          <v-card-text>
            <v-row no-gutters>
              Driver Name: {{ Buses[2].driver.name }}
            </v-row>
            <v-row no-gutters>
              Type: {{ Buses[2].busModel }}
            </v-row>
            <v-row no-gutters>
              Plate Number: {{ Buses[2].busPlate }}
            </v-row>
            <v-row no-gutters>
              Pickup Location: {{ Buses[2].pickup }}
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
 
<script lang="ts" setup>
import { Bus } from '@/classes/Bus'
import busData from '~/assets/data/buses.json'
const Buses: Bus[] = busData


</script>

<style scoped></style>