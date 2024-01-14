<template>
    <v-app class="bg-pink-lighten-5">
        <!-- style="background: url('login_bg.gif') center center/cover repeat; " -->
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

<style scoped></style>