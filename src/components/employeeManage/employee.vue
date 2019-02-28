<template>
    <table class="table">
        <tr>
            <td>学生姓名</td><td>yzf</td>
        </tr>
        <tr>
            <td>学生手机</td><td>yzf</td>
        </tr>
        <tr>
            <td>销售</td><td>yzf</td>
        </tr>
        <tr>
            <td>产品名称</td><td>yzf</td>
        </tr>
        <tr>
            <td>订单金额(单位元)</td><td>yzf</td>
        </tr>
        <tr>
            <td>折扣金额(单位元)</td><td>yzf</td>
        </tr>
        <tr>
            <td>状态</td><td>yzf</td>
        </tr>
    </table>
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

        }
    }
</script>
<style type="css" scoped>
    .table{
        width: 300px !important;
        min-height: 500px !important;
        max-width: 100%;
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
