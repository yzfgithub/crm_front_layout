<template>
    <el-form ref="form" :model="dataObj" label-width="120px" :rules="rules" >
        <el-form-item label="权限名称" prop="permissionName">
            <el-input style="width: 200px;" v-model="dataObj.permissionName"></el-input>
        </el-form-item>
        <el-form-item label="权限显示名" prop="permissionDesc">
            <el-input style="width: 200px;" v-model="dataObj.permissionDesc"></el-input>
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
            dataObj:{
                type:Object,
                require:true,
            }
        },
        data(){
            return{
                rules:{
                    permissionName:[
                        { required: true, message: '请输入权限名称', trigger: 'blur' },
                    ],
                    permissionDesc:[
                        { required: true, message: '请输入权限显示名', trigger: 'blur' },
                    ]
                }
            }
        },
        methods:{
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
