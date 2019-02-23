<template>
    <el-dialog title="取消体验课" :visible="visiableBar" @close='closeDialog'>
        <el-form :model="form" label-position="left" class="form-class">



            <el-form-item label="取消原因" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option v-for="(val,key) in cancel_experience_klass_reasons" :label="val" :key="key" :value="val"></el-option>
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
                cancel_experience_klass_reasons:meta.cancel_experience_klass_reasons,
                dialogFormVisible:false,
                formLabelWidth: '80px',

                form:{
                    discardReason:0,
                    batchReasion:0,
                    team_id:0,
                    zu_id:0,
                    cc_id:0,
                },

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
