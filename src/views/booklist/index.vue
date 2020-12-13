<template>
  <div class="container">
    <List />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import List from "./component/List.vue";
import { siteNavTitle } from "@/utils/tool";
@Component({
  components: {
    List,
  },
})
export default class BookList extends Vue {
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      //获取标题
      siteNavTitle(vm, false, true, to.params.id);
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
