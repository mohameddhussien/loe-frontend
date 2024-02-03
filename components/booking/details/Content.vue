<template>
    <v-container v-for="(adult, adultIndex) in Adults" :key="adultIndex">
        <v-row class="gap-x-2">
            <Field v-model="adult.name" label="Name" class="min-w-[calc(30%-1rem)] ma-0" />
            <Field v-model="adult.age" label="Age" class="min-w-[calc(15%-1rem)] ma-0" />
            <Field v-model="adult.contact_mandatory" label="Contact 1" type="phone_number"
                class="min-w-[calc(40%-1rem)] ma-0" />
        </v-row>
        <v-row class="gap-x-2">
            <Field v-model="adult.email" label="Email" type="email" hint="Optional" class="min-w-[200px] ma-0" />
            <Field v-model="adult.contact_optional" label="Contact 2" hint="Optional" type="phone_number" class="ma-0" />

        </v-row>

        <v-row justify="space-evenly">
            <v-col cols="3" md="3" xs="3" sm="3" lg="3" xl="3">
                <v-checkbox v-model="adult.bus" label="Bus" />
            </v-col>
            <v-col cols="3" md="3" xs="3" sm="3" lg="3" xl="3">
                <v-checkbox label="Pool" />
            </v-col>
            <v-col cols="3" md="3" xs="3" sm="3" lg="3" xl="3">
                <v-checkbox v-model="adult.food" label="Food" />
            </v-col>
            <v-col cols="12" md="3" xs="3" sm="3" lg="3" xl="3" class="d-flex justify-end">
                <my-btn class="bg-red-darken-4" on-hover="bg-red-accent-2" @click="bookingActions.removeAdult(adult, adultIndex)">Remove ⊗</my-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { Adult } from '@/classes/person';


const Adults = inject<Adult[]>('adults', []);
const bookingActions = useBooking(Adults)


console.log(Adults)
</script>

<style lang="scss" scoped></style>