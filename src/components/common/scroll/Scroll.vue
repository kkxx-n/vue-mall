<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    // 在scroll中  on起到监听事件的作用
    this.$nextTick(() => {
      let options = {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      };
      this.scroll = new BScroll(this.$refs.wrapper, options);
      // 监听滚动的区域

      if (this.probeType === 3 || this.probeType === 2) {
        this.scroll.on("scroll", position => {
          // console.log(position)
          this.$emit("scroll", position);
          // console.log(this.scroll);
          // 刷新content容器高度
          this.scroll.refresh();
        });
      }

      // 监听到滑动到底部
      if (this.pullUpLoad) {
        // 监听 pullingUp事件
        this.scroll.on("pullingUp", () => {
          console.log("到底部了");
          this.$emit("pullingUp");
        });
      }
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
    },
    finshPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      console.log("-----");
      this.scroll && this.scroll.refresh();
    }
  }
};
</script>

<style  scoped>
</style>