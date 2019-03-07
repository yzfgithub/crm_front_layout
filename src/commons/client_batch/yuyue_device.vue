<template>
    <el-dialog title="预约设备检测课" :visible="visiableBar" @close='closeDialog'>
        <el-form :model="form" label-position="left" class="form-class">


            <el-form-item label="科目" :label-width="formLabelWidth">
                <el-select v-model="form.course" placeholder="请选择科目">
                    <el-option v-for="(val,key) in subjects" :label="val" :key="key" :value="val"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="上课日期">
                <el-date-picker
                        v-model="form.dateStr"
                        type="date"
                        placeholder="选择上课日期"
                        value-format='yyyy-MM-dd'>
                </el-date-picker>
            </el-form-item>
            <el-form-item label="上课时间">
                <el-time-select
                        v-model="form.timeStr"
                        :picker-options="{
                        start: '06:00',
                        step: '00:30',
                        end: '23:30'
                      }"
                        placeholder="选择时间">
                </el-time-select>

            </el-form-item>


        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click='closeDialog'>取 消</el-button>
            <el-button type="primary" @click="submitOperate">确 定</el-button>
        </div>
    </el-dialog>
</template>
<script type="text/ecmascript-6">
    import metaObj from '@/utils/meta'
    import fetcher from "@/fetchers/account/client/client";
    export default {
        props:{
            visiableBar:{
                type:Boolean,
                require:true,
            },
            multipleSelectionIds:{
                type:Array,
                require:true,
            }
        },
        data(){
            return{
                subjects:metaObj.subjects,
                dialogFormVisible:false,
                formLabelWidth: '80px',
                dialog_training:true,
                form:{
                    course:'',
                },
                training_time:[]
            }
        },
        methods:{
            submitOperate(){
                let clueId = this.multipleSelectionIds[0];
                fetcher.edit_yuyue_device(Object.assign(this.form,{clueId:clueId}),(response)=>{
                    if(response.data.code==100000){
                        this.$message.success('赠课成功')
                        this.$emit('close')
                    }
                })
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
