<template>
  <MyScroll :is-skeleton="isSkeleton">
    <div class="wrapper" v-for="(item, index) in rank" :key="index">
      <div class="left">
        <router-link :to="`/rank/${item.title}`">
          <img :src="item.coverImg" alt />
          <span class="title" v-if="item.title.length > 3">
            {{ item.title.substr(0, 2) }}
            <br />
            {{ item.title.substr(2, item.title.length) }}
          </span>
          <span class="title" v-else>{{ item.title }}</span>
          <span class="more">
            <van-icon name="more" color="#ffffff" size="24px" />
          </span>
        </router-link>
      </div>
      <div class="right">
        <ul>
          <li v-for="sub in item.topList" :key="sub.bid">
            <router-link :to="`/book/${sub.bid}`">
              <span class="name">{{ sub.cName }}</span>
              <van-icon name="arrow" color="#969ba3" />
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </MyScroll>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MyScroll from "@/components/common/PullUp.vue";
import { mapGetters } from "vuex";
import { siteNavTitle } from "@/utils/tool";
@Component({
  components: {
    MyScroll,
  },
})
export default class Crank extends Vue {
  private rank: Array<any> = [];
  private isSkeleton: boolean = true;
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      siteNavTitle(vm, false, true, "排行榜");
    });
  }
  async created() {
    await this._getRank();
    //关闭loading效果
    this.isSkeleton = false;
  }
  private async _getRank() {
    let params = {};
    let result = await this.$Ajax.getRank(params);
    this.rank = result;
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: auto;
  display: flex;
  background-color: #ffffff;
  margin-bottom: 24px;
  .left {
    width: 240px;
    position: relative;
    a {
      width: 100%;
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }
    span.title {
      font: normal 56px/44px KUHEI;
      position: absolute;
      right: 0;
      bottom: 192px;
      left: 0;
      text-align: center;
      color: #fff;
      transform: scaleY(1.2);
    }
    span.more {
      display: block;
      position: absolute;
      right: 0;
      bottom: 64px;
      left: 0;
      width: 48px;
      height: 48px;
      font-size: 0;
      margin: auto;
    }
  }
  .right {
    margin-left: 60px;
    width: 100%;
    flex: 1;
    ul {
      width: 100%;
      counter-reset: bookrank;
    }
    li {
      display: flex;
      align-items: center;
      box-shadow: 0 1px #f0f1f2;
      position: relative;
      &::before {
        content: counter(bookrank) ".";
        counter-increment: bookrank;
        font-size: 28px;
        font-weight: bold;
        transform: translateX(-36px);
        position: absolute;
      }
      &:last-child {
        box-shadow: none;
      }
      a {
        width: 100%;
        font-size: 28px;
        font-weight: 600;
        color: #33373d;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 20px 20px 0;
      }
    }
  }
}
</style>
