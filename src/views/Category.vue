<template>
  <div class="container">
    <MCategory />
  </div>
</template>

<script>
import MCategory from "@/components/category/index.vue";
import { siteNavTitle } from "@/utils/navBar";
export default {
  components: {
    MCategory
  },
  data() {
    return {};
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      //获取标题
      siteNavTitle(vm, false, true, "分类");
    });
  },
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.container{
  width: 100%;
  height: calc(100vh - 88px);
}
</style>
