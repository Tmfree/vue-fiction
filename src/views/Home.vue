<template>
  <div class="home">
    <MyHome />
  </div>
</template>

<script lang='ts'>
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import MyHome from "@/components/home/index.vue";
import { siteNavTitle } from "@/utils/tool";
@Component({
  components: {
    MyHome
  }
})
export default class Home extends Vue {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      //获取标题
      siteNavTitle(vm, true, false, "");
    });
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: calc(100vh - 88px);
}
</style>
