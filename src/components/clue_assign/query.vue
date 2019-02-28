<template>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">

        <el-form-item label="线索标签">
            <el-select v-model="formInline.region" placeholder="请选择线索标签">
                <el-option label="全部" value="" key=""></el-option>
                <el-option v-for="(val,key) in clue_labels" :label="val" :key="key" :value="val"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="生效状态">
            <el-select v-model="formInline.region" placeholder="请选择生效状态">
                <el-option label="全部" value="" key=""></el-option>
                <el-option v-for="(val,key) in effective_status" :label="val" :key="key" :value="val"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>

        <el-form-item class="new_create">
            <el-button type="success" @click = 'createEmployee'>新建团队</el-button>
        </el-form-item>
    </el-form>
</template>
<script type="text/ecmascript-6">
    import meta from '@/utils/meta'
    export default {
        props:{
            clueAForm:{
                type:Object,
                require:true,
            }
        },
        data() {
            return {
                clue_labels:meta.clue_labels,
                effective_status:meta.effective_status,
                formInline: {

                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            createEmployee(){
               this.$emit('openEdit')
            }
        }
    }
</script>
<style type="css">
    .new_create{
        float: right;
    }
</style>
