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
                    <h1 class="text-3xl font-bold text-pink-accent-1">Total: {{ event.PRICE }}EGP</h1>
                </v-row>
                <v-row>
                    <v-divider class="border-opacity-100" color="pink-accent-2" />
                    <v-data-table :items-per-page="itemsPerPage" v-if="people?.details[0].name !== ''"
                        :items="people?.details" :headers="headers" v-model:expanded="expanded" show-expand
                        item-value="name">
                        <template #item.data-table-expand="{ toggleExpand, isExpanded, item, internalItem }">
                            <v-btn :disabled="!holdNav && !fullScreen" :ripple="false" size="small"
                                @click="toggleExpand(internalItem)" :icon="item.children.length ? (isExpanded(internalItem) ? 'mdi-arrow-up' :
                                    'mdi-arrow-down') : 'mdi-close'" variant="plain" />
                        </template>
                        <template #expanded-row="{ columns, item }">
                            <!-- <h1>Children</h1> -->
                            <!-- <h1 class="text-3xl font-bold pa-2">Children</h1> -->
                            <tr class="border" v-for="child in item.children">
                                <td>{{ child.name }}</td>
                                <td>{{ child.age }}</td>
                                <td>{{ child.bus }}</td>
                                <td :colspan="columns.length">{{ child.food }}</td>
                            </tr>
                        </template>
                    </v-data-table>
                </v-row>
            </v-container>
        </v-bottom-navigation>
    </v-hover>
</template>

<script setup>
const props = defineProps({
    event: Object,
    people: Object
})
//  Variable Declaration
const expanded = ref([])
const itemsPerPage = ref(1)
const bottomNav = ref(true)
const holdNav = ref(false)
const fullScreen = ref(false)

const headers = [
    { title: 'Adult Name', value: 'name' },
    { title: 'Age', value: 'age' },
    { title: 'Booked Bus', value: 'bus' },
    { title: 'Food', value: 'food' },
    { title: 'Children', key: 'data-table-expand', align: 'center', width: 2 }
]
//  Method Declaration
const calculateHeight = (isHovering) => {
    if (holdNav.value) {
        fullScreen.value = false
        itemsPerPage.value = 1
        return 300;
    }
    if (fullScreen.value) {
        itemsPerPage.value = 5
        holdNav.value = false
        return window.innerHeight;
    }
    itemsPerPage.value = 1
    return isHovering ? 300 : 30;
}
const peopleFields = () => props.people?.details.map((person) => {
    return {
        name: person.name,
        age: person.age,
        bus: person.bus,
        food: person.food
    };
});
</script>

<style scoped>
* {
    font-family: 'Rethink Sans', sans-serif;
}
</style>