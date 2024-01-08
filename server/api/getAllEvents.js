export async function getAllEvents() {
    const { data } = await useFetch('getallevents', {
        baseURL: useRuntimeConfig().public.baseURL
    });
    return data.value;
}