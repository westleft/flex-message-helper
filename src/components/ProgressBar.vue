<script setup lang="ts">
import { inject } from "vue";
import type { Ref } from "vue";

const percent = inject("percent") as Ref<number>;
</script>

<template>
  <div id="progress-bar">
    <div class="bar">
      <div
        v-for="(item, index) in [0, 49, 99]"
        :key="index"
        :class="['bar-circle', { 'bar-done': item >= percent }]"
      >
        {{ index + 1 }}
      </div>

      <div class="line">
        <div class="inner-line" :style="{ width: `${percent}%` }"></div>
      </div>
    </div>
    <div class="text-container">
      <p>選擇樣本</p>
      <p>客製化訊息</p>
      <p>寄給好友</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$bar_padding: 20px; // 進度條置中

#progress-bar {
  width: 100%;
  .bar {
    @include flex(center, space-between);
    width: 100%;
    position: relative;
    padding: 0 $bar_padding;
    .bar-circle {
      @include flex();
      @include size(32px, 32px);
      border-radius: 50%;
      background-color: #abd4a3;
      z-index: 1;
      color: #666666;
      border: solid 2px rgb(190, 190, 190);
      background-color: #abd4a3;
      &.bar-done {
        background-color: $color_background;
      }
    }

    .line {
      @include size(3px, calc(100% - $bar_padding * 2));
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: rgb(208, 208, 208);
      .inner-line {
        height: 3px;
        // width: 50%;
        height: 100%;
        background-color: #abd4a3;
      }
    }
  }
  .text-container {
    @include flex(center, space-between);
    width: 100%;
    padding-top: 20px;
  }
}
</style>