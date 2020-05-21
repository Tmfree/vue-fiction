<template>
  <div class="rank-container">
    <MyRank />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MyRank from "@/components/rank/index.vue";
import { siteNavTitle } from "@/utils/tool";
@Component({
  components: {
    MyRank
  }
})
export default class Rank extends Vue {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      siteNavTitle(vm, false, true, "排行榜");
    });
  }
}
</script>

<style scoped lang="scss">
.rank-container {
  width: 100%;
  height: calc(100vh - 88px);
}
</style>
