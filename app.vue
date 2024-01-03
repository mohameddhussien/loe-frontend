<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  filter: grayscale(1) blur(1rem);
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.2s;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}

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
  background: rgb(255, 128, 171);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(255, 60, 163);
}
</style>
