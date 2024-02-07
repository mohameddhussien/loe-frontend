<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row no-gutters>
      <v-col>
        <h1 class="text-xl text-grey mb-4">Choose your Seats</h1>
      </v-col>
      <v-col>
        <v-select variant="outlined" label="Transactions" chips clearable :items="transactions">
          <template #chip="{ item }">
            <v-chip>{{ item.title }}: {{ item.value }}</v-chip>
          </template>
        </v-select>
      </v-col>
    </v-row>
    <BusDetails :bus="Buses[3]" />
  </v-container>
</template>
 
<script lang="ts" setup>
import { Bus } from '@/classes/Bus'
import busData from '~/assets/data/buses.json'
const Buses: Bus[] = busData
const transactions = ref([{}])
transactions.value = [{
  title: 'from-api',
  value: 7
}]


</script>

<style scoped></style>