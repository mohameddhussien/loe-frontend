<template>
    <BookingBaseWindow title="Booking Details">
        <v-row no-gutters class="mx-2 gap-x-5">
            <h1 class="text-3xl font-italic mb-4">Number of People -> {{ personCounter.toString() }}</h1>
            <div class="gap-x-1 d-flex ml-auto">
                <my-btn @click="AddAdult" :disabled="personCounter >= 10" size="x-small" icon="mdi-menu-up-outline" />
                <my-btn @click="removeAdult()" :disabled="personCounter <= 0" size="x-small" icon="mdi-menu-down-outline" />
            </div>
        </v-row>
        <BookingDetailsContent />
    </BookingBaseWindow>
</template>

<script lang="ts" setup>
import type { Adult } from '~/types/person';

const Adults = inject<Adult[]>('adults', []);
const adult = ref<Adult>({
    name: "",
    age: "",
    contact_mandatory: "",
    contact_optional: "",
    children: [],
    bus: false,
    food: false,
    showDetails: false
});
const AddAdult = () => {
    if (personCounter.value < 10) {
        personCounter.value++
        Adults.push(adult.value)
    }
}

const removeAdult = () => {
    const lastAdultIndex = Adults.length - 1
    personCounter.value -= (Adults[lastAdultIndex].children.length + 1)
    Adults.pop()
}
</script>

<style lang="scss" scoped></style>