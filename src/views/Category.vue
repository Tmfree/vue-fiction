<template>
  <div class="container">
    <MCategory />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MCategory from "@/components/category/index.vue";
import { siteNavTitle } from "@/utils/tool";
@Component({
  components: {
    MCategory
  }
})
export default class Category extends Vue {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      //获取标题
      siteNavTitle(vm, false, true, "分类");
    });
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: calc(100vh - 88px);
}
</style>
