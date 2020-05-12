<template>
  <div class="container">
    <van-tabs v-model="active" animated swipeable :line-height="2" swipe-threshold="5">
      <van-tab>
        <template #title>
          <span class="nav-title">全部</span>
        </template>
        <div class="wrapper">
          <MyList :current-tab="-1" />
        </div>
      </van-tab>
      <van-tab>
        <template #title>
          <span class="nav-title">玄幻</span>
        </template>
        <div class="wrapper">
          <MyList :current-tab="21" />
        </div>
      </van-tab>
      <van-tab>
        <template #title>
          <span class="nav-title">武侠</span>
        </template>
       <div class="wrapper">
          <MyList :current-tab="2" />
        </div>
      </van-tab>
       <van-tab>
        <template #title>
          <span class="nav-title">都市</span>
        </template>
         <div class="wrapper">
          <MyList :current-tab="4" />
        </div>
      </van-tab>
       <van-tab>
        <template #title>
          <span class="nav-title">现实</span>
        </template>
         <div class="wrapper">
          <MyList :current-tab="15" />
        </div>
      </van-tab>
       <van-tab>
        <template #title>
          <span class="nav-title">军事</span>
        </template>
         <div class="wrapper">
          <MyList :current-tab="6" />
        </div>
      </van-tab>
       <van-tab>
        <template #title>
          <span class="nav-title">历史</span>
        </template>
        <div class="wrapper">
          <MyList :current-tab="5" />
        </div>
      </van-tab>
       <van-tab>
        <template #title>
          <span class="nav-title">悬疑</span>
        </template>
         <div class="wrapper">
          <MyList :current-tab="10" />
        </div>
      </van-tab>
      <van-tab>
        <template #title>
          <span class="nav-title">轻小说</span>
        </template>
         <div class="wrapper">
          <MyList :current-tab="12" />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>

import MyList from "@/components/rank/List.vue";
export default {
  components: {
    MyList
  },
  data() {
    return {
      active: 0
    };
  },
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.wrapper{
  width: 100%;
  height: calc(100vh - 168px);
}
.nav-title {
  font-size: 26px;
  color: #33373d;
}
.van-tab {
  line-height: 88px;
}
</style>
