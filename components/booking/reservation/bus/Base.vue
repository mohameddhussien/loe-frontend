<template>
    <v-row v-for="(deck, deckIndex) in seats?.value" :key="deckIndex" justify-sm="end" no-gutters
        class="mb-1 gap-1">
        <v-col cols="auto" align-self="center" v-for="(seat, seatIndex) in deck" :key="seatIndex" v-bind="$attrs">
            <slot :seat="seat" />
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
import { Seat } from '~/classes/seat';

const props = defineProps({
    seats: Object as () => Ref<Seat[][]>,
})
console.log("SEATS: ", props.seats?.value)
</script>

<style scoped></style>