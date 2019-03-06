<template>
    <el-dialog title="回收分配线索" :visible="visiableBar" @close='closeDialog'>
        <el-form :model="form" label-position="left" class="form-class">



            <el-form-item label="回收原因" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择回收原因">
                    <el-option v-for="(val, key) in recover_reason" :label='val' :key="key" :value='parseInt(key)'></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="分配给" :label-width="formLabelWidth">
                <el-select style="margin-bottom: 10px;" v-model="form.region" placeholder="请选择团队">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                <br/>
                <el-select style="margin-bottom: 10px;" v-model="form.region" placeholder="请选择小组">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                <br/>
                <el-select v-model="form.region" placeholder="请选择CC">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
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
                recover_reason:metaObj.recover_reason,
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
