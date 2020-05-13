<template>
  <div class="rank-container">
    <Rank />
  </div>
</template>

<script>
import Rank from "@/components/rank";
import { siteNavTitle } from "@/utils/navBar";
export default {
  components: {
    Rank
  },
  data() {
    return {};
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      siteNavTitle(vm, false, true, "排行榜");
    });
  },
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.rank-container{
  width: 100%;
  height: calc(100vh - 88px);
}
</style>
