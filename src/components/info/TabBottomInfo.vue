<template>
    <v-row class="explainer-row">
        <v-col cols="3" class="explainer-col px-8">
            <HoverInfo />
        </v-col>
        <v-col cols="2" class="explainer-col px-8">
            <CognitionInfo />
        </v-col>
        <v-col cols="2" class="explainer-col px-8">
            <MetacognitionInfo />
        </v-col>
        <v-col cols="2" class="explainer-col px-8">
            <OtherInfo />
        </v-col>
        <v-col cols="3" class="explainer-col px-8">
            <ReflectionInfo />
        </v-col>
    </v-row>
</template>

<script>
import ReflectionInfo from "./ReflectionInfo.vue";
import HoverInfo from "./HoverInfo.vue";
import CognitionInfo from "./CognitionInfo.vue";
import MetacognitionInfo from "./MetacognitionInfo.vue";
import OtherInfo from "./OtherInfo.vue";
import {SET_AUTHENTICATION, SET_USERNAME} from "../../store/storeconstants";

export default {
    name: "TabBottomInfo",
    components: {OtherInfo, MetacognitionInfo, CognitionInfo, HoverInfo, ReflectionInfo},
}
</script>

<style>
.explainer-heading > span{
    font-weight: 600;
    font-size: 13pt;
    text-align: left;
}
/*.explainer-heading span:not(:first-child){*/
/*    margin-bottom: 10px;*/
/*}*/
.explainer-row{
}
.v-divider{
    margin-top:10px;
    margin-bottom:15px;
    color:#000;
    border-top-width:2px;
}
.dot {
    height: .9em;
    width: .9em;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    margin-right: 10px;
}
</style>