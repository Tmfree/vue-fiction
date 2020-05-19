<template>
  <div class="container">
    <div class="top">
      <div class="nav-header"></div>
      <div class="wrapper">
        <div class="header">
          <img
            src="//qidian.gtimg.com/qd/images/ico/default_user.0.2.png"
            alt
            v-if="!userInfo.isLogin"
          />
          <img :src="userInfo.avatar" alt v-else />
        </div>
        <div class="status">
          <p class="title" v-if="userInfo.isLogin">{{userInfo.nickName}}</p>
          <p class="title" v-else @click="loginHandle">立即登录</p>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="cell">
        <ul>
          <li>
            <router-link to>
              <span class="count">0</span>
              <span class="gray">月票</span>
            </router-link>
          </li>
          <li>
            <router-link to>
              <span class="count">0</span>
              <span class="gray">推荐票</span>
            </router-link>
          </li>
          <li>
            <router-link to>
              <span class="count">0</span>
              <span class="gray">看过</span>
            </router-link>
          </li>
          <li>
            <router-link to>
              <span class="count">{{likeData.length}}</span>
              <span class="gray">点赞</span>
            </router-link>
          </li>
        </ul>
      </div>
      <ul class="wrapper">
        <li>
          <router-link to>
            <h3 class="book-title">
              <i class="icon-center-exp"></i>收藏的小说
            </h3>
            <van-icon name="arrow" color="#969ba3" />
          </router-link>
        </li>
        <li>
          <router-link to>
            <h3 class="book-title">
              <i class="icon-center-msg"></i>消息中心
            </h3>
            <van-icon name="arrow" color="#969ba3" />
          </router-link>
        </li>
        <li>
          <router-link to>
            <h3 class="book-title">
              <i class="icon-center-level"></i>会员等级
            </h3>
            <van-icon name="arrow" color="#969ba3" />
          </router-link>
        </li>
        <li>
          <router-link to>
            <h3 class="book-title">
              <i class="icon-center-safe"></i>安全中心
            </h3>
            <van-icon name="arrow" color="#969ba3" />
          </router-link>
        </li>
        <li>
          <router-link to>
            <h3 class="book-title">
              <i class="icon-center-help"></i>帮助中心
            </h3>
            <van-icon name="arrow" color="#969ba3" />
          </router-link>
        </li>
      </ul>
      <div class="login-out" v-if="userInfo.isLogin" @click="logoutHandle">退出登录</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { removeToken } from "@/utils/auth";
export default {
  components: {},
  data() {
    return {
      likeData: []
    };
  },
  computed: {
    ...mapGetters(["userInfo", "likeList"])
  },
  watch: {
    likeList(val) {
      this.likeData = val;
    }
  },
  created() {
    this.$store.dispatch("getUserInfo");
    this.$store.dispatch("getLikeList");
  },
  mounted() {},
  methods: {
    loginHandle() {
      let redirect = this.$route.path;
      this.$router.push({ name: "login", query: { redirect } });
    },
    logoutHandle() {
      removeToken();
      window.location.reload();
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  background-color: #f44840;
  margin-top: -88px;
  .top {
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    .nav-header {
      width: 100%;
      height: 88px;
    }
    .wrapper {
      padding-left: 32px;
      padding-top: 10px;
      display: flex;
      align-items: center;
      .header {
        overflow: hidden;
        img {
          width: 120px;
          height: 120px;
          border-radius: 100%;
          vertical-align: middle;
        }
      }
      .status {
        color: #ffffff;
        margin-left: 10px;
        p.title {
          font-size: 28px;
        }
      }
    }
  }
  .bottom {
    width: 100%;
    min-height: 80vh;
    background-color: #f6f7f9;
    div.cell {
      width: 100%;
      ul {
        width: 100%;
        display: flex;
        background-color: #ffffff;
        li {
          width: 25%;
          padding-bottom: 20px;
          a {
            display: flex;
            flex-direction: column;
            text-align: center;
            justify-content: center;
            padding-top: 24px;
          }
          span.count {
            font-size: 36px;
            margin-bottom: 5px;
          }
          span.gray {
            font-size: 24px;
            color: #969ba3;
          }
        }
      }
    }
    ul.wrapper {
      width: 100%;
      background-color: #ffffff;
      margin: 20px 0;
      li {
        a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100px;
          padding-left: 32px;
          padding-right: 32px;
          h3 {
            font-size: 28px;
            i {
              display: inline-block;
              margin-right: 24px;
              background-image: url(https://qidian.gtimg.com/qdm/icon/center/sprite@2x.8723f.png);
              background-size: 212px 146px;
              vertical-align: -0.35ex;
              &.icon-center-exp {
                width: 36px;
                height: 36px;
                background-position: -136px 0;
              }
              &.icon-center-msg {
                background-position: -180px 0;
                width: 32px;
                height: 36px;
              }
              &.icon-center-level {
                background-position: 0 -112px;
                width: 36px;
                height: 34px;
              }
              &.icon-center-safe {
                background-position: -180px -44px;
                width: 32px;
                height: 36px;
              }
              &.icon-center-help {
                background-position: -180px -88px;
                width: 32px;
                height: 32px;
              }
            }
          }
          .van-icon-arrow {
            font-size: 32px;
          }
        }
        &::after {
          display: block;
          margin-top: -1px;
          margin-left: 32px;
          content: "";
          border-bottom: 1px solid #f0f1f2;
        }
        &:last-child::after {
          display: none;
        }
      }
    }
    .login-out {
      width: 100%;
      height: 80px;
      color: #ed424b;
      font-size: 28px;
      background-color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px 0;
    }
  }
}
</style>
