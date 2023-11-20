
<template>
  <v-container>
    <SpecialTextDesign data-aos="zoom-in" data-aos-duration="1000" class="text-5xl text-center ma-5" before="Just"
      to-be-decorated="Announced!" color="before:bg-crayota-200" />
    <v-row no-gutters>
      <v-col v-for="(event, key) in events" :key="key" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"
        class="d-flex justify-center gap-2" xl="4" xxl="4" lg="4" md="6" cols="12">
        <v-card min-height="300" class="ma-2 pa-4" variant="text"
          style="width: 100%; max-width: 350px; min-width: 300px;">
          <p class="font-sans text-center font-medium">{{ event.name }}</p>
          <v-carousel class="elevation-5" cycle hide-delimiter-background :show-arrows="false" :touch="true"
            style="border-radius: 5px;">
            <v-carousel-item v-for="(image) in event.images" :src="image" cover />
          </v-carousel>
          <v-btn variant="outlined" block :to="{ path: `/event/${event.name.replaceAll(' ', '')}`, query: { key: key } }"
            class="border border-pink-darken-2 ma-1 hover:scale-105 hover:bg-[#F06292] hover:text-white">
            Go to event</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-container data-aos="fade-up" fluid>
    <v-row justify="center" class="flex flex-col bg-white">
      <SpecialTextDesign data-aos="zoom-in" data-aos-duration="1000" class="text-5xl pt-5 text-center bg-white"
        before="Comming" to-be-decorated="Soon!" color="before:bg-crayota-200" />
      <v-col>
        <v-carousel data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000"
          delimiter-icon="mdi-circle-outline" :touch="true" style="height: 600px;" hide-delimiter-background>
          <template #next="{ props }">
            <v-btn variant="plain" @click="props.onClick()" class="hover:scale-125 hover:-translate-x-2"
              icon="mdi-skip-next-outline" />
          </template>
          <template #prev="{ props }">
            <v-btn variant="plain" @click="props.onClick()" class="hover:scale-125 hover:translate-x-2"
              icon="mdi-skip-previous-outline" />
          </template>
          <v-carousel-item class="d-flex justify-center h-[300px]" v-for="event in soon">
            <v-card v-if="event.status == 'Comming soon!'" style="width: 50%; max-width: 500px; min-width: 300px;"
              class="ma-2 mx-auto pa-4 text-center" variant="text">
              <p class="font-sans text-center font-medium">{{ event.name }}</p>
              <v-carousel class="elevation-5" cycle hide-delimiters :show-arrows="false" :touch="true"
                style="border-radius: 5px;">
                <v-carousel-item v-for="(image) in event.images" :src="image" cover />
              </v-carousel>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <v-row>

    </v-row>
  </v-container>
</template>

<script setup>
import { getEvent } from '~/server/api/getEvent';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// AOS.init()
definePageMeta({
  // set custom layout
  layout: 'default'
})
useHead({
  title: 'Ladies only events',
})
// const soon = ref([
//   { name: 'Cornish El Nile', images: ['/trips/images/El_nile_1.jpg', '/trips/images/El_nile_2.jpg', '/trips/images/El_nile_3.jpg', '/trips/images/El_nile_4.jpg', '/trips/images/El_nile_5.jpg'] },
//   { name: "Alexandria", images: ["/trips/images/Alexandria_1.jpg", "/trips/images/Alexandria_2.jpg"], description: "A ladies-only trip to Alexandria promises to be an unforgettable experience. As you explore this historic city, you'll be surrounded by towering ancient architecture, bustling markets, and mouth-watering food. Begin your adventure at the iconic Bibliotheca Alexandrina, soaking in the knowledge and culture of this ancient city. Take a stroll through the charming streets of the European quarter, savoring delectable Egyptian street food, and admiring the city's stunning coastline. For a luxurious and relaxing experience, visit the Four Seasons Hotel Alexandria and indulge in spa treatments. Explore the ancient catacombs and forts, and sip on traditional Egyptian teas while appreciating the ingenuity of this vibrant culture. This trip is sure to leave you feeling rejuvenated, enlightened, and more connected to the richness of ancient Alexandria.", price: '450.00' },
// ])
const events = ref(getEvent(null, false))
const soon = ref(getEvent(null, true))

</script>