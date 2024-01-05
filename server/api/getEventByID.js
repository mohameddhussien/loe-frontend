export async function getEventByID(key) {
  const response = await useFetch(`${useRuntimeConfig().public.baseURL}/events/${key}`);
  console.log("data", response.data);
  return response;
}
// async getAllEvents() {
//   const { data } = await useFetch(`${this.baseURL}/events`);
//   console.log("all events", data);
//   return data;
// }