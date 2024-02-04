<template>
    <v-row v-for="(deck, deckIndex) in busActions.seats.value" :key="deckIndex" no-gutters>
        <v-col v-for="(seat, seatIndex) in deck" :key="seatIndex" class="ma-0 pa-0 d-flex justify-center">
            <slot :seat="seat" />
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
const busActions = useBus()
// onMounted(() => {
//     window.addEventListener('resize', busActions.handleResize);
// });

// onUnmounted(() => {
//     window.removeEventListener('resize', busActions.handleResize);
// });
</script>

<style scoped></style>