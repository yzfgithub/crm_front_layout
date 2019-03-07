<template>
    <div>
        <div class="top">
            <div class="title">员工管理／员工列表</div>
            <query class="form" :queryForm = 'form' @onSubmit="load"></query>
        </div>
        <div class="bottom">
            <clueAForm :detaList="detaList" :meta="meta" @onSubmit="load"></clueAForm>
        </div>
    </div>

</template>
<script type="text/ecmascript-6">
    import query from '@/components/employeeManage/query'
    import clueAForm from '@/components/employeeManage/form'
    import fetcher from '@/fetchers/system/employee'
    export default {
        data(){
            return{
                form:{},
                meta:{
                    current_page:1,
                    total:1,
                },
                detaList:[]
            }
        },
        components:{
            query,clueAForm
        },
        methods:{
            load(val){
                if(val){
                    this.meta.current_page = val;
                }
                fetcher.employee_list(Object.assign(this.form,{pageNum:this.meta.current_page}),(response)=>{
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
            }
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
