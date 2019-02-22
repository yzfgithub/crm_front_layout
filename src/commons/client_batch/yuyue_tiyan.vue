<template>
    <el-dialog :title="title_dailog" :visible="visiableBar" @close='closeDialog'>
        <el-form :model="form" label-position="left" class="form-class">


            <el-form-item label="科目" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="上课日期">
                <el-date-picker
                        v-model="form.reservations_date"
                        type="date"
                        placeholder="请选择日期"
                        value-format='yyyy-MM-dd'>
                </el-date-picker>
            </el-form-item>
            <el-form-item label="上课时间">
                <el-select v-model="form.reservations_time" placeholder="请选择开始时间">
                    <el-option v-for="(val, key) in training_time" :label='val' :key="key" :value='parseInt(key)'></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="教师性别">
                <el-radio v-model="form.region" label="1">无</el-radio>
                <el-radio v-model="form.region" label="2">男</el-radio>
                <el-radio v-model="form.region" label="2">女</el-radio>
            </el-form-item>

            <el-form-item>
                <el-checkbox-group
                        v-model="form.region"
                        :min="1"
                        :max="2">
                    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                </el-checkbox-group>
            </el-form-item>

            <el-form-item label="教师风格">
                <el-radio v-model="form.region" label="1">无</el-radio>
                <el-radio v-model="form.region" label="2">严肃</el-radio>
                <el-radio v-model="form.region" label="2">温柔</el-radio>
            </el-form-item>

            <el-form-item>
                <el-input v-model="form.region" placeholder="请输入内容"></el-input>
            </el-form-item>

        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click='closeDialog'>取 消</el-button>
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

                form:{
                    discardReason:0,
                    batchReasion:0,
                    team_id:0,
                    zu_id:0,
                    cc_id:0,
                },
                training_time:[],
                cities:['AAA','BBB','CCC']
            }
        },
        methods:{
            submitOperate(){
                this.$emit('close')
            },
            closeDialog(){
                this.$emit('close')
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
