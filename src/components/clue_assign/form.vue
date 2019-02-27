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
                        label="线索标签"
                >
                    <template slot-scope="scope">
                        <span @click="pathTo(scope.row.id)">{{scope.row.name}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="mobile"
                        label="分配对象"
                >
                </el-table-column>
                <el-table-column
                        prop="province"
                        label="分配时间"
                >
                </el-table-column>
                <el-table-column
                        prop="province"
                        label="分配间隔"
                >
                </el-table-column>
                <el-table-column
                        prop="created_at"
                        label="分配数量／次／人"
                >
                </el-table-column>
                <el-table-column
                        prop="updated_at"
                        label="生效状态"
                >
                </el-table-column>
                <el-table-column
                        prop="updated_for"
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

        <el-dialog title="新建/编辑线索分配" :visible.sync="defaultFormVisiable">
            <el-form :model="form" label-position="left" class="form-class">

                <el-form-item label="线索标签" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="分配时间">
                    <el-date-picker v-model="form.startDate" type="date" value-format="yyyy/MM/dd" placeholder="请选择开始时间" ref="start_date">
                    </el-date-picker>
                    &nbsp;-&nbsp;
                    <el-date-picker v-model="form.endDate" type="date" value-format="yyyy/MM/dd" placeholder="请选择结束时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="分配间隔" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="重复" :label-width="formLabelWidth">
                    <el-checkbox-group
                            v-model="form.week"
                            :min="1"
                            :max="2">
                        <el-checkbox v-for="city in [A,B,C,D,E,F]" :label="city" :key="city">{{city}}</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="分配对象" :label-width="formLabelWidth">
                    <!--<el-tabs v-model="activeName" @tab-click="handleClick">-->
                        <!--<el-tab-pane label="用户管理" name="first">销售中心</el-tab-pane>-->
                        <!--<el-tab-pane label="配置管理" name="second">销售团队</el-tab-pane>-->
                        <!--<el-tab-pane label="角色管理" name="third">销售小组</el-tab-pane>-->
                        <!--<el-tab-pane label="定时任务补偿" name="fourth">CC</el-tab-pane>-->
                    <!--</el-tabs>-->
                </el-form-item>
                <el-form-item label="分配数量" :label-width="formLabelWidth">
                    <el-input-number v-model="form.num1" label="描述文字"></el-input-number>
                </el-form-item>
                <el-form-item label="生效状态" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
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
            },
            openEdit(){
                this.defaultFormVisiable=true;
                this.form={}
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
