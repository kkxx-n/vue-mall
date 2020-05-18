<template>
    <div class="recommend">
        <div v-for="item in recommends" :key="item.index" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        recommends:{
            type:Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style  scoped>
    .recommend{
        display: flex;
        widows: 100%;
        padding:15px 0 20px;
        border-bottom: 1px solid #f1f1f1;
    }
    .recommend-item{
        flex: 1;
    }
    .recommend-item img{
        width: 75%;
        padding-bottom: 10px;
    }
</style>