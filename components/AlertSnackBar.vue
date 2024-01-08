<template>
    <v-snackbar :color="snackBarOptions.color" v-model="snackbarState.snackbar" :timeout="snackbarState.timeout">
        <template #actions>
            <v-btn text @click="snackbarState.snackbar = false">Close</v-btn>
        </template>
        <template #default>
            {{ snackbarState.snackbarText }}
            <v-progress-linear :model-value="snackbarState.progress" />
        </template>
    </v-snackbar>
</template>

<script setup>
import { snackbarState, snackBarOptions } from '@/composables/store/snackBarActions'
</script>

<style lang="scss" scoped></style>