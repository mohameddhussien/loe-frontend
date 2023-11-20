<template>
    <v-app :class="['!bg-fixed !bg-no-repeat !bg-center !bg-cover', bgImg]">
        <CustomDialog :opened="prize" width="700" @close="prize = false" decorated-text="Congratulations!"
            message="You have found an Easter egg on our website! We are so glad you took the time to explore our site and discover this hidden gem.As a reward for your sharp eyes, we are offering you a special discount on your next trip booking.Simply use the code EASTEREGG at checkout to save 10 % on your trip.We hope you enjoy your next trip with us! Sincerely, Ladies Only Events Organization"
            transition="scale" />
        <AppNavBar @prize="openPrize" />
        <v-main>
            <slot />
        </v-main>
        <AppFooter />
    </v-app>
</template>

<script setup>
import { useTheme } from 'vuetify'
const theme = useTheme()

const prize = ref(false)
const openPrize = (delay) => {
    setTimeout(() => {
        prize.value = true
    }, delay)
}
const bgImg = ref('!bg-light-pink-liquid')
watch(() => theme.global.current.value.dark, (value) => {
    value ? bgImg.value = '!bg-dark-pink-liquid' : bgImg.value = '!bg-light-pink-liquid'
})
</script>

<style scoped></style>