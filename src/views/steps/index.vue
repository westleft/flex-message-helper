<script setup lang="ts">
import ProgressBar from "@/components/ProgressBar.vue";
import SelectTemplate from "@/views/steps/SelectTemplate.vue"
import { provide, ref } from "vue";

const currentPage = ref<string>("step1");

// 進度條 % 數
const percent = ref<number>(1);
provide("percent", percent);

const add = () => {
  percent.value += 20;
};
</script>

<template>
  <div id="steps">
    <ProgressBar />
    <SelectTemplate />
    <!-- <button @click="add">++</button>
    <button>--</button> -->
  </div>
</template>

<style lang="scss" scoped>
#steps {
  width: 100%;
  min-height: 100vh;
  padding: 4% 20%;
  background-color: $color_background;
}
</style>