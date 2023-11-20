<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
</script>

<style>
::-webkit-scrollbar {
  width: 10px;
}

.theme--light.v-app-bar.v-toolbar.v-sheet {
  background: transparent;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgb(240, 219, 230);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(240, 136, 230);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(240, 215, 230);
}
</style>
