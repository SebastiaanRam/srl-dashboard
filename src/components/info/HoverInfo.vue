<template>
    <v-row class="explainer-heading">
        <span v-if="getProcess()">
            {{ getProcess() }}
        </span>
        <span v-else>
            {{ $t("explanations.title") }}
        </span>
        <v-divider />
        <p v-if="getExplanation()">
            {{ $t(getExplanation()) }}
        </p>
        <p v-else>
            {{ $t("explanations.NietGedetecteerd") }}
        </p>
    </v-row>
</template>

<script>
import {GET_EXPLANATION, GET_PROCESS} from "../../store/storeconstants";

export default {
    name: "HoverInfo",
    methods:{
        getExplanation() {
            return this.$store.getters[`explanation/${GET_EXPLANATION}`]
        },
        getProcess() {
            let process = this.$store.getters[`explanation/${GET_PROCESS}`];
            process = process.split(" ").join("");
            return this.$t("categories."+process)
        },
    }
}
</script>

<style scoped>

</style>