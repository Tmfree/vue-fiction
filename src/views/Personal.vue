<template>
  <div class="person-container">
    <NavBar />
    <MUser />
  </div>
</template>

<script>
import MUser from "@/components/personal";
import { siteNavTitle } from "@/utils/navBar";
import NavBar from "@/components/common/NavBar.vue";
export default {
  components: {
    MUser,
    NavBar
  },
  data() {
    return {};
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      //获取标题
      siteNavTitle(vm, false, true, "个人中心", to.query.from);
    });
  },
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.person-container {
  width: 750px;
  height: 100vh;
}
</style>
