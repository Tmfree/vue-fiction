<template>
  <div class="container">
    <van-nav-bar @click-left="onClickLeft">
      <template #title v-if="navBar.showTitle">
        <span class="title">山楂小说</span>
      </template>
      <template #left v-if="navBar.showLeftTitle">
        <van-icon name="arrow-left" size="18" color="#33373D" />
        <span class="sub-title">{{navBar.leftTitle}}</span>
      </template>
      <template #right>
        <router-link to="/user" class="search" v-if="navBar.showTitle">
          <img :src="userInfo.avatar" alt class="user" v-if="userInfo.isLogin" />
          <van-icon name="user-o" size="18" color="#33373D" v-else />
        </router-link>
        <router-link to="/search" class="search" v-else>
          <van-icon name="search" size="18" color="#33373D" />
        </router-link>
        <span :class="['more',showFun?'active':'']" @click="showFun = !showFun"></span>
      </template>
    </van-nav-bar>
    <van-popup
      v-model="showFun"
      position="top"
      :overlay-style="{'top':'0.88rem'}"
      transition="myslide"
    >
      <div :class="['sub',showFun?'active':'']">
        <div class="item">
          <router-link to="/" @click.native="showFun = false">
            <i class="icon icon-home"></i>
            <span>首页</span>
          </router-link>
        </div>
        <div class="item">
          <router-link to="/category" @click.native="showFun = false">
            <i class="icon icon-sort"></i>
            <span>分类</span>
          </router-link>
        </div>
        <div class="item">
          <router-link to="/rank" @click.native="showFun = false">
            <i class="icon icon-rank"></i>
            <span>排行榜</span>
          </router-link>
        </div>
        <div class="item">
          <a href>
            <i class="icon icon-free"></i>
            <span>免费</span>
          </a>
        </div>
        <div class="item">
          <a href>
            <i class="icon icon-end"></i>
            <span>完本</span>
          </a>
        </div>
        <div class="item">
          <router-link to="/user" @click.native="showFun = false">
            <i class="icon icon-account"></i>
            <span>账号</span>
          </router-link>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
      showFun: false
    };
  },
  computed: {
    ...mapGetters(["navBar", "userInfo"])
  },
  created() {},
  mounted() {},
  methods: {
    onClickLeft() {
      if (this.navBar.back  == 'login'){
        this.$router.push('/')
      }else{
        this.$router.back()
      }
    }
  }
};
</script>

<style scoped lang="scss">
.van-nav-bar {
  width: 750px;
  height: 88px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-bottom: 1px solid #c8c9cc;
}
span.title {
  font-size: 32px;
  font-weight: 600;
}
span.sub-title {
  font-size: 28px;
}
a.search {
  display: flex;
  width: 72px;
  height: 72px;
  align-items: center;
  justify-content: center;
  img.user {
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }
}
span.more {
  display: block;
  &:empty {
    position: relative;
    width: 72px;
    height: 72px;
  }
  &:empty::after,
  &:empty::before {
    position: absolute;
    top: 36px;
    left: 50%;
    width: 36px;
    margin-top: -2px;
    margin-left: -18px;
    content: "";
    transition: transform 0.15s;
    border-top: 1px solid;
  }
  &:empty::before {
    height: 8px;
    transform-origin: top center;
    border-bottom: 1px solid;
  }
  &:empty::after {
    transform: translateY(-10px);
  }
  &.active::before {
    height: 0;
    transform: translateY(0) rotate(45deg);
    border-bottom: 0;
  }
  &.active::after {
    transform: translateY(0) rotate(-45deg);
  }
}
.van-popup {
  top: 88px;
  overflow: hidden;
  background-color: transparent;
  transition: none;
  .sub {
    width: 100%;
    padding: 0 32px;
    font-size: 32px;
    background-color: #ffffff;
    transition: transform 0.15s;
    transform: translateY(-100%);
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 30px;
    &.active {
      transform: translateY(0);
    }
    .item {
      width: calc(100% / 3);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      a {
        width: 120px;
        height: 120px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #33373d;
        font-size: 24px;
        font-weight: 600;
        i {
          display: block;
          background-image: url(https://qidian.gtimg.com/qdm/icon/common/sprite@2x.f5569.png);
          background-size: 174px 174px;
          &.icon-home {
            background-position: -62px 0;
            width: 56px;
            height: 50px;
          }
          &.icon-sort {
            background-position: -126px -56px;
            width: 48px;
            height: 48px;
          }
          &.icon-rank {
            background-position: 0 0;
            width: 54px;
            height: 52px;
          }
          &.icon-free {
            background-position: 0 -60px;
            width: 52px;
            height: 52px;
          }
          &.icon-end {
            background-position: 0 -120px;
            width: 40px;
            height: 54px;
          }
          &.icon-account {
            background-position: -126px 0;
            width: 48px;
            height: 48px;
          }
        }
        span {
          display: block;
          margin-top: 12px;
        }
      }
    }
  }
}
.myslide-enter-active,
.myslide-leave-active {
  transition: visibility 0.15s;
}
.myslide-enter,
.myslide-leave-to {
  visibility: hidden;
}
</style>
