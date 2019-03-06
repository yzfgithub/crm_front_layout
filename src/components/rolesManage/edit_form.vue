<template>
    <el-form ref="form" :model="employeeForm" label-width="120px" :rules="rules">
        <el-form-item label="名称" prop="name">
            <el-input style="width: 200px;" v-model="employeeForm.name"></el-input>
        </el-form-item>
        <el-form-item label="显示名" prop="showName">
            <el-input style="width: 200px;" v-model="employeeForm.showName"></el-input>
        </el-form-item>
        <el-form-item label="描述">
            <el-input style="width: 200px;" v-model="employeeForm.desc"></el-input>
        </el-form-item>
        <el-form-item label="角色权限">
            <el-checkbox-group
                    v-model="employeeForm.permissions">
                <el-checkbox v-for="item in permission_list" :label="item.id" :key="item.id" :value="item">{{item.permissionName}}</el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button @click="cancel">取消</el-button>
        </el-form-item>
    </el-form>
</template>
<script type="text/ecmascript-6">
    export default {
        props:{
            employeeForm:{
                type:Object,
                require:true,
            },
            permission_list:{
                type:Array,
                require:true,
            }
        },
        data(){
            return{
                rules:{
                    name:[
                        { required: true, message: '请输入角色名称', trigger: 'blur' },
                    ],
                    showName:[
                        { required: true, message: '请输入角色显示名', trigger: 'blur' },
                    ]
                }
            }
        },
        methods:{
            cancel(){
                history.back();
            },
            onSubmit(){
                this.$refs['form'].validate((valid) => {
                    if (valid) {
                        this.$emit('onSubmit')
                    } else {
                        return false;
                    }
                });
            }
        }
    }
</script>
<style type="css">

</style>
