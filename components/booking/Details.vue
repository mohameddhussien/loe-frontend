<template>
    <BaseDialog width="10000" :dialog-open="opened" @close="emits('cancel')" transition="dialog-bottom" :fullscreen="true"
        color="pink-accent-2">
        <template #title>
            <v-toolbar color="transparent">
                <v-btn class="ma-0 d-none d-md-flex" variant="outlined" prepend-icon="mdi-close" @click="emits('cancel')"
                    text="Close" />
                <v-btn class="ma-0 d-md-none d-flex" variant="outlined" icon="mdi-close" @click="emits('cancel')" />
                <v-img src="/loelogo.png" :max-width="200" :max-height="60" class="mx-auto" aspect-ratio="2/1" cover />
                <v-btn class="ma-0 d-md-none d-flex" variant="outlined" icon="mdi-check-all" @click="emits('save')" />
                <v-btn class="d-none d-md-flex" variant="outlined" prepend-icon="mdi-check-all" @click="emits('save')"
                    text="Confirm" />
            </v-toolbar>
        </template>
        <!-- <v-container class="mb-14">
            <v-row no-gutters justify="center">
                <SpecialTextDesign to-be-decorated="Booking Details"
                    color="before:border-y-2 pa-3 mb-8 before:-skew-x-[82deg] text-4xl my-5" />
            </v-row>
            <v-row no-gutters class="mx-2 gap-x-5">
                <SpecialTextDesign to-be-decorated="Number of People -> " :after="personCounter.toString()" />
                <div class="gap-x-1 d-flex ml-auto">
                    <my-btn @click="AddAdult" :disabled="personCounter >= 10" size="x-small" icon="mdi-menu-up-outline" />
                    <my-btn @click="removeAdult(null, null)" :disabled="personCounter <= 0" size="x-small"
                        icon="mdi-menu-down-outline" />
                </div>
            </v-row>
            <v-row no-gutters class="gap-y-3">
                <v-col cols="12" v-for="( adult, adult_index ) in  Adults" :key="adult_index">
                    <BookingPersonDetails @show-details="(value) => adult.showDetails = value" :person="adult"
                        :index="adult_index" label="Adult">
                        <template #options>
                            <v-checkbox v-show="adult.showDetails" density="compact" hide-details label="Bus"
                                style="width: fit-content;" v-model="adult.bus" />
                            <v-checkbox v-show="adult.showDetails" density="compact" hide-details label="Food"
                                style="width: fit-content;" v-model="adult.food" />
                            <v-checkbox v-show="adult.showDetails" :disabled="personCounter >= 10" density="compact"
                                hide-details label="Add children" v-model="adult.child" style="width: fit-content;" />
                        </template>
                        <template #remove>
                            <my-btn size="small" prepend-icon="mdi-close" class="ml-auto"
                                @click="removeAdult(adult, adult_index)" on-hover="text-error" bg-color="text-white"
                                variant="tonal">Remove</my-btn>
                        </template>
                        <v-select v-show="adult.showDetails" :disabled="!adult.bus" clearable chips
                            label="Bus Meeting Point"
                            :items="['Tahreer', 'Sheraton', 'Obour appartements (Salah Salem)', 'Downtown']"
                            variant="outlined" class="min-w-full" />
                        <v-select v-show="adult.showDetails" :disabled="!adult.food" clearable chips label="Available meals"
                            :items="['Breakfast Pie with Honey', 'Dinner meal (Chicken and Fried Potatoes)']"
                            variant="outlined" class="min-w-full" multiple />

                    </BookingPersonDetails>
                    <my-btn v-show="adult.showDetails" @click="AddChildOfAdult(adult_index)"
                        :disabled="!adult.child || personCounter >= 10" prepend-icon="mdi-baby">Add a Child</my-btn>
                    <BookingPersonDetails @show-details="(value) => child.showDetails = value"
                        v-for="( child, child_index ) in adult.children" :key="child_index" :person="child"
                        :index="child_index" label="Child">
                        <template #options>
                            <v-checkbox v-show="child.showDetails" :disabled="!adult.bus" density="compact" hide-details
                                label="Bus" style="width: fit-content;" v-model="child.bus" />
                            <v-checkbox v-show="child.showDetails" density="compact" hide-details label="Food"
                                style="width: fit-content;" v-model="child.food" />
                        </template>
                        <template #remove>
                            <my-btn size="small" prepend-icon="mdi-close" class="ml-auto"
                                @click="removeChildOfAdult(adult_index, child_index)" on-hover="text-error"
                                bg-color="text-white" variant="tonal">Remove</my-btn>
                        </template>
                    </BookingPersonDetails>
                </v-col>
            </v-row>
        </v-container> -->
        <BookingSteppers></BookingSteppers>
        <!-- @delete="(person, index) => removeAdult(person, index)" -->
        <BookingFooter :people="Adults" :event="event" />
    </BaseDialog>
</template>
<script lang="ts" setup>
import { Adult } from '@/classes/person'
const emits = defineEmits(['cancel', 'save'])
const props = defineProps({
    dialogOpen: Boolean,
    event: Object
})
const opened = ref(props.dialogOpen);

const Adults = reactive<Adult[]>([
    { name: "", age: "", contact_mandatory: '', contact_optional: '', email: "", children: [], bus: false, food: false, showDetails: true }
]);
provide('adults', Adults)

watchEffect(() => {
    opened.value = props.dialogOpen;
});
</script>

<style scoped>
* {
    font-family: 'Rethink Sans', sans-serif;
}
</style>