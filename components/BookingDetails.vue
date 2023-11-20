<template>
    <CustomDialog width="10000" :opened="opened" @close="emits('close', false)" transition="dialog-bottom"
        :fullscreen="true" color="pink-accent-1">
        <template #title>
            <v-toolbar color="transparent">
                <v-btn class="ma-0 d-none d-md-flex" variant="outlined" @click="emits('close', false)"
                    prepend-icon="mdi-close">
                    Close
                </v-btn>
                <v-btn class="ma-0 d-md-none d-flex" variant="outlined" @click="emits('close', false)" icon="mdi-close" />

                <v-img src="/loelogo.png" :max-width="200" :max-height="60" class="mx-auto" aspect-ratio="2/1"
                    cover></v-img>
                <v-btn class="ma-0 d-md-none d-flex" variant="outlined" @click="emits('close', false)"
                    icon="mdi-check-all" />
                <v-btn class="d-none d-md-flex" variant="outlined" @click="emits('close', false)"
                    prepend-icon="mdi-check-all">
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
                <span class="text-xl font-sans">People</span>
                <SpecialTextDesign :to-be-decorated="counter.toString()" color="before:bg-[rgba(255,255,255,0.3)]" />
                <div class="gap-x-1 d-flex ml-auto">
                    <v-btn @click="AddAdult()" variant="outlined" icon="mdi-menu-up-outline" size="x-small" />
                    <v-btn @click="removeAdult()" variant="outlined" icon="mdi-menu-down-outline" size="x-small" />
                </div>
            </v-row>
            <v-row>
                <v-list class="pa-0 ma-0 mt-1" nav bg-color="transparent" v-for="( adult, index ) in  Adults.details"
                    :key="index">
                    <v-list-item-title class="pa-0 ma-0 mt-1">
                        <div class="d-flex gap-x-3">
                            <span class="font-sans font-bold text-lg">Adult {{ index + 1 }}</span>
                            <v-btn class="ml-auto hover:text-red-700" size="small" prepend-icon="mdi-close" variant="tonal"
                                @click="removeAdult(index)">Remove</v-btn>
                        </div>
                    </v-list-item-title>
                    <v-list-item nav class="pa-0 ma-0 mt-1">
                        <div class="d-flex">
                            <v-checkbox density="compact" hide-details label="Bus" style="width: fit-content;"
                                v-model="adult.bus" />
                            <v-checkbox density="compact" hide-details label="Food" style="width: fit-content;"
                                v-model="adult.food" />
                        </div>
                        <div class="d-flex gap-x-2">
                            <v-text-field class="pt-2 w-[calc(100%-10rem)]" v-model="adult.name"
                                :rules='[(name) => name.match(/^[a-zA-Z_ ]|^[\u0621-\u064A\u0660-\u0669 ]*$/g) ? true : "Enter a proper name!"]'
                                variant="outlined" label="Child name" />
                            <v-text-field class="pt-2" v-model="adult.age" variant="outlined"
                                :rules='[(age) => age.match(/^[0-9]*$/g) ? (age < 9 ? `Min age is ${9}!` : (age < 1 ? "Invalid Age!" : age = parseInt(age), true)) : "Numeric value required!"]'
                                label="Child age" />
                        </div>
                    </v-list-item>

                </v-list>
            </v-row>
            <!-- <v-row justify="center" class="flex-col md:flex-row">
                <v-col>
                    <v-checkbox density="compact" hide-details label="Add a child" v-model="Children.child"
                        style="width: fit-content;" />
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn :disabled="!Children.child" variant="outlined" prepend-icon="mdi-baby" @click="AddChild()">Add
                        a
                        Child</v-btn>
                </v-col>
            </v-row>
            <v-row v-if="Children.child">
                <v-col>
                    <v-list class="pa-0 ma-0 mt-1" nav bg-color="transparent"
                        v-for="( child, index ) in  Children.details   " :key="index">
                        <v-list-item-title class="pa-0 ma-0 mt-1">
                            <div class="d-flex gap-x-3">
                                <span class="font-sans font-bold text-lg">Child {{ index + 1 }}</span>
                                <v-btn class="ml-auto hover:text-red-700" size="small" prepend-icon="mdi-close"
                                    variant="tonal" @click="removeChild(index)">Remove</v-btn>
                            </div>
                        </v-list-item-title>
                        <v-list-item nav class="pa-0 ma-0 mt-1">
                            <div class="d-flex">
                                <v-checkbox density="compact" hide-details label="Bus" style="width: fit-content;"
                                    v-model="child.bus" />
                                <v-checkbox density="compact" hide-details label="Food" style="width: fit-content;"
                                    v-model="child.food" />
                            </div>
                            <div class="d-flex gap-x-2">
                                <v-text-field class="pt-2 w-[calc(100%-10rem)]" v-model="Children.details[index].name"
                                    :rules='[(name) => name.match(/^[a-zA-Z_ ]|^[\u0621-\u064A\u0660-\u0669 ]*$/g) ? true : "Enter a proper name!"]'
                                    variant="outlined" label="Child name" />
                                <v-text-field class="pt-2" v-model="Children.details[index].age" variant="outlined"
                                    :rules='[(age) => age.match(/^[0-9]*$/g) ? (age > 8 ? `Max age is ${8}!` : (age < 1 ? "Invalid Age!" : age = parseInt(age), true)) : "Numeric value required!"]'
                                    label="Child age" />
                            </div>
                        </v-list-item>
                    </v-list>
                </v-col>
            </v-row> -->
            <!-- {{ Children }} -->
        </v-container>
        <v-container fluid :class="['pa-0 bottom-0 !sticky mt-auto transition-all', sheet.addClass, 'translate-y-[100%]']">
            <v-row class="!absolute translate-y-[-50%] translate-x-[-50%] bottom-[100%] left-[50%]">
                <v-btn class="hover:opacity-100 opacity-25 hover:!scale-[1.2]" @click="OpenBottomSheet" variant="outlined"
                    icon="mdi-chevron-double-up"></v-btn>
            </v-row>
            <v-row class="bg-pink-lighten-1 font-sans font-medium" no-gutters>
                <v-col class="pa-3 d-none d-sm-flex" cols="5" md="4">
                    <SpecialTextDesign :to-be-decorated="`${(Children.details.length * (event.price /
                        2)) + (event.price * (counter - Children.details.length)) + (Children.bus_price * Children.details.filter((obj) => obj.bus).length) + ((counter - Children.details.length) * 300) +
                        (Children.food_price * Children.details.filter((obj) => obj.food).length) + ((counter - Children.details.length) * 150)}EGP`
                        " color="before:border-b-2 ma-10 text-xxl pa-1 mb-8 before:-skew-x-[70deg] text-4xl my-5" />
                </v-col>
                <v-col v-if="Children.details.length" class="pa-3">
                    <span>Children: {{ Children.details.length }}</span>
                </v-col>
                <v-col v-if="counter - Children.details.length" class="pa-3">
                    <span>Adults: {{ counter - Children.details.length }}</span>
                </v-col>
            </v-row>
        </v-container>
    </CustomDialog>
</template>

<script setup>
const props = defineProps({
    opened: Boolean,
    counter: Number,
    event: Object
})
const emits = defineEmits(['close', 'update'])

const sheet = ref({
    opened: false,
    addClass: ''
})
const Bus = ref(false)
const Food = ref(false)
const cachedChildrenDetails = ref([])
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
    details: [{ name: "", age: "", contact: "", children: [], bus: false, food: false }]
})
const OpenBottomSheet = (e) => {
    sheet.value.opened = !sheet.value.opened;
    if (sheet.value.opened) {
        e.target.classList.remove('mdi-chevron-double-up')
        e.target.classList.add('mdi-chevron-double-down')
        sheet.value.addClass = 'translate-y-[-0rem]';
    }
    else {
        e.target.classList.remove('mdi-chevron-double-down');
        e.target.classList.add('mdi-chevron-double-up');
        sheet.value.addClass = '';
    }
    console.log(e.target.classList)
}
const AddChild = () => {
    if (Children.value.details.length < props.counter)
        Children.value.details.push({ name: "", age: "", bus: false, food: false })
}
const removeChild = (key) => {
    Children.value.details.splice(key, 1)
}
const AddChildOfAdult = (adult) => {
    if (Adults.value.details[adult].children.length < props.counter)
        Adults.value.details[adult].children.push({ name: "", age: "", bus: false, food: false })
}
const removeChildOfAdult = (adult, child) => {
    Adults.value.details[adult].children.splice(child, 1)
}
const AddAdult = () => {
    if (props.counter < 10) {
        emits('update', ++props.counter)
        Adults.value.details.push({ name: "", age: "", contact: "", children: [], bus: false, food: false })
    }
    else
        emits('update', props.counter)
}
const removeAdult = (adult) => {
    emits('update', --props.counter)
    if (!adult)
        Adults.value.details.pop()
    else
        Adults.value.details.splice(adult, 1)
}
watch(() => Children.value.child, (val) => {
    if (!val) {
        cachedChildrenDetails.value = Children.value.details
        Children.value.details = []
    }
    else {
        Children.value.details = cachedChildrenDetails.value
    }
})
</script>

<style scoped></style>