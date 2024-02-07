<template>
    <my-btn :ripple="!seat?.isTaken && !seat?.isDriver" :size="size" @click="useBusActions.selectSeat(seat)"
        :on-hover="useBusActions.customHover(seat)" :bg-color="disabled ? 'transparent' : useBusActions.getBgColor(seat)"
        :disabled="disabled" :icon="seat?.icon"
        :class="{ ...useBusActions.customClass(seat), '!border !border-black/20': true }">
        {{ seat?.label }}
    </my-btn>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify/lib/framework.mjs';
import { Seat } from '~/classes/seat';
const { name } = useDisplay()
const useBusActions = useBus()
const props = defineProps({
    seat: Seat,
    isNotSeat: Function
})
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
</script>

<style scoped></style>