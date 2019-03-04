<template>
    <div>
        <div class="top">
            <div class="title">已付费</div>
            <query class="form" :queryForm = 'form'></query>
        </div>
        <div class="bottom">
            <payForm :dataList="dataList" :meta="meta"  @pageChange="pageChange" @onSubmit="load"></payForm>
        </div>
    </div>

</template>
<script type="text/ecmascript-6">
    import query from '@/components/payed/query'
    import payForm from '@/components/payed/form'
    import fetcher from '@/fetchers/account/client/client'
    export default {
        data(){
            return{
                form:{

                },
                meta:{
                    current_page:1,
                    total:0,
                },
                dataList:[]
            }
        },
        components:{
            query,payForm
        },
        methods:{
            pageChange(){
                this.current_page=1;
                this.load();
            },
            load(){
                fetcher.stage_list(Object.assign(this.form,{stage:'已付费',pageSize:this.meta.current_page}),(response)=>{
                    if(response.data.code === 100000){
                        this.dataList = response.data.data.records;

                        this.meta={
                            current_page:ret.current,
                            total: ret.total
                        }
                    }else{
                        this.clueAData = [];
                        this.meta={
                            current_page: 1,
                            total: 0,
                        }
                    }
                })
            },
        },
        mounted(){
            this.load()
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
