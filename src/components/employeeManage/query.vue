<template>
    <el-form :inline="true" :model="queryForm" class="demo-form-inline">
        <el-form-item label="员工">
            <el-input v-model="queryForm.name"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>

    </el-form>
</template>
<script>
    export default {
        props:{
            queryForm:{
                type:Object,
                require:true,
            }
        },
        data() {
            return {
                formInline: {
                    user: '',
                    region: ''
                }
            }
        },
        methods: {
            onSubmit() {
                this.$emit('onSubmit')
            },
        }
    }
</script>
<style lang="css">
    .new_create{
        float: right;
    }
</style>
