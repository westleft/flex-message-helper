<script setup lang="ts">
import { computed, provide, reactive, ref } from "vue";

const title = ref<string>("Brown Grand Hotel");
const star = ref<number>(4);

const checkInput = () :void => {
  if(star.value > 5) {
    star.value = 5
  } else if (star.value < 0){
    star.value = 1
  }
}
</script>

<template>
  <div id="design-message">
    <div class="design-message-container">
      <div class="list-item-container">
        <div class="list-item-text-box">
          <p class="list-item-text">{{ title }}</p>
          <div class="list-item-stars">
            <img
              v-for="i in star"
              :key="i"
              class="star"
              src="https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
              alt=""
            />
            <img
              v-for="i in (5 - star)"
              :key="i"
              class="star"
              src="https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
              alt=""
            />
            <p class="star-text">{{ star }}.0</p>
          </div>
        </div>
      </div>

      <div class="message-container">
        <h2 class="design-title">請填寫卡片項目：</h2>
        <div class="input-box">
          <h3 class="design-sub-title">▶ 卡片名稱：</h3>
          <input
            class="input-text"
            type="text"
            v-model="title"
            maxlength="18"
          />
        </div>
        
        <div class="input-box">
          <h3 class="design-sub-title">▶ 背景圖片：</h3>
          <input class="input-text" type="file" />
        </div>
        <div class="input-box">
          <h3 class="design-sub-title">▶ 星星數量：</h3>
          <input
            class="input-text"
            type="number"
            v-model="star"
            @input="checkInput"
            max="1"
          />
        </div>
      </div>
    </div>
  
    <div class="select-buttons">
      <button class="next-button" @click="nextPage">下一步</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#design-message {
  width: 100%;
  padding-top: 8%;
  .design-message-container {
    @include flex(center, space-between);
  }
}

.list-item-container {
  @include flex(flex-end, flex-start);
  background-image: url("https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip3.jpg");
  background-position: center;
  background-size: cover;
  height: 260px;
  width: 260px;
  border-radius: 16px;
  overflow: hidden;
  .list-item-text-box {
    @include flex(flex-end, flex-end);
    flex-direction: column;
    background: linear-gradient(0deg, #00000099 0%, #00000000 100%);
    height: 100px;
    width: 100%;
    padding-bottom: 12px;
    .list-item-text {
      padding: 4px 20px;
      width: 100%;
      color: #ffffff;
    }
    .list-item-stars {
      @include flex(center, flex-start);
      width: 100%;
      padding: 4px 20px 8px 20px;
      .star {
        width: 16px;
        margin-right: 2px;
      }
      .star-text {
        color: #a9a9a9;
      }
    }
  }
}

.message-container {
  @include flex(flex-start, flex-start);
  flex-direction: column;
  width: 50%;
  .design-title {
    font-size: 24px;
    padding-bottom: 12px;
  }
  .input-box {
    width: 100%;
    padding: 12px 0;
    .design-sub-title {
      font-size: 16px;
      padding: 8px 0;
    }
    .input-text {
      padding: 4px 8px;
    }
  }
}

.select-buttons {
  @include flex(flex-end, flex-end);
  width: 100%;
  padding-top: 10%;
  .next-button {
    cursor: pointer;
    border-radius: 4px;
    padding: 8px 16px;
  }
}
</style>