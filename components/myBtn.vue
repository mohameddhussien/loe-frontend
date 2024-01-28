<template>
    <v-hover #default="{ isHovering, props: hoverProps }">
        <v-btn @click="emits('click')" variant="outlined" v-bind="{ ...hoverProps, ...otherProps, ...$attrs }"
            :class="{ 'border border-pink-darken-2 ma-0': true, [`scale-105 ${onHover}`]: isHovering, [`bg-${bgColor}`]: !isHovering }"
            :size="size" :icon="icon" :href="href" :to="to">
            <v-icon v-if="icon">{{ icon }}</v-icon>
            <slot />
        </v-btn>
    </v-hover>
</template>
<script setup>
const emits = defineEmits(['click'])
const props = defineProps({
    size: {
        type: String,
        default: 'default',
    },
    icon: {
        type: String,
        default: undefined,
    },
    otherProps: Object,
    href: String,
    bgColor: String,
    to: {
        type: String,
        default: undefined
    },
    onHover: {
        type: String,
        default: 'bg-pink-accent-2 text-white'
    }
});
</script>

<style lang="scss" scoped></style>