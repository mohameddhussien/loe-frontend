<template>
    <div class="block-content font-medium text-base">
        <p>{{ content.split(/\s+/).slice(0, 25).join(' ') }}<span v-show="!isExpanded">...</span> <span
                v-show="isExpanded">{{ content.split(/\s+/).slice(25).join(' ') }}</span></p>
        <button class="block-content__button" @click="isExpanded = !isExpanded">
            {{ toggleCtaLabel }}
        </button>
    </div>
</template>
  
<script setup>
const props = defineProps({
    content: String
})
const isExpanded = ref(true);
const toggleCtaLabel = computed(() =>
    isExpanded.value ? "Collapse" : "Expand"
)
</script>
  
<style scoped>
.block-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    border-radius: 8px;
}

.block-content__button {
    text-decoration: underline;
}
</style>