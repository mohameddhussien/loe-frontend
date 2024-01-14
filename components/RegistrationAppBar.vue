<template>
    <BaseAppBar color="transparent" class="d-flex justify-center align-center">
        <v-hover #default="{ isHovering: divHover, props: divProps }">
            <div class="w-full !min-h-full pa-6 border d-flex my-auto justify-center align-center">
                <div v-bind="divProps" class="d-flex h-full justify-center align-center gap-x-5">
                    <v-btn style="z-index: 1;"
                        :class="{ 'left-[50px]': true, 'shift-right': divHover, '!opacity-0': !divHover }"
                        to="/" variant="plain" icon="mdi-home-outline" />
                    <v-img src="/Ladies_only_events.jpg"
                        :class="{ 'elevation-2 ma-2 opacity-50 transition-all': true, 'scale-110 opacity-100': divHover }"
                        cover style="filter: drop-shadow(0px 0px 20px rgba(255, 0, 179, 1)); border-radius: 200px;"
                        width="50" height="50" />
                    <v-btn style="z-index: 1;"
                        :class="{ 'right-[50px]': true, 'shift-left': divHover, '!opacity-0': !divHover }"
                        to="/about" variant="plain" icon="mdi-information-outline" />
                </div>
            </div>
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