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
                        label="一级渠道"
                >
                    <template slot-scope="scope">
                        <span @click="pathTo(scope.row.id)">{{scope.row.name}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="mobile"
                        label="二级渠道"
                >
                </el-table-column>
                <el-table-column
                        prop="province"
                        label="渠道组"
                >
                </el-table-column>
                <el-table-column
                        prop="province"
                        label="线索标签"
                >
                </el-table-column>
                <el-table-column
                        prop="created_at"
                        label="注册用户数"
                >
                </el-table-column>
                <el-table-column
                        prop="updated_at"
                        label="预约用户数"
                >
                </el-table-column>
                <el-table-column
                        prop="updated_for"
                        label="体验用户数"
                >
                </el-table-column>
                <el-table-column
                        prop="state"
                        label="付费用户数"
                >
                </el-table-column>
                <el-table-column
                        prop="state"
                        label="新签付费金额"
                >
                </el-table-column>
                <el-table-column
                        prop="delay"
                        label="新签课单价"
                >
                </el-table-column>
                <el-table-column
                        prop="rollback"
                        label="渠道组排名"
                >
                </el-table-column>
                <el-table-column
                        prop="like"
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


                <el-form-item label="一级渠道" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="二级渠道" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <br/>
                <el-form-item label="渠道组" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="统计时长" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <br/>
                <el-form-item label="生效日期">
                    <el-date-picker
                            v-model="form.reservations_date"
                            type="date"
                            placeholder="请选择日期"
                            value-format='yyyy-MM-dd'>
                    </el-date-picker>
                </el-form-item>
                <br/>
                <el-form-item label="是否参与排名" >
                    <el-radio v-model="form.region" label="">是</el-radio>
                    <el-radio v-model="form.region" label="">否</el-radio>
                </el-form-item>
                <br/>
                <el-form-item label="是否A+类线索标签">
                    <el-radio v-model="form.region" label="">是</el-radio>
                    <el-radio v-model="form.region" label="">否</el-radio>
                </el-form-item>
                <br/>
                <el-form-item label="注册用户数得分权重" label-width="150">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="注册预约率得分权重" label-width="150">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="预约体验率得分权重" label-width="150">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="体验转化率得分权重" label-width="150">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="新签客单价得分权重" label-width="150">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="A类线索" :label-width="formLabelWidth">
                    第<el-input class="clue-num" v-model="input" placeholder="请输入内容"></el-input>
                    ～<el-input class="clue-num" v-model="input" placeholder="请输入内容"></el-input>
                    名
                </el-form-item>
                <br/>
                <el-form-item label="B类线索" :label-width="formLabelWidth">
                    第<el-input class="clue-num" v-model="input" placeholder="请输入内容"></el-input>
                    ～<el-input class="clue-num" v-model="input" placeholder="请输入内容"></el-input>
                    名
                </el-form-item>
                <br/>
                <el-form-item label="C类线索" :label-width="formLabelWidth">
                    第<el-input class="clue-num" v-model="input" placeholder="请输入内容"></el-input>
                    ～<el-input class="clue-num" v-model="input" placeholder="请输入内容"></el-input>
                    名
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
    .clue-num{
        width: 60px;
    }
</style>
