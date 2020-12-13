<template>
  <div class="book-container">
    <MyScroll @refreshData="refreshHandle" :is-skeleton="isSkeleton">
      <div class="wrapper">
        <section class="book-p">
          <img
            class="book-blur"
            :src="`//bookcover.yuewen.com/qdbimg/349573/${bookInfo.bid}/150`"
            alt
          />
          <div class="book-info">
            <div class="top">
              <img
                :src="`//bookcover.yuewen.com/qdbimg/349573/${bookInfo.bid}/150`"
                alt
              />
              <div class="sub">
                <h2 class="book-title">{{ bookInfo.title }}</h2>
                <p class="book-star">
                  <van-rate
                    v-model="star"
                    :allow-half="true"
                    size="14"
                    v-if="bookInfo.starScore != '0'"
                  />
                  <span class="gray" v-else>暂无评分</span>
                </p>
                <p class="book-type">{{ bookInfo.tag }}</p>
                <p class="book-author">作者：哈啊</p>
              </div>
              <div class="user-os">
                <div class="user-b" @click="collectHandle(isCollect)">
                  <van-icon name="star-o" v-if="!isCollect" />
                  <van-icon name="star" color="#ffd21e" v-else />
                  <span>收藏</span>
                </div>
                <div class="user-b" @click="likeHandle(isLike)">
                  <van-icon name="good-job-o" v-if="!isLike" />
                  <van-icon name="good-job" color="#ff2626" v-else />
                  <span>点赞</span>
                </div>
              </div>
            </div>
            <div class="bottom">
              <ul>
                <li>
                  <p class="label">字数</p>
                  <p class="count-text">{{ bookInfo.wordCount }}</p>
                </li>
                <li>
                  <p class="label">阅读</p>
                  <p class="count-text">33.3万</p>
                </li>
                <li>
                  <p class="label">加入书架</p>
                  <p class="count-text">233</p>
                </li>
                <li>
                  <p class="label">推荐票</p>
                  <p class="count-text">{{ bookInfo.ticket }}</p>
                </li>
                <li>
                  <p class="label">打赏</p>
                  <p class="count-text">{{ bookInfo.rewardCount }}人</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="book-tab">
          <van-tabs title-active-color="#333333">
            <van-tab title="简介">
              <section class="book-desc">
                <p class="content">{{ bookInfo.summary }}</p>
              </section>
            </van-tab>
            <van-tab :title="`目录（共${bookInfo.cTotal}章）`">
              <section class="book-dir">
                <dl v-for="(item, idx) in bookInfo.catalog" :key="idx">
                  <dt>{{ item.vN }}</dt>
                  <dd v-for="sub in item.cs" :key="sub.id">
                    <a
                      href="javascript:void(0);"
                      @click="switchArticleHandle(sub.id)"
                      >{{ sub.cN }}</a
                    >
                  </dd>
                </dl>
              </section>
            </van-tab>
          </van-tabs>
        </section>
      </div>
    </MyScroll>
    <van-popup
      v-model="isStartArticle"
      :overlay="false"
      position="top"
      :style="{ height: '100%' }"
    >
      <MyArticle
        @close="closeHandle"
        @loadCatalog="_getArticle"
        :current-page="currentPage"
        :total="bookInfo.cTotal"
        :data-list="articleContent"
      />
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { mapGetters } from "vuex";
import { siteNavTitle, Debounce } from "@/utils/tool";
import MyScroll from "@/components/common/PullUp.vue";
import MyArticle from "./article/index.vue";

@Component({
  components: {
    MyScroll,
    MyArticle,
  },
  computed: mapGetters(["articleContent"]),
})
export default class Book extends Vue {
  private bookInfo: any = {};
  private articleContent: any;
  private dataList: any[] = [];
  private isStartArticle: boolean = false; //文章弹窗
  private currentPage: number = 1; //当前浏览的章节
  private allArticleId: any[] = []; //获取所有章节Id
  private isSkeleton: boolean = true; //显示骨架屏
  private isCollect: number = 0; //是否收藏
  private isLike: number = 0; //是否点赞

  get star() {
    return parseFloat(this.bookInfo.starScore);
  }

  @Watch("bookInfo")
  onBookInfoChanged(newValue: any, oldValue: any) {
    newValue.catalog.forEach((item) => {
      item.cs.forEach((sub) => {
        this.allArticleId.push(sub.id);
      });
    });
    //获取标题
    siteNavTitle(this, false, true, newValue.title);
  }

  created() {
    //获取数据
    this.isSkeleton = true;
    this._getBookInfo();
    this._getCollectList();
    this._getLikeList();
  }

  //上拉刷新
  private refreshHandle() {
    //获取数据
    this.isSkeleton = true;
    this._getBookInfo();
  }
  //选择章节
  private switchArticleHandle(aid) {
    let num = this.allArticleId.indexOf(aid) + 1;
    this.isStartArticle = true; //开启文章
    this.currentPage = num; //获取当前页码
  }
  //关闭弹窗
  private closeHandle() {
    this.isStartArticle = false;
  }
  //获取文章详情
  private async _getBookInfo() {
    let params = {
      bid: this.$route.params.id,
    };
    let result = await this.$store.dispatch("getBookInfo", params);
    this.bookInfo = result;
    this.isSkeleton = false;
  }
  //获取章节内容
  private _getArticle(idx) {
    let data = {
      bid: this.$route.params.id,
      aid: this.allArticleId[idx],
    };
    this.$store.dispatch("getArticle", data);
  }
  //获取收藏列表
  private async _getCollectList() {
    let params = {
      bid: this.$route.params.id,
    };
    let result = await this.$Ajax.getCollectList(params);
    if (result.data != null && result.data.length >= 1) {
      this.isCollect = 1;
    } else {
      this.isCollect = 0;
    }
  }
  //收藏
  private collectHandle: Function = new Debounce(500).use(this.collectRequest);
  private async collectRequest(flag: number) {
    let params = {
      bid: this.$route.params.id,
      bName: this.bookInfo.title,
    };
    if (flag == 1) {
      let result = await this.$Ajax.delCollect(params);
       if(result.status == 'success'){
         this.isCollect = 0;
      }
    } else {
      let result = await this.$Ajax.addCollect(params);
      if(result.status == 'success'){
         this.isCollect = 1;
      }
    }
  }
  //获取点赞列表
  private async _getLikeList() {
    let params = {
      bid: this.$route.params.id,
    };
    let result = await this.$Ajax.getLikeList(params);
    if (result.data != null && result.data.length >= 1) {
      this.isLike = 1;
    } else {
      this.isLike = 0;
    }
  }
  //点赞
  private likeHandle: Function = new Debounce(500).use(this.likeRequest);
  private async likeRequest(flag: number) {
   let params = {
      bid: this.$route.params.id,
      bName: this.bookInfo.title,
    };
    if (flag == 1) {
      let result = await this.$Ajax.delLike(params);
       if(result.status == 'success'){
         this.isLike = 0;
      }
    } else {
      let result = await this.$Ajax.addLike(params);
      if(result.status == 'success'){
         this.isLike = 1;
      }
    }
  }
}
</script>

<style scoped lang="scss">
.book-container {
  width: 100%;
  height: calc(100vh - 88px);
  .book-p {
    width: 100%;
    height: auto;
    overflow: hidden;
    position: relative;
  }
  img.book-blur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30vh;
    object-fit: fill;
    filter: blur(calc(17px + 1px));
  }
  .book-info {
    width: 100%;
    height: auto;
    padding: 30px;
    box-sizing: border-box;
    position: relative;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.7), #ffffff)
      center no-repeat;
    .top {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      position: relative;
      img {
        display: block;
        width: 160px;
        height: 220px;
        margin-right: 12px;
        border-radius: 4px;
      }
      .sub {
        width: 100%;
        flex: 1;
        color: #33373d;
        line-height: 1.8;
        .book-title {
          font-size: 32px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .book-star {
          font-size: 0;
          .gray {
            font-size: 24px;
            color: #969ba3;
            margin-left: 8px;
            display: inline-block;
          }
        }
        .book-type {
          font-size: 24px;
          margin-top: 10px;
        }
        .book-author {
          font-size: 24px;
        }
      }
      .user-os {
        position: absolute;
        z-index: 1;
        right: 0;
        bottom: 0;
        display: flex;
        .user-b {
          font-size: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 20px;
          .van-icon {
            color: #33373d;
            font-size: 40px;
          }
          span {
            color: #33373d;
            margin-top: 6px;
          }
        }
      }
    }
    .bottom {
      margin-top: 20px;
      ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        li {
          background-color: #f6f7f9;
          color: #33373d;
          padding: 12px 26px;
          text-align: center;
          border-radius: 8px;
          p.label {
            font-size: 22px;
          }
          p.count-text {
            font-size: 24px;
            margin-top: 8px;
            font-weight: bold;
          }
        }
      }
    }
  }
  .book-tab {
    width: 100%;
  }
  .book-desc {
    width: 100%;
    height: auto;
    background-color: #ffffff;
    color: #33373d;
    p.content {
      font-size: 28px;
      text-align: justify;
      line-height: 1.6;
      padding: 20px 30px;
      position: relative;
    }
  }
  .book-dir {
    width: 100%;
    height: auto;
    background-color: #ffffff;
    overflow: hidden;
    dl {
      width: 100%;
      dt {
        font-size: 26px;
        width: 100%;
        padding: 24px 32px;
        color: #969ba3;
        background-color: #f6f7f9;
      }
      dd {
        position: relative;
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 32px;
          width: 100%;
          height: 0;
          border-bottom: 2px solid #f6f7f9;
          z-index: 1;
        }
        a {
          font-size: 28px;
          color: #33373d;
          display: block;
          width: 100%;
          padding: 24px 32px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.book-container {
  .van-tab {
    flex: none;
    font-size: 28px;
    padding: 0 30px;
    color: #333333;
  }
  .van-tab--active {
    font-weight: 600;
  }
  .van-tabs__line {
    width: 50px !important;
    height: 5px;
  }
  .van-tabs__content {
    width: 100%;
    height: calc(100vh - 555px);
    overflow-y: auto;
  }
}
</style>
