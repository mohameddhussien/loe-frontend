<template>
    <v-row no-gutters justify="center" justify-md="end">
        <v-col cols="12" xs="12" sm="7" md="8" xl="9" class="pa-2">
            <v-card width="100%" height="100%" variant="elevated">
                <v-list class="divide-y">
                    <v-list-item class="gap-y-5">
                        <v-list-item-title>My Transactions: {{ transactions.length }}</v-list-item-title>
                        <v-autocomplete density="comfortable" variant="outlined" label="Transactions" chips clearable
                            :items="transactions">
                            <template #chip="{ item }">
                                <v-chip>{{ item.title }}: {{ item.value }}</v-chip>
                            </template>
                        </v-autocomplete>
                    </v-list-item>
                    <v-list-item title="Seat Assignment:" class="gap-y-2">
                        <v-list-item-subtitle>
                        </v-list-item-subtitle>
                    </v-list-item>
                </v-list>
                <BusAssignSeatDetails @assign="(guestName) => selectedSeat?.convertToTakenSeat(guestName)"
                    :seat="selectedSeat" v-model="selectedSeat" />
            </v-card>
        </v-col>
        <v-col cols="12" sm="5" md="4" xl="3" class="py-2">
            <Buses @selected-seat="selectSeat" :capacity="13" />
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
import { Bus } from '@/classes/Bus';
import type { Seat } from '@/classes/seat';
const selectedSeat = ref<Seat>()
const props = defineProps({
    bus: Bus
})
const transactions = ref([{}])
transactions.value = [{
    title: 'from-api',
    value: 7
}]
const selectSeat = (mySeat: Seat) => {
    selectedSeat.value = mySeat
    selectedSeat.value.bgColor = 'green-lighten-1'
}
const deselectSeat = () => {
    selectedSeat.value = undefined
}
</script>

<style lang="scss" scoped></style>