import { getEventByID } from "~/server/api/getEventByID"

export default defineNuxtRouteMiddleware(async to => {
    if (to.path === '/event') {
        const res = await getEventByID(to.query.key as string);
        if (res.error.value)
            return navigateTo('/')
    }
})