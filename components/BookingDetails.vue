<template>
    <CustomDialog width="10000" :dialog-open="opened" @close="emits('cancel')" transition="dialog-bottom" :fullscreen="true"
        color="pink-accent-1">
        <template #title>
            <v-toolbar color="transparent">
                <v-btn class="ma-0 d-none d-md-flex" variant="outlined" prepend-icon="mdi-close" @click="emits('cancel')">
                    Close
                </v-btn>
                <v-btn class="ma-0 d-md-none d-flex" variant="outlined" icon="mdi-close" @click="emits('cancel')" />

                <v-img src="/loelogo.png" :max-width="200" :max-height="60" class="mx-auto" aspect-ratio="2/1"
                    cover></v-img>
                <v-btn class="ma-0 d-md-none d-flex" variant="outlined" icon="mdi-check-all" @click="emits('save')" />
                <v-btn class="d-none d-md-flex" variant="outlined" prepend-icon="mdi-check-all" @click="emits('save')">
                    Confirm
                </v-btn>
            </v-toolbar>
        </template>
        <v-container>
            <v-row justify="center">
                <SpecialTextDesign to-be-decorated="Booking Details"
                    color="before:border-y-2 pa-3 mb-8 before:-skew-x-[82deg] text-4xl my-5" />
            </v-row>
            <v-row class="mx-2 gap-x-5">
                <SpecialTextDesign to-be-decorated="People" />
                <SpecialTextDesign :to-be-decorated="personCounter.toString()" color="before:bg-[rgba(255,255,255,0.3)]" />
                <div class="gap-x-1 d-flex ml-auto">
                    <v-btn @click="AddAdult()" :disabled="personCounter >= 10" variant="outlined" icon="mdi-menu-up-outline"
                        size="x-small" />
                    <v-btn @click="removeAdult(null, null)" :disabled="personCounter <= 0" variant="outlined"
                        icon="mdi-menu-down-outline" size="x-small" />
                </div>
            </v-row>
            <v-row class="gap-y-3">
                <v-col cols="12" v-for="( adult, adult_index ) in  Adults.details" :key="adult_index">
                    <PersonDetails @show-details="(value) => adult.showDetails = value" :person="adult" :index="adult_index"
                        label="Adult">
                        <template #options>
                            <v-checkbox v-show="adult.showDetails" density="compact" hide-details label="Bus"
                                style="width: fit-content;" v-model="adult.bus" />
                            <v-checkbox v-show="adult.showDetails" density="compact" hide-details label="Food"
                                style="width: fit-content;" v-model="adult.food" />
                            <v-checkbox v-show="adult.showDetails" :disabled="personCounter >= 10" density="compact"
                                hide-details label="Add children" v-model="adult.child" style="width: fit-content;" />
                        </template>
                        <template #remove>
                            <v-hover>
                                <template #default="{ isHovering, props }">
                                    <v-btn v-bind="props" :class="[`ml-auto`, isHovering ? 'text-error' : 'text-white']"
                                        size="small" prepend-icon="mdi-close" variant="tonal"
                                        @click="removeAdult(adult, adult_index)">Remove</v-btn>
                                </template>
                            </v-hover>
                        </template>
                        <v-select v-show="adult.showDetails" :disabled="!adult.bus" clearable chips
                            label="Bus Meeting Point"
                            :items="['Tahreer', 'Sheraton', 'Obour appartements (Salah Salem)', 'Downtown']"
                            variant="outlined" class="min-w-full"></v-select>
                        <v-select v-show="adult.showDetails" :disabled="!adult.food" clearable chips label="Available meals"
                            :items="['Breakfast Pie with Honey', 'Dinner meal (Chicken and Fried Potatoes)']"
                            variant="outlined" class="min-w-full" multiple></v-select>
                    </PersonDetails>
                    <v-btn :disabled="!adult.child || personCounter >= 10" variant="outlined" prepend-icon="mdi-baby"
                        @click="AddChildOfAdult(adult_index)">Add a Child</v-btn>
                    <ExpandText show-text="Show Children Details" hide-text="Hide Children Details"
                        v-if="adult.children.length > 0" class="!w-full !block">
                        <div class="px-2 pt-2">
                            <PersonDetails @show-details="(value) => child.showDetails = value"
                                v-for="( child, child_index ) in adult.children" :key="child_index" :person="child"
                                :index="child_index" label="Child">
                                <template #options>
                                    <v-checkbox v-show="child.showDetails" :disabled="!adult.bus" density="compact"
                                        hide-details label="Bus" style="width: fit-content;" v-model="child.bus" />
                                    <v-checkbox v-show="child.showDetails" density="compact" hide-details label="Food"
                                        style="width: fit-content;" v-model="child.food" />
                                </template>
                                <template #remove>
                                    <v-hover>
                                        <template #default="{ isHovering, props }">
                                            <v-btn v-bind="props"
                                                :class="[`ml-auto`, isHovering ? 'text-error' : 'text-white']" size="small"
                                                prepend-icon="mdi-close" variant="tonal"
                                                @click="removeChildOfAdult(adult_index, child_index)">Remove</v-btn>
                                        </template>
                                    </v-hover>
                                </template>
                            </PersonDetails>
                        </div>
                    </ExpandText>
                </v-col>
            </v-row>
        </v-container>
        <v-container fluid :class="['pa-0 bottom-0 !sticky mt-auto transition-all', sheet.addClass, 'translate-y-[100%]']">
            <v-row class="!absolute translate-y-[-50%] translate-x-[-50%] bottom-[100%] left-[50%]">
                <v-btn class="hover:opacity-100 opacity-25 hover:!scale-[1.2]" @click="OpenBottomSheet" variant="outlined"
                    icon="mdi-chevron-double-up"></v-btn>
            </v-row>
            <v-row class="bg-pink-lighten-1 font-sans font-medium" no-gutters>
                <v-col class="pa-3 d-none d-sm-flex" cols="5" md="4">
                    <SpecialTextDesign :to-be-decorated="`${(Children.details.length * (event.price /
                        2)) + (event.price * (personCounter - Children.details.length)) + (Children.bus_price * Children.details.filter((obj) => obj.bus).length) + ((personCounter - Children.details.length) * 300) +
                        (Children.food_price * Children.details.filter((obj) => obj.food).length) + ((personCounter - Children.details.length) * 150)}EGP`
                        " color="before:border-b-2 ma-10 text-xxl pa-1 mb-8 before:-skew-x-[70deg] text-4xl my-5" />
                </v-col>
                <v-col v-if="Children.details.length" class="pa-3">
                    <span>Children: {{ Children.details.length }}</span>
                </v-col>
                <v-col v-if="personCounter - Children.details.length" class="pa-3">
                    <span>Adults: {{ personCounter - Children.details.length }}</span>
                </v-col>
            </v-row>
        </v-container>

    </CustomDialog>
</template>

<script setup>
import { personCounter } from '@/composables/dialogActions';
const emits = defineEmits(['cancel', 'save'])
const props = defineProps({
    dialogOpen: Boolean,
    event: Object
})
const opened = ref(props.dialogOpen);


const sheet = ref({
    opened: false,
    addClass: ''
})

const Children = ref({
    child: false,
    bus_price: 200,
    food_price: 120,
    details: []
})
const Adults = ref({
    adult: false,
    bus_price: 300,
    food_price: 150,
    details: [{ name: "", age: "", contact: "", child: false, children: [], bus: false, food: false, showDetails: true }]
})
const OpenBottomSheet = (e) => {
    sheet.value.opened = !sheet.value.opened;
    if (sheet.value.opened) {
        e.target.classList.remove('mdi-chevron-double-up')
        e.target.classList.add('mdi-chevron-double-down')
        sheet.value.addClass = 'translate-y-[0rem]';
    }
    else {
        e.target.classList.remove('mdi-chevron-double-down');
        e.target.classList.add('mdi-chevron-double-up');
        sheet.value.addClass = '';
    }
    console.log(e.target.classList)
}
const AddChildOfAdult = (adult) => {
    if (personCounter.value < 10) {
        personCounter.value++
        Adults.value.details[adult].children.push({ name: "", age: "", bus: false, food: false, showDetails: true })
    }
}
const removeChildOfAdult = (adult, child) => {
    personCounter.value--
    Adults.value.details[adult].children.splice(child, 1)
}
const AddAdult = () => {
    if (personCounter.value < 10) {
        personCounter.value++
        Adults.value.details.push({ name: "", age: "", contact: "", children: [], bus: false, food: false })
    }
}
const removeAdult = (adult, index) => {
    if (!adult) {
        const lastAdultIndex = Adults.value.details.length - 1
        personCounter.value -= (Adults.value.details[lastAdultIndex].children.length + 1)
        Adults.value.details.pop()
    }
    else {
        personCounter.value -= adult.children.length + 1
        Adults.value.details.splice(index, 1)
    }
}
watchEffect(() => {
    opened.value = props.dialogOpen;
});
</script>

<style scoped></style>