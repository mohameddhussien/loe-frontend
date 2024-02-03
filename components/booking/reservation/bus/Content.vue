<template>
    <v-img src="../../../../public/Bus-Plan.png"></v-img>
    <v-container>
        <h1 class="text-3xl mb-4">Choose your Seats</h1>
        <v-row>
            <v-col v-for="(button, index) in 13" :key="index">
        <button @click="changeColor(index)" class="color-button border">A</button>
      </v-col>
        </v-row>
       
    </v-container>
</template>

<script setup>
import { ref } from 'vue';

const color = ref('');
const buttons = ref(Array(13).fill(0));

const changeColor = (index) => {
  color.value = '#64DD17';
  buttons.value[index] += 1;
};
</script>

<style scoped>
.color-button {
  border: 1px solid #000; /* Add your desired border style */
  padding: 2px; /* Add padding for better appearance */
  cursor: pointer;
}

.color-button.clicked {
  background-color: #64DD17; /* Change background color when clicked */
}
</style>