<template>
    <RegistrationCard :isLogin="false">
        <!-- Registration form fields go here -->
        <template #fields="{ isLogin }">
            <v-form @submit.prevent="handleSubmit" class="space-y-4">
                <!-- Username -->
                <Field :fieldValue="registrationForm.username" prependInnerIcon="mdi-account-box-outline" label="Username"
                    :validator="$v" type="username" />
                <!-- Email -->
                <Field :fieldValue="registrationForm.email" prependInnerIcon="mdi-mailbox-open-up-outline" label="E-mail"
                    :validator="$v" type="email" />
                <!-- Password -->
                <Field :fieldValue="registrationForm.password" prependInnerIcon="mdi-lock-outline" label="Password"
                    :validator="$v" type="password" />
                <!-- First Name -->
                <Field :fieldValue="registrationForm.first_name" prependInnerIcon="mdi-hail" label="First Name"
                    :validator="$v" type="first_name" />
                <!-- Last Name -->
                <Field :fieldValue="registrationForm.last_name" prependInnerIcon="mdi-account-tie" label="First Name"
                    :validator="$v" type="last_name" />
                <!-- Gender -->
                <v-row class="ma-2">
                    <v-col>
                        <v-radio-group density="compact" v-model="registrationForm.gender.value">
                            <v-radio label="Male" value="male" class="ma-2"></v-radio>
                            <v-radio label="Female" value="female" class="ma-2"></v-radio>
                        </v-radio-group>
                    </v-col>
                </v-row>

                <v-textarea v-model="registrationForm.address.value" class="ma-2" variant="outlined"
                    label="Address"></v-textarea>

                <!-- Add choose date component -->
                <v-date-picker v-model="registrationForm.date_of_birth.value" class="ma-2" variant="outlined"
                    label="Date of Birth"></v-date-picker>

                <Field :fieldValue="registrationForm.phone_number" prependInnerIcon="mdi-cellphone" label="Phone Number"
                    :validator="$v" type="phone_number" />
                <v-btn type="submit" variant="outlined" :loading="loading"
                    class="ma-2 hover:bg-[#F06292] hover:border-[#F06292] hover:text-white" block>
                    {{ isLogin ? 'Login' : 'Register' }}
                </v-btn>
            </v-form>
        </template>
    </RegistrationCard>
</template>
<!-- <RegistrationCard :title="content.title" :subtitle="content.subtitle">
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
    </RegistrationCard> -->
<script setup>
import { register, loading } from '@/composables/store/session'
definePageMeta({
    layout: 'registration',
})
useHead({
    title: 'Registration',
})
const registrationForm = {
    username: ref(''),
    email: ref(''),
    password: ref(''),
    first_name: ref(''),
    last_name: ref(''),
    gender: ref(''),
    address: ref(''),
    date_of_birth: ref(null),
    phone_number: ref('')
};
const $v = useValidationObject(registrationForm).$v

const handleSubmit = async () => {
    //  Validate form!!
    if (!$v.value.$validate())
        return 0;
    const response = await register(registrationForm);
    const responseKey = Object.keys(response.value)[0];
    const responseValue = Object.values(response.value)[0];
    if (responseKey === 'error') {
        showSnackbar({ snackbarText: responseValue, color: 'error' })
        message.value = responseValue;
        return 0;
    }
    showSnackbar({ snackbarText: responseValue, color: 'success' })
}
// import { register } from '@/composables/store/session'
// const loading = ref(false)
// const content = ref({
//     title: "Welcome Newbie",
//     subtitle: "Create your account now!",
// })
// //  Form Data
// const username = ref('')
// const fName = ref('')
// const lname = ref('')
// const email = ref('')
// const password = ref('')
// const confirmpass = ref('')

// // SnackBar


</script>


<style scoped></style>