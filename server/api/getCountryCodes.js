export const getCountryCodes = async () => {
    const { data } = await useFetch('country-calling-codes', {
        baseURL: useRuntimeConfig().public.baseURL
    });
    return data;
}