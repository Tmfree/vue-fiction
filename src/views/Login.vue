<template>
  <div class="login-container">
    <MLogin />
  </div>
</template>

<script>
import MLogin from "@/components/login";
export default {
  components: {
    MLogin
  },
  data() {
    return {};
  },
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.login-container{
    width: 750px;
    height: 100vh;
}
</style>
