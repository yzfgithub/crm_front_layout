<template>
    <div>
        <div class="top">
            <div class="title">客户详情</div>
            <div class="distributor_box">
                <div>
                    <span class="name">王大仁</span>&nbsp;&nbsp;<span>1512976130</span>
                </div>
               <div>
                   <span>性别</span>&nbsp;&nbsp;<span class="mg-r">女</span>
                   <span>练琴等级</span>&nbsp;&nbsp;<span class="mg-r">初级</span>
                   <span>意向度</span>&nbsp;&nbsp;<span class="mg-r">低</span>
                   <span>性别</span>&nbsp;&nbsp;<span class="mg-r">女</span>
               </div>

            </div>
            <div class="close" @click="closeDetail">
                <i class="el-icon-circle-close"></i>
            </div>
        </div>
        <div class="bottom">
            <el-tabs class="tab_box" v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="基本信息" name="first">
                    <firstCom></firstCom>
                </el-tab-pane>
                <el-tab-pane label="沟通记录（2）" name="second">
                    <secondCom></secondCom>
                </el-tab-pane>
                <el-tab-pane label="课程记录（2）" name="third">
                    <thirdCom></thirdCom>
                </el-tab-pane>
                <el-tab-pane label="订单记录（2）" name="fourth">
                    <fourCom></fourCom>
                </el-tab-pane>
                <el-tab-pane label="赠课记录（2）" name="fifth">
                    <fiveCom></fiveCom>
                </el-tab-pane>
                <el-tab-pane label="电联语音（2）" name="sixth">
                    <sixCom></sixCom>
                </el-tab-pane>
                <el-tab-pane label="操作日志（2）" name="seventh">
                    <sevenCom></sevenCom>
                </el-tab-pane>
                <el-tab-pane label="来源记录（2）" name="eighth">
                    <eightCom></eightCom>
                </el-tab-pane>
            </el-tabs>
            <!--<clueAForm :clueAData="clueAData"></clueAForm>-->
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import firstCom from './first'
    import secondCom from './second'
    import thirdCom from './third'
    import fourCom from './four'
    import fiveCom from './five'
    import sixCom from './six'
    import sevenCom from './seven'
    import eightCom from './eight'
    export default {
        data(){
            return {
                activeName:'first'
            }
        },
        components:{
            firstCom,secondCom,thirdCom,fourCom,fiveCom,sixCom,sevenCom,eightCom
        },
        methods:{
            closeDetail(){
                history.back();
            },
            handleClick(){
                console.log('sss')
            }
        }
    }
</script>
<style scoped>
    .top{
        background-color: #fff;
        padding-bottom: 20px;
        position: relative;
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
    .top .distributor_box{
        background-color: rgba(248,84,46,0.02);
        border:1px solid rgba(248,84,46,0.08);
        margin:0 20px;
        text-align: left;
        padding: 10px;
    }
    .top .distributor_box .name{
        font-size:16px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(102,102,102,1);
        line-height:16px;
    }
    .top .distributor_box span{
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(155,155,157,1);
        line-height:14px;
    }
    .top .distributor_box span.mg-r{
        margin-right: 40px;
    }
    /*.top .form{*/
        /*margin-left: 40px;*/
        /*text-align: left;*/
    /*}*/
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
</style>
