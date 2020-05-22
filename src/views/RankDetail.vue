<template>
  <div class="container">
    <MyRankDetail />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MyRankDetail from "@/components/rank/detail.vue";
import { siteNavTitle } from "@/utils/tool";
@Component({
  components: {
    MyRankDetail
  }
})
export default class RankDetail extends Vue {
 beforeRouteEnter(to, from, next) {
    next(vm => {
      siteNavTitle(vm, false, true, vm.$route.query.title);
    });
  }
}
</script>

<style scoped lang="scss">
</style>
