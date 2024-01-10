<template>
    <v-app style="background: url('login_bg.gif') center center/cover repeat; ">
        <div class="d-flex max-md:justify-center">
            <v-img src="/Ladies_only_events.jpg"
                style="border-radius: 200px; box-shadow: 0px 0px 100px 50px #fbb6ce, 0px 0px 20px 4px #9f7aea;"
                class="top-[50%] left-[50%] elevation-0 translate-x-[-50%] translate-y-[-50%] hover:scale-110 opacity-50 hover:opacity-100 transition-all elevation-3 ma-2"
                cover max-width="50" max-height="50" />
        </div>
        <v-main class="align-center d-flex justify-center">
            <slot></slot>
        </v-main>
    </v-app>
</template>
<script setup>
import { useTheme } from 'vuetify/lib/framework.mjs';

useTheme().global.name.value = 'light'
</script>

<style scoped></style>