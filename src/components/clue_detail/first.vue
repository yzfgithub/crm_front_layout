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
            <span class="key">错音问题,</span>
            <span class="key">&nbsp;节奏问题,</span>
            <span class="key">&nbsp;识谱问题,</span>
            <span class="key">&nbsp;手型问题,</span>
            <span class="key">&nbsp;兴趣问题,</span>
            <span class="key">&nbsp;连贯性问题,</span>
            <span class="key">&nbsp;指法问题</span>
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
        <div class="edit-btn" @click="openEdit">
            <el-button type="primary">编辑信息 <i class="el-icon-edit"></i></el-button>
        </div>


        <el-dialog title="完善客户基本信息" :visible.sync="editVisible">
            <el-form label-position="left" class="form-class" :model="form">
                <el-form-item label="市场线索反馈" :label-width="formLabelWidth">
                    <el-select v-model="form.market_feedback" placeholder="请选择市场线索反馈">
                        <el-option v-for="(val, key) in market_feedback" :label="val" :value="val" :key="key"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="异业合作反馈" :label-width="formLabelWidth">
                    <el-select v-model="form.bussiness_feedback" placeholder="请选择异业合作反馈">
                        <el-option v-for="(val, key) in bussiness_feedback" :label="val" :value="val" :key="key"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="意向度" :label-width="formLabelWidth">
                    <el-select v-model="form.intentionality" placeholder="请选择取消原因">
                        <el-option v-for="(val, key) in intentionality" :label="val" :value="val" :key="key"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="家长姓名" :label-width="formLabelWidth">
                    <el-input style="width: 194px;" v-model="form.parentName" placeholder="请输入家长姓名"></el-input>
                </el-form-item>
                <el-form-item label="家长手机号" :label-width="formLabelWidth">
                    <el-input style="width: 194px;" v-model="form.parentPhone" placeholder="请输入家长手机号"></el-input>
                </el-form-item>
                <el-form-item label="家长微信号" :label-width="formLabelWidth">
                    <el-input style="width: 194px;" v-model="form.parentWechat" placeholder="请输入家长微信号"></el-input>
                </el-form-item>
                <el-form-item label="学生姓名" :label-width="formLabelWidth">
                    <el-input style="width: 194px;" v-model="form.childName" placeholder="请输入学生姓名"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" :label-width="formLabelWidth">
                    <el-input style="width: 194px;" v-model="form.phone" placeholder="请输入联系电话"></el-input>
                </el-form-item>
                <el-form-item label="性别" :label-width="formLabelWidth">
                    <el-select v-model="form.sex" placeholder="请选择性别">
                        <el-option v-for="(val, key) in sex" :label="val" :value="val" :key="key"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="年龄" :label-width="formLabelWidth">
                    <el-date-picker
                            v-model="form.value1"
                            type="date"
                            style="width: 194px"
                            placeholder="请选择出生日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="琴龄" :label-width="formLabelWidth">
                    <el-select v-model="form.learning_time" placeholder="请选择琴龄">
                        <el-option v-for="(val, key) in learning_time" :label="val" :value="val" :key="key"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="计划考级" :label-width="formLabelWidth">
                    <el-select v-model="form.planning_examination" placeholder="请选择计划考级">
                        <el-option v-for="(val, key) in planning_examination" :label="val" :value="val" :key="key"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="考级教材" :label-width="formLabelWidth">
                    <el-select v-model="form.exam_material" placeholder="请选择考级教材">
                        <el-option v-for="(val, key) in exam_material" :label="val" :value="val" :key="key"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="练琴问题" :label-width="formLabelWidth">
                    <el-select v-model="form.piano_practice_problem" placeholder="请选择练琴问题">
                        <el-option v-for="(val, key) in piano_practice_problem" :label="val" :value="val" :key="key"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="备注" :label-width="formLabelWidth">
                    <el-input v-model="form.remark" placeholder="填写备注"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click='cancelOrderDialog = false'>取 消</el-button>
                <el-button type="primary" @click="submitCancelOrder">确 定</el-button>
            </div>
        </el-dialog>



    </div>
</template>
<script type="text/ecmascript-6">
    import myTab from '@/commons/myTab/tab'
    import meta from '@/utils/meta'
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
                market_feedback:meta.market_feedback,
                bussiness_feedback:meta.bussiness_feedback,
                intentionality:meta.intentionality,
                sex:meta.sex,
                learning_time:meta.learning_time,
                planning_examination:meta.planning_examination,
                exam_material:meta.exam_material,
                piano_practice_problem:meta.piano_practice_problem,
                dataObj:{
                    channelInfoEntity:{},
                    clueSubjectEntity:{},
                    parentalChildInfoEntity:{}
                },

                editVisible:false,
                formLabelWidth: '100px',
                form:{},
            }
        },
        watch:{
            tabName:{
                handler(val,oldVal){
                    if(val!=oldVal && val == 'first'){
                        // this.load();
                    }
                }
            }
        },
        components:{
            myTab
        },
        methods:{
            openEdit(){
                this.editVisible=true;
            },
            submitCancelOrder(){
                console.log('提交修改')
                this.editVisible=false;
            },

            delayTime(val){
                let hour =parseInt(moment().diff(moment(val))/(1000*60*60));
                if(hour/24>0){
                    return Math.floor(hour/24)+'天 '+hour%24+'小时'
                }else{
                    return hour%24+'小时'
                }
            },
            load(){
                fetcher.details(this.$route.params.id,(response)=>{
                    this.dataObj = response.data.data;

                })
            },
        },
        mounted(){
            // this.load();
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
        position: relative;
    }
    .first_box .edit-btn{
        position: absolute;
        right: 10px;
        top:20px;
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
