<template>
    <div class="first_box">
        <myTab class="first_tab" :title="'家长信息'">
            <span class="key">家长姓名：</span><span class="val">暂无</span> &nbsp;&nbsp;&nbsp;
            <span class="key">家长手机：</span><span class="val">18872616235</span>&nbsp;&nbsp;&nbsp;
            <span class="key">家长微信：</span><span class="val">暂无</span>&nbsp;&nbsp;&nbsp;
            <span class="key">省、市、区：</span><span class="val">暂无</span>
        </myTab>
        <myTab class="first_tab" :title="'学生信息'">
            <span class="key">家长姓名：</span><span class="val">暂无</span> &nbsp;&nbsp;&nbsp;
            <span class="key">家长手机：</span><span class="val">18872616235</span>&nbsp;&nbsp;&nbsp;
            <span class="key">家长微信：</span><span class="val">暂无</span>&nbsp;&nbsp;&nbsp;
            <span class="key">省、市、区：</span><span class="val">暂无</span>
        </myTab>
        <myTab class="first_tab" :title="'练琴信息'">
            <span class="key">家长姓名：</span><span class="val">暂无</span> &nbsp;&nbsp;&nbsp;
            <span class="key">家长手机：</span><span class="val">18872616235</span>&nbsp;&nbsp;&nbsp;
            <span class="key">家长微信：</span><span class="val">暂无</span>&nbsp;&nbsp;&nbsp;
            <span class="key">省、市、区：</span><span class="val">暂无</span>
        </myTab>
        <myTab class="first_tab" :title="'线索信息'">
            <span class="key">家长姓名：</span><span class="val">暂无</span> &nbsp;&nbsp;&nbsp;
            <span class="key">家长手机：</span><span class="val">18872616235</span>&nbsp;&nbsp;&nbsp;
            <span class="key">家长微信：</span><span class="val">暂无</span>&nbsp;&nbsp;&nbsp;
            <span class="key">省、市、区：</span><span class="val">暂无</span>
        </myTab>
    </div>
</template>
<script type="text/ecmascript-6">
    import myTab from '@/commons/myTab/tab'
    export default {
        data(){
            return{

            }
        },
        components:{
            myTab
        },
        methods:{

        },
    }
</script>
<style lang="css" scoped>
    .key{
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(155,155,157,1);
        line-height:14px;
    }
    .val{
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height:14px;
    }
    .first_box{
        padding-bottom: 20px;
    }
    .first_tab{
        border:1px solid rgba(239,243,245,1);
        border-bottom-width: 0;
    }
    .first_box .first_tab:last-of-type
    {
        border-bottom-width: 1px;
    }
</style>
