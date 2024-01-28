<template>
    <v-menu>
        <template v-slot:activator="{ props: otherProps }">
            <my-btn icon="mdi-whatsapp" size="small" class="ma-1" :otherProps="otherProps" />
        </template>
        <v-list>
            <v-list-item v-for="organizer in organizers" prepend-icon="mdi-whatsapp" value="wp"
                :href="`https://wa.me/${organizer.phone}?text=Tell+me+more+about+${event.EVENT_NAME}+trip`">
                <v-list-item-title><span style="font-family: 'Poppins', sans-serif;">{{ organizer.name
                }}</span></v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script setup>
const props = defineProps({
    event: Object,
})
const organizers = ref([
    { name: "Dalia", phone: "+201001016773" },
    { name: "Rania", phone: "+201001611961" },
    { name: "Menna", phone: "+201150663066" },
])

</script>

<style lang="scss" scoped></style>