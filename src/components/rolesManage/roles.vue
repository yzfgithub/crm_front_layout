<template>
    <table class="table">
        <tr>
            <td>角色名称</td><td>{{dataObj.name}}</td>
        </tr>
        <tr>
            <td>角色显示名</td><td>{{dataObj.showName}}</td>
        </tr>
        <tr>
            <td>描述</td><td>{{dataObj.desc}}</td>
        </tr>
        <tr>
            <td>角色权限</td><td> <el-button class="btn" :key="key" v-for="(item,key) in dataObj.permissions" type="success" disabled>{{item.permissionName}}</el-button> </td>
        </tr>
    </table>
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

            }
        },
        methods:{

        }
    }
</script>
<style type="css" scoped>
    .table{
        /*width: 500px !important;*/
        /*min-height: 500px !important;*/
        margin-bottom: 1rem;
        background-color: transparent;
        border-collapse: collapse
        /*display: table;*/
        /*border-collapse: separate;*/
        /*border-spacing: 2px;*/
        /*border-color: grey*/
    }
    .table tr td{
        /*border-top: 1px solid #dee2e6;*/
        /*border-bottom: 1px solid #dee2e6;*/
        height: 34px;
        line-height: 50px;
    }
    .table tr td:first-child{
        width: 100px;
    }
    .btn{
        margin: 5px;
    }
</style>
