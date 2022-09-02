<script setup lang="ts">
import ProgressBar from "@/components/ProgressBar.vue";
import SelectTemplate from "@/views/steps/SelectTemplate.vue"
import DesignMessage from "@/views/steps/DesignMessage.vue"
import { computed, provide, ref } from "vue";

const currentPage = ref<number>(2);
provide("currentPage", currentPage);

// 進度條 % 數
// const percent = ref<number>(1);

const percent = computed(()=>{
  if(currentPage.value === 1) return 1
  else if(currentPage.value === 2) return 50
  else return 100
})

provide("percent", percent);

</script>

<template>
  <div id="steps">
    <ProgressBar />
    <SelectTemplate v-if="currentPage === 1" />
    <DesignMessage  v-if="currentPage === 2" />
    
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