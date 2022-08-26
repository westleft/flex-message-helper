<script setup lang="ts">
import { ref, watch, inject } from "vue";
import type { Ref } from "vue";

const menuIsOpen = inject("menuIsOpen") as Ref<boolean>;


</script>

<template>
  <div id="side-bar" :class="{ 'open-bar': menuIsOpen === true }">
    <div class="sidebar-info">
      <img src="@/assets/images/icons/711.png" class="info-image" alt="logo" />
      <p class="info-title">7-11 寄件小幫手</p>
    </div>   

    <ul class="sidebar-list">
      <li class="list-item">
        <router-link :to="{ 'name': 'Home' }" class="list-item-link item-selected">
          <img
            src="@/assets/images/icons/icon-list.png"
            class="list-item-icon"
            alt="聯絡人清單"
          />
          <p class="link-text">聯絡人清單</p>
        </router-link>
      </li>
      <li class="list-item">
        <router-link :to="{ 'name': 'AddUser' }" class="list-item-link">
          <img
            src="@/assets/images/icons/icon-add.png"
            class="list-item-icon"
            alt="新增聯絡人"
          />
          <p class="link-text">新增聯絡人</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
#side-bar {
  @include size(100%, 16vw);
  background-color: #25244e;
  position: fixed;
  left: -16vw;
  top: 0;
  z-index: 2;
  transition: 0.6s;
  &.open-bar {
    left: 0 !important;
  }
}

.sidebar-info {
  @include flex(center, space-around);
  height: 10vh;
  padding: 0 4% 0 12%;
  .info-image {
    width: 28px;
  }
  .info-title {
    @include deskTopOnly();
    font-size: 1.2vw;
    color: #fff;
    opacity: 0.8;
  }
}

.sidebar-list {
  @include flex();
  flex-direction: column;
  width: 100%;
  padding: 8% 12%;
  .list-item {
    @include flex();
    width: 100%;
    opacity: 0.8;
    margin: 2% 0;
    @include mobile {
      margin: 12% 0;
    };
    .list-item-link {
      @include flex(center, flex-start);
      width: 100%;
      color: #fff;
      font-size: 1vw;
      text-decoration: none;
      padding: 2% 8%;
      border-radius: 4px;
      opacity: 0.8;
      transition: 0.1s;
      &:hover {
        background-color: #56a8ff86;
      }
      .list-item-icon {
        margin-right: 12px;
      }
      .link-text {
        @include deskTopOnly();
      }
    }
  }

  .router-link-exact-active {
    opacity: 1 !important;
    background-color: #56a8ff;
  }
}
</style>