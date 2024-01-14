
const { session, refresh, update, reset } = await useSession()
const authenticated = ref(session.value?.token !== undefined)


const loading = ref(false)

const login = async (formData) => {
    loading.value = true
    const { data: response } = await useFetch('login', {
        baseURL: useRuntimeConfig().public.baseURL,
        method: 'post',
        body: {
            'username': formData.username.value,
            'password': formData.password.value
        }
    })
    loading.value = false
    return response;
}
const register = async (formData) => {
    loading.value = true
    const { data: response } = await useFetch('register', {
        baseURL: useRuntimeConfig().public.baseURL,
        method: 'post',
        body: {
            "username": formData.username.value,
            "first_name": formData.first_name.value,
            "last_name": formData.last_name.value,
            "email": formData.email.value,
            "password": formData.password.value,
            "confirmpass": formData.password.value
        }
    })
    loading.value = false
    navigateTo('/login')
    return response;
}


const logout = async () => {
    await reset()
    reloadNuxtApp()
    console.log("Session has token: ", session.value?.token)
}
export { authenticated as hasToken, login, register, logout, update, refresh, session, loading }