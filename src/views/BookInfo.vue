<template>
  <BookInfo />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BookInfo from "@/components/book/index.vue";
@Component({
  components: {
    BookInfo
  }
})
export default class BookDetail extends Vue {}
</script>

<style scoped lang="scss">
</style>
