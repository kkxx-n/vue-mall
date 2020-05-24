<template>
  <div id="home">
    <nav-bar class="home-nav">
      <p slot="center">购物街</p>
    </nav-bar>
   <tab-control
        :titles="['流行','新款','精选']"
        @tabClick="tabClick"
        ref="tabControl1"
        class="tab-control tabcontorl"
        v-show="isTabFixed"
      ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <!--  @pullingUp ="loadMore" -->
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend :recommends="recomends"></recommend>
      <feature></feature>
      <tab-control
        class="tabcontorl"
        :titles="['流行','新款','精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      ></tab-control>
      <!-- 首页商品数据 -->
      <good-list :goods="showGoods"></good-list>
    </scroll>

    <!-- native 修饰符 是要监听组件的原生事件的时必须给对应的事件加上修饰符.native才能进行监听 -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
// home子组件
import HomeSwiper from "./childComps/HomeSwiper";
import Recommend from "./childComps/Recommend";
import Feature from "./childComps/Feature";

// 公共组件
import NavBar from "../../components/common/navbar/NavBar";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodList from "../../components/content/goods/GoodList";
import Scroll from "../../components/common/scroll/Scroll";
import BackTop from "../../components/content/backTop/BackTop";

// utils
import { debounde } from "../../common/utils";

// Axios
import { getHomeAxios, getHomeGoods } from "../../network/home";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    Recommend,
    Feature,
    NavBar,
    TabControl,
    GoodList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recomends: [],
      // 设计的数据结构  保存数据
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      scroll: null,
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed:false,
      saveY:0,
      itemListener:null
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  // vue中的声明周期函数
  created() {
    // 请求多个数据
    this.getHomeAxios();
    // 商品信息 封装在methods方法中
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /**
     * 网络请求的封装
     */
    getHomeAxios() {
      getHomeAxios().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recomends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      // 从network中导出的home.js的请求
      getHomeGoods(type, page).then(res => {
        // 是接口中的数据结构  res.data.list
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // 告诉better-scrolll插件 重新刷新容器的高度   完成了上拉刷新
        this.$refs.scroll.finshPullUp();
      });
    },
    /**
     * 事件监听
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      // this.$refs.scroll.scrollTo(0,1000,500)

      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      // 判断BackTop是否显示
      this.isShowBackTop = -position.y > 1000;
      // 判断TabControl是否吸顶
      
      this.isTabFixed = -position.y > this.tabOffsetTop
      // console.log(this.isTabFixed)
    },
    //  scroll 组件中上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType);
      // 刷新content容器高度
      this.$refs.scroll.scroll.refresh();
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      
    }
  },
  // 挂载  (元素挂载)
  mounted() {
    // 接受事件总线传递的事件

    const refresh = debounde(this.$refs.scroll.refresh, 50);
    // 监听事件进行保存
    this.itemListener = () => {
      refresh();
      // this.$refs.scroll.refresh();
    }
    this.$bus.$on("itemImageLoad", this.itemListener);
  },
  activated () {
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated () {
    this.saveY = this.$refs.scroll.scroll.y 
    //
    this.$bus.$off('itemImageLoad',this.itemListener)
  }
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
}
.home-nav {
  background: var(--color-tint);
  color: #ffffff;

  /* position: fixed; */
  /* left: 0;
  right: 0;
  top: 0; */
  z-index: 9;
}
.tabcontorl {
  position: sticky;
  top: 40px;
  background-color: #fcfcfc;
  z-index: 9;
}
.content {
  height: calc(100% - 93px);
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 44px;
  overflow: hidden;
}
.tab-control{
  /* position: relative;
  z-index: 9; */
}
</style>