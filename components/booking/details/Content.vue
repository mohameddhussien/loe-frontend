<template>
    <v-container v-for="(adult, adultIndex) in Adults" :key="adultIndex">
        <v-row>
            <Field v-model="adult.name" label="Name" class="max-w-[calc(70%-1rem)] mx-2" />
            <Field v-model="adult.age" label="Age" class="max-w-[calc(100%-70%-1rem)] mx-2" />
        </v-row>
        <v-row>
            <Field v-model="adult.contact_mandatory" label="Contact 1" type="phone_number"
                class="max-w-[calc(60%-1rem)] min-w-[200px] mx-2" />
            <Field v-model="adult.contact_optional" label="Contact 2" hint="Optional" type="phone_number"
                class="max-w-[calc(100%-60%-1rem)] mx-2" />
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import type { Adult } from '@/types/person'

const Adults = inject<Adult[]>('adults', []);
</script>

<style lang="scss" scoped></style>