<template>
  <div class="layout" ref="backup">
    <MBar v-if="$route.meta.isShowNav" />
    <vue-page-stack>
      <router-view></router-view>
    </vue-page-stack>
  </div>
</template>

<script>
import MBar from "@/components/common/NavBar.vue";

export default {
  components: {
    MBar
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.layout {
  width: 750px;
  height: 100vh;
  background-color: #f6f7f9;
  box-sizing: border-box;
  overflow: auto;
}
</style>
