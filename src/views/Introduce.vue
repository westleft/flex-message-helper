<script setup lang="ts">
</script>

<template>
  <div id="introduce">
    <h2 class="title">什麼是 Flex Message ？</h2>
    <p class="text">
      Flex Message 是 LINE 訊息的一種，呈現方式是圖文選單，LINE 開發者可透過
      Flex Message 傳送出特別的圖文選單樣式。 <br />
      例如下面的訊息即是使用 Flex Message 達成：
    </p>
    <div class="image-box">
      <img
        class="image"
        src="https://developers.line.biz/assets/img/bubbleSamples-Update1.96cf1f73.png"
        alt="圖文選單範例"
      />
      <p class="image-alt">Flex Message 範例</p>
    </div>
    <p class="text">
      這種 Flex Message
      我們常在官方帳號中看到，但要做出高客製化的選單，對非開發人員來說會是個負擔。<br />
      為了讓非開發人員更方便的使用 Flex Message，所以做了這個小幫手。
    </p>
    <h2 class="title">使用私人帳號發送出 Flex Message</h2>
    <p class="text">
      上面提到我們必須用官方帳號才能客製化圖文選單並發送，這個小幫手結合了
      LIFF（LINE Front-end Framework），<br />
      因此您可以使用「個人帳號」向好友發送出有特色的 Flex Message。<br />
      例如以下範例：
    </p>
    <div class="image-box">
      <img
        class="image"
        src="@/assets/images/message-example.jpg"
        alt="圖文選單範例"
      />
      <p class="image-alt">客製化訊息</p>
    </div>
    <p class="text">
      發送訊息的同時也能讓朋友感到困惑，因為他們並不曉得要怎麼發送這種訊息，是不是很有趣呢？趕快來嘗試看看吧！
    </p>
  </div>
</template>

<style lang="scss" scoped>
#introduce {
  @include flex(flex-start, flex-start);
  flex-direction: column;
  width: 100%;
  padding: 4%;
  background-color: $color_background;
}

.title {
  font-size: 2vw;
  color: #333333;
  padding: 2% 0;
}
.text {
  line-height: 140%;
  font-size: 1.2vw;
  color: #666666;
}
.image-box {
  @include flex();
  flex-direction: column;
  width: 100%;
  padding: 2% 0;
  .image {
    width: 40%;
    margin-bottom: 12px;
  }
  .image-alt {
    font-size: 1vw;
    color: #666666;
  }
}
</style>
