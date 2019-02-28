<template>
    <div>
        <div class="top">
            <div class="title">数据看板</div>
            <query class="form"></query>
        </div>
        <div class="bottom">
            <card :formData = 'formData'></card>
        </div>

    </div>

</template>
<script type="text/ecmascript-6">
    import query from '@/components/board/query'
    import card from '@/components/board/card_board'
    export default {
        data(){
            return{
                activeIndex:'/account',
                formData:[
                    {str_1:'111',str_2:'111',str_3:'111',str_4:'111',str_5:'111',str_6:'111',str_7:'111',str_8:'111',str_9:'111',str_10:'111',str_11:'111',str_12:'111',str_13:'111',str_14:'111'},
                    {str_1:'111',str_2:'111',str_3:'111',str_4:'111',str_5:'111',str_6:'111',str_7:'111',str_8:'111',str_9:'111',str_10:'111',str_11:'111',str_12:'111',str_13:'111',str_14:'111'},
                    {str_1:'111',str_2:'111',str_3:'111',str_4:'111',str_5:'111',str_6:'111',str_7:'111',str_8:'111',str_9:'111',str_10:'111',str_11:'111',str_12:'111',str_13:'111',str_14:'111'}
                ]
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
        margin-left: 20px;
        line-height: 50px;
        padding-top: 20px;
    }
    .top .form{
        margin-left: 20px;
        text-align: left;
    }
    .bottom{
        background-color: #fff;
        margin-top: 20px;
    }
</style>
