<template>
    <el-dialog title="预约设备检测课" :visible="visiableBar" @close='closeDialog'>
        <el-form :model="form" label-position="left" class="form-class">


            <el-form-item label="科目" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择科目">
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

        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click='closeDialog'>取 消</el-button>
            <el-button type="primary" @click="submitOperate">确 定</el-button>
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
            }
        },
        data(){
            return{
                subjects:meta.subjects,
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
                discardReason_list:[{name:'1'},{name:'2'}],
                training_time:[]
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
