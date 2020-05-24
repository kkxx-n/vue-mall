<template>
  <div class="goods-item " @click="itemClick">
    <!-- 在每个图片加载完之后触发imageLoad事件 -->
    <img v-lazy="showImage" alt srcset @load="imageLoad" />
    <div class="goods-info">
      <p>{{ goodItem.title}}</p>
      <span class="price">{{ goodItem.price}}</span>
      <span class="collect">{{ goodItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props: {
    goodItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed:{
    showImage() {
      return this.goodItem.image || this.goodItem.show.img
    }
  },
  methods:{
    imageLoad () {
      // 事件总线  发射出一个itemImageLoad事件
      this.$bus.$emit('itemImageLoad')
    },
    itemClick () {
      // 设置路由信息 跳转至detail组件
      this.$router.push('/detail/'+this.goodItem.iid)
    }
  }
};
</script>

<style scoped>
 .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
    border:3px solid var(--color-tint);
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/images/common/collect.svg") 0 0/14px 14px;
  }

</style>