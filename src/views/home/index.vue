<template>
  <MyScroll :is-skeleton="isSkeleton">
    <LunBo :data-list="lunboList" />
    <Fun />
    <!--热门小说-->
    <section class="fiction-wrapper">
      <NavHeader :is-more="false" title="热门小说" desc="起点编辑推荐" />
      <MList horizontal :data-list="hotFictionList" />
    </section>
    <!--限时免费-->
    <section class="fiction-wrapper">
      <NavHeader title="免费小说" href="/book/list/免费小说">
        <template #desc>
          <div class="time">
            <span class="time-day">{{ days }}</span>
            <span class="time-hour">{{ hours }}</span>
            <span class="time-minute">{{ minutes }}</span>
            <span class="time-second">{{ seconds }}</span>
          </div>
        </template>
      </NavHeader>
      <MList horizontal :data-list="freeFictionList" />
    </section>
    <!--新书抢鲜-->
    <section class="fiction-wrapper">
      <NavHeader
        title="新书抢鲜"
        desc="24小时热销新书"
        href="/book/list/新书抢鲜"
      />
      <MList vertical :data-list="newFictionList" />
    </section>
    <!--畅销完本-->
    <section class="fiction-wrapper">
      <NavHeader
        title="畅销完本"
        desc="今日畅销完本"
        href="/book/list/畅销完本"
      />
      <MList vertical :data-list="bestsellFictionList" />
    </section>
    <!--轻小说-->
    <section class="fiction-wrapper">
      <NavHeader title="轻小说" href="/book/list/轻小说" />
      <MList horizontal :data-list="qingFictionList" />
    </section>
    <!--精选专题-->
    <section class="fiction-wrapper">
      <NavHeader title="精选专题" :isMore="false" />
      <MList subject />
    </section>
  </MyScroll>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { siteNavTitle } from "@/utils/tool";
import { Component, Vue, Watch } from "vue-property-decorator";
import MList from "./component/List.vue";
import Fun from "./component/Fun.vue";
import LunBo from "./component/LunBo.vue";
import MyScroll from "@/components/common/PullUp.vue";
import NavHeader from "@/components/common/NavHeader.vue";
@Component({
  components: {
    LunBo,
    Fun,
    MList,
    NavHeader,
    MyScroll,
  },
})
export default class Home extends Vue {
  private lunboList: any[] = [];
  private hotFictionList: any[] = [];
  private newFictionList: any[] = [];
  private qingFictionList: any[] = [];
  private freeFictionList: any[] = [];
  private bestsellFictionList: any[] = [];
  private days: number | string = 0;
  private hours: number | string = 0;
  private minutes: number | string = 0;
  private seconds: number | string = 0;
  private endTime: number = 172800;
  private isSkeleton: boolean = true;

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      //获取标题
      siteNavTitle(vm, true, false, "");
    });
  }
  private activated() {
    this.countDownHandle();
    this.$store.dispatch("getUserInfo");
  }
  private mounted() {
    let a: number = 1;
    this._getHomeData();
  }
  async _getHomeData() {
    this.$nextTick(() => {
      let s = document.createElement("script");
      s.src = `${process.env.VUE_APP_BASEURL}/static/js/home_index.js`;
      document.body.appendChild(s);
      s.onload = () => {
        let {
          banner,
          newfiction,
          qingfiction,
          freefiction,
          hotfiction,
          bestsellfiction,
        } = home_index;
        this.lunboList = banner;
        this.newFictionList = newfiction;
        this.qingFictionList = qingfiction;
        this.freeFictionList = freefiction;
        this.hotFictionList = hotfiction;
        this.bestsellFictionList = bestsellfiction;
        document.body.removeChild(s);
        //关闭loading效果
        this.isSkeleton = false;
      };
    });
  }
  private tick(mss: number): void {
    let days: number = Math.floor(mss / (60 * 60 * 24));
    let hours: number = Math.floor((mss / (60 * 60)) % 24);
    let minutes: number = Math.floor((mss / 60) % 60);
    let seconds: number = Math.floor(mss % 60);
    this.days = days < 10 ? `0${days}` : `${days}`;
    this.hours = hours < 10 ? `0${hours}` : `${hours}`;
    this.minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    this.seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  }
  countDownHandle(): void {
    let timer: any = setInterval(() => {
      if (this.endTime <= 0) {
        clearInterval(timer);
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
</script>

<style scoped lang="scss">
.fiction-wrapper {
  background-color: #ffffff;
  margin-top: 20px;
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


