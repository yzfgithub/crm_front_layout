<template>
    <div class="container">
        <div class="f_head">
            <div>已选中 <span class="num">2</span> 项</div>
            <div> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp; <i class="el-icon-delete"></i> 领取分配</div>
            <div> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp; <i class="el-icon-delete"></i> 废弃</div>
        </div>
        <div class="f_table">
            <el-table
                    ref="multipleTable"
                    :data="clueAData"
                    tooltip-effect="dark"
                    style="width: 100%;"
                    :header-cell-style="tableHeaderColor"
                    @selection-change="handleSelectionChange">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                >
                </el-table-column>
                <el-table-column
                        prop="mobile"
                        label="手机号"
                >
                </el-table-column>
                <el-table-column
                        prop="province"
                        label="省份"
                >
                </el-table-column>
                <el-table-column
                        prop="created_at"
                        label="注册时间"
                >
                </el-table-column>
                <el-table-column
                        prop="updated_at"
                        label="最新修改时间"
                >
                </el-table-column>
                <el-table-column
                        prop="updated_for"
                        label="修改人"
                >
                </el-table-column>
                <el-table-column
                        prop="state"
                        label="有效／接通／拨打"
                >
                </el-table-column>
                <el-table-column
                        prop="delay"
                        label="搁置时间"
                >
                </el-table-column>
                <el-table-column
                        prop="rollback"
                        label="回滚次数"
                >
                </el-table-column>
                <el-table-column
                        prop="like"
                        label="意向度"
                >
                </el-table-column>

            </el-table>

            <el-pagination class="page" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
            </el-pagination>
        </div>

    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        props:{
            clueAData:{
                type:Array,
                require:true
            }
        },
        data(){
            return{
                multipleSelection: [],
                currentPage4: 4
            }
        },
        methods:{
            tableHeaderColor(){
                return 'background-color:#EFF3F5;height:40px;'
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },

            //fenye
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }

    }
</script>
<style scoped>
    .container{
        margin: 0 20px;
        padding: 20px 0;
    }
    .f_head{
        text-align: left;
        height:30px;
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(155,155,157,1);
        line-height:14px;
    }
    .f_head div{
        display: inline-block;
    }
    .f_head div .num{
        color:#F8542E;
    }
    .f_table{

    }
    .page{
        margin: 20px 0;
        text-align: right;
    }
</style>
