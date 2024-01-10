<template>
    <RegistrationCard :title="content.title" :subtitle="content.subtitle">
        <v-text-field class="ma-2" @click:append-inner="username = ''" append-inner-icon="mdi-close"
            prepend-inner-icon="mdi-account-box-outline" v-model="username" variant="outlined" label="Username" />
        <v-text-field @click:append-inner="password = ''" append-inner-icon="mdi-close"
            prepend-inner-icon="mdi-lock-outline" class="ma-2" v-model="password" type="password" variant="outlined"
            label="Password" />
        <template #submit>
            <v-btn @click="submit" variant="outlined" :loading="loading"
                class="ma-2 hover:bg-[#F06292] hover:border-[#F06292] hover:text-white" block>Submit</v-btn>
        </template>
        <template #footer>
            <div class="flex flex-col items-center justify-center gap-y-2 text-sm font-bold">
                <span class="border-dashed border-2 rounded-full px-2 border-black">Newbie to our page?</span>
                <NuxtLink to="/register" class="text-pink-lighten-1 cursor-pointer hover:underline">Signup Now!</NuxtLink>
            </div>
        </template>
    </RegistrationCard>
</template>

<script setup>
import { login, hasToken, update, refresh } from '~/store/session'
import { showSnackbar } from '@/composables/store/snackBarActions'
definePageMeta({
    layout: 'registration'
})
useHead({
    title: 'Login',
})
const content = ref({
    title: "Hello there!",
    subtitle: "Let's get you logged in.",
})

const username = ref('')
const password = ref('')
const loading = ref(false)
const submit = async () => {
    loading.value = true
    const response = await login(username, password)
    loading.value = false
    if (response.value?.error) {
        showSnackbar({ snackbarText: response.value?.error, color: 'error' })
        hasToken.value = false
        return 0;
    }
    showSnackbar({ snackbarText: response.value?.success, color: 'success' })
    hasToken.value = true
    await update({ token: response.value?.token })
    await refresh()
}
</script>

<style lang="scss" scoped></style>