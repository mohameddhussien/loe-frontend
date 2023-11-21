import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@/src/styles/settings.scss'

import { createVuetify } from 'vuetify'

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
                        'pink-lighten-1': '#424242',
                        'error': '#b80000'
                    }
                }
            }
        },
    })
    app.vueApp.use(vuetify)
})