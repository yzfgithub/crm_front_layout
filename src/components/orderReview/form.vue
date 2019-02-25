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
                        label="学生"
                >
                    <template slot-scope="scope">
                        <span class="form-name" @click="pathTo(scope.row.id)">{{scope.row.name}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="mobile"
                        label="手机号"
                >
                </el-table-column>
                <el-table-column
                        prop="province"
                        label="产品名称"
                >
                </el-table-column>
                <el-table-column
                        prop="province"
                        label="票据图片"
                >
                    <img src="" alt="">
                </el-table-column>
                <el-table-column
                        prop="created_at"
                        label="订单总金额"
                >
                </el-table-column>
                <el-table-column
                        prop="updated_at"
                        label="折扣金额"
                >
                </el-table-column>
                <el-table-column
                        prop="updated_for"
                        label="订单金额"
                >
                </el-table-column>
                <el-table-column
                        prop="state"
                        label="创建时间"
                >
                </el-table-column>
                <el-table-column
                        prop="state"
                        label="支付时间"
                >
                </el-table-column>
                <el-table-column
                        prop="delay"
                        label="支付方式"
                >
                </el-table-column>
                <el-table-column
                        prop="rollback"
                        label="订单状态"
                >
                </el-table-column>
                <el-table-column
                        prop="rollback"
                        label="CC"
                >
                </el-table-column>
                <el-table-column
                        prop="rollback"
                        label="下单人"
                >
                </el-table-column>
                <el-table-column
                        prop="rollback"
                        label="操作"
                >
                    <template slot-scope="scope">
                        <a href="javascript:void(0);" @click="reviewOperation(scope.row.id)">审批</a>
                    </template>
                </el-table-column>

            </el-table>

            <el-pagination class="page" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
            </el-pagination>
        </div>

        <el-dialog title="订单审批" :visible.sync="dialogFormVisible">
            <el-form :model="form" label-position="left" class="form-class">

                <el-form-item label="">
                    <el-radio v-model="form.result" label="1">通过</el-radio>
                    <el-radio v-model="form.result" label="2">不通过</el-radio>
                </el-form-item>

                <el-form-item label="不通过原因" :label-width="formLabelWidth" v-if="form.result=='2'">
                    <el-select v-model="form.failed_order_review_reason" placeholder="请选择废弃原因">
                        <el-option v-for="(val,key) in failed_order_review_reasons" :label="val" :key="key" :value="val"></el-option>
                    </el-select>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitOperate">确 定</el-button>
            </div>
        </el-dialog>

    </div>
</template>
<script type="text/ecmascript-6">
    import meta from '@/utils/meta'
    export default {
        props:{
            clueAData:{
                type:Array,
                require:true
            }
        },
        data(){
            return{
                failed_order_review_reasons:meta.failed_order_review_reasons,
                multipleSelection: [],
                currentPage4: 4,

                dialogFormVisible:false,
                formLabelWidth: '100px',
                form:{}
            }
        },
        methods:{
            reviewOperation(id){
                this.dialogFormVisible=true;
            },
            submitOperate(){
                this.dialogFormVisible=false;
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
    .form-name{
        color:#30ABF9;
        cursor: pointer;
    }
</style>
