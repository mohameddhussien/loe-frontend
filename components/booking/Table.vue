<template>
    <v-data-table :hover="true" :items="people" :headers="headers" v-model:expanded="expanded"
        show-expand items-per-page-text="" item-value="name">
        <template #item.sequential_number="{ index }">{{ index + 1 }}</template>
        <template #item.actions="{ item, index }">
            <v-menu location="right bottom">
                <template #activator="{ props }">
                    <v-btn :disabled="disabled" size="20" :ripple="false" variant="plain" icon="mdi-cog-outline"
                        v-bind="props" />
                </template>
                <v-list density="compact">
                    <v-list-item v-for="(action, i_index) in actions" @click="emits(action.emit, item, index)"
                        :ripple="false" :key="i_index" width="120">
                        <div class="d-flex justify-space-between">
                            {{ action.label }}
                            <v-icon :icon="`mdi-${action.icon}`" />
                        </div>
                    </v-list-item>
                </v-list>
            </v-menu>
        </template>
        <template #item.data-table-expand="{ toggleExpand, isExpanded, item, internalItem }">
            <v-btn :disabled="!item.children.length || disabled" :ripple="false" size="small"
                @click="toggleExpand(internalItem)" :icon="expandableIcon(item, internalItem, isExpanded)"
                variant="plain" />
        </template>
        <template #expanded-row="{ columns, item }">
            <td :colspan="columns.length"><v-divider class="border-opacity-100" thickness="2" /></td>
            <tr class="border-t" v-for="(child, child_index) of item?.children" :key="child_index">
                <td><v-icon>mdi-arrow-right</v-icon></td>
                <td>{{ child.name }}</td>
                <td>{{ child.age }}</td>
                <td>{{ child.bus }}</td>
                <td :colspan="columns.length">{{ child.food }}</td>
            </tr>
            <td :colspan="columns.length"><v-divider class="border-opacity-100" thickness="2" /></td>
        </template>
        <template #footer.prepend>
            <v-btn-group class="mr-auto">
                <my-btn bg-color="grey-lighten-3" @click="purchaseEvent(event)">
                    Proceed to Purchase</my-btn>
            </v-btn-group>
        </template>
    </v-data-table>
</template>

<script setup>
const emits = defineEmits(['edit', 'delete'])
const props = defineProps({
    event: Object,
    people: Array,
    disableActionsOn: Boolean,
})
const disabled = computed(() => props.disableActionsOn)
const expanded = ref([])
const actions = [
    { icon: 'pencil-outline', label: 'Edit', emit: 'edit' },
    { icon: 'delete-sweep-outline', label: 'Delete', emit: 'delete' },
]
const headers = [
    { title: 'S.N', value: 'sequential_number' },
    { title: 'Adult Name', value: 'name' },
    { title: 'Age', value: 'age' },
    { title: 'Booked Bus', value: 'bus' },
    { title: 'Food', value: 'food' },
    { title: 'Children', key: 'data-table-expand', align: 'center', width: 2 },
    { title: 'Actions', key: 'actions', sortable: false, align: 'center' },
]
const expandableIcon = (item, internalItem, isExpanded) => {
    if (item?.children.length)
        return isExpanded(internalItem) ? 'mdi-arrow-up' : 'mdi-arrow-down';
    return 'mdi-close';
};
</script>

<style scoped>
* {
    font-family: 'Rethink Sans', sans-serif;
}
</style>