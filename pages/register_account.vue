<template>
    <RegistrationCard :is-login="false">
        <template #fields>
            <Field :fieldValue="registrationForm.username" prependInnerIcon="mdi-account-box-outline" label="Username"
                :validator="$v" type="username" />
            <!-- Email -->
            <Field :fieldValue="registrationForm.email" prependInnerIcon="mdi-mailbox-open-up-outline" label="E-mail"
                :validator="$v" type="email" />
            <!-- Password -->
            <Field :fieldValue="registrationForm.password" prependInnerIcon="mdi-lock-outline" label="Password"
                :validator="$v" type="password" />
        </template>
    </RegistrationCard>
</template>

<script setup>
definePageMeta({
    layout: 'registration',
})
useHead({
    title: 'Registration',
})
const $v = useValidationObject(registrationForm).$v
</script>

<style lang="scss" scoped></style>