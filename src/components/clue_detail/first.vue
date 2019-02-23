<template>
    <div class="first_box">
        <myTab class="first_tab" :title="'家长信息'">
            <span class="key">家长姓名：</span><span class="val">{{dataObj.parentalChildInfoEntity.parental_name}}</span> &nbsp;&nbsp;&nbsp;
            <span class="key">家长手机：</span><span class="val">{{dataObj.parentalChildInfoEntity.parental_phone}}</span>&nbsp;&nbsp;&nbsp;
            <span class="key">家长微信：</span><span class="val">{{dataObj.parentalChildInfoEntity.parental_weixin}}</span>&nbsp;&nbsp;&nbsp;
            <span class="key">省、市、区：</span><span class="val">{{dataObj.parentalChildInfoEntity.province}} {{dataObj.parentalChildInfoEntity.city}} {{dataObj.parentalChildInfoEntity.area}}</span>
        </myTab>
        <myTab class="first_tab" :title="'学生信息'">
            <span class="key">性别：</span><span class="val">{{dataObj.parentalChildInfoEntity.child_gender}}</span> &nbsp;&nbsp;&nbsp;
            <span class="key">年龄：</span><span class="val">{{dataObj.parentalChildInfoEntity.child_age}}</span>&nbsp;&nbsp;&nbsp;
            <span class="key">琴龄：</span><span class="val">{{dataObj.parentalChildInfoEntity.child_piano_age}}</span>&nbsp;&nbsp;&nbsp;
            <span class="key">计划等级：</span><span class="val">{{dataObj.parentalChildInfoEntity.grading_test}}</span>&nbsp;&nbsp;&nbsp;
            <span class="key">考级教材：</span><span class="val">{{dataObj.parentalChildInfoEntity.teaching_material}}</span>&nbsp;&nbsp;&nbsp;
            <span class="key">备注：</span><span class="val">{{dataObj.parentalChildInfoEntity.remark}}</span>
        </myTab>
        <myTab class="first_tab" :title="'练琴信息'">
            <span class="key">错音：</span><span class="val">{{dataObj.parentalChildInfoEntity.remark}}</span> &nbsp;&nbsp;&nbsp;
            <span class="key">节奏：</span><span class="val">{{dataObj.parentalChildInfoEntity.remark}}</span>&nbsp;&nbsp;&nbsp;
            <span class="key">识谱：</span><span class="val">{{dataObj.parentalChildInfoEntity.remark}}</span>&nbsp;&nbsp;&nbsp;
            <span class="key">手型：</span><span class="val">{{dataObj.parentalChildInfoEntity.remark}}</span>&nbsp;&nbsp;&nbsp;
            <span class="key">兴趣：</span><span class="val">{{dataObj.parentalChildInfoEntity.remark}}</span>&nbsp;&nbsp;&nbsp;
            <span class="key">连贯性：</span><span class="val">{{dataObj.parentalChildInfoEntity.remark}}</span>&nbsp;&nbsp;&nbsp;
            <span class="key">指法：</span><span class="val">{{dataObj.parentalChildInfoEntity.remark}}</span>
        </myTab>
        <myTab class="first_tab" :title="'线索信息'">
            <span class="key">来源：</span><span class="val">{{dataObj.channelInfoEntity.name}}</span> &nbsp;&nbsp;&nbsp;
            <span class="key">状态：</span><span class="val">{{dataObj.clueSubjectEntity.status}}</span>&nbsp;&nbsp;&nbsp;
            <span class="key">注册时间：</span><span class="val">{{dataObj.clueSubjectEntity.registeredTime}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <!--<span class="key">预约体验课时间：</span><span class="val">{{dataObj.clueSubjectEntity.remark}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-->
            <span class="key">创建时间：</span><span class="val">{{dataObj.clueSubjectEntity.createdTime}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="key">最新修改时间：</span><span class="val">{{dataObj.clueSubjectEntity.lastUpdatedTime}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="key">搁置时长：</span><span class="val">{{delayTime(dataObj.clueSubjectEntity.lastUpdatedTime)}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <!--<span class="key">客户归属人：</span><span class="val">{{dataObj.parentalChildInfoEntity.remark}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-->
            <!--<span class="key">所属公海：</span><span class="val">{{dataObj.parentalChildInfoEntity.remark}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-->
            <span class="key">意向度：</span><span class="val">{{dataObj.clueSubjectEntity.intentionality}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="key">有效/接通/拨打：</span><span class="val">{{dataObj.clueSubjectEntity.validNum}}/{{dataObj.clueSubjectEntity.connectedNum}}/{{dataObj.clueSubjectEntity.dialledNum}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="key">回滚次数：</span><span class="val">{{dataObj.clueSubjectEntity.rollBackNum}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="key">市场线索反馈：</span><span class="val">{{dataObj.clueSubjectEntity.feedback}}</span>
        </myTab>
    </div>
</template>
<script type="text/ecmascript-6">
    import myTab from '@/commons/myTab/tab'
    import fetcher from '@/fetchers/account/clue/clue'
    import moment from 'moment'
    export default {
        props:{
            tabName:{
                type:String,
                require:true
            }
        },
        data(){
            return{
                dataObj:{
                    channelInfoEntity:{},
                    clueSubjectEntity:{},
                    parentalChildInfoEntity:{}
                }
            }
        },
        watch:{
            tabName:{
                handler(val,oldVal){
                    if(val!=oldVal && val == 'first'){
                        this.load();
                    }
                }
            }
        },
        components:{
            myTab
        },
        methods:{
            delayTime(val){
                let hour =parseInt(moment().diff(moment(val))/(1000*60*60));
                if(hour/24>0){
                    return Math.floor(hour/24)+'天 '+hour%24+'小时'
                }else{
                    return hour%24+'小时'
                }
            },
            load(){
                console.log(this.$route)
                fetcher.details(this.$route.params.id,(response)=>{
                    this.dataObj = response.data.data;

                })
            },
        },
        mounted(){
            this.load();
        }
    }
</script>
<style lang="css" scoped>
    .key{
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(155,155,157,1);
        line-height:14px;
    }
    .val{
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height:14px;
    }
    .first_box{
        padding-bottom: 20px;
    }
    .first_tab{
        border:1px solid rgba(239,243,245,1);
        border-bottom-width: 0;
    }
    .first_box .first_tab:last-of-type
    {
        border-bottom-width: 1px;
    }
</style>
