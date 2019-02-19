<template>
    <div>
        <div class="bottom">
            <el-tabs class="tab_box" v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="线索排名" name="first">
                    <clueRank></clueRank>
                </el-tab-pane>
                <el-tab-pane label="线索分配" name="second">
                    <clueAssign></clueAssign>
                </el-tab-pane>
                <el-tab-pane label="销售排班" name="third">
                    <clueSchedule></clueSchedule>
                </el-tab-pane>
                <el-tab-pane label="私池库容" name="fourth">
                    <clueDepositary></clueDepositary>
                </el-tab-pane>
            </el-tabs>
            <!--<clueAForm :clueAData="clueAData"></clueAForm>-->
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import clueRank from './clue_rank'
    import clueAssign from './clue_assign'
    import clueSchedule from './clue_schedule'
    import clueDepositary from './clue_depositary'
    export default {
        data(){
            return {
                activeName:'first'
            }
        },
        components:{
            clueRank,clueAssign,clueSchedule,clueDepositary
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
    }
    .bottom .tab_box{
        margin:0 20px;
    }
</style>
