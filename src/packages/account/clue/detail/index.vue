<template>
    <div>
        <div class="top">
            <div class="title">客户详情</div>
            <div class="distributor_box">
                <div>
                    <span class="name">{{dataObj.parentalChildInfoEntity.childName}}</span>&nbsp;&nbsp;<span>{{dataObj.parentalChildInfoEntity.parentalPhone}}</span>
                </div>
               <div>
                   <span>性别：</span><span class="mg-r">{{dataObj.parentalChildInfoEntity.childGender}}</span>
                   <span>练琴等级：</span><span class="mg-r">{{dataObj.parentalChildInfoEntity.grade}}</span>
                   <span>意向度：</span><span class="mg-r">{{dataObj.clueSubjectEntity.intentionality}}</span>
                   <span>线索来源：</span><span class="mg-r">{{dataObj.channelInfoEntity.name}}</span>
               </div>
                <div class="call-phone" @click="callPhone">
                    <i class="el-icon-phone"></i> &nbsp;拨打
                </div>
            </div>
            <div class="close" @click="closeDetail">
                <i class="el-icon-circle-close"></i>
            </div>
        </div>
        <div class="bottom">
            <el-tabs class="tab_box" v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="基本信息" name="first">
                    <firstCom :tabName="activeName"></firstCom>
                </el-tab-pane>
                <el-tab-pane label="沟通记录（2）" name="second">
                    <secondCom :tabName="activeName"></secondCom>
                </el-tab-pane>
                <el-tab-pane label="课程记录（2）" name="third">
                    <thirdCom :tabName="activeName"></thirdCom>
                </el-tab-pane>
                <el-tab-pane label="订单记录（2）" name="fourth">
                    <fourCom :tabName="activeName"></fourCom>
                </el-tab-pane>
                <el-tab-pane label="赠课记录（2）" name="fifth">
                    <fiveCom :tabName="activeName"></fiveCom>
                </el-tab-pane>
                <el-tab-pane label="电联语音（2）" name="sixth">
                    <sixCom :tabName="activeName"></sixCom>
                </el-tab-pane>
                <el-tab-pane label="操作日志（2）" name="seventh">
                    <sevenCom :tabName="activeName"></sevenCom>
                </el-tab-pane>
                <el-tab-pane label="来源记录（2）" name="eighth">
                    <eightCom :tabName="activeName"></eightCom>
                </el-tab-pane>
            </el-tabs>
            <!--<clueAForm :clueAData="clueAData"></clueAForm>-->
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import firstCom from '@/components/clue_detail/first'
    import secondCom from '@/components/clue_detail/second'
    import thirdCom from '@/components/clue_detail/third'
    import fourCom from '@/components/clue_detail/four'
    import fiveCom from '@/components/clue_detail/five'
    import sixCom from '@/components/clue_detail/six'
    import sevenCom from '@/components/clue_detail/seven'
    import eightCom from '@/components/clue_detail/eight'
    import axios from 'axios'
    import fetcher from '@/fetchers/account/clue/clue'
    export default {
        data(){
            return {
                activeName:'first',
                dataObj:{
                    channelInfoEntity:{},
                    clueSubjectEntity:{},
                    parentalChildInfoEntity:{}
                }
            }
        },
        components:{
            firstCom,secondCom,thirdCom,fourCom,fiveCom,sixCom,sevenCom,eightCom
        },
        methods:{
            closeDetail(){
                history.back();
            },
            handleClick(tab,event){
                this.activeName = tab.name;
            },
            callPhone(){
                axios.get('/crm-call/outCall',{params:{FromExten:'1006',Exten:'18910420795'}}).then((response)=>{
                    console.log('sss')
                    this.$message('已发起通话，请稍后！')
                })
            },
            load(){
                console.log(this.$route)
                fetcher.details(this.$route.params.id,(response)=>{
                    this.dataObj = response.data.data;
                    console.log(this.dataObj)

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
        position: relative;
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
        color:#666666;
    }
    .top .distributor_box .call-phone{
        position: absolute;
        top:20px;
        right:20px;
        display: inline-block;
        border:1px solid #6AC230;
        color:#6AC230;
        font-size: 12px;
        padding: 5px 15px;
        border-radius: 50px;
        cursor: pointer;
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
