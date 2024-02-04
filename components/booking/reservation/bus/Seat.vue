<template>
    <my-btn :ripple="!seat?.isTaken" @click="useBusActions.selectSeat(seat)" :on-hover="useBusActions.customHover(seat)"
        :bg-color="useBusActions.getBgColor(seat)" :disabled="isNotSeat && isNotSeat(seat)"
        :class="{ ...useBusActions.customClass(seat) }">{{ seat?.label }}</my-btn>
</template>

<script lang="ts" setup>
import { Seat } from '~/classes/seat';
const useBusActions = useBus()
const props = defineProps({
    seat: Seat,
    isNotSeat: Function
})
</script>

<style scoped></style>