<template>
    <v-container fluid>
        <v-stepper :mobile="mobile" flat :items="['Booking Details', 'Bus Reservation', 'Other Activities']">
            <template #item.1>
                <BookingDetailsWindow />
            </template>
            <template #item.2>
                <BusReservationWindow :class="customClass" />
            </template>
            <template #item.3>
                <h1 class="text-4xl font-bold mb-4">Other Activities</h1>
            </template>
            <!-- <v-stepper-actions>
                <template #next="{ props }">
                    <my-btn @click="() => props.onClick()" :border="false" prepend-icon="mdi-arrow-right"
                        on-hover="bg-pink-accent-1">Next
                        Step</my-btn>
                </template>
                <template #prev="{ props }">
                    <my-btn @click="() => props.onClick()" :border="false" prepend-icon="mdi-arrow-left"
                        on-hover="bg-pink-accent-1">Previous Step</my-btn>
                </template>
            </v-stepper-actions> -->
        </v-stepper>
    </v-container>
</template>

<script lang="ts" setup>
const mobile = ref(false)
const spacing = ref(false)
const customClass = {
    'border ma-0 pa-0': spacing.value
}
const handleResize = () => {
    const WindowSize = window.innerWidth
    if (WindowSize <= 600)
        mobile.value = true
    else
        mobile.value = false
    if (WindowSize <= 480)
        spacing.value = true
    else
        spacing.value = false
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
* {
    font-family: 'Rethink Sans', sans-serif;
}
</style>