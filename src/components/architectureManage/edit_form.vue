<template>
    <el-form ref="form" :model="employeeForm" label-width="120px">

        <el-form-item label="团队类型">
            <el-select v-model="employeeForm.region" placeholder="请选择活动区域">
                <el-option label="部门" value="shanghai"></el-option>
                <el-option label="团队" value="shanghai"></el-option>
                <el-option label="小组" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="小组名称">
            <el-input style="width: 200px;" v-model="employeeForm.name"></el-input>
        </el-form-item>
        <el-form-item label="部门名称">
            <el-select v-model="employeeForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="团队名称">
            <el-select v-model="employeeForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>
<script type="text/ecmascript-6">
    export default {
        props:{
            employeeForm:{
                type:Object,
                require:true,
            }
        },
        data(){
            return{
                checkedCities1: ['上海', '北京'],
                cities: ['上海', '北京', '广州', '深圳'],
            }
        },
        methods:{
            onSubmit(){
                this.$emit('onSubmit')
            }
        }
    }
</script>
<style type="css">

</style>
