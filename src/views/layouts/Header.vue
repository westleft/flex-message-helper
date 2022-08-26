<script setup lang="ts">
import Cookies from "js-cookie";
import { ref, watch, inject, onMounted, computed } from "vue";
import type { Ref } from "vue";

import { Profile } from "@/interface/";

const profile = inject("profile") as Ref<Profile>;

const userName = computed(() => {
  if (profile.value) return profile.value.displayName;
});

const userImage = computed(() => {
  if (profile.value) return profile.value.pictureUrl;
});

const menuIsOpen = inject("menuIsOpen") as Ref<boolean>;

// 開啟側邊欄
const openSideBar = (): void => {
  menuIsOpen.value = !menuIsOpen.value;
};

// 接到黑暗模式
const darkMode = inject("darkMode") as Ref<boolean>;

// 監聽黑暗模式開啟
watch(
  () => darkMode.value,
  (n) => {
    if (n === true) {
      Cookies.set("darkMode", "true");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      Cookies.set("darkMode", "false");
      document.documentElement.removeAttribute("data-theme");
    }
  }
);

// 判斷有沒有抓到 cookie 開啟黑暗模式
onMounted(() => {
  if (Cookies.get("darkMode") === "true") {
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode.value = true;
  }
});
</script>

<template>
  <div id="header" :class="{ openMenu: menuIsOpen }">
    <img
      :class="['header-menu', { 'dark-mode-image': darkMode }]"
      src="@/assets/images/icons/icon-menu.png"
      alt="選單按鈕"
      @click="openSideBar"
    />
    <div class="mode-switch">
      <label class="switch">
        <input type="checkbox" v-model="darkMode" />
        <span class="slider round">
          <img
            class="switch-icon icon-sun"
            src="@/assets/images/icons/icon-sun.png"
            alt=""
          />
          <img
            class="switch-icon"
            src="@/assets/images/icons/icon-moon.png"
            alt=""
          />
        </span>
      </label>
    </div>
    <div class="user">
      <p class="user-text">Hi，{{ userName }}</p>
      <img class="user-image" :src="userImage" alt="使用者頭像" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#header {
  @include flex(center, space-between);
  @include size(10vh, 100%);
  background-color: var(--background);
  padding: 0 4%;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  .header-menu {
    width: 48px;
    cursor: pointer;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    opacity: 0.9;
    @include mobile {
      width: 36px;
    }
    &:hover {
      opacity: 1;
    }
  }
  .openMenu {
    right: 0;
  }
}

.user {
  @include flex();
  .user-text {
    color: var(--text);
    margin-right: 40px;
    font-size: 1vw;
    @include mobile {
      margin-right: 12px;
      font-size: 4vw;
    }
  }
  .user-image {
    @include imageCenter();
    @include size(48px, 48px);
    border-radius: 100%;
    cursor: pointer;
    @include mobile {
      @include size(36px, 36px);
    }
  }
}

.mode-switch {
  @include flex(center, flex-end);
  width: 70%;
  height: 100%;
  position: relative;
  @include mobile {
    width: 30%;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 80px;
    height: 34px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    @include flex(center, space-between);
    padding: 0 12%;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000000;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 6px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .switch-icon {
    width: 20px;
    &.icon-sun {
      filter: invert(1);
    }
  }

  input:checked + .slider {
    background-color: #ff6b01;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(40px);
    -ms-transform: translateX(40px);
    transform: translateX(40px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
}
</style>