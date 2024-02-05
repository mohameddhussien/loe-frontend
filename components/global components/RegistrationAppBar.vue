<template>
    <BaseAppBar color="transparent" class="d-flex justify-center align-center">
        <v-hover #default="{ isHovering: divHover, props: divProps }">
            <v-container fluid class="mt-10">
                <v-row justify="center">
                    <div v-bind="divProps" class="d-flex py-2 px-5 h-full justify-center align-center gap-x-5">
                        <v-btn style="z-index: 1;"
                            :class="{ 'left-[50px]': true, 'shift-right': divHover, '!opacity-0': !divHover }" to="/"
                            variant="plain" icon="mdi-home-outline" />
                        <v-img src="/Ladies_only_events.jpg"
                            :class="{ 'elevation-2 ma-2 opacity-50 transition-all': true, 'scale-110 !opacity-100': divHover }"
                            cover style="filter: drop-shadow(0px 0px 20px rgba(255, 0, 179, 1)); border-radius: 200px;"
                            width="50" height="50" />
                        <v-btn style="z-index: 1;"
                            :class="{ 'right-[50px]': true, 'shift-left': divHover, '!opacity-0': !divHover }" to="/about"
                            variant="plain" icon="mdi-information-outline" />
                    </div>
                </v-row>
            </v-container>
        </v-hover>
    </BaseAppBar>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.shift-right {
    opacity: 100;
    transform: translateX(-50px);
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
    /* Adjust the distance as needed */
}

.shift-left {
    opacity: 100;
    transform: translateX(50px);
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
    /* Adjust the distance as needed */
}
</style>