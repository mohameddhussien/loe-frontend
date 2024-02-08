<template>
    <v-tooltip>
        {{ seat?.label }}
        <template #activator="{ props }">
            <my-btn v-bind="props" :ripple="!seat?.isTaken && !seat?.isDriver" :size="size" @click="selectSeat(seat)"
                :on-hover="useBusActions.customHover(seat)" :bg-color="seat?.bgColor" :disabled="disabled"
                :icon="seat?.icon" :class="{ ...useBusActions.customClass(seat), '!border !border-black/20': true }">
                {{ seat?.seatNumber }}
            </my-btn>
        </template>
    </v-tooltip>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify/lib/framework.mjs';
import { Seat } from '~/classes/seat';
const emits = defineEmits(['selected-seat'])
const { name } = useDisplay()
const useBusActions = useBus()
const props = defineProps({
    seat: Seat,
    isNotSeat: Function,
})
useBusActions.getBgColor(props.seat)
const disabled = ref<boolean>(false)
disabled.value = props.isNotSeat && props.isNotSeat(props.seat)

const size = computed(() => {
    switch (name.value) {
        case 'xs': return 30
        case 'sm': return 38
        case 'md': return 50
        case 'lg': return 65
        case 'xl': return 85
        case 'xxl': return 90
        default: return undefined
    }
})
const selectSeat = (seat?: Seat) => {
    if (!seat)
        return;
    // if (seat.isDriver) {
    //     seat.bgColor = 'blue-lighten-2';
    //     return;
    // }
    // if (seat.isTaken) {
    //     seat.bgColor = 'red-lighten-2';
    //     emits('selected-seat', seat)
    //     return;
    // }
    // if (seat.isSelected) {
    //     seat.bgColor = 'white';
    //     takenSeats.value--
    //     seat.isSelected = false
    //     return;
    // }
    // if (takenSeats.value >= personCounter.value)
    //     return;
    // seat.bgColor = 'green-lighten-1';
    // takenSeats.value++
    // seat.isSelected = true
    emits('selected-seat', seat)
}
</script>

<style scoped></style>