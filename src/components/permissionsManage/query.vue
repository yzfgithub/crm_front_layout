<template>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="权限名称">
            <el-input v-model="clueAForm.name"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>

        <el-form-item class="new_create">
            <el-button type="success" @click = 'createEmployee'>新建权限</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    export default {
        props:{
            clueAForm:{
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
                // console.log('submit!');
            },
            createEmployee(){
                this.$router.push({path:'/system/permissions/new'})
                //to add new
            }
        }
    }
</script>
<style lang="css">
    .new_create{
        float: right;
    }
</style>
