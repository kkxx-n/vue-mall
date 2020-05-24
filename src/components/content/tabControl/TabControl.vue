<template>
  <div class="tabcontrol">
    <div
      v-for="(item, index) in titles"
      :key="item.index"
      class="tab-contorl-item"
      :class="{active:index == currentIndex}"
      @click="itemClick(index)"
    >
    <!-- :class 动态绑定属性'active' (判断是否为布尔值)对象的方式进行判断  index为item数组的下标  currentIndex默认值为0 -->
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    }
  }
};
</script>

<style scoped>
.tabcontrol {
  display: flex;
  text-align: center;
}
.tab-contorl-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
}
.tab-contorl-item span {
  padding: 5px 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>