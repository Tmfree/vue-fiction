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
     
      <MyList v-if="isShow" />
       <div class="white" v-else ></div>
    </div>
  </div>
</template>

<script>
import MyList from "./List.vue";
export default {
  components: { MyList },
  data() {
    return {
      keyWord: "",
      isShow: false
    };
  },
  created() {},
  mounted() {},
  methods: {
    onSearch(val) {
      this.isShow = true;
      this.$store.commit('SET_SEARCHKW',val);
    },
    onCancel() {
      this.$router.back();
    }
  }
};
</script>

<style scoped lang="scss">
.search-container {
  .wrapper {
    width: 100%;
    height: calc(100vh - 88px);
    .white{
      height: inherit;
    }
  }
}
</style>
