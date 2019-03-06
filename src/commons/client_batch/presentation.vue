<template>
    <el-dialog title="赠课" :visible="visiableBar" @close='closeDialog'>
        <el-form :model="form" label-position="left" class="form-class">


            <el-form-item label="赠课理由" :label-width="formLabelWidth">
                <el-select v-model="form.give_klass_reasons" placeholder="请选择赠课理由">
                    <el-option v-for="(val,key) in give_klass_reasons" :label="val" :key="key" :value="val"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="赠课数量" :label-width="formLabelWidth">
                <el-input-number v-model="form.num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
    export default {
        props:{
            visiableBar:{
                type:Boolean,
                require:true,
            },
        },
        data(){
            return{
                give_klass_reasons:metaObj.give_klass_reasons,
                dialogFormVisible:false,
                formLabelWidth: '80px',
                dialog_training:true,
                form:{
                   num:1,
                },
                batchReasion_list:[{name:'1'},{name:'2'}],
                discardReason_list:[{name:'1'},{name:'2'}]
            }
        },
        methods:{
            handleChange(value) {
                console.log(value);
            },
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
