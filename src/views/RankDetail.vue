<template>
  <div class="container">
    <RankDetail />
  </div>
</template>

<script>
import { siteNavTitle } from "@/utils/navBar";
import RankDetail from "@/components/rank/detail.vue";
export default {
  components: {
    RankDetail
  },
  data() {
    return {};
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      siteNavTitle(vm, false, true, vm.$route.query.title);
    });
  },
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
</style>
