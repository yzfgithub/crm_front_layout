<template>
    <div>
        <div class="second_box">
            <myTab class="second_tab" :title="'王大力-1组-1队-北京-phone'">
                <span class="val">无人接听</span> &nbsp;&nbsp;&nbsp;
                <span class="val">2018-01-20 13:24</span>&nbsp;&nbsp;&nbsp;
                <span class="key">备注：</span><span class="val">备注备注备注备注备注备注</span>
            </myTab>
            <myTab class="second_tab" :title="'张铁蛋-2组-1队-北京-phone'">
                <span class="val">无人接听</span> &nbsp;&nbsp;&nbsp;
                <span class="val">2018-01-20 13:24</span>&nbsp;&nbsp;&nbsp;
                <span class="key">备注：</span><span class="val">备注备注备注备注备注备注</span>
            </myTab>
        </div>
        <el-pagination class="page" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
        </el-pagination>
    </div>
</template>
<script type="text/ecmascript-6">
    import myTab from './tab'
    export default {
        data(){
            return{
                currentPage4: 4
            }
        },
        components:{
            myTab
        },
        methods:{
            //fenye
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            pathTo(id){
                this.$router.push({path:`/account/clue_detail/${id}`});
            }
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
    .second_box{
        padding-bottom: 20px;
    }
    .second_tab{
        border:1px solid rgba(239,243,245,1);
        border-bottom-width: 0;
    }
    .second_box .second_tab:last-of-type
    {
        border-bottom-width: 1px;
    }
</style>
