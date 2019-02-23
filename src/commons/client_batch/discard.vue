<template>
    <el-dialog title="回收分配线索" :visible="visiableBar" @close='closeDialog'>
        <el-form :model="form" label-position="left" class="form-class">



            <el-form-item>
                <span>确认废弃该部分线索？废弃后将进入【Z类公海池】</span>
            </el-form-item>
            <el-form-item label="废弃原因" :label-width="formLabelWidth">
                <el-select v-model="form.discardReason_id" placeholder="请选择废弃原因">
                    <el-option v-for="(val, key) in discard_reason" :label='val' :key="key" :value='parseInt(key)'></el-option>
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
                discard_reason:meta.discard_reason,
                dialogFormVisible:false,
                formLabelWidth: '80px',
                discardReason_list:[{name:'YZF',id:2},{name:'YZF',id:2}],

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
