<template>
  <div class="nav">
    <div class="left">
      <span class="title">
        <slot name="title">{{title}}</slot>
      </span>
      <span class="desc">
        <slot name="desc">{{desc}}</slot>
      </span>
    </div>
    <router-link v-if="isMore" :to="href">
      <span>更多</span>
      <van-icon name="arrow" color="#969ba3" />
    </router-link>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class CNavHeader extends Vue {
  @Prop({ type: String, default: "标题" }) title: string;
  @Prop({ type: String, default: "" }) desc: string;
  @Prop({ type: Boolean, default: true }) isMore: boolean;
  @Prop({ type: String, default: "" }) href: string;
}
</script>

<style scoped lang="scss">
.nav {
  width: 750px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 32px;
  padding-top: 40px;
  .left {
    font-size: 0;
    border-left: 4px solid #ed424b;
    padding-left: 20px;
    display:flex;
    align-items: flex-end;
    span.title {
      font-size: 32px;
      color: #33373d;
      font-weight: 600;
    }
    span.desc {
      font-size: 26px;
      color: #969ba3;
      margin-left: 10px;
    }
  }
  a {
    font-size: 26px;
    color: #969ba3;
    display: flex;
    align-items: center;
    line-height: 0;
  }
}
</style>
<style lang="scss">
.nav{
  .van-icon-arrow{
    font-size: 36px;
    line-height: 0;
  }
}
</style>
