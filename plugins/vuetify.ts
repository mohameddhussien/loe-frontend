import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@/src/styles/settings.scss'

import { createVuetify } from 'vuetify'

const customdark = {
    dark: true,
    colors: {
        'pink-lighten-3': '#d8819a'
    },
}

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        // ... your configuration
        theme: {

            themes: {
                light: {
                    dark: false,
                    colors: {
                        'pink-accent-1': '#FF80AB',
                        'pink-lighten-1': '#EC407A'
                    }
                },
                dark: {
                    dark: true,
                    colors: {
                        'pink-accent-1': '#757575',
                        'pink-lighten-1': '#424242'
                    }
                }
            }
        },
    })
    app.vueApp.use(vuetify)
})