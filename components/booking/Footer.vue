<template>
    <!-- Bottom Navigation -->
    <v-hover #default="{ isHovering, props }">
        <v-bottom-navigation v-bind="props" :height="calculateHeight(isHovering)" :active="bottomNav">
            <v-container>
                <v-row justify="center" class="mb-5 gap-x-5">
                    <v-tooltip location="left">
                        <template #activator="{ props }">
                            <v-icon @click="holdNav = !holdNav" v-bind="props">mdi-arrow-up-circle</v-icon>
                        </template>
                        Click To {{ !holdNav ? 'Lock' : 'Unlock' }} Bottom Navigation.
                    </v-tooltip>
                    <v-tooltip location="right">
                        <template #activator="{ props }">
                            <v-icon @click="fullScreen = !fullScreen" v-bind="props">mdi-fullscreen</v-icon>
                        </template>
                        Right-click To {{ !fullScreen ? 'Activate' : 'Deactivate' }} Full-screen Mode.
                    </v-tooltip>
                </v-row>
                <v-row no-gutters>
                    <h1 class="text-3xl font-bold text-pink-accent-2">Total: {{ event.PRICE }}EGP</h1>
                </v-row>
                <v-row>
                    <v-divider class="border-opacity-100" color="pink-accent-2" />
                    <booking-table @delete="(person, index) => emits('delete', person, index)" :event="event"
                        :people="people?.details" :disable-actions-on="(!holdNav && !fullScreen)"
                        :itemsPerPage="itemsPerPage" />
                </v-row>
            </v-container>
        </v-bottom-navigation>
    </v-hover>
</template>

<script setup>
const emits = defineEmits(['edit', 'delete'])
const props = defineProps({
    event: Object,
    people: Object
})
//  Variable Declaration
const itemsPerPage = ref(1)
const bottomNav = ref(true)
const holdNav = ref(false)
const fullScreen = ref(false)

//  Method Declaration
const calculateHeight = (isHovering) => {
    if (holdNav.value) {
        fullScreen.value = false
        itemsPerPage.value = 1
        return 300;
    }
    if (fullScreen.value) {
        itemsPerPage.value = 3
        holdNav.value = false
        return window.innerHeight;
    }
    itemsPerPage.value = 1
    return isHovering ? 300 : 30;
}

</script>

<style scoped>
* {
    font-family: 'Rethink Sans', sans-serif;
}
</style>