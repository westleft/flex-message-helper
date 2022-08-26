<script setup lang="ts">
</script>

<template>
  <div id="home">
    <div class="text-container">
      <h1 class="home-title"><span>LINE</span> Flex Message 小幫手</h1>
      <p class="introduce-text">
        使用前請先參考：
        <RouterLink class="introduce-link" :to="{ name: 'Introduce' }">
          Flex Message 小幫手 | 使用說明書
        </RouterLink>
      </p>
    </div>
    <RouterLink class="btn-42" :to="{ name: 'Steps' }">
      <span>開始設計</span>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
#home {
  @include flex(center, space-around);
  @include size(100vh, 100vw);
  flex-direction: column;
  background-color: $color_background;;
  .text-container {
    @include flex();
    flex-direction: column;
    .home-title {
      font-size: 4vw;
      color: #666666;
      padding-bottom: 12%;
      span {
        background-color: #00b900;
        color: #ffffff;
        font-weight: 600;
        padding: 8px 20px;
        border-radius: 4px;
      }
    }
    .introduce-text {
      text-align: center;
      font-size: 1.3vw;
      color: #333333;
      line-height: 140%;
      .introduce-link {
        color: #999999;
        text-decoration: none;
        &:hover {
          color: #00b900;
        }
      }
      br {
        display: initial;
        @include mobileOnly();
      }
    }
  }
}

.btn-42,
.btn-42 *,
.btn-42 :after,
.btn-42 :before,
.btn-42:after,
.btn-42:before {
  border: 0 solid;
  box-sizing: border-box;
}
.btn-42 {
  background-color: #fff;
  background-image: none;
  color: #fff;
  cursor: pointer;
  padding: 0;
}

.btn-42 {
  border-radius: 999px;
  box-sizing: border-box;
  display: block;
  padding: 1rem 3rem;
  position: relative;
  text-decoration: none;
}
.btn-42 span {
  // mix-blend-mode: difference;
  color: rgb(46, 46, 46);
  font-size: 1.2vw;
}
.btn-42:before {
  --thickness: 4px;
  border: var(--thickness) solid #00b900;
  border-radius: 999px;
  content: "";
  inset: calc(var(--thickness) * -1);
  opacity: 0;
  pointer-events: none;
  position: absolute;
  transform: scale(1.3);
  transition: transform 0.2s, opacity 0.2s;
}
.btn-42:hover:before {
  opacity: 1;
  transform: scale(1);
}
.btn-42:hover {
  background-color: transparent;
}
</style>
