<template>
    <div class="cart-list">
        <scroll class="content">
        <!-- <ul>
            <li v-for="item in cartList" :key="item.index">{{item}}</li>
        </ul> -->
        <cart-list-item v-for="(item,index) in cartList" :key="index" :product="item"></cart-list-item>
   
        </scroll>
    </div>
</template>

<script>
import Scroll from '../../../components/common/scroll/Scroll'
import CartListItem from './CartListItem'
import {mapGetters } from 'vuex'

export default {
    name:'CartList',
    created () {
        console.log(this.$store.state.cartList)
    },
    components:{
        Scroll,
        CartListItem
    },
    computed:{
        ...mapGetters(['cartList','cartList'])
    }
}
</script>

<style scoped>
.cart-list{
    height: calc(100% - 44px - 49px - 40px);
}
.content{
    height: 100%;
    overflow: hidden;
}
</style>