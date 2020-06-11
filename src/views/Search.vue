<template>
  <div class="container">
    <MySearch />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MySearch from "@/components/search/index.vue";
@Component({
  components: {
    MySearch
  }
})
export default class Search extends Vue {}
</script>

<style scoped lang="scss">
</style>
