<template>
  <MyScroll
    @refreshData="refreshHandle"
    @moreData="loadMoreHandle"
    :page-size="currentSize"
    :data-list="dataList"
  >
    <div class="wrapper-vertical">
      <router-link
        :to="`/book/${item.bid}`"
        class="vertical-link"
        v-for="(item, index) in dataList"
        :key="index"
      >
        <van-card>
          <template #title>
            <span class="vertical-title">{{ item.bName }}</span>
          </template>
          <template #desc>
            <span class="vertical-desc">{{ item.desc }}</span>
          </template>
          <template #thumb>
            <img
              v-lazy="`//bookcover.yuewen.com/qdbimg/349573/${item.bid}/150`"
              alt
            />
          </template>
          <template #tags>
            <div class="vertical-status">
              <div class="right">
                <span class="author"><van-icon name="contact" />{{ item.bAuth }}</span>
              </div>
              <div class="left">
                <van-tag
                  plain
                  type="danger"
                  text-color="#969ba3"
                  v-if="item.cat"
                  >{{ item.cat }}</van-tag
                >
                <van-tag plain type="danger" v-if="item.state">{{
                  item.state
                }}</van-tag>
                <van-tag
                  plain
                  type="danger"
                  text-color="#4284ed"
                  v-if="item.cnt"
                  >{{ item.cnt }}</van-tag
                >
              </div>
            </div>
          </template>
        </van-card>
      </router-link>
    </div>
  </MyScroll>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import MyScroll from "@/components/common/PullUp.vue";
@Component({
  components: {
    MyScroll,
  },
})
export default class CrankList extends Vue {
  private dataList: any[] = [];
  private page: number = 1;
  private currentSize: number = 0;
  private allType: any[] = ["", "免费小说", "新书抢鲜","畅销完本", "轻小说"];

  private refreshHandle() {
    this.dataList = [];
    this.page = 1;
  }

  private async loadMoreHandle() {
    let {id} = this.$route.params
    let type = this.allType.indexOf(id)
    let params = {
      type,
      page: this.page,
    };
    let result = await this.$Ajax.getBookList(params);
    this.currentSize = result.length;
    this.dataList = this.dataList.concat(result);
    this.page++;
  }
}
</script>

<style scoped lang="scss">
.wrapper-vertical {
  width: inherit;
  background-color: #ffffff;
  counter-reset: bookrank;
  a.vertical-link {
    display: flex;
    padding: 0 32px;
    align-items: center;
    justify-content: flex-start;
    &::before {
      counter-increment: bookrank;
      content: counter(bookrank) ".";
      font-size: 32px;
      font-weight: bold;
      color: #33373d;
      margin-right: 32px;
    }
  }
  .van-card {
    background-color: transparent;
    padding: 32px 0;
    border-bottom: 2px solid #f0f1f2;
    .van-card__thumb {
      width: 132px;
      height: 176px;
      margin-right: 16px;
      img {
        width: 100%;
        height: inherit;
        border-radius: 0;
      }
    }
    .vertical-title {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 32px;
      font-weight: 600;
      color: #33373d;
    }
    .vertical-desc {
      line-height: 38px;
      display: -webkit-box;
      height: 72px;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      color: #969ba3;
      margin: 12px 0;
      font-size: 28px;
    }
    .vertical-status {
      display: flex;
      justify-content: space-between;
      position: relative;
      margin-top: 20px;
      .left {
        position: absolute;
        right: 0;
        bottom: 0px;
        transform: scale(0.5);
        transform-origin: right bottom;
        flex: 1;
        display: flex;
        align-items: center;
        border: 1px solid transparent;
      }
      .van-tag {
        white-space: nowrap;
        font-size: 40px;
        margin-left: 8px;
      }
      .author {
        font-size: 26px;
        color: #33373d;
        white-space: nowrap;
        display: flex;
        align-items: center;
      }
    }
  }
  a:last-child .van-card {
    border: none;
  }
}
</style>
