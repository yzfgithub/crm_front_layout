<template>
    <el-dialog title="取消设备检测课" :visible="visiableBar" @close='closeDialog'>
        <el-form :model="form" label-position="left" class="form-class">

            <el-form-item label="取消原因" :label-width="formLabelWidth">
                <el-select v-model="form.cancelCause" placeholder="请选择取消原因">
                    <el-option v-for="(val,key) in cancel_device_klass_reasons" :label="val" :key="key" :value="val"></el-option>
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
    import metaObj from '@/utils/meta';
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
                cancel_device_klass_reasons:metaObj.cancel_device_klass_reasons,
                formLabelWidth: '80px',

                form:{
                    cancelCause:''
                },

            }
        },
        methods:{
            submitOperate(){
                let clueId = this.multipleSelectionIds[0];
                fetcher.edit_quxiao_device(Object.assign(this.form,{clueId:clueId}),(response)=>{
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
