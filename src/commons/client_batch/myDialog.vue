<template>
    <el-dialog :title="title_dailog" :visible.sync="visiableBar">
        <el-form :model="form" label-position="left" class="form-class">


            <el-form-item v-if="dialogType ==='yuyue_device'" label="科目" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="上课日期"  v-if="dialogType ==='yuyue_device'">
                <el-date-picker
                        v-model="form.reservations_date"
                        type="date"
                        placeholder="请选择日期"
                        value-format='yyyy-MM-dd'>
                </el-date-picker>
            </el-form-item>
            <el-form-item label="上课时间"  v-if="dialogType ==='yuyue_device'">
                <el-select v-model="form.reservations_time" placeholder="请选择开始时间">
                    <el-option v-for="(val, key) in training_time" :label='val' :key="key" :value='parseInt(key)'></el-option>
                </el-select>
            </el-form-item>


            <el-form-item v-if="dialogType ==='yuyue_tiyan'" label="科目" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="上课日期"  v-if="dialogType ==='yuyue_tiyan'">
                <el-date-picker
                        v-model="form.reservations_date"
                        type="date"
                        placeholder="请选择日期"
                        value-format='yyyy-MM-dd'>
                </el-date-picker>
            </el-form-item>
            <el-form-item label="上课时间"  v-if="dialogType ==='yuyue_tiyan'">
                <el-select v-model="form.reservations_time" placeholder="请选择开始时间">
                    <el-option v-for="(val, key) in training_time" :label='val' :key="key" :value='parseInt(key)'></el-option>
                </el-select>
            </el-form-item>



            <el-form-item v-if="dialogType ==='batch'" label="确认领取并分配该部分线索？分配后将进入CC个人【待跟进】私池">
                <!--<span>确认领取并分配该部分线索？分配后将进入CC个人【待跟进】私池</span>-->
            </el-form-item>
            <el-form-item v-if="dialogType ==='batch'" label="领取原因" :label-width="formLabelWidth">
                <el-select v-if = 'dialog_training' v-model="form.batchReasion_id" placeholder="请选择领取原因">
                    <el-option v-for="(val, key) in batchReasion_list" :label="val.name" :value="parseInt(val.id)" :key="key"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item v-if="dialogType ==='batch'" label="分配给" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>







            <el-form-item v-if="dialogType ==='discard'">
                <span>确认废弃该部分线索？废弃后将进入【Z类公海池】</span>
            </el-form-item>
            <el-form-item v-if="dialogType=='discard'" label="废弃原因" :label-width="formLabelWidth">
                <el-select v-model="form.discardReason_id" placeholder="请选择废弃原因">
                    <el-option v-for="(val, key) in discardReason_list" :label="val.name" :value="parseInt(val.id)" :key="key"></el-option>
                </el-select>
            </el-form-item>


            <el-form-item v-if="dialogType ==='rollback'">
                <span>确认回滚该部分线索？回滚后线索将进入原属公海</span>
            </el-form-item>

        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="submitOperate">确 定</el-button>
        </div>
    </el-dialog>
</template>
<script type="text/ecmascript-6">
    export default {
        props:{
            visiableBar:{
                type:Boolean,
                require:true,
            },
            dialogType:{
                type:String,
                require:true,
            },
            title_dailog:{
                type:String,
                require:true,
            }
        },
        data(){
            return{
                dialogFormVisible:false,
                formLabelWidth: '80px',
                dialog_training:true,
                form:{
                    discardReason:0,
                    batchReasion:0,
                    team_id:0,
                    zu_id:0,
                    cc_id:0,
                },
                batchReasion_list:[{name:'1'},{name:'2'}],
                discardReason_list:[{name:'1'},{name:'2'}]
            }
        },
        methods:{
            submitOperate(){
                if(this.dialogType=='batch'){
                    //领取分配

                    this.dialogFormVisible=false;
                }else if(this.dialogType=='discard'){
                    //废弃

                    this.dialogFormVisible=false;
                }else if(this.dialogType=='discard'){
                    //回滚

                    this.dialogFormVisible=false;
                }else{
                    console.log('error')
                }
            },
        },
        mounted(){

        }
    }
</script>
<style lang="css">
    .form-class{
        margin-left: 10%;
    }
</style>
