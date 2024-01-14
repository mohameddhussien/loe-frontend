<template>
    <v-text-field :hint="hint" v-model="field" :prependInnerIcon="prependInnerIcon" class="ma-2" variant="outlined"
        :label="label" :type="type" :clearable="true">
        <template v-slot:append-inner>
            <CustomTooltip iconColor="pink-darken-1" v-if="validator && checkInvalid(validator)"
                :message="validator && getMessage(getField(validator))" icon="mdi-alert-circle" />
        </template>
    </v-text-field>
</template>

<script lang="ts" setup>
interface ValidatorObject {
    [key: string]: any; // Index signature allowing any string key
}
const props = defineProps({
    fieldValue: Object as () => Ref<string>,
    prependInnerIcon: String,
    label: String,
    type: String,
    hint: {
        type: String,
        default: ""
    },
    validator: {
        type: Object,
        default: null
    }
})

const getField = (validator: ValidatorObject) => {
    const field = props.type && validator[props.type];
    return field;
};

const checkInvalid = (validator: ValidatorObject) => {
    const field = getField(validator);
    const rulesToCheck = ['required', 'alphaNum', 'minLength', 'email', 'maxLength', 'numeric', 'validPhone'];
    const isFieldInvalid = rulesToCheck.some((rule) => {
        return field?.[rule] && field?.[rule].$invalid;
    });
    return isFieldInvalid;
};

const getMessage = (field: any): string | undefined => {
    if (field) {
        if (field.required?.$invalid) {
            return field.required.$message;
        } else if (field.minLength?.$invalid) {
            return field.minLength.$message;
        } else if (field.maxLength?.$invalid) {
            return field.maxLength.$message;
        } else if (field.alphaNum?.$invalid) {
            return field.alphaNum.$message;
        } else if (field.email?.$invalid) {
            return field.email.$message;
        } else if (field.numeric?.$invalid) {
            return field.numeric.$message;
        } else if (field.validPhone?.$invalid) {
            return field.validPhone.$message;
        }
    }

    // Default return value if no error message is found
    return undefined;
};

const field = ref(props.fieldValue)
const $v = ref(props.validator)


// Watch for changes in the props.validator and update $v ref accordingly
watch(() => props.validator, (newValidator) => {
    $v.value = newValidator;
});
watch(() => props.fieldValue, (newField) => {
    field.value = newField?.value
});
</script>

<style lang="scss" scoped></style>