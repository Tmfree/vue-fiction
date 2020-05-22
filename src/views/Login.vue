<template>
  <div class="login-container">
    <MLogin />
  </div>
</template>

<script lang="ts">
import MLogin from "@/components/login/index.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    MLogin
  }
})
export default class Login extends Vue {}
</script>

<style scoped lang="scss">
.login-container{
    width: 750px;
    height: 100vh;
}
</style>
