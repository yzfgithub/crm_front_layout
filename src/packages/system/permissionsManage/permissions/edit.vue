<template>
    <div>
        <div class="top">
            <!--<div class="title">订单详情</div>-->

            <div class="close" @click="closeDetail">
                <i class="el-icon-circle-close"></i>
            </div>

            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>编辑权限</span>
                </div>

                <myForm :dataObj = 'dataObj' @onSubmit="onSubmit"></myForm>

            </el-card>

        </div>

    </div>
</template>
<script type="text/ecmascript-6">

    import myForm from '@/components/permissionsManage/edit_form'
    import fetcher from '@/fetchers/system/permission'
    export default {
        data(){
            return {

                dataObj:{}
            }
        },
        components:{
            myForm
        },
        methods:{
            closeDetail(){
                history.back();
            },
            onSubmit(){
                fetcher.updatePermissionById(this.dataObj,(response)=>{
                    if(response.data.code==100000){
                        this.$message.success('权限更新成功')
                        history.back();

                    }else{
                        this.$message.error('权限名重复')
                    }
                })
            },

            load(){
            //     console.log(this.$route)
                fetcher.getPermissionById({id:this.$route.params.id},(response)=>{
                    this.dataObj = response.data.data;

                })
            }
        },
        mounted(){
            this.load()
        }
    }
</script>
<style scoped>
    .top{
        position: relative;
    }
    .top .distributor_box span{
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(155,155,157,1);
        line-height:14px;
    }
    .top .close{
        position: absolute;
        right: 10px;
        top:10px;
        font-size: 24px;
        color:#daddde;
    }
    .bottom{
        background-color: #fff;
        margin-top: 20px;
    }
    .bottom .tab_box{
        margin:0 20px;
    }
    .table{
        width: 100%;
        max-width: 100%;
        margin-bottom: 1rem;
        background-color: transparent;
        border-collapse: collapse
        /*display: table;*/
        /*border-collapse: separate;*/
        /*border-spacing: 2px;*/
        /*border-color: grey*/
    }
    .table tr td{
        border-top: 1px solid #dee2e6;
        border-bottom: 1px solid #dee2e6;
        height: 34px;
    }
</style>
