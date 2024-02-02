<template>
    <v-container v-for="(adult, adultIndex) in Adults" :key="adultIndex">
        <v-row class="gap-x-2">
            <Field v-model="adult.name" label="Name" class="max-w-[calc(70%)-1rem] ma-0" />
            <Field v-model="adult.age" label="Age" class="max-w-[calc(100%-70%)] ma-0" />
            <Field v-model="adult.contact_mandatory" label="Contact 1" type="phone_number"
                class="max-w-[calc(60%)-1rem] min-w-[200px] ma-0" />
        </v-row>
        <v-row class="gap-x-2">
            <Field v-model="adult.email" label="Email" type="email" hint="Optional"
                class="max-w-[calc(60%)-1rem] min-w-[200px] ma-0" />
            <Field v-model="adult.contact_optional" label="Contact 2" hint="Optional" type="phone_number"
                class="max-w-[calc(100%-60%)] ma-0" />

        </v-row>

        <v-row justify="space-between">
            <v-item-group class=" gap-x-20 d-flex">
                <v-checkbox v-model="adult.bus" label="Bus"></v-checkbox>
                <v-checkbox label="Pool"></v-checkbox>
                <v-checkbox v-model="adult.food" label="Food"></v-checkbox>
            </v-item-group>

            <MyBtn @click="bookingActions.removeAdult(adult, adultIndex)">Remove</MyBtn>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import type { Adult } from '~/types/person';


const Adults = inject<Adult[]>('adults', []);
const bookingActions = useBooking(Adults)


console.log(Adults)
</script>

<style lang="scss" scoped></style>