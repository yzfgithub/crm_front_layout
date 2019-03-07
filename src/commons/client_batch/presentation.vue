<template>
    <el-dialog title="赠课" :visible="visiableBar" @close='closeDialog'>
        <el-form :model="form" label-position="left" class="form-class">


            <el-form-item label="赠课理由" :label-width="formLabelWidth">
                <el-select v-model="form.giveReason" placeholder="请选择赠课理由">
                    <el-option v-for="(val,key) in give_klass_reasons" :label="val" :key="key" :value="val"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="赠课数量" :label-width="formLabelWidth">
                <el-input-number v-model="form.giveNum" :min="1"  label="描述文字"></el-input-number>
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
                give_klass_reasons:metaObj.give_klass_reasons,
                formLabelWidth: '80px',
                form:{
                    giveNum:1,
                    giveReason:'',
                },
            }
        },
        methods:{
            submitOperate(){
                let clueId = this.multipleSelectionIds[0];
                fetcher.edit_presentation(Object.assign(this.form,{clueId:clueId}),(response)=>{
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
