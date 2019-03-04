<template lang="html">
    <div>
        <network_time_form :server = 'server' :form = 'form' @n_search = 'load'></network_time_form>
        <network :network_list = "network_list" @load="load" :meta="meta"></network>
    </div>
</template>

<script>
    import network from '@/components/klasses/network'
    import fetcher from '@/components/klasses/fetcher'
    import meta from '@/components/klasses/meta'
    import network_time_form from '@/components/klasses/network_time_form'
    export default {
        data(){
            return {
                network_list:[],
                meta:{
                    current_page: 1,
                    total: 0
                },
                form:{

                },
                server:meta.server,
                download_quality:{
                    '-1':'网络极差，视频发送被关闭',
                    0:'网络非常好',
                    1:'网络好',
                    2:'网络弱',
                    3:'网络差',
                    4:'网络极差, 建议停止视频发送',
                },

            }
        },
        components:{
            network,network_time_form
        },

        methods:{
            load(){
                this.form.page = this.meta.current_page,
                    fetcher.network_stats(this.$route.params.id,Object.assign({},this.form),(response) => {
                        this.network_list = response.data.data;
                        this.meta = response.data.meta.pagination;
                        this.network_list.forEach(element => {
                            if (element.network_status == "对方未进入教室" && element.server == 0) {
                                element.network_status = '老师未进入教室'
                            }else if(element.network_status == "对方未进入教室" && element.server == 1){
                                element.network_status = '学生未进入教室'
                            }else{
                                element.network_status = element.network_status
                            }

                            if (element.upload_quality == 100 && element.server == 0) {
                                element.upload_quality = '老师未进入教室'
                            }else if(element.upload_quality == 100 && element.server == 1){
                                element.upload_quality = '学生未进入教室'
                            }else{
                                element.upload_quality =this.download_quality[element.upload_quality]
                            }

                            if (element.download_quality == 100 && element.server == 0) {
                                element.download_quality = '老师未进入教室'
                            }else if(element.download_quality == 100 && element.server == 1){
                                element.download_quality = '学生未进入教室'
                            }else{
                                element.download_quality =this.download_quality[element.download_quality]
                            }
                        });
                    })
            }
        },
        created(){
            this.load()
        }
    }
</script>

<style lang="css">

</style>
