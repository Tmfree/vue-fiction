<template>
  <div class="container">
    <div class="wrapper-horizontal" v-if="horizontal">
      <div class="slide">
        <div class="item" v-for="item in dataList" :key="item.bid">
          <router-link :to="`/book/${item.bid}`">
            <img v-lazy="`//bookcover.yuewen.com/qdbimg/349573/${item.bid}/150`" alt />
            <span class="author">{{item.bName}}</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="wrapper-vertical" v-if="vertical">
      <router-link
        :to="`/book/${item.bid}`"
        class="vertical-link"
        v-for="item in dataList"
        :key="item.bid"
      >
        <van-card>
          <template #title>
            <span class="vertical-title">{{item.bName}}</span>
          </template>
          <template #desc>
            <span class="vertical-desc">{{item.desc}}</span>
          </template>
          <template #thumb>
            <img v-lazy="`//bookcover.yuewen.com/qdbimg/349573/${item.bid}/150`" alt />
          </template>
          <template #tags>
            <div class="vertical-status">
              <div class="right">
                <span class="author">{{item.bAuth}}</span>
              </div>
              <div class="left">
                <van-tag plain type="danger" text-color="#969ba3" v-if="item.cat">{{item.cat}}</van-tag>
                <van-tag plain type="danger" v-if="item.state">{{item.state}}</van-tag>
                <van-tag plain type="danger" text-color="#4284ed" v-if="item.cnt">{{item.cnt}}</van-tag>
              </div>
            </div>
          </template>
        </van-card>
      </router-link>
    </div>
    <div class="wrapper-subject" v-if="subject">
      <a href>
        <img
          src="https://bossaudioandcomic-1252317822.file.myqcloud.com/activity/document/a44140fe96ce7479d5c1c577c60317d7.jpg"
          alt
        />
      </a>
      <a href>
        <img
          src="https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/8ec38ff3b3c2baf9a4fa520faa4a3543.jpg"
          alt
        />
      </a>
      <a href>
        <img
          src="https://qidian.qpic.cn/qidian_common/349573/196e3d3bec0baee4ea0dcb40ddce2bb3/0"
          alt
        />
      </a>
      <a href>
        <img
          src="//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/3d943ecb2a2240bc6ba36bc4192d3610.jpg"
          alt
        />
      </a>
    </div>
  </div>
</template>

<script>
import { dataList } from "./data";
export default {
  components: {},
  props: {
    dataList: {
      type: Array,
      default: () => dataList
    },
    subjectList: {
      type: Array,
      default: () => []
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    subject: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  filters: {
    tagColor(num) {
      let color = num == 0 ? "#969BA3" : num == 1 ? "" : "#4284ed";
      return color;
    }
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
.wrapper-horizontal {
  width: 750px;
  padding-bottom: 10px;
  div.slide {
    padding: 30px 0 8px 16px;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  div.item {
    height: auto;
    display: inline-block;
    white-space: normal;
    vertical-align: top;
    a {
      display: block;
      width: 164px;
      padding: 0 16px;
    }
    img {
      display: block;

      height: 176px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    }
    span.author {
      font-size: 26px;
      color: #33373d;
      margin-top: 16px;
      display: block;
      line-height: 1.25;
      overflow: hidden;
      max-height: 65px;
    }
  }
}
.wrapper-vertical {
  width: inherit;
  a.vertical-link {
    display: block;
    padding: 0 32px;
  }
  .van-card {
    background-color: transparent;
    padding: 32px 0;
    border-bottom: 2px solid #f0f1f2;
    .van-card__thumb {
      width: 132px;
      height: 176px;
      margin-right: 16px;
      img {
        width: 100%;
        height: inherit;
        border-radius: 0;
      }
    }
    .vertical-title {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 32px;
      font-weight: 600;
      color: #33373d;
    }
    .vertical-desc {
      line-height: 38px;
      display: -webkit-box;
      height: 72px;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      color: #969ba3;
      margin: 12px 0;
      font-size: 28px;
    }
    .vertical-status {
      display: flex;
      justify-content: space-between;
      position: relative;
      .left {
        position: absolute;
        transform: scale(0.5);
        right: 0;
        bottom: 0px;
        transform-origin: right bottom;
        flex: 1;
        display: flex;
        align-items: center;
        border: 1px solid transparent;
      }
      .van-tag {
        white-space: nowrap;
        font-size: 40px;
        margin-left: 8px;
        transform: scale(1);
      }
      .author {
        font-size: 26px;
        color: #33373d;
        white-space: nowrap;
        display: inline-block;
      }
    }
  }
}
.wrapper-subject {
  width: 100%;
  padding: 16px;
  display: flex;
  flex-flow: wrap;
  a {
    display: inline-block;
    padding: 16px;
    width: 50%;
    img {
      width: 100%;
      height: 132px;
      object-fit: cover;
      display: block;
    }
  }
}
</style>
