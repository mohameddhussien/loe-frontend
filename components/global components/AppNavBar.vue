<template>
    <Drawer v-model="openNav">
        <v-list>
            <v-list-item prepend-avatar="/Ladies_only_events.jpg">
                <v-list-item-title>
                    <span class="d-none d-md-flex">Ladies only events</span>
                    <v-switch @click="toggleTheme" v-model="theme.global.current.value.dark"
                        class="align-self-center ma-1 d-md-none d-flex" inset color="pink-lighten-3" hide-details>
                        <template #prepend>Ladies only events</template>
                    </v-switch>
                </v-list-item-title>
            </v-list-item>
        </v-list>
        <v-list nav>
            <v-list-item to="/" prepend-icon="mdi-home-outline" title="Home" value="home" class="font-sans" />
            <v-list-item to="/events" prepend-icon="mdi-calendar-text" title="Events" value="events" class="font-sans" />
            <v-list-item to="/about" prepend-icon="mdi-information-outline" title="About Page" value="about"
                class="font-sans" />
        </v-list>
        <template #append>
            <v-list nav>
                <v-list-item v-if="!authenticated" to="/login" prepend-icon="mdi-login" title="Login" value="login"
                    class="font-sans d-md-none d-flex" />
                <v-list-item v-if="!authenticated" to="/register" prepend-icon="mdi-account-multiple" title="Signup"
                    value="signup" class="font-sans d-md-none d-flex" />
                <v-list-item v-if="authenticated" @click="logout()" prepend-icon="mdi-logout" title="Logout" value="logout"
                    class="font-sans d-md-none d-flex" />
            </v-list>
        </template>
    </Drawer>
    <v-app-bar elevation="0" :order="2" color="rgba(255,255,255,0.5)" class="border">

        <v-app-bar-nav-icon data-aos="slide-right">
            <v-btn icon="mdi-menu" @click="openNav = !openNav" />
        </v-app-bar-nav-icon>
        <v-app-bar-title data-aos="slide-right">
            <div class="d-flex max-md:justify-center">
                <v-img src="/Ladies_only_events.jpg" style="border-radius: 200px;" :max-width="50" :max-height="50"
                    class="align-self-center pa-2 ma-2 elevation-3 hover:scale-110 transition-all" aspect-ratio="1/1"
                    cover />
                <v-img src="/loelogo.png" :max-width="200" :max-height="60" class="ma-2 d-none d-md-flex" aspect-ratio="2/1"
                    cover></v-img>
            </div>
        </v-app-bar-title>
        <v-card data-aos="slide-left" elevation="0" color="rgba(0,0,0,0)">
            <SearchBar :open-search-bar="openSearch" @close="openSearch = false" />
            <v-card-actions class="gap-x-2">
                <v-switch @click="toggleTheme" v-model="theme.global.current.value.dark"
                    class="align-self-center ma-1 d-none d-md-flex" inset color="white" hide-details />
                <my-btn @click="openSearch = true" icon="mdi-calendar-search" size="small" />
                <my-btn to="/auth/register" v-if="!authenticated" class="d-md-flex d-none">Signup</my-btn>
                <my-btn to="/auth/login" v-if="!authenticated" class="d-md-flex d-none">Login</my-btn>
                <my-btn v-if="authenticated" @click="async () => await logout()"
                    class="d-md-flex d-none !ma-1">Logout</my-btn>
            </v-card-actions>
        </v-card>
    </v-app-bar>
</template>

<script setup>
import { useTheme } from 'vuetify'
import { logout, hasToken as authenticated } from '@/composables/store/session';
const theme = useTheme()

const openSearch = ref(false)
const openNav = ref(false)

function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<style scoped></style>