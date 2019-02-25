<template lang="html">
    <div class="">
        <list :pay_logs_list="pay_logs_list" :meta="meta" @load="load"></list>
    </div>
</template>

<script>
    import list from '@/components/orderManage/pay_log_list'
    import fetcher from '@/fetchers/order/order'

    export default {
        data(){
            return {
                pay_logs_list:[],
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
                fetcher.pay_logs_list(this.$route.params.id,Object.assign({page:this.meta.current_page,pay_type:1}),(response) => {
                    this.pay_logs_list = response.data.data;
                    this.meta = response.data.meta.pagination;
                },(error)=>{
                    this.pay_logs_list=[];
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
