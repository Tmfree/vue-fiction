<template>
  <Rank />
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
</style>
