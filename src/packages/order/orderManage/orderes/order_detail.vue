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
                        <span>订单详情</span>
                    </div>
                    <table class="table">
                        <tr>
                            <td>学生姓名</td><td>yzf</td>
                        </tr>
                        <tr>
                            <td>学生手机</td><td>yzf</td>
                        </tr>
                        <tr>
                            <td>销售</td><td>yzf</td>
                        </tr>
                        <tr>
                            <td>产品名称</td><td>yzf</td>
                        </tr>
                        <tr>
                            <td>订单金额(单位元)</td><td>yzf</td>
                        </tr>
                        <tr>
                            <td>折扣金额(单位元)</td><td>yzf</td>
                        </tr>
                        <tr>
                            <td>状态</td><td>yzf</td>
                        </tr>
                    </table>
                </el-card>
            <!--</div>-->

        </div>
        <div class="bottom">
            <el-tabs class="tab_box">
                <el-tab-pane label="微信支付">
                    <pay_logs></pay_logs>
                </el-tab-pane>
                <el-tab-pane label="线下支付">
                    <cash_pay_logs></cash_pay_logs>
                </el-tab-pane>
                <el-tab-pane label="信用卡支付">
                    <outline_pay></outline_pay>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import pay_logs from './pay_logs'
    import cash_pay_logs from './cash_pay_logs'
    import outline_pay from './outline_pay'

    import fetcher from '@/fetchers/order/order'
    export default {
        data(){
            return {

            }
        },
        components:{
            pay_logs,cash_pay_logs,outline_pay
        },
        methods:{
            closeDetail(){
                history.back();
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
