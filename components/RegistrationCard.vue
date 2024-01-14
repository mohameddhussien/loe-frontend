<template>
    <v-sheet border="lg opacity-12" class="text-body-2 mt-[50px] mx-auto !shadow-lg" max-width="1100">
        <v-container fluid>
            <v-row no-gutters>
                <v-col cols="12" md="5">
                    <v-img src="https://cdn.vuetifyjs.com/docs/images/graphics/img-placeholder.png" :height="500"
                        width="500" cover></v-img>
                </v-col>

                <v-col cols="12" md="7">
                    <v-card variant="flat" class="mx-auto max-w-xl pa-6 bg-white rounded-md">
                        <v-card-title class="!text-4xl !flex !items-center !justify-center !font-semibold mb-4">{{
                            isLogin ? "Login" :
                            'Hello There!'
                        }}</v-card-title>
                        <v-card-subtitle class="!flex !items-center !justify-center !font-semibold mb-4">{{
                            isLogin ? "Sign in effortlessly to access your account." :
                            "Begin your adventure with our quick registration."
                        }}</v-card-subtitle>

                        <v-card-text>
                            <slot name="fields" :isLogin="isLogin"></slot>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-sheet>
</template>

    <!-- <v-card class="font-sans" elevation="10" color="rgba(255,255,255,0.8)"
        style="min-width: 400px; width: 100%; max-width: 700px; padding: 20px; margin: 20px;">
        <v-btn :to="$route.path == '/login' ? '/register' : '/login'" style="position: absolute;" class="ma-2 top-0 right-0"
            variant="plain" icon="mdi-login" />
        <v-btn variant="plain" icon="mdi-information-outline" to="/about" style="position: absolute;"
            class="ma-2 top-0 left-0" />
        <v-card-title class="d-flex justify-center"><span class="text-4xl mx-[100px]">{{ title }}</span>
        </v-card-title>
        <v-card-subtitle class="d-flex justify-center"><span class="text-lg">{{ subtitle }}</span></v-card-subtitle>
        <v-card-text>
                <slot></slot>
        </v-card-text>
        <v-card-actions class="flex-wrap d-flex justify-center font-sans">

            <slot name="submit"></slot>

            <v-divider :thickness="2" class="ma-2 border-opacity-100"></v-divider>
            <p class="ma-2">
                <slot name="footer"></slot>
            </p>
            <v-btn v-if="useRoute().path == '/login'" style="position: absolute;" class="ma-1 bottom-0 right-0"
                icon="mdi-lock-reset" variant="plain" to="/forgotpass" />
        </v-card-actions>
    </v-card> -->
<script setup>
const props = defineProps({
    isLogin: Boolean,
})
</script>

<style scoped></style>