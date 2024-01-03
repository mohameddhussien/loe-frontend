export async function getAllEvents() {
    const { data } = await useFetch(`${useRuntimeConfig().public.baseURL}/getallevents`);
    return data;
}