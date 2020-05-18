<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!isactive">
      <slot name="tab-img"></slot>
    </div>
    <div v-else>
      <slot name="tab-img-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="tab-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  narm: "TabBarItem",
  props:{
      path:String,
      activeColor:{
          type:String,
          default:'red'
      }
  },
  data() {
    return {
    //   isactive: false
    };
  },
  computed:{
      isactive () {
          return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle () {
          return this.isactive ? {color:this.activeColor}:{}
      }
  },
  methods: {
    itemclick() {
      this.$router.replace(this.path)
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
.active {
  color: red;
}
</style>