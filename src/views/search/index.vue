<template>
  <div class="search-container">
    <form action="/">
      <van-search
        v-model="keyWord"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <div class="wrapper">
      <CsearchList v-if="isShow" />
      <div class="white" v-else></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CsearchList from "./component/searchList.vue";
@Component({
  components: {
    CsearchList
  }
})
export default class Csearch extends Vue {
  private keyWord: string = "";
  private isShow: boolean = false;

  private onSearch(val) {
    this.isShow = true;
    this.$store.commit("SET_SEARCHKW", val);
  }
  private onCancel() {
    this.$router.back();
  }
}
</script>

<style scoped lang="scss">
.search-container {
  .wrapper {
    width: 100%;
    height: calc(100vh - 88px);
    .white {
      height: inherit;
    }
  }
}
</style>
