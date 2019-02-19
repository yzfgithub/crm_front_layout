<template>
    <div class="container">
        <div class="f_head">
            <div>已选中 <span class="num">2</span> 项</div>
            <div> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp; <i class="el-icon-delete"></i> <span class="click-span" @click="batchShare">领取分配</span></div>
            <div v-if="!isZClue"> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp; <i class="el-icon-delete"></i> <span class="click-span" @click="discard">废弃</span></div>
            <div v-if="isZClue"> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp; <i class="el-icon-delete"></i> <span class="click-span" @click="rollBack">回滚</span></div>
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
                    <template slot-scope="scope">
                        <span class="form-name" @click="pathTo(scope.row.id)">{{scope.row.name}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="mobile"
                        label="手机号"
                >
                    <template slot-scope="scope">
                        <span class="form-mobile">
                            {{scope.row.mobile}} <i class="el-icon-phone"></i>
                        </span>
                    </template>
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
        <!--<el-dialog :title="title_dailog" :visible.sync="dialogFormVisible">-->
            <!--<el-form :model="form">-->
                <!--<el-form-item :label="label_dailog" :label-width="formLabelWidth">-->
                    <!--<el-select v-if = 'dialog_training' v-model="form.training_id" placeholder="请选择培训师">-->
                        <!--<el-option v-for="(val, key) in educational_administration_list" :label="val.name" :value="parseInt(val.id)" :key="key"></el-option>-->
                    <!--</el-select>-->

                    <!--<el-select v-else v-model="form.educational_administration_id" placeholder="请选择教务">-->
                        <!--<el-option v-for="(val, key) in educational_administration_list" :label="val.name" :value="parseInt(val.id)" :key="key"></el-option>-->
                    <!--</el-select>-->

                <!--</el-form-item>-->
            <!--</el-form>-->
            <!--<div slot="footer" class="dialog-footer">-->
                <!--<el-button @click="dialogFormVisible = false">取 消</el-button>-->
                <!--<el-button type="primary" @click="change_screens(dailog_search_id)">确 定</el-button>-->
            <!--</div>-->
        <!--</el-dialog>-->
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        props:{
            clueAData:{
                type:Array,
                require:true
            },
            isZClue:{
                type:Boolean,
                require:true
            }
        },
        data(){
            return{
                multipleSelection: [],
                currentPage4: 4,
                // dialogFormVisible: false,
                // formLabelWidth: '120px',
                // dialog_training:true,
            }
        },
        methods:{
            tableHeaderColor(){
                return 'background-color:#EFF3F5;height:40px;'
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
                let ids = this.multipleSelection.map(function (item) {
                    return item.id;
                })
                console.log(this.multipleSelection,ids)
            },

            batchShare(){
                console.log('领取分配')
            },
            discard(){
                console.log('废弃')
            },
            rollBack(){
                console.log('回滚')
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
    .click-span{
        cursor: pointer;
        margin-left: 5px;
        color:#666666;
        font-family:PingFangSC-Medium;
        font-weight:500;
    }
    .form-name{
        color:#30ABF9;
        cursor: pointer;
    }
    .form-mobile{
        color:#6AC230;
        cursor: pointer;
    }
</style>
