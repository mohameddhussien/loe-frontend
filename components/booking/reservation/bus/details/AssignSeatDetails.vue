<template>
    <base-dialog :dialog-open="isDialogOpen" @update:model-value="emits('update:modelValue', $event)">
        <template #title>Assign seat to: {{ guestForm.guestName ? guestForm.guestName : 'Enter Guest Details' }}</template>
        <v-container>
            <v-row class="gap-x-1" justify="end">
                <v-col cols="12">
                    <Field v-model="guestForm.guestName" :validator="$v" density="comfortable" label="Name"
                        hint='Guest Name' />
                </v-col>
                <MyBtn :disabled="!guestForm.guestName" @click="saveInfo" on-hover="bg-pink-lighten-3"
                    bg-color="pink-lighten-1">Done
                </MyBtn>
                <MyBtn @click="closeDialog" on-hover="bg-red" bg-color="error">Close</MyBtn>
            </v-row>
        </v-container>
    </base-dialog>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { helpers, required, minLength, maxLength } from '@vuelidate/validators';
import { Seat } from '~/classes/seat';

const emits = defineEmits(['update:modelValue', 'assign'])
const props = defineProps({
    isDialogOpen: Boolean,
    seat: Seat
})
const guestForm = reactive({
    guestName: ''
})
const saveInfo = () => {
    emits('assign', guestForm.guestName)
    closeDialog()
}
const closeDialog = () => {
    emits('update:modelValue')
}
const validations = {
    guestName: {
        required: helpers.withMessage('Guest Name is required.', required),
        minLength: helpers.withMessage('Guest must be at least 3 characters.', minLength(3)),
        maxLength: helpers.withMessage('Guest must be at most 55 characters.', maxLength(55))
    }
}
const $v = useVuelidate(validations, guestForm)
</script>

<style lang="scss" scoped></style>