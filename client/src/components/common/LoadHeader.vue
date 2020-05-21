<template>
  <div class="load-container"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Login extends Vue {
  private loading: boolean = true;
}
</script>

<style scoped lang="scss">
</style>
