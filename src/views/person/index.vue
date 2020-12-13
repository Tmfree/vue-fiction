<template>
  <div class="person-container">
    <NavBar />
    <MUser />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MUser from "./component/User.vue";
import NavBar from "@/components/common/NavBar.vue";
import { siteNavTitle } from "@/utils/tool";
@Component({
  components: {
    MUser,
    NavBar
  }
})
export default class Personal extends Vue {
 beforeRouteEnter(to, from, next) {
    next(vm => {
      //获取标题
      siteNavTitle(vm, false, true, "个人中心", to.query.from);
    });
  }
}
</script>

<style scoped lang="scss">
.person-container {
  width: 750px;
  height: 100vh;
}
</style>
