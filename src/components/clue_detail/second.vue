<template>
        <div class="second_box">
            <myTab v-for="(item,key) in data" class="second_tab" :title="item.user+'-'+item.orgName+'-'+item.mode" :key="key">

                <audio v-if="item.mode === '电话'" :src="item.voiceUrl" controls="controls">
                </audio>
                <div>
                    <span v-if="item.mode === '电话'" class="key">外呼人：</span><span class="val">{{item.user}}</span> &nbsp;&nbsp;&nbsp;
                    <span v-if="item.mode === '电话'" class="key">开始时间：</span><span class="val">{{item.startTime}}</span>&nbsp;&nbsp;&nbsp;
                    <span v-if="item.mode === '电话'" class="key">结束时间：</span><span class="val">{{item.endTime}}</span>
                </div>
               <div>
                   <span class="val">{{item.status}}</span> &nbsp;&nbsp;&nbsp;
                   <span class="val">{{item.time}}</span>&nbsp;&nbsp;&nbsp;
                   <span class="key">备注：</span><span class="val">{{item.remark}}</span>
               </div>
            </myTab>

            <div class="edit-btn" @click="openEdit">
                <el-button type="primary">编辑信息 <i class="el-icon-edit"></i></el-button>
            </div>

            <el-dialog title="沟通记录" :visible.sync="editVisible">
                <el-form label-position="left" class="form-class"  :model="form">
                    <el-form-item label="沟通方式" :label-width="formLabelWidth">
                        <el-select v-model="form.communication_style" placeholder="请选择沟通方式">
                            <el-option v-for="(val, key) in communication_style" :label="val" :value="val" :key="key"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="沟通结果" :label-width="formLabelWidth">
                        <el-checkbox-group v-model="form.type">
                            <el-checkbox v-for="(val,key) in communication_result" :label="val" :key="key" :value="val" name="type"></el-checkbox>
                        </el-checkbox-group>
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
    import fetcher from '@/fetchers/account/clue/clue'
    import meta from '@/utils/meta'
    export default {
        props:{
            tabName:{
                type:String,
                require:true
            }
        },
        data(){
            return{
                communication_style:meta.communication_style,
                communication_result:meta.communication_result,
                currentPage4: 4,
                data:[
                    {aac_file: 'asdf',str1:'aaa',str2:'sss',str3:'ssda',status:'asd',time:'sdfa',remark:'sdf'}
                ],

                editVisible:false,
                formLabelWidth: '80px',
                form:{},
            }
        },
        watch:{
            tabName:{
                handler(val,oldVal){
                    if(val!=oldVal && val == 'second'){
                        this.load();
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
            load(){
                fetcher.getCommunicationRecord({clueSubjectId:this.$route.params.id},(response)=>{
                    if(response.data.code==100000){
                        this.data = response.data.data;
                    }
                })
            }
        },
        mounted(){
            // this.load();
        }
    }
</script>
<style lang="css" scoped>
    audio{
        width: 247px;
        height: 40px;
        margin-bottom:10px;
    }
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
    .second_box{
        padding-bottom: 20px;
        position: relative;
    }
    .second_box .edit-btn{
        position: absolute;
        right: 10px;
        top:20px;
    }
    .second_tab{
        border:1px solid rgba(239,243,245,1);
        border-bottom-width: 0;
    }
    .second_box .second_tab:last-of-type
    {
        border-bottom-width: 1px;
    }
    .second_tab div{
        margin-bottom:10px;
    }
</style>
