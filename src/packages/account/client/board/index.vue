<template>
    <div>
        <div class="top">
            <div class="title">数据看板</div>
            <query class="form"></query>
        </div>
        <div class="bottom">
            <card></card>
        </div>

    </div>

</template>
<script type="text/ecmascript-6">
    import query from './query'
    import card from './card_board'
    export default {
        data(){
            return{
                activeIndex:'/account'
            }
        },
        components:{
            query,card
        }

    }
</script>
<style scoped>
    .top{
        background-color: #fff;
    }
    .top .title{
        color:#353536;
        font-size:18px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        text-align: left;
        margin-left: 40px;
        line-height: 50px;
        padding-top: 20px;
    }
    .top .form{
        margin-left: 40px;
        text-align: left;
    }
    .bottom{
        background-color: #fff;
        margin-top: 20px;
    }
</style>
