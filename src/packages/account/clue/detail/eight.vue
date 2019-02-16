<template>
    <div class="first_box">
        <myTab :title="'家长信息'">
            <el-steps direction="vertical" :active="1">
                <el-step title="步骤 1"></el-step>
                <el-step title="步骤 2"></el-step>
                <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
            </el-steps>
        </myTab>

    </div>
</template>
<script type="text/ecmascript-6">
    import myTab from './tab'
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
<style lang="css">
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
    .first_box .my_tab_box:last-of-type
    {
        border-bottom-width: 1px;
    }
</style>
