<template>
  <div class="container">
    <nav class="fun">
      <router-link v-for="item in funList" :key="item.id" :to="item.href">
         <i :class="item.className"></i>
        <span>{{item.text}}</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import {funList} from "./data"
export default {
  components: {},
  data() {
    return {
      funList
    };
  },
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.fun {
  width: 750px;
  height: 150px;
  display: flex;
  background-color: #ffffff;
  align-items: center;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 24px;
  box-sizing: border-box;
  a {
    color: #33373d;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 24px;
    span {
      font-weight: 600;
      margin-top: 12px;
    }
    i {
      display: block;
      background-image: url(https://qidian.gtimg.com/qdm/icon/common/sprite@2x.f5569.png);
      background-size: 174px 174px;
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
      &.icon-god {
        background-position: -60px -60px;
        width: 52px;
        height: 52px;
      }
    }
  }
}
</style>
