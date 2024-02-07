import { getEventByID } from '@/composables/store/useEvents'

export default defineNuxtRouteMiddleware(async to => {
    if (to.path === '/event') {
        const res = await getEventByID(to.query.key as string);
        if ('error' in res && res.error) {
            return navigateTo('/');
        }
    }
})