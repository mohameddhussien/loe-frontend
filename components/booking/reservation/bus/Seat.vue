<template>
    <my-btn :ripple="!seat?.isTaken && !seat?.isDriver" :size="size" @click="useBusActions.selectSeat(seat)"
        :on-hover="useBusActions.customHover(seat)" :bg-color="disabled ? 'transparent' : useBusActions.getBgColor(seat)"
        :disabled="disabled" :icon="seat?.icon" :class="{ ...useBusActions.customClass(seat), '!border !border-black/20': true }">
        {{ seat?.label }}
    </my-btn>
</template>

<script lang="ts" setup>
import { Seat } from '~/classes/seat';
const useBusActions = useBus()
const props = defineProps({
    seat: Seat,
    isNotSeat: Function
})
const disabled = ref<boolean>(false)
disabled.value = props.isNotSeat && props.isNotSeat(props.seat)

const size = ref(resizeLogic(window.innerWidth))
const handleResize = () => {
    const WindowSize = window.innerWidth;
    size.value = resizeLogic(WindowSize)
};
function resizeLogic(WindowSize: number) {
    if (WindowSize <= 350)
        return 30
    else if (WindowSize <= 500)
        return 40
    else if (WindowSize <= 700)
        return 'small'
    else if (WindowSize <= 1200)
        return 'default'
    return 'large'
}
onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

<style scoped></style>