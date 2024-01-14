// ~/store/events.js
import { getAllEvents } from '~/server/api/getAllEvents';

const events = ref([]);
const eventNames = ref([]);

const fetchEvents = async () => {
    try {
        events.value = await getAllEvents();
        eventNames.value = events.value.map(event => event.EVENT_NAME);
        console.log('events:', events.value);
    } catch (error) {
        throw error;
    }
};
// Invoke the fetchData function as soon as the module is imported
await fetchEvents().catch(error => {
    console.error('Failed to fetch events:', error);
});

export { events, eventNames, fetchEvents };
