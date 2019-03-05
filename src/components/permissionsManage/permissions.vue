<template>
    <table class="table">
        <tr>
            <td>权限名称</td><td>{{dataObj.permissionName}}</td>
        </tr>
        <tr>
            <td>权限描述</td><td>{{dataObj.permissionDesc}}</td>
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
        width: 500px !important;
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
</style>
