<template>
  <v-img src="../../../../public/Bus-Plan.png"></v-img>
  <v-container>
    <h1 class="text-3xl mb-4">Choose your Seats</h1>
    <v-row v-for="(row, rowIndex) in buttons" :key="rowIndex">
      <v-col v-for="(btnObj, btn_index) in row" :key="btn_index">
        <v-btn @click="changeColor(btnObj)" :class="{
          [`bg-${btnObj.bgColor}`]: true, 'color-button border': true,
          'd-none': isButtonDisabled(rowIndex,btn_index)
        }" :icon="btnObj.icon" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

const buttons = Array(4).fill(Array(13).fill({
  bgColor: 'white',
  color: '',
  disabled: false,
  label: '',
  icon: ''
}));

const changeColor = (buttonObj) => {
  buttonObj.bgColor = 'green-lighten-1'
};

const isButtonDisabled = (rowIndex, buttonIndex) => {
  return (rowIndex === 2 && (buttonIndex === 6 || buttonIndex === 7)) ||
    (rowIndex === 3 && (buttonIndex === 6 || buttonIndex === 7));
};
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

.color-button:hover{
  background-color: green;
}
.bg-green-lighten-1 {
  background-color: #64DD17 !important;
}
</style>