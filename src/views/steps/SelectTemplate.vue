<script setup lang="ts">
</script>

<template>
  <div id="select-template">
    <h1 class="select-title">STEP1. 請選擇樣式</h1>
    <ul class="list">
      <li class="list-item" v-for="i in 3" :key="i">
        <label for="fff" class="list-item-label">
          <div class="list-item-container">
            <div class="list-item-text-box">
              <p class="list-item-text">Brown Grand Hotel</p>
              <div class="list-item-stars">
                <img
                  v-for="i in 4"
                  :key="i"
                  class="star"
                  src="https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                  alt=""
                />
                <img
                  class="star"
                  src="https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
                  alt=""
                />
                <p class="star-text">4.0</p>
              </div>
            </div>
          </div>
          <input id="fff" name="radio" type="radio" checked />
        </label>
          
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
#select-template {
  @include flex(flex-start, flex-start);
  flex-direction: column;
  width: 100%;
  .select-title {
    font-size: 2vw;
    padding: 2% 0;
  }
}

.list {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 8%;
  font-family: -apple-system, "BlinkMacSystemFont", Helvetica, Roboto,
    Sans-Serif;
  .list-item {
    overflow: hidden;
    position: relative;
    .list-item-label {
      width: 100%;
      cursor: pointer;
      .list-item-container {
        @include flex(flex-end, flex-start);
        background-image: url("https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip3.jpg");
        background-position: center;
        background-size: cover;
        height: 260px;
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
    }
  }
}

</style>