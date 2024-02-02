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
                        'pink-accent-3': '#F50057',
                        'pink-accent-2': '#FF4081',
                        'pink-accent-1': '#FF80AB',
                        'pink-lighten-5': '#FCE4EC',
                        'pink-lighten-4': '#F8BBD0',
                        'pink-lighten-3': '#F48FB1',
                        'pink-lighten-1': '#EC407A',
                    }
                },
                dark: {
                    dark: true,
                    colors: {
                        'pink-accent-3': '#424242',
                        'pink-accent-2': '#616161',
                        'pink-accent-1': '#757575',
                        'pink-lighten-5': '#FAFAFA',
                        'pink-lighten-4': '#F5F5F5',
                        'pink-lighten-3': '#EEEEEE',
                        'pink-lighten-1': '#BDBDBD',
                        'error': '#b80000'
                    }
                }
            }
        },
    })
    app.vueApp.use(vuetify)
})