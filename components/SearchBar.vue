

<template>
    <CustomDialog :elevate="0" color="transparent" width="700" :persistent="true" :dialog-open="opened"
        @close="emits('close')" transition="slide-y">
        <template #title>
            <v-autocomplete menu-icon="mdi-menu-swap-outline" v-model="searchtext" bg-color="#F06292" :hide-details="true"
                variant="solo" clear-icon="mdi-close-circle-outline" clearable rounded label="Search for a trip.."
                :items="eventNames" return-object>
                <template #prepend>
                    <v-btn class="border border-pink-darken-2 ma-1 hover:scale-105 hover:bg-[#F06292] hover:text-white"
                        @click="emits('close')" icon="mdi-close"></v-btn>
                </template>
                <template #label="{ label }">
                    <span class="font-bold text-md font-sans">{{ label }}</span>
                </template>
                <template #no-data>
                    <p class="text-center font-bold text-2xl font-sans">No Data Found!</p>
                </template>
            </v-autocomplete>
        </template>
        <div></div>
    </CustomDialog>
</template>

<script setup>
import { eventNames } from '@/composables/store/events'
const emits = defineEmits(['close'])
const props = defineProps({
    openSearchBar: Boolean,
})
const opened = ref(props.openSearchBar);

watchEffect(() => {
    opened.value = props.openSearchBar;
});
const searchtext = ref('')
</script>

<style lang="scss" scoped></style>