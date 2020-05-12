<template>
  <div class="home">
    <MyHome />
  </div>
</template>

<script>
// @ is an alias to /src
import MyHome from "@/components/home/index.vue";
import { siteNavTitle } from "@/utils/navBar";
export default {
  name: "Home",
  components: {
    MyHome
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      //获取标题
      siteNavTitle(vm, true, false, "");
    });
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: calc(100vh - 88px);
}
</style>
