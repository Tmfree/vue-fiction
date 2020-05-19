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
              <img :src="`//bookcover.yuewen.com/qdbimg/349573/${bookInfo.bid}/150`" alt />
              <div class="sub">
                <h2 class="book-title">{{bookInfo.title}}</h2>
                <p class="book-star">
                  <van-rate v-model="star" :allow-half="true" size="14" v-if="bookInfo.starScore" />
                  <span class="gray" v-else>暂无评分</span>
                </p>
                <p class="book-type">{{bookInfo.tag}}</p>
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
                  <p class="count-text">{{bookInfo.wordCount}}万</p>
                </li>
                <li>
                  <p class="label">阅读</p>
                  <p class="count-text">33.3万</p>
                </li>
                <li>
                  <p class="label">加入书架</p>
                  <p class="count-text">23345</p>
                </li>
                <li>
                  <p class="label">推荐票</p>
                  <p class="count-text">{{bookInfo.ticket}}</p>
                </li>
                <li>
                  <p class="label">打赏</p>
                  <p class="count-text">{{bookInfo.rewardCount}}人</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="book-desc">
          <h3 class="title">简介</h3>
          <p class="content">{{bookInfo.summary}}</p>
        </section>
        <section class="book-desc book-dir">
          <van-sticky>
            <h3 class="title">
              目录
              <span>（共{{bookInfo.total}}章）</span>
            </h3>
          </van-sticky>
          <dl v-for="(item, idx) in bookInfo.catalog" :key="idx">
            <dt>{{item.vN}}</dt>
            <dd v-for="sub in item.cs" :key="sub.id">
              <a href="javascript:void(0);" @click="switchArticleHandle(sub.id)">{{sub.cN}}</a>
            </dd>
          </dl>
        </section>
      </div>
    </MyScroll>
    <van-popup v-model="isStartArticle" :overlay="false" position="top" :style="{ height: '100%'}">
      <MyArticle
        @close="closeHandle"
        @loadCatalog="_getArticle"
        :current-page="currentPage"
        :total="bookInfo.total"
        :data-list="articleContent"
      />
    </van-popup>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { siteNavTitle, debounce } from "@/utils/navBar";
import MyScroll from "@/components/common/PullUp.vue";
import MyArticle from "./article/index.vue";
export default {
  components: {
    MyScroll,
    MyArticle
  },
  data() {
    return {
      dataList: [],
      isStartArticle: false, //文章弹窗
      currentPage: 1, //当前浏览的章节
      allArticleId: [],
      isSkeleton: true, //显示骨架屏
      isCollect: 0, //是否收藏
      isLike: 0 //是否点赞
    };
  },
  computed: {
    ...mapGetters(["bookInfo", "articleContent"]),
    star() {
      return parseFloat(this.bookInfo.starScore);
    }
  },
  watch: {
    bookInfo(val) {
      this.isCollect = val.collect;
      this.isLike = val.like;
      val.catalog.forEach(item => {
        item.cs.forEach(sub => {
          this.allArticleId.push(sub.id);
        });
      });
      //获取标题
      siteNavTitle(this, false, true, val.title);
    }
  },
  created() {
    //获取数据
    this._getBookInfo();
    this.isSkeleton = true;
  },
  mounted() {},
  methods: {
    //上拉刷新
    refreshHandle() {
      //获取数据
      this.isSkeleton = true;
      this._getBookInfo();
    },
    //选择章节
    switchArticleHandle(aid) {
      let num = this.allArticleId.indexOf(aid) + 1;
      this.isStartArticle = true; //开启文章
      this.currentPage = num; //获取当前页码
    },
    //关闭弹窗
    closeHandle() {
      this.isStartArticle = false;
    },
    //获取文章详情
    async _getBookInfo() {
      let data = {
        bid: this.$route.params.id
      };
      await this.$store.dispatch("getBookInfo", data);
      this.isSkeleton = false;
    },
    //获取章节内容
    _getArticle(idx) {
      let data = {
        bid: this.$route.params.id,
        aid: this.allArticleId[idx]
      };
      this.$store.dispatch("getArticle", data);
    },
    //收藏
    collectHandle: debounce(function(flag) {
      let data = {
        bid: this.$route.params.id,
        collect: flag ? 0 : 1
      };
      this.$store.dispatch("collect", data).then(res => {
        if (res.code == 0) {
          this.isCollect = flag ? 0 : 1;
        }
      });
    }, 500),
    //点赞
    likeHandle: debounce(function(flag) {
      let data = {
        bid: this.$route.params.id,
        like: flag ? 0 : 1
      };
      this.$store.dispatch("like", data).then(res => {
        if (res.code == 0) {
          this.isLike = flag ? 0 : 1;
        }
      });
    }, 500)
  }
};
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
    padding: 32px;
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
  .book-desc {
    width: 100%;
    height: auto;
    background-color: #ffffff;
    color: #33373d;
    margin-top: 20px;
    h3.title {
      font-size: 32px;
      padding: 20px 32px;
      span {
        font-size: 28px;
        font-weight: 500;
      }
    }
    p.content {
      font-size: 28px;
      text-align: justify;
      line-height: 1.6;
      padding: 20px 32px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 32px;
        width: 100%;
        height: 0.5px;
        background-color: #f0f1f2;
        z-index: 1;
      }
    }
  }
  .book-dir {
    dl {
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
