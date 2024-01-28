<template>
    <v-app class="bg-pink-lighten-5">
        <RegistrationAppBar />
        <v-main>
            <slot></slot>
        </v-main>
    </v-app>
</template>
<script setup>
import { useTheme } from 'vuetify/lib/framework.mjs';

useTheme().global.name.value = 'light'
</script>

<style scoped>
* {
    font-family: 'Montserrat', sans-serif;
}
</style>