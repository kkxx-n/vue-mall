<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" class="detail-nav" ref="nav"></detail-nav-bar>

    <scroll class="content" ref="scroll" @scroll="contentScroll" :probeType="3">
      <!-- <div v-for="item in $store.state.cartList" :key="item.index">{{item}}</div> -->
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shops"></detail-shop-info>
      <detail-goods-info :detailInfo="detailImage" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info ref="params" :paramInfo="goodsParam"></detail-param-info>
      <detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :goods="recommend"></goods-list>
    </scroll>
    <dateil-botton-bar @addToCart="addToCart"></dateil-botton-bar>
    <back-top v-show="isShowBack" @click.native="backClick"></back-top>
    <toast :message="message" :show="show" ></toast>
  </div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar";
import DetailSwiper from "./childComponents/DetailSwiper";
import DetailBaseInfo from "./childComponents/DetailBaseInfo";
import DetailShopInfo from "./childComponents/DetailShopInfo";
import DetailGoodsInfo from "./childComponents/DetailGoodsInfo";
import DetailParamInfo from "./childComponents/DetailParamsInfo";
import DetailCommentInfo from "./childComponents/DetailCommentInof";
import GoodsList from "../../components/content/goods/GoodList";
import DateilBottonBar from "./childComponents/DetailBottonBar";
import BackTop from "../../components/content/backTop/BackTop";

import Scroll from "../../components/common/scroll/Scroll";
import { debounde } from "../../common/utils";
import { itemListenerMixin } from "../../common/mixin";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend
} from "../../network/detail";

import Toast from '../../components/common/toast/Toast';

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DateilBottonBar,
    Scroll,
    BackTop,
    Toast
  },
  mixins: [itemListenerMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shops: {},
      detailImage: {},
      goodsParam: {},
      commentInfo: {},
      recommend: [],
      itemListener: null,
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
      isShowBack: false,
      message:'',
      show:false
    };
  },
  //   生命周期函数   create  在实例创建完之后立即调用
  created() {
    // 保存iid数据
    this.iid = this.$route.params.iid;
    // 获取商品的基本信息
    getDetail(this.iid).then(res => {
      // console.log(res);
      // 对数据进行分离
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      // 商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 店铺信息
      this.shops = new Shop(data.shopInfo);

      // 保存商品详情数据
      this.detailImage = data.detailInfo;

      //  获取参数信息
      this.goodsParam = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      // 评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }

      this.$nextTick(() => {
        // offsetTop值不对 是因为图片还未加载完
        // this.themeTopYs = []
        // this.themeTopYs.push(0);
        // this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        // this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        // console.log(this.themeTopYs);
      });
    });
    getRecommend().then(res => {
      console.log(res);
      this.recommend = res.data.list;
    });
    this.getThemeTopY = debounde(() => {
      this.themeTopYs = [];

      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      console.log(this.themeTopYs);
    });
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
      this.getThemeTopY();
    },
    titleClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500);
    },
    contentScroll(position) {
      this.isShowBack = -position.y > 1000;
      const positionY = -position.y;
      // console.log(positionY);
      // 和主题中的值进行对比
      // 内容滚动
      let length = this.themeTopYs.length;
      for (let i = 0; i < length; i++) {
        if (
          this.currentIndex !== i &&
          ((i < length - 1 &&
            positionY >= this.themeTopYs[i] &&
            positionY < this.themeTopYs[i + 1]) ||
            (i == length - 1 && positionY >= this.themeTopYs[i]))
        ) {
          this.currentIndex = i;
          console.log(this.currentIndex);
          this.$refs.nav.currentIndx = this.currentIndex;
        }
      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    addToCart() {
      // 获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      // 这是调用store中的mulation方法
      // this.$store.commit("addCart", product);
      // 调用store中的action方法
      this.$store.dispatch("addCart", product).then(res => {
        // this.show = true
        // this.message = res
        // setTimeout(()=>{
        //   this.show = false
        //   this.message = ''
        // },1500)
        console.log(res);
        this.$toast.show(res,1500)
        // this.$toast.show(res,2000)
        console.log(this.$toast)
      });

      // console.log(123);

      // 将商品添加到购物车
    }
  },
  mounted() {
    let newRefresh = debounde(this.$refs.scroll.refresh, 100);

    this.itemListener = () => {
      newRefresh();
    };

    this.$bus.$on("itemImageLoad", this.itemListener);
  },
  destroyed() {
    this.$bus.$off("itemImageLoad", this.itemListener);
  },
  updated() {}
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 10;
  height: 100vh;
  background-color: #fcfcfc;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fcfcfc;
}
.content {
  height: calc(100% - 120px);
}
</style>