<template>
    <el-dialog title="预约体验课" :visible="visiableBar" @close='closeDialog'>
        <el-form :model="form" label-position="left" class="form-class">


            <el-form-item label="科目" :label-width="formLabelWidth">
                <el-select v-model="form.region1" placeholder="请选择科目">
                    <el-option v-for="(val,key) in subjects" :label="val" :key="key" :value="val"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="上课日期">
                <el-date-picker
                        v-model="form.reservations_date"
                        type="date"
                        placeholder="选择上课日期"
                        value-format='yyyy-MM-dd'>
                </el-date-picker>
            </el-form-item>
            <el-form-item label="上课时间">
                <el-select v-model="form.reservations_time" placeholder="选择上课时间">
                    <el-option v-for="(val, key) in training_time" :label='val' :key="key" :value='parseInt(key)'></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="教师性别">
<!--别忘了默认设置未''-->
                <el-radio v-model="form.region" label="">无</el-radio>
                <el-radio v-model="form.region" v-for="(val,key) in sex" :label="val" :value="val" :key="key"></el-radio>
            </el-form-item>

            <el-form-item label="擅长考级">
                <el-checkbox-group v-model="exam" @change="handleCheckedCitiesChange">
                    <el-checkbox v-for="(val,key) in good_at_exam" :label="val" :key="key">{{val}}</el-checkbox>
                </el-checkbox-group>
            </el-form-item>

            <el-form-item label="教师风格">
                <el-radio v-model="form.region" label="">无</el-radio>
                <el-radio v-model="form.region" v-for="(val,key) in teacher_style" :label="val" :value="val" :key="key"></el-radio>
            </el-form-item>

            <el-form-item label="孩子信息">
                <el-input v-model="form.region" placeholder="请输入内容"></el-input>
            </el-form-item>

        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click='closeDialog'>取 消</el-button>
            <el-button type="primary" @click="submitOperate">开始匹配</el-button>
        </div>
    </el-dialog>
</template>
<script type="text/ecmascript-6">
    import meta from '@/utils/meta'
    export default {
        props:{
            visiableBar:{
                type:Boolean,
                require:true,
            },
        },
        data(){
            return{
                subjects:meta.subjects,
                sex:meta.sex,
                good_at_exam:meta.good_at_exam,
                teacher_style:meta.teacher_style,
                exam:[],

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
            handleCheckedCitiesChange(val){console.log(val)},
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
