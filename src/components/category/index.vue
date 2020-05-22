<template>
  <MyScroll :is-skeleton="isSkeleton">
    <div class="category">
      <van-collapse v-model="activeNames">
        <van-collapse-item :name="idx" v-for="(item,idx) in categoryList" :key="idx">
          <template #title>
            <div class="item">
              <span class="title">{{item.title}}</span>
              <span class="desc">共{{item.total}}本作品</span>
            </div>
          </template>
          <div class="category-content">
            <router-link
              :to="{name:'catDetail',query:{'catId':item.catId,'subCatId':sub.subCatId,'catTitle':sub.text}}"
              v-for="(sub, cun) in item.catList"
              :key="cun"
            >{{sub.text}}</router-link>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </van-collapse-item>
      </van-collapse>
    </div>
  </MyScroll>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MyScroll from "@/components/common/PullUp.vue";
import { mapGetters } from "vuex";
@Component({
  components: {
    MyScroll
  },
  computed: mapGetters(["categoryList"])
})
export default class Ccategory extends Vue {
  private categoryList: Array<any>;
  private activeNames: Array<number | string> = [0, 1, 2];
  private isSkeleton: boolean = true;
  private created() {
    this._getCategoryList();
  }
  protected _getCategoryList() {
    let data = {};
    this.$store.dispatch("getCategory", data).then(result => {
      //关闭loading效果
      this.isSkeleton = false;
    });
  }
}
</script>

<style scoped lang="scss">
.item {
  span.title {
    font-size: 32px;
    color: #33373d;
  }
  span.desc {
    font-size: 24px;
    color: #969ba3;
    margin-left: 20px;
  }
}
.category-content {
  padding-left: 16px;
  padding-right: 16px;
  line-height: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  a {
    color: #969ba3;
    font-size: 24px;
    line-height: 54px;
    display: inline-block;
    padding: 0 20px;
    text-align: center;
    border: 1px solid;
    border-radius: 99px;
    margin-top: 24px;
  }
  i:empty {
    color: #969ba3;
    font-size: 24px;
    display: inline-block;
    padding: 0 20px;
    text-align: center;
    border: 1px solid;
    border-radius: 99px;
    visibility: hidden;
    overflow: hidden;
    height: 0;
    vertical-align: top;
    border-width: 0 1px;
  }
  i::before {
    content: "四个中文";
  }
}
</style>
