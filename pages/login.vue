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
        <CustomSnackBar @update="closeSnackbar()" :opened="snackbar" :title="title" :message="message" :color="color"
            @close="endTimer()">
            <p class="text-xl">{{ title }}</p>
            <v-list class="bg-transparent">
                <v-list-item prepend-icon="mdi-circle-small" base-color="white" density="compact">
                    <span>{{ message }}</span>
                </v-list-item>
            </v-list>
        </CustomSnackBar>
    </RegistrationCard>
</template>

<script setup>
definePageMeta({
    layout: 'registration'
})
useHead({
    title: 'Login',
})
const { session, refresh, update } = await useSession()
const content = ref({
    title: "Hello there!",
    subtitle: "Let's get you logged in.",
})
// const session = ref(new UserSession)
const username = ref('')
const password = ref('')
const loading = ref(false)

const title = ref('Error')
const color = ref('red-darken-1')
const snackbar = ref(false)
const message = ref('')
const endTimer = () => {
    snackbar.value = false;
}
function closeSnackbar() {
    setTimeout(() => {
        if (title.value == 'Success')
            navigateTo('/')
        snackbar.value = false
    }, 100);
}
const submit = async () => {
    loading.value = true
    const { data: response } = await useFetch('login', {
        baseURL: useRuntimeConfig().public.baseURL,
        method: 'post',
        body: {
            "username": username.value,
            "password": password.value
        }
    })
    snackbar.value = true
    loading.value = false
    if (Object.keys(response.value)[0].toUpperCase() == 'error'.toUpperCase()) {
        message.value = response.value.error
        return 0;
    }
    title.value = 'Success'
    color.value = 'success'
    message.value = 'You have been successfully logged in.'
    await update({ token: response.value?.token })
    await refresh()
    console.log(session.value)
}
</script>

<style lang="scss" scoped></style>