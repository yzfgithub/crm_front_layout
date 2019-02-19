<template>
    <div class="my_tab_box">
        <div>
            <span class="title">{{title}}</span>
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        props:{
            title:{
                type:String,
                require:true
            }
        },
        data(){
            return{

            }
        }
    }
</script>
<style lang="css">
    .my_tab_box{
        text-align: left;
        padding: 20px 0;
    }
    .my_tab_box .title{
        position: relative;
        font-size:14px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(102,102,102,1);
        line-height:20px;
        margin-left: 20px;
        height: 20px;
    }
    .my_tab_box .title::before{
        content:'';
        width: 3px;
        height: 14px;
        background-color: orangered;
        position: absolute;
        left: -10px;
        top: 3px;
        border-radius: 3px;
    }
    .my_tab_box .content{
        padding: 10px;
    }
</style>
