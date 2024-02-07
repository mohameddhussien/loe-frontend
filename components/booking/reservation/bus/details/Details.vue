<template>
    <v-row no-gutters justify="center" justify-md="end">
        <v-col cols="12" xs="12" sm="7" md="8" xl="9" class="pa-2">
            <v-card width="100%" height="100%" variant="elevated">
                <v-card-title>Bus Details: 50</v-card-title>
                <v-card-text>
                    <v-row no-gutters>
                        Driver Name: {{ bus?.driver.name }}
                    </v-row>
                    <v-row no-gutters>
                        Type: {{ bus?.busModel }}
                    </v-row>
                    <v-row no-gutters>
                        Plate Number: {{ bus?.busPlate }}
                    </v-row>
                    <v-row no-gutters>
                        Pickup Location: {{ bus?.pickup }}
                    </v-row>
                    <v-row>
                        <Field></Field>
                    </v-row>
                    <v-row class="gap-1" justify="end">
                        <MyBtn bg-color="primary">Done</MyBtn>
                        <MyBtn bg-color="error">Close</MyBtn>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" sm="5" md="4" xl="3" class="py-2">
            <Bus :capacity="50" />
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
import { Bus } from '~/classes/Bus';

const props = defineProps({
    bus: Bus
})
</script>

<style lang="scss" scoped></style>