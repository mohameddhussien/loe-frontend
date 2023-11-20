<template>
    <v-snackbar :model-value="opened" :color="color" class="font-sans">
        <slot>
            <h1 class="text-lg">{{ title }}</h1>
            <p>{{ message }}</p>
        </slot>

        <v-progress-linear class="mt-2" color="white" rounded :model-value="width" :buffer-value="30"
            :height="5"></v-progress-linear>
    </v-snackbar>
</template>

<script setup>
const emits = defineEmits(['close', 'update'])
const props = defineProps({
    opened: Boolean,
    title: String,
    message: String,
    color: String,
})

const width = ref(0);
const id = ref();
function frame() {
    if (width.value >= 100) {
        emits('update')
        clearInterval(id.value)
    }
    else
        width.value++;
}

watch(() => props.opened, () => {
    if (props.opened) {
        width.value = 0
        id.value = setInterval(frame, 30);
    }
})
</script>

<style lang="scss" scoped></style>