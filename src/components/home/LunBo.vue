<template>
  <div class="lunbo">
    <van-swipe class="my-swipe" indicator-color="#ed424b" autoplay="3000">
      <van-swipe-item v-for="item in dataList" :key="item.bid">
        <router-link :to="{name:'Book',params:{id:item.bid}}">
          <img :src="item.imgUrl" alt />
        </router-link>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    dataList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
    };
  },
  created() {
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
.lunbo {
  width: 750px;
  padding-left: 24px;
  padding-right: 24px;
  box-sizing: border-box;
}
.my-swipe {
  height: 220px;
  a {
    height: inherit;
    display: block;
    width: 100%;
    position: relative;
    img {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      min-height: 100%;
      display: block;
      transform: translate3d(0, -50%, 0);
    }
  }
}
</style>
