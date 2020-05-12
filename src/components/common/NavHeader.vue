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
    <router-link v-if="isMore" to>
      <span>更多</span>
      <van-icon name="arrow" color="#969ba3" size="18" />
    </router-link>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: "标题"
    },
    desc: {
      type: String,
      default: ""
    },
    isMore: {
      type: Boolean,
      default: true
    },
    href: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {}
};
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
    span.title {
      font-size: 32px;
      color: #33373d;
      font-weight: 600;
      vertical-align: middle;
    }
    span.desc {
      font-size: 26px;
      color: #969ba3;
      margin-left: 10px;
      vertical-align: middle;
    }
  }
  a {
    font-size: 24px;
    color: #969ba3;
    display: flex;
    align-items: center;
  }
}
</style>
