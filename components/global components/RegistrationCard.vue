<template>
    <v-container fluid class="pa-0 d-flex justify-center">
        <v-sheet rounded="xl" class="!shadow-lg" max-width="1200" width="100%">
            <v-row no-gutters>
                <v-col cols="12" lg="5" md="6">
                    <img :src="img_src" class="!w-full !h-full rounded-s-md" />
                </v-col>
                <v-col cols="12" lg="7" md="6">
                    <v-card height="500" variant="flat"
                        class="scroll-smooth rounded-te-xl !min-w-full overflow-auto mx-auto max-w-xl pa-6 bg-white rounded-md">
                        <v-card-title class="!text-4xl !flex !items-center !justify-center !font-semibold mb-4">
                            {{ isLogin ? "Welcome Back!" : 'Hello There!' }}</v-card-title>
                        <v-card-subtitle class="!flex !items-center !justify-center !font-semibold mb-4">
                            {{ isLogin ? "Sign in effortlessly to access your account." :
                                "Begin your adventure with our quick registration." }}
                        </v-card-subtitle>
                        <v-card-text>
                            <slot name="fields" :isLogin="isLogin"></slot>
                        </v-card-text>
                        <v-footer class="d-flex flex-column justify-center">
                            <NuxtLink :to="isLogin ? '/register' : '/login'">
                                <v-btn density="compact" variant="text" rounded
                                    class="hover:bg-[#F06292]  hover:border-[#F06292] hover:text-white">
                                    {{ isLogin ? 'Create an Account' : 'Already have an account?' }}
                                </v-btn>
                            </NuxtLink>
                            <!-- <div class="d-flex">
                                Social Media
                            </div> -->
                        </v-footer>
                    </v-card>
                </v-col>
            </v-row>
        </v-sheet>
    </v-container>
</template>

<script setup>
const props = defineProps({
    isLogin: Boolean,
    img_src: String
})
</script>

<style scoped>
* {
    font-family: 'Montserrat', sans-serif;
}
</style>