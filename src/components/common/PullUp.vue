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

<script>
import { mapGetters } from "vuex";
import BackTop from "@/components/common/backTop";
export default {
  components: {
    BackTop
  },
  props: {
    isSkeleton: {
      type: Boolean,
      default: true
    },
    page: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 5
    },
    dataList: {
      type: Array,
      default: () => []
    },
    searchRefresh: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: false,
      finished: false,
      refreshing: false,
      skeleton: true,
      isShowGoback: false,
      scrollTop: 0
    };
  },
  computed: {
    ...mapGetters(["searchKW"])
  },
  watch: {
    searchKW(val) {
      this.onRefresh();
    },
    isSkeleton(val) {
      this.skeleton = val;
    },
    pageSize(val) {
      if (this.pageSize < 20) {
        this.finished = true;
      }
    },
    dataList(val) {
      if (val.length == 0) {
        this.loading = true;
        return;
      }
      this.loading = false;
    }
  },
  created() {},
  mounted() {
    let myScroll = this.$refs.backup.scrollEl;
    myScroll.addEventListener("scroll", this._scrollHandle);
  },
  activated() {
    //保留上个页面滚动位置
    let myScroll = this.$refs.backup.scrollEl;
    myScroll.scrollTop = this.scrollTop;
  },
  deactivated() {},
  methods: {
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    onLoad() {
      if (this.refreshing) {
        this.$emit("refreshData");
        this.refreshing = false;
      }
      this.$emit("moreData");
    },
    _scrollHandle(e) {
      let scrollTop = e.target.scrollTop;
      this.scrollTop = scrollTop; //记录滚动条的位置
      if (scrollTop > 300) {
        this.isShowGoback = true;
        return;
      }
      this.isShowGoback = false;
    },
    goUpHandle() {
      let myScroll = this.$refs.backup.scrollEl;
      let nowTop = myScroll.scrollTop;
      if (nowTop > 0) {
        window.requestAnimationFrame(this.goUpHandle);
        myScroll.scrollTop = nowTop - nowTop / 5;
      }
    }
  }
};
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
