<template>
    <v-dialog :persistent="persistent" v-model="opened" :fullscreen="fullscreen" :width="width"
        :transition="`${transition}-transition`">
        <v-card :color="color" :elevation="elevate">
            <v-card-title>
                <slot name="title">
                    <v-btn variant="text" :ripple="false" icon="mdi-close" @click="emits('close');" />
                    <SpecialTextDesign :before="title" :to-be-decorated="decoratedText"
                        color="before:bg-pink-500 bg-pink-200" />
                </slot>
            </v-card-title>
            <slot>
                <v-card-text>
                    <v-list>
                        <v-list-item :prepend-icon="icon">
                            {{ message }}
                        </v-list-item>
                    </v-list>
                </v-card-text>
            </slot>
            <!-- <v-card-actions>
                <v-btn color="primary" block @click="emits('close')">Close Dialog</v-btn>
            </v-card-actions> -->
        </v-card>
    </v-dialog>
</template>

<script setup>
const emits = defineEmits(['close'])
const props = defineProps({
    dialogOpen: Boolean,
    message: String,
    persistent: Boolean,
    transition: String,
    fullscreen: Boolean,
    width: { type: String, default: '500' },
    elevate: { type: Number, default: 4 },
    color: { type: String, default: 'white' },
    title: { type: String, default: '' },
    decoratedText: { type: String, default: '' },
    icon: { type: String, default: '' },

})
const opened = ref(props.dialogOpen);

watchEffect(() => {
    opened.value = props.dialogOpen;
    console.log(opened.value)
});
</script>

<style lang="scss" scoped></style>