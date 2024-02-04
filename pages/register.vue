<template>
    <RegistrationCard img_src="/Ladies_Events_Reg.png" :isLogin="false">
        <!-- Registration form fields go here -->
        <template #fields="{ isLogin }">
            <v-form @submit.prevent="handleSubmit" class="space-y-4 d-flex justify-center flex-column">
                <!-- Username -->
                <Field v-model="registrationForm.username" prependInnerIcon="mdi-account-box-outline" label="Username"
                    :validator="$v" type="username" />
                <!-- Email -->
                <Field v-model="registrationForm.email" prependInnerIcon="mdi-mailbox-open-up-outline" label="E-mail"
                    :validator="$v" type="email" />
                <!-- Password -->
                <Field v-model="registrationForm.password" prependInnerIcon="mdi-lock-outline" label="Password"
                    :validator="$v" type="password" />
                <!-- First Name -->
                <Field v-model="registrationForm.first_name" prependInnerIcon="mdi-hail" label="First Name" :validator="$v"
                    type="first_name" />
                <!-- Last Name -->
                <Field v-model="registrationForm.last_name" prependInnerIcon="mdi-account-tie" label="First Name"
                    :validator="$v" type="last_name" />

                <v-textarea v-model="registrationForm.address" class="ma-2" variant="outlined" label="Address"></v-textarea>

                <!-- Add choose date component -->
                <v-menu v-model="menu" :close-on-content-click="false" location="end">
                    <template v-slot:activator="{ props }">
                        <v-btn class="ma-2" :prepend-icon="registrationForm.date_of_birth ? 'mdi-check' : ''"
                            variant="outlined" v-bind="props">
                            Birth Date
                        </v-btn>
                    </template>
                    <v-date-picker v-model="registrationForm.date_of_birth" header="Date of Birth">
                        <template #actions>
                            <v-btn @click="() => { menu = !menu; registrationForm.date_of_birth = null }">Close</v-btn>
                            <v-btn @click="menu = !menu">Save</v-btn>
                        </template>
                    </v-date-picker>
                </v-menu>
                <!-- Phone Number -->
                <div class="d-flex">
                    <v-combobox style="max-width: 105px;" class="ma-2" label="Code" item-title="c_name" item-value="c_code"
                        :items="countryCodes.countries" variant="outlined">
                        <template #selection="{ item }">
                            <span>{{ item.value }}</span>
                        </template>
                    </v-combobox>
                    <Field v-model="registrationForm.phone_number" prependInnerIcon="mdi-cellphone" label="Phone Number"
                        :validator="$v" type="phone_number" hint="Example: 0100 123 4567">
                    </Field>
                </div>

                <!-- Gender -->
                <v-row class="ma-2">
                    <v-col>
                        <v-radio-group inline hide-details class="d-flex justify-space-between" density="compact"
                            v-model="registrationForm.gender">
                            <v-radio inline color="grey-darken-1" label="Male" value="male" class="ma-2"></v-radio>
                            <v-radio inline color="pink-darken-1" label="Female" value="female" class="ma-2"></v-radio>
                        </v-radio-group>
                    </v-col>
                </v-row>
                <v-btn type="submit" variant="outlined" :loading="loading"
                    class="ma-2 hover:bg-[#F06292] hover:border-[#F06292] hover:text-white" block>
                    {{ isLogin ? 'Login' : 'Create account' }}
                </v-btn>
            </v-form>
        </template>
    </RegistrationCard>
</template>

<script setup>
import { register, loading } from '@/composables/store/session'
import { getCountryCodes } from '~/server/api/getCountryCodes'
import { useVuelidate } from '@vuelidate/core';
definePageMeta({
    layout: 'registration',
})
useHead({
    title: 'Registration',
})
const menu = ref(false)
const registrationForm = reactive({
    username: '',
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    gender: '',
    address: '',
    date_of_birth: null,
    phone_number: ''
})
let $v = '';

const countryCodes = await getCountryCodes();
const handleSubmit = async () => {
    $v = useVuelidate(useValidationObject, registrationForm)
    console.log("Validation Object: ", $v.value)
    //  Validate form!!
    const response = await register(registrationForm);
    const responseKey = Object.keys(response.value)[0];
    const responseValue = Object.values(response.value)[0];
    if (responseKey === 'error') {
        showSnackbar({ snackbarText: responseValue, color: 'error' })
        return 0;
    }
    navigateTo('/login')
    showSnackbar({ snackbarText: responseValue, color: 'success' })
}
</script>


<style scoped>
* {
    font-family: 'Montserrat', sans-serif;
}
</style>