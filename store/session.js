
const { session, refresh, update, reset } = await useSession()
const hasToken = ref(session.value?.token !== undefined)

const login = async (username, password) => {
    const { data: response } = await useFetch('login', {
        baseURL: useRuntimeConfig().public.baseURL,
        method: 'post',
        body: {
            "username": username,
            "password": password
        }
    })
    return response;
}
const register = async () => {
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
    return response;
}


const logout = async () => {
    await reset()
    reloadNuxtApp()
    console.log("Session has token: ", session.value?.token)
}
export { hasToken, login, register, logout, update, refresh, session }