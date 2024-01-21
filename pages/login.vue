<template>
    <RegistrationCard img_src="/Ladies_Events_Log.png" :isLogin="true">
        <!-- Login form fields go here -->
        <template #fields="{ isLogin }">
            <v-form @submit.prevent="handleSubmit" class="space-y-4">
                <Field :fieldValue="loginForm.username" prependInnerIcon="mdi-account-box-outline" label="Username/Email"
                    type="username" />
                <Field :fieldValue="loginForm.password" prependInnerIcon="mdi-lock-outline" label="Password"
                    type="password" />
                <v-btn type="submit" variant="outlined" :loading="loading"
                    class="ma-2 hover:bg-[#F06292] hover:border-[#F06292] hover:text-white" block>
                    {{ isLogin ? 'Login' : 'Register' }}
                </v-btn>
            </v-form>
        </template>
    </RegistrationCard>
</template>

<script setup>
import { login, loading, hasToken, update, refresh } from '@/composables/store/session'

definePageMeta({
    layout: 'registration'
})
useHead({
    title: 'Login',
})
const loginForm = {
    username: ref(''),
    password: ref(''),
}

const handleSubmit = async () => {
    const response = await login(loginForm)
    if (response.value?.error) {
        showSnackbar({ snackbarText: response.value?.error, color: 'error' })
        hasToken.value = false
        return 0;
    }
    showSnackbar({ snackbarText: response.value?.success, color: 'success' })
    hasToken.value = true
    await update({ token: response.value?.token })
    await refresh()
    window.history.back();
}
</script>

<style scoped>
* {
    font-family: 'Montserrat', sans-serif;
}
</style>