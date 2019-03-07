<template>
    <div>
        <div class="top">
            <div class="title">角色管理／角色列表</div>
            <query class="form" :queryForm = 'form' @onSubmit="load"></query>
        </div>
        <div class="bottom">
            <clueAForm :dataList="dataList" :meta="meta"></clueAForm>
        </div>
    </div>

</template>
<script type="text/ecmascript-6">
    import query from '@/components/rolesManage/query'
    import clueAForm from '@/components/rolesManage/form'
    import fetcher from '@/fetchers/system/role'
    export default {
        data(){
            return{
                form:{

                },
                meta:{
                    current_page:1,
                    total:1,
                },
                dataList:[]
            }
        },
        components:{
            query,clueAForm
        },
        methods:{
            load(){
                fetcher.list(Object.assign(this.form,{pageNum:this.meta.current_page}),(response)=>{
                    if(response.data.code==100000){
                        this.dataList=response.data.data.records;
                        this.meta={
                            current_page:response.data.data.current,
                            total:response.data.data.total,
                        }
                    }else{
                        this.dataList = [];
                        this.meta={
                            current_page:1,
                            total:1,
                        }
                    }
                })
            },
        },
        mounted(){
            this.load();
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
