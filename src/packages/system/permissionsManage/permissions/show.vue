<template>
    <div>
        <div class="top">
            <!--<div class="title">订单详情</div>-->

            <div class="close" @click="closeDetail">
                <i class="el-icon-circle-close"></i>
            </div>

            <!--<div class="distributor_box">-->
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>员工详情</span>
                </div>

                <employee :employeeForm = 'employeeForm'></employee>

            </el-card>
            <!--</div>-->

        </div>

    </div>
</template>
<script type="text/ecmascript-6">

    import employee from '@/components/permissionsManage/permissions'
    export default {
        data(){
            return {

                employeeForm:{}
            }
        },
        components:{
            employee
        },
        methods:{
            closeDetail(){
                history.back();
            },
            onSubmit(){
                console.log('submit')
            },

            // load(){
            //     console.log(this.$route)
            //     fetcher.details(this.$route.params.id,(response)=>{
            //         this.dataObj = response.data.data;
            //         console.log(this.dataObj)
            //
            //     })
            // }
        },
        mounted(){
            // this.load()
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
