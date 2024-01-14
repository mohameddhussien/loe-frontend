<template>
    <v-app>
        <AppNavBar />
        <v-main>
            <BookingDetails :dialog-open="isDialogOpen" @save="closeDialogAndSave()" @cancel="cancelCurrentProcess()"
                :event="currentEvent" />
            <slot />
        </v-main>
        <AppFooter />
    </v-app>
</template>

<script setup>
import { useTheme } from 'vuetify'
import { useThemeChanges } from '@/composables/themeChanges'
import { currentEvent, isDialogOpen, closeDialogAndSave, cancelCurrentProcess } from '@/composables/dialogActions';
const theme = useTheme()

watch(() => theme.global.current.value.dark, (value) => {
    useThemeChanges().value = value ? "/dark_pink_liquid_bg.gif" : "/light_pink_liquid_bg.gif"
})
</script>

<style scoped></style>