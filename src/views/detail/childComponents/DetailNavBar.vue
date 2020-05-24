<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="../../../assets/images/common/back.svg" alt />
      </div>
      <div slot="center" class="title">
        <div
          class="title-item"
          v-for="(item,index) in titles"
          @click="titleClick(index)"
          :class="{active: index == currentIndx}"
          :key="item.index"
        >{{ item }}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndx: 0
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndx = index;
      this.$emit('titleClick',index)
      //   console.log(index )
      //   console.log(this.currentIndx = index)
    },
    backClick() {
        this.$router.back()
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
}
.title-item {
  flex: 1;
  font-size: 13px;
}
.active {
  color: var(--color-high-text);
}
.back {
  margin-top: 10px;

}
</style>