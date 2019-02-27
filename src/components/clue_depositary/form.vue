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
                        label="销售中心"
                >
                    <template slot-scope="scope">
                        <span @click="pathTo(scope.row.id)">{{scope.row.name}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="mobile"
                        label="销售团队"
                >
                </el-table-column>
                <el-table-column
                        prop="province"
                        label="销售小组"
                >
                </el-table-column>
                <el-table-column
                        prop="province"
                        label="CC"
                >
                </el-table-column>
                <el-table-column
                        prop="created_at"
                        label="库容配额"
                >
                </el-table-column>
                <el-table-column
                        prop="created_at"
                        label="已占库存"
                >
                </el-table-column>
                <el-table-column
                        prop="updated_at"
                        label="操作"
                >
                    <template slot-scope="scope">
                        <a href="javascript:void(0);" @click="edit(scope.row.id)">编辑</a>
                    </template>
                </el-table-column>
            </el-table>

            <el-pagination class="page" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
            </el-pagination>
        </div>

        <el-dialog title="渠道组编辑" :visible.sync="defaultFormVisiable">
            <el-form :model="form" label-position="left" class="form-class" :inline="true">

                <el-form-item label="库容编辑" :label-width="formLabelWidth">
                    <el-input-number v-model="input" @change="handleChange" label="库容配额"></el-input-number>
                </el-form-item>


            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click='defaultFormVisiable=false'>取 消</el-button>
                <el-button type="primary" @click="onSubmit">确 定</el-button>
            </div>
        </el-dialog>

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
                currentPage4: 4,

                defaultFormVisiable:false,
                formLabelWidth: '80px',
                form:{
                    discardReason:0,
                    batchReasion:0,
                    team_id:0,
                    zu_id:0,
                    cc_id:0,
                },
            }
        },
        methods:{
            onSubmit(){
                console.log('ok')
                this.defaultFormVisiable=false;
            },
            edit(id){
                this.defaultFormVisiable=true
            },
            tableHeaderColor(){
                return 'background-color:#EFF3F5;height:40px;'
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
