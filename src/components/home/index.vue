<template>
  <MyScroll @refreshData="refreshHandle" :is-skeleton="isSkeleton">
    <LunBo :data-list="lunboList" />
    <Fun />
    <!--热门小说-->
    <section class="fiction-wrapper">
      <NavHeader :is-more="false" title="热门小说" desc="起点编辑推荐" />
      <MList horizontal :data-list="hotFictionList" />
    </section>
    <!--限时免费-->
    <section class="fiction-wrapper">
      <NavHeader title="免费小说">
        <template #desc>
          <div class="time">
            <span class="time-day">{{days}}</span>
            <span class="time-hour">{{hours}}</span>
            <span class="time-minute">{{minutes}}</span>
            <span class="time-second">{{seconds}}</span>
          </div>
        </template>
      </NavHeader>
      <MList horizontal :data-list="freeFictionList" />
    </section>
    <!--新书抢鲜-->
    <section class="fiction-wrapper">
      <NavHeader title="新书抢鲜" desc="24小时热销新书" />
      <MList vertical :data-list="newFictionData" />
    </section>
    <!--轻小说-->
    <section class="fiction-wrapper">
      <NavHeader title="轻小说" />
      <MList horizontal :data-list="qingFictionData" />
    </section>
    <!--精选专题-->
    <section class="fiction-wrapper">
      <NavHeader title="精选专题" :isMore="false" />
      <MList subject />
    </section>
    <section class="white-space"></section>
  </MyScroll>
</template>

<script>
import { mapGetters } from "vuex";
import MList from "./List";
import Fun from "./Fun.vue";
import LunBo from "./LunBo.vue";
import MyScroll from "@/components/common/PullUp.vue";
import NavHeader from "@/components/common/NavHeader.vue";

export default {
  components: {
    LunBo,
    Fun,
    MList,
    NavHeader,
    MyScroll
  },
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      endTime: 86400,
      timer: null,
      isSkeleton: true
    };
  },
  computed: {
    ...mapGetters([
      "lunboList",
      "hotFictionList",
      "freeFictionList",
      "newFictionList",
      "qingFictionList"
    ]),
    newFictionData() {
      return this.newFictionList.filter((item,index) => index < 3);
    },
    qingFictionData() {
      return this.qingFictionList.filter((item,index) => index < 6);
    }
  },
  async created() {
    this._getHomeData();
  },
  activated() {
    this.countDownHandle();
    this.$store.dispatch("getUserInfo");
  },
  mounted() {},
  methods: {
    refreshHandle() {
      this.isSkeleton = true;
      this._getHomeData();
    },
    async _getHomeData() {
      await this.$store.dispatch("getLunbo");
      await this.$store.dispatch("getHotFiction");
      await this.$store.dispatch("getFreeFiction");
      await this.$store.dispatch("getNewFiction", { page: 1 });
      await this.$store.dispatch("getQingFiction", { catId: 12 });
      //关闭loading效果
      this.isSkeleton = false;
    },
    tick(mss) {
      let days = parseInt(mss / (60 * 60 * 24));
      let hours = parseInt((mss / (60 * 60)) % 24);
      let minutes = parseInt((mss / 60) % 60);
      let seconds = mss % 60;
      this.days = days < 10 ? `0${days}` : `${days}`;
      this.hours = hours < 10 ? `0${hours}` : `${hours}`;
      this.minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      this.seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    },
    countDownHandle() {
      let timer = setInterval(() => {
        if (this.endTime <= 0) {
          clearInterval(this.timer);
          return;
        }
        this.endTime--;
        this.tick(this.endTime);
      }, 1000);
      //摧毁事件
      this.$once("hook:deactivated", () => {
        clearInterval(timer);
      });
    }
  }
};
</script>

<style scoped lang="scss">
.fiction-wrapper {
  background-color: #ffffff;
  margin-top: 20px;
}
.white-space {
  width: 100%;
  height: 80px;
}
.time {
  display: inline-block;
  .time-day,
  .time-hour,
  .time-minute,
  .time-second {
    font: 400 20px "DIN Alternate";
    position: relative;
    display: inline-block;
    width: 28px;
    margin-right: 10px;
    padding-top: 2px;
    text-align: center;
    vertical-align: middle;
    color: #fff;
    border-radius: 4px;
    background-color: #33373d;
  }
  .time-day {
    background-color: #ed424b;
  }
  .time-hour::before,
  .time-minute::before,
  .time-second::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -6px;
    width: 2px;
    height: 4px;
    margin: auto;
    content: "";
    transform: translateY(-6px);
    border-radius: 2px;
    background-color: #969ba3;
    box-shadow: 0 10px #969ba3;
  }
}
</style>
