<template>
  <div class="pull-container">
    <van-pull-refresh
      v-model="refreshing"
      @refresh="onRefresh"
      :disabled="$route.meta.isCloseRefresh"
      ref="backup"
    >
      <van-list
        v-model="loading"
        :offset="300"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        v-if="$route.meta.isStartLoadMore"
      >
        <slot></slot>
      </van-list>
      <div class="normal-wrapper" v-else>
        <van-skeleton title :animate="false" :row="3" :loading="skeleton">
          <slot></slot>
        </van-skeleton>
      </div>
    </van-pull-refresh>
    <BackTop :is-back="isShowGoback" @goUp="goUpHandle" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { mapGetters } from "vuex";
import BackTop from "./backTop.vue";
@Component({
  components: {
    BackTop
  },
  computed: {
    ...mapGetters(["searchKW"])
  }
})
export default class PullUp extends Vue {
  @Prop({
    type: Boolean,
    default: true
  })
  isSkeleton: boolean;

  @Prop({
    type: Number,
    default: 0
  })
  page: number;

  @Prop({
    type: Number,
    default: 20
  })
  pageSize: number;

  @Prop({
    type: Array,
    default: () => []
  })
  dataList: any[];

  @Prop({
    type: Boolean,
    default: false
  })
  searchRefresh: boolean;

  @Prop({
    type: String,
    default: ""
  })
  currSearch: string;

  private loading: boolean = false;
  private finished: boolean = false;
  private refreshing: boolean = false;
  private skeleton: boolean = true;
  private isShowGoback: boolean = false;
  private scrollTop: number = 0;

  @Watch("currSearch")
  onCurrSearchChanged(newValue: string, oldValue: string) {
    this.onRefresh();
  }

  @Watch("isSkeleton")
  onSkeletonChanged(newValue: boolean, oldValue: boolean) {
    this.skeleton = newValue;
  }
  @Watch("pageSize")
  onPageSizeChanged(newValue: number, oldValue: number) {
    if (newValue < 20) this.finished = true;
  }

  @Watch("dataList")
  onDataListChanged(newValue: any[], oldValue: any[]) {
    if (newValue.length == 0) {
      this.loading = true;
      return;
    }
    this.loading = false;
  }
  mounted() {
    let { scrollEl }: any = this.$refs.backup;
    scrollEl.addEventListener("scroll", this._scrollHandle);
  }
  activated() {
    //保留上个页面滚动位置
    let { scrollEl }: any = this.$refs.backup;
    scrollEl.scrollTop = this.scrollTop;
  }

  private onRefresh() {
    this.refreshing = true;
    // 清空列表数据
    this.finished = false;
    // 将 loading 设置为 true，表示处于加载状态
    this.loading = true;
    // 重新加载数据
    this.onLoad();
  }
  private onLoad() {
    if (this.refreshing) {
      this.$emit("refreshData");
      this.refreshing = false;
    }
    this.$emit("moreData");
  }
  private _scrollHandle(e) {
    let scrollTop = e.target.scrollTop;
    this.scrollTop = scrollTop; //记录滚动条的位置
    if (scrollTop > 300) {
      this.isShowGoback = true;
      return;
    }
    this.isShowGoback = false;
  }
  private goUpHandle() {
    let { scrollEl }: any = this.$refs.backup;
    let nowTop = scrollEl.scrollTop;
    if (nowTop > 0) {
      window.requestAnimationFrame(this.goUpHandle);
      scrollEl.scrollTop = nowTop - nowTop / 5;
    }
  }
}
</script>

<style scoped lang="scss">
.pull-container {
  height: 100%;
  position: relative;
  .van-pull-refresh {
    height: 100%;
    overflow-y: auto;
  }
}
</style>
