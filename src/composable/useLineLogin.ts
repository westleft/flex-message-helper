import liff from "@line/liff";
import { ref } from "vue";
import type { Ref } from "vue";

export function lineLogin() {
  const profile: Ref<unknown> = ref();

  const checkLogin = (): void => {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID, // Use own liffId
      })
      .then(() => {
        // start to use LIFF's api
        //   console.log(liff.isLoggedIn());
        //   console.log(123);

        const accessToken = liff.getAccessToken();
        //   console.log(accessToken);

        if (liff.isLoggedIn()) {
          return liff.getProfile();
        } else {
          liff.login({ redirectUri: "https://58ed-1-161-68-108.jp.ngrok.io" });
        }
      })
      .then((res) => {
        profile.value = res;
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  return { checkLogin, profile };
}
