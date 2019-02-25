<template lang="html">
    <div class="">
        <list :cash_pay_logs_list="cash_pay_logs_list" :meta="meta" @load="load"></list>
    </div>
</template>

<script>
    import list from '@/components/orderManage/cash_pay_log_list'
    import fetcher from '@/fetchers/order/order'

    export default {
        data(){
            return {
                cash_pay_logs_list:[],
                meta:{
                    total:0,
                    current_page:1
                }
            }
        },
        components:{
            list,
        },
        methods:{
            load(){
                fetcher.cash_pay_logs_list(this.$route.params.id,Object.assign({page:this.meta.current_page}),(response) => {
                    this.cash_pay_logs_list = response.data.data;
                    this.meta = response.data.meta.pagination;
                },(error)=>{
                    this.cash_pay_logs_list=[];
                    this.meta={
                        total:0,
                        current_page:1
                    }
                })
            }
        },
        created(){
            // this.load()
        }
    }

</script>

<style lang="css">
    .new{
        color:#fff;
    }
</style>
