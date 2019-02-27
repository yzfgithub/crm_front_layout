<template>
    <el-form ref="form" :model="employeeForm" label-width="120px">
        <el-form-item label="登录名（账号）">
            <el-input style="width: 200px;" v-model="employeeForm.name"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
            <el-input style="width: 200px;" v-model="employeeForm.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
            <el-input style="width: 200px;" v-model="employeeForm.name"></el-input>
        </el-form-item>
        <el-form-item label="用户角色">
            <el-checkbox-group
                    v-model="checkedCities1">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="员工状态">
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
