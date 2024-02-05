<template>
    <my-btn :ripple="!seat?.isTaken" :size="size" @click="useBusActions.selectSeat(seat)"
        :on-hover="useBusActions.customHover(seat)" :bg-color="useBusActions.getBgColor(seat)"
        :disabled="isNotSeat && isNotSeat(seat)" :class="{ ...useBusActions.customClass(seat) }">{{ seat?.label }}</my-btn>
</template>

<script lang="ts" setup>
import { Seat } from '~/classes/seat';
const useBusActions = useBus()
const props = defineProps({
    seat: Seat,
    isNotSeat: Function
})
console.log({ ...useBusActions.customClass(props.seat) })
const size = ref(resizeLogic(window.innerWidth))
const handleResize = () => {
    const WindowSize = window.innerWidth;
    size.value = resizeLogic(WindowSize)
};
function resizeLogic(WindowSize: number){
    if (WindowSize <= 350)
        return 30
    else if(WindowSize <= 500)
        return 40
    else if(WindowSize <= 700)
        return 'small'
    else if(WindowSize <= 1200)
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