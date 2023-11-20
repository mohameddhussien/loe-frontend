<template>
    <v-card class="font-sans" elevation="10" color="rgba(255,255,255,0.8)"
        style="min-width: 400px; width: 100%; max-width: 700px; padding: 20px; margin: 20px;">
        <v-btn :to="$route.path == '/login' ? '/register' : '/login'" style="position: absolute;" class="ma-2 top-0 right-0"
            variant="plain" icon="mdi-login" />
        <v-btn variant="plain" icon="mdi-information-outline" to="/about" style="position: absolute;"
            class="ma-2 top-0 left-0" />
        <v-card-title class="d-flex justify-center"><span class="text-4xl mx-[100px]">{{ title }}</span>
        </v-card-title>
        <v-card-subtitle class="d-flex justify-center"><span class="text-lg">{{ subtitle }}</span></v-card-subtitle>
        <v-container>
            <v-row dense no-gutters>
                <v-col>
                    <slot></slot>
                </v-col>
            </v-row>
        </v-container>
        <v-card-actions class="flex-wrap d-flex justify-center font-sans">

            <slot name="submit"></slot>

            <v-divider :thickness="2" class="ma-2 border-opacity-100"></v-divider>
            <p class="ma-2">
                <slot name="footer"></slot>
            </p>
            <v-btn v-if="useRoute().path == '/login'" style="position: absolute;" class="ma-1 bottom-0 right-0"
                icon="mdi-lock-reset" variant="plain" to="/forgotpass" />
        </v-card-actions>
    </v-card>
</template>

<script setup>
const props = defineProps({
    subtitle: String,
    title: String
})
</script>

<style scoped></style>