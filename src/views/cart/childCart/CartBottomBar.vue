<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button :is-checked="isSelectAll" class="check-button" @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>
    <span class="total-price">合计：￥{{ this.$store.getters.totalPrice.toFixed(2)}}</span>

    <div class="calculate">去计算{{checkLength}}</div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  computed: {
    totalPrice() {
      this.$store.commit("totalPrice");

      return this.$store.state.cartList
        .filter(item => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0);
    },
    checkLength() {
      return this.$store.state.cartList.filter(item => item.checked).length;
    },
    isSelectAll() {
      if (this.$store.state.cartList.length == 0) return false;
      return !this.$store.getters.cartList.filter(item => !item.checked).length;
    }
  },
  methods:{
      checkClick () {
          if(this.isSelectAll){
              this.$store.state.cartList.forEach(item => {
                item.checked = false 
              });
          }else{
              this.$store.state.cartList.forEach(item => {
                item.checked = true 
              });
          }
      }
  }
};
</script>

<style  scoped>
.bottom-bar {
  background-color: #eee;
  position: relative;
  height: 40px;
  display: flex;
  line-height: 40px;
}
.check-content {
  display: flex;
  width: 60px;
  align-items: center;
  margin-left: 10px;
}
.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-left: 5px;
}
.price {
  margin-left: 30px;
}
.total-price {
  flex: 1;
  position: relative;
  /* top: -40px; */
  margin-left: 15px;
  font-size: 16px;
  color: #666;
}
.calculate {
  width: 60px;
  background-color: red;
}
</style>