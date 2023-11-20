<template>
    <v-list class="pa-0 ma-0 mt-1" nav bg-color="transparent">
        <v-list-item-title class="pa-0 ma-0 mt-1">
            <div class="d-flex gap-x-3">
                <span class="font-sans font-bold text-lg">{{ label }} {{ index + 1 }}</span>
                <slot name="remove">
                </slot>
            </div>
        </v-list-item-title>
        <v-list-item nav class="pa-0 ma-0 mt-1">
            <div class="d-flex">
                <slot name="options">
                </slot>
            </div>
            <div class="d-flex gap-x-2">
                <slot>
                    <v-text-field class="pt-2 w-[calc(100%-10rem)]" v-model="person.name"
                        :rules='[(name) => name.match(/^[a-zA-Z_ ]|^[\u0621-\u064A\u0660-\u0669 ]*$/g) ? true : "Enter a proper name!"]'
                        variant="outlined" :label="`${label} name`" />
                    <v-text-field class="pt-2" v-model="person.age" variant="outlined"
                        :rules='[(age) => age.match(/^[0-9]*$/g) ? (age < 9 ? `Min age is ${9}!` : (age < 1 ? "Invalid Age!" : age = parseInt(age), true)) : "Numeric value required!"]'
                        :label="`${label} age`" />
                </slot>
            </div>
        </v-list-item>
    </v-list>
</template>

<script setup>
const props = defineProps({
    person: Object,
    parent_index: Number,
    label: String,
    index: Number,
});


</script>

<style lang="scss" scoped></style>