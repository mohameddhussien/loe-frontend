<template>
    <v-app class="bg-pink-lighten-5">
        <!-- style="background: url('login_bg.gif') center center/cover repeat; " -->
        <v-app-bar :extension-height="2" color="transparent" elevation="0">
            <div class="w-full d-flex justify-center">
                <v-img src="/Ladies_only_events.jpg" style="border-radius: 200px;"
                    class="elevation-2 hover:scale-110 opacity-50 hover:opacity-100 transition-all ma-2" cover
                    max-width="50" max-height="50" />
            </div>
        </v-app-bar>
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