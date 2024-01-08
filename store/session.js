
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


const logout = async () => {
    await reset()
    reloadNuxtApp()
    console.log("Session has token: ", session.value?.token)
}
export { hasToken, login, logout, update, refresh, session }