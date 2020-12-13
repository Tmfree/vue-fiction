<template>
  <div class="article-container">
    <van-nav-bar @click-left="onClickLeft">
      <template #title>
        <span class="title">{{ bookInfo.title }}</span>
      </template>
      <template #left>
        <van-icon name="cross" size="18" color="#33373D" />
      </template>
    </van-nav-bar>
    <van-skeleton :animate="false" :row="3" :loading="skeleton">
      <article ref="article">
        <section class="content">
          <h3>{{ dataList.title }}</h3>
          <p v-for="item in dataList.content" :key="item.serialNum">
            {{ item.field }}
          </p>
        </section>
        <div class="end">-- 到底啦 --</div>
      </article>
    </van-skeleton>
    <div class="page">
      <van-pagination
        v-model="activePage"
        :page-count="total"
        mode="simple"
        prev-text="上一章"
        next-text="下一章"
        @change="loadArticleHandle"
      />
    </div>
    <BackTop @goUp="goUpHandle" :is-back="isShowGoback" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Emit } from "vue-property-decorator";
import { mapGetters } from "vuex";
import BackTop from "@/components/common/backTop.vue";
@Component({
  components: {
    BackTop,
  },
  computed: {
    ...mapGetters(["bookInfo"]),
  },
})
export default class Article extends Vue {
  @Prop({ type: Number, default: 1 }) currentPage: number;
  @Prop({ type: Object, default: () => {} }) dataList: any;
  @Prop({ type: String, default: "" }) total: string;

  private bookInfo: any;
  private activePage: number = 1;
  private skeleton: boolean = true;
  private articleConent: any;
  private isShowGoback: boolean = false;

  @Watch("currentPage", { immediate: true })
  onCurrPageChanged(newValue: number, oldValue: number) {
    this.activePage = newValue;
    this.loadArticleHandle();
  }

  @Watch("dataList")
  onDataListChanged(newValue: any, oldValue: any) {
    this.articleConent = newValue;
    this.skeleton = false;
    this.$nextTick(() => {
      let article:any = this.$refs.article
      article.addEventListener("scroll", this._scrollHandle)
    })
  }

  @Emit("close")
  onClickLeft() {
    return false;
  }

  @Emit("loadCatalog")
  loadArticleHandle() {
    //加载数据
    this.skeleton = true;
    return this.activePage - 1;
  }
  private _scrollHandle(e) {
    let scrollTop = e.target.scrollTop;
    if (scrollTop > 600) {
      this.isShowGoback = true;
      return;
    }
    this.isShowGoback = false;
  }
  //滚回顶部
  private goUpHandle() {
    let myScroll: any = this.$refs.article;
    let nowTop = myScroll.scrollTop;
    if (nowTop > 0) {
      window.requestAnimationFrame(this.goUpHandle);
      myScroll.scrollTop = nowTop - nowTop / 5;
    }
  }
}
</script>

<style scoped lang="scss">
.van-nav-bar {
  width: 750px;
  height: 88px;
  display: flex;
  align-items: center;
  background-color: transparent;
}
span.title {
  font-size: 32px;
  font-weight: 600;
}
.article-container {
  .page {
    width: 100%;
    height: 88px;
    border-top: 1px solid #c8c9cc;
    overflow: hidden;
    .van-pagination {
      line-height: 88px;
      font-size: 28px;
    }
    .van-pagination__item {
      height: 88px;
    }
  }
  .van-skeleton {
    width: 100%;
    height: calc(100vh - 176px);
    background-color: #f6f7f9;
    padding: 0;
    .van-skeleton__content {
      background-color: #ffffff;
      height: 20vh;
      padding: 32px;
    }
  }
  article {
    width: 100%;
    height: calc(100vh - 176px);
    overflow-y: auto;
    padding: 0 32px;
    line-height: 1.8;
    text-align: justify;
    background-color: #f6f7f9;
    .content {
      padding-top: 20px;
      h3 {
        font-size: 48px;
        font-weight: 400;
        line-height: 1.2;
        margin: 1em 0;
        display: block;
      }
      p {
        font-size: 36px;
        text-indent: 2em;
        word-break: break-all;
        margin: 4px 0;
      }
    }
    .end {
      padding: 20px 0;
      font-size: 28px;
      text-align: center;
      color: #999999;
    }
  }
}
</style>
