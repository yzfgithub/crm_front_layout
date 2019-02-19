<template>
    <div class="container">
        <div class="f_table">
            <el-table
                    ref="multipleTable"
                    :data="clueAData"
                    tooltip-effect="dark"
                    style="width: 100%;"
                    :header-cell-style="tableHeaderColor">
                <el-table-column
                        prop="name"
                        label="姓名"
                >
                    <template slot-scope="scope">
                        <span @click="pathTo(scope.row.id)">{{scope.row.name}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="mobile"
                        label="登陆名"
                >
                </el-table-column>
                <el-table-column
                        prop="province"
                        label="角色"
                >
                </el-table-column>
                <el-table-column
                        prop="province"
                        label="状态"
                >
                </el-table-column>
                <el-table-column
                        prop="created_at"
                        label="操作"
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
            },
            pathTo(id){
                this.$router.push({path:`/account/clue_detail/${id}`});
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
    .page{
        margin: 20px 0;
        text-align: right;
    }
</style>
