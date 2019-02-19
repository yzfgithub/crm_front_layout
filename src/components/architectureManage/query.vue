<template>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="销售中心">
            <el-select v-model="formInline.region" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="销售团队">
            <el-select v-model="formInline.region" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="销售小组">
            <el-select v-model="formInline.region" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
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
                console.log('submit!');
            },
            createEmployee(){
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
