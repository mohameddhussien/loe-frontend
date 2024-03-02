
<template>
  <v-container fluid>
    <SpecialTextDesign class="text-5xl text-center ma-5" before="Just" to-be-decorated="Announced!"
      color="bg-pink-accent-2" />
    <v-row justify="center" no-gutters>
      <v-col v-for="(event, key) in justAnnouncedEvents" :key="key" class="d-flex justify-center" xl="4" xxl="4" lg="4"
        md="6" cols="12">
        <v-card min-height="300" class="ma-1 pa-1" variant="text"
          style="width: 100%; max-width: 350px; min-width: 300px;">
          <p class="font-sans text-center font-medium">{{ event.EVENT_NAME }}</p>
          <v-carousel class="elevation-5" cycle hide-delimiter-background :show-arrows="false" :touch="true"
            style="border-radius: 5px;">
            <v-carousel-item v-for="(image) in event.IMAGES" :src="image" cover />
          </v-carousel>
          <v-btn variant="outlined" block :to="{ path: '/event', query: { key: event.EVENT_KEY } }"
            class="border border-pink-darken-2 ma-1 hover:scale-105 hover:bg-[#F06292] hover:text-white">
            Go to event</v-btn>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" class="flex flex-col bg-pink-accent-3">
      <SpecialTextDesign class="text-5xl pt-5 text-center" before="Comming" to-be-decorated="Soon!"
        color="bg-pink-accent-2" />
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
          <v-carousel-item class="d-flex justify-center h-[300px]" v-for="event in commingSoonEvents">
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
import { useEvents } from '@/composables/store/events'
definePageMeta({
  // set custom layout
  layout: 'default'
})
useHead({
  title: 'Ladies only events',
})
const { getAllEvents } = useEvents()
const { data: events } = await getAllEvents();

const justAnnouncedEvents = ref(events.value.filter(event => {
  const status = event.STATUS.toString().toLowerCase();
  return status === 'just announced!';
}))
const commingSoonEvents = ref(events.value.filter(event => {
  const status = event.STATUS.toString().toLowerCase();
  return status === 'coming soon!';
}))

</script>