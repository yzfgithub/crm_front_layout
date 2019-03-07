<template>
    <el-form ref="form" :model="employeeForm" label-width="120px">
        <el-form-item label="登录名（账号）">
            <el-input style="width: 200px;" v-model="employeeForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
            <el-input style="width: 200px;" v-model="employeeForm.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
            <el-input style="width: 200px;" v-model="employeeForm.name"></el-input>
        </el-form-item>
        <el-form-item label="用户角色">
            <el-checkbox-group
                    v-model="employeeForm.roles">
                <el-checkbox v-for="city in roleList" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="员工状态">
            <el-select v-model="employeeForm.region" placeholder="请选择活动区域">
                <el-option v-for="(item,key) in employee_status" :label="val" :value="val" :key="key"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>
<script type="text/ecmascript-6">
    import metaObj from '@/utils/meta'
    export default {
        props:{
            employeeForm:{
                type:Object,
                require:true,
            },
            roleList:{
                type:Array,
                require:true,
            }
        },
        data(){
            return{
                employee_status:metaObj.employee_status,
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
