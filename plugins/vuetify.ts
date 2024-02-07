import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@/src/styles/settings.scss'
import colors from 'vuetify/util/colors'
import { createVuetify } from 'vuetify'
function colorToGrey(color: string) {
    // Convert hex color to RGB
    const rgb = [
        parseInt(color.substring(1, 3), 16),
        parseInt(color.substring(3, 5), 16),
        parseInt(color.substring(5, 7), 16)
    ];

    // Calculate luminance
    const luminance = (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]) / 255;

    // Calculate grey value
    const grey = Math.round(luminance * 255);

    // Return grey color in rgba format
    return `rgba(${grey}, ${grey}, ${grey}, 1)`;
}
const myLightColors: Record<string, string> = {
    'pink-accent-4': colors.deepOrange.accent4,
    'pink-accent-3': colors.deepOrange.accent3,
    'pink-accent-2': colors.deepOrange.accent2,
    'pink-accent-1': colors.deepOrange.accent1,
    'pink-lighten-5': colors.deepOrange.lighten5,
    'pink-lighten-4': colors.deepOrange.lighten4,
    'pink-lighten-3': colors.deepOrange.lighten3,
    'pink-lighten-2': colors.deepOrange.lighten2,
    'pink-lighten-1': colors.deepOrange.lighten1,
    'pink-darken-4': colors.deepOrange.darken4,
    'pink-darken-3': colors.deepOrange.darken3,
    'pink-darken-2': colors.deepOrange.darken2,
    'pink-darken-1': colors.deepOrange.darken1,
    'pink-darken': colors.red.base
}
const generateGreyColors = (lightColors: Record<string, string>): Record<string, string> => {
    const greyColors: Record<string, string> = {};
    for (const key in lightColors) {
        greyColors[key] = colorToGrey(lightColors[key]);
    }
    return greyColors;
};
export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        // ... your configuration
        theme: {
            themes: {
                light: {
                    dark: false,
                    colors: {
                        ...myLightColors,
                        error: colors.red.base
                    }
                },
                dark: {
                    dark: true,
                    colors: {
                        ...generateGreyColors(myLightColors),
                        'error': '#b80000'
                    }
                }
            }
        },
    })
    app.vueApp.use(vuetify)
})