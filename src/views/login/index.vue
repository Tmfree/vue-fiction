<template>
  <div class="login-container">
    <div class="top">
      <div class="wrapper">
        <p class="title">山楂登录</p>
        <p class="desc">Welcome to Shanzha</p>
      </div>
    </div>
    <div class="bottom">
      <div class="wrapper">
        <van-form colon @submit="onSubmit">
          <van-field
            v-model="username"
            name="account"
            label="用户名"
            label-width="60px"
            placeholder="用户名"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            label-width="60px"
            placeholder="密码"
          />
          <div class="login-btn">
            <van-button round block :disabled="isLogin" native-type="submit"
              >登录</van-button
            >
          </div>
        </van-form>
        <!-- <div class="info">
          <p>仅支持此账号，后台自行修改</p>
          <p>账号：123456</p>
          <p>密码：123456</p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component
export default class CLogin extends Vue {
  private username: string = "888888";
  private password: string = "888888";

  get isLogin() {
    return !this.username || !this.password;
  }

  private async onSubmit(val) {
    let params = val;
    let result = await this.$Ajax.login(params);
    if (result.code == "2000") {
      let { redirect }: any = this.$route.query;
      this.$router.replace({ path: redirect });
    }
  }
}
</script>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100vh;
  background-color: #f44840;
  .top {
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    padding-left: 64px;
    .wrapper {
      color: #ffffff;
      .title {
        font-size: 36px;
      }
      .desc {
        font-size: 26px;
      }
    }
  }
  .bottom {
    width: 100%;
    height: 90vh;
    background-color: #ffffff;
    border-radius: 16px 16px 0px 0px;
    .wrapper {
      width: 100%;
      padding: 0 64px;
      .van-cell {
        padding: 0;
        border-bottom: 1px solid #eeeeee;
        line-height: 80px;
        font-size: 28px;
        margin-bottom: 32px;
      }
      .login-btn {
        margin: 16px;
      }
      .van-button--default {
        background-color: #f44840;
        color: #ffffff;
        font-size: 32px;
        height: 96px;
      }
      .van-field__error-message {
        font-size: 28px;
      }
    }
  }
}
.info {
  width: 100%;
  p {
    white-space: nowrap;
    font-size: 28px;
    line-height: 1.6;
  }
}
</style>
