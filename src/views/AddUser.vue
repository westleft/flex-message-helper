<script setup lang="ts">
import { ref, inject } from "vue";
import type { Ref } from "vue";

const darkMode = inject("darkMode") as Ref<boolean>;
</script>

<template>
  <div id="add-user">
    <h1 class="home-title">新增聯絡人</h1>
  </div>
</template>

<style lang="scss" scoped>
#add-user {
  width: 100%;
  .home-title {
    color: var(--text);
    font-size: 2vw;
    padding-bottom: 4%;
    @include mobile {
      font-size: 5vw;
      padding: 4% 0 8% 0;
    }
  }
}

</style>