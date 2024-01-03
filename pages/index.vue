
<template>
  <v-container fluid>
    <SpecialTextDesign class="text-5xl text-center ma-5" before="Just" to-be-decorated="Announced!"
      color="before:bg-crayota-200" />
    <v-row justify="center" no-gutters>
      <v-col v-for="(event, key) in events" :key="key" class="d-flex justify-center"
        xl="4" xxl="4" lg="4" md="6" cols="12">
        <v-card min-height="300" class="ma-1 pa-1" variant="text"
          style="width: 100%; max-width: 350px; min-width: 300px;">
          <p class="font-sans text-center font-medium">{{ event.EVENT_NAME }}</p>
          <v-carousel class="elevation-5" cycle hide-delimiter-background :show-arrows="false" :touch="true"
            style="border-radius: 5px;">
            <v-carousel-item v-for="(image) in event.IMAGES" :src="image" cover />
          </v-carousel>
          <v-btn variant="outlined" block
            :to="{ path: '/event', query: { id: event.EVENT_ID } }"
            class="border border-pink-darken-2 ma-1 hover:scale-105 hover:bg-[#F06292] hover:text-white">
            Go to event</v-btn>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" class="flex flex-col bg-white">
      <SpecialTextDesign class="text-5xl pt-5 text-center bg-white" before="Comming" to-be-decorated="Soon!"
        color="before:bg-crayota-200" />
      <v-col>
        <v-carousel delimiter-icon="mdi-circle-outline" :touch="true" style="height: 600px;" hide-delimiter-background>
          <template #next="{ props }">
            <v-btn variant="plain" @click="props.onClick()" class="hover:scale-125 hover:-translate-x-2"
              icon="mdi-skip-next-outline" />
          </template>
          <template #prev="{ props }">
            <v-btn variant="plain" @click="props.onClick()" class="hover:scale-125 hover:translate-x-2"
              icon="mdi-skip-previous-outline" />
          </template>
          <v-carousel-item class="d-flex justify-center h-[300px]"
            v-for="event in events.filter(event => event.CATEGORY == 'Comming Soon!' ? event : undefined)">
            <v-card style="width: 50%; max-width: 500px; min-width: 300px;" class="ma-2 mx-auto pa-4 text-center"
              variant="text">
              <p class="font-sans text-center font-medium">{{ event.EVENT_NAME }}</p>
              <v-carousel class="elevation-5" cycle hide-delimiters :show-arrows="false" :touch="true"
                style="border-radius: 5px;">
                <v-carousel-item v-for="image in event.IMAGES" :src="image" cover />
              </v-carousel>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { getAllEvents } from '~/server/api/getAllEvents';
definePageMeta({
  // set custom layout
  layout: 'default'
})
useHead({
  title: 'Ladies only events',
})
const events = ref(await getAllEvents())

</script>