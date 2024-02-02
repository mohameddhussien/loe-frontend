<template>
    <v-container>
        <h1 class="text-4xl font-bold mb-4">{{ title }}</h1>
        <slot />
    </v-container>
</template>

<script setup>
const props = defineProps({
    title: String
})
</script>

<style lang="scss" scoped>

</style>