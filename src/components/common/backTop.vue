<template>
  <div class="back-container" v-if="isBack">
    <div class="wrapper" @click="backUp">
      <van-icon name="arrow-up" color="#ffffff" size="25" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props:{
    isBack:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scrollTop: 0,
      isShowBackUp: false
    };
  },
  created() {},
  mounted() {
  },
  methods: {
    backUp() {
      this.$emit("goUp", false);
    }
  }
};
</script>

<style scoped lang="scss">
.back-container {
  .wrapper {
    width: 88px;
    height: 88px;
    border-radius: 100%;
    position: absolute;
    z-index: 100;
    right: 32px;
    bottom: 100px;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
