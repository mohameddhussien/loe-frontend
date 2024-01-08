<template>
    <RegistrationCard :title="content.title" :subtitle="content.subtitle">
        <v-text-field class="ma-2" @click:append-inner="username = ''" append-inner-icon="mdi-close"
            prepend-inner-icon="mdi-account-box-outline" v-model="username" variant="outlined" label="Display Name" />
        <v-text-field @click:append-inner="fName = ''" append-inner-icon="mdi-close" prepend-inner-icon="mdi-hail"
            class="ma-2" v-model="fName" variant="outlined" label="First Name" />
        <v-text-field @click:append-inner="lname = ''" append-inner-icon="mdi-close" prepend-inner-icon="mdi-account-tie"
            class="ma-2" v-model="lname" variant="outlined" label="Last Name" />
        <v-text-field @click:append-inner="email = ''" append-inner-icon="mdi-close"
            prepend-inner-icon="mdi-mailbox-open-up-outline" class="ma-2" v-model="email" variant="outlined"
            label="Email" />
        <v-text-field @click:append-inner="password = ''" append-inner-icon="mdi-close"
            prepend-inner-icon="mdi-lock-outline" class="ma-2" v-model="password" type="password" variant="outlined"
            label="Password" />
        <v-text-field @click:append-inner="confirmpass = ''" append-inner-icon="mdi-close"
            prepend-inner-icon="mdi-lock-check-outline" class="ma-2" v-model="confirmpass" type="password"
            variant="outlined" label="Confirm Password" />
        <CustomSnackBar to="/login" @update="closeSnackbar()" :opened="snackbar" :title="title" :message="message"
            :color="color" @close="endTimer()">
            <p class="text-xl">{{ title }}</p>
            <v-list class="bg-transparent">
                <v-list-item prepend-icon="mdi-circle-small" base-color="white" density="compact">
                    <span>{{ message }}</span>
                </v-list-item>
            </v-list>
        </CustomSnackBar>
        <template #submit>
            <v-btn :loading="loading" @click="submit" variant="outlined"
                class="ma-2 hover:bg-[#F06292] hover:border-[#F06292] hover:text-white" block>Submit</v-btn>
        </template>
        <template #footer>
            <div class="flex flex-col items-center justify-center gap-y-2 text-sm font-bold">
                <span class="border-dashed border-2 rounded-full px-2 border-black">Already a member?</span>
                <NuxtLink to="/login" class="text-pink-lighten-1 cursor-pointer hover:underline">Login now!</NuxtLink>
            </div>
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
const loading = ref(false)
const content = ref({
    title: "Welcome Newbie",
    subtitle: "Create your account now!",
})
//  Form Data
const username = ref('')
const fName = ref('')
const lname = ref('')
const email = ref('')
const password = ref('')
const confirmpass = ref('')

// SnackBar
const title = ref('Error')
const color = ref('red-darken-1')
const snackbar = ref(false)
const message = ref('')
const endTimer = () => {
    snackbar.value = false;
}
function closeSnackbar() {
    if (title.value == 'success')
        navigateTo('/login')
    setTimeout(() => {
        snackbar.value = false
    }, 100);
}

const submit = async () => {
    loading.value = true
    const { data: response } = await useFetch('register', {
        baseURL: useRuntimeConfig().public.baseURL,
        method: 'post',
        body: {
            "username": username.value,
            "first_name": fName.value,
            "last_name": lname.value,
            "email": email.value,
            "password": password.value,
            "confirmpass": confirmpass.value
        }
    })
    snackbar.value = true
    loading.value = false
    console.log(response.value)
    const responseKey = Object.keys(response.value)[0];
    const responseValue = Object.values(response.value)[0];
    if (responseKey === 'error') {
        message.value = responseValue;
        return 0;
    }
    title.value = responseKey;
    color.value = 'success';
    message.value = responseValue;
}
</script>


<style scoped></style>