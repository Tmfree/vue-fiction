<template>
  <CatList />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CatList from "@/components/category/catList.vue";
@Component({
  components:{
    CatList
  }
})
export default class CatDetail extends Vue{}
</script>

<style scoped lang="scss">
</style>
