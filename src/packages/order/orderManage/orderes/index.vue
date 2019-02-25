<template>
    <div>
        <div class="top">
            <div class="title">订单列表</div>
            <query class="form" :orderForm = 'form'></query>
        </div>
        <div class="bottom">
            <clueAForm :orderList="orderList" :meta="meta"></clueAForm>
        </div>
    </div>

</template>
<script type="text/ecmascript-6">
    import query from '@/components/orderManage/query'
    import clueAForm from '@/components/orderManage/form'
    import fetcher from '@/fetchers/order/order'
    export default {
        data(){
            return{
                form:{},
                meta:{
                    current_page: 1,
                    total: 0,
                },
                orderList:[{name:'yzf'},{name:'ysd'}]
            }
        },
        components:{
            query,clueAForm
        },
        methods:{
            load(){
                fetcher.list(Object.assign(this.form,{pageNum:this.meta.current_page}),(response)=>{
                    console.log(response.data)
                    this.orderList = response.data.data;
                    this.meta={
                        current_page:response.data.data.current_page,
                        total: response.data.data.total
                    }
                })
            },
        },
        mounted(){
            // this.load();
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
