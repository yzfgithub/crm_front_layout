<template>
    <div class="container">
        <div class="f_table">
            <el-table
                    ref="multipleTable"
                    :data="dataList"
                    tooltip-effect="dark"
                    style="width: 100%;"
                    :header-cell-style="tableHeaderColor">
                <el-table-column
                        prop="grandparentName"
                        label="一级渠道"
                >
                </el-table-column>
                <el-table-column
                        prop="parentName"
                        label="二级渠道"
                >
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="渠道组"
                >
                </el-table-column>
                <el-table-column
                        prop="tag"
                        label="线索标签"
                >
                </el-table-column>
                <el-table-column
                        prop="registerNum"
                        label="注册用户数"
                >
                </el-table-column>
                <el-table-column
                        prop="appointmentNum"
                        label="预约用户数"
                >
                </el-table-column>
                <el-table-column
                        prop="experienceNum"
                        label="体验用户数"
                >
                </el-table-column>
                <el-table-column
                        prop="payNum"
                        label="付费用户数"
                >
                </el-table-column>
                <el-table-column
                        prop="newPaySum"
                        label="新签付费金额"
                >
                </el-table-column>
                <el-table-column
                        prop="newPayPrice"
                        label="新签课单价"
                >
                </el-table-column>
                <el-table-column
                        prop="ranking"
                        label="渠道组排名"
                >
                </el-table-column>
                <el-table-column
                        prop="like"
                        label="操作"
                >
                    <template slot-scope="scope">
                        <span class="light-blue" @click="edit(scope.row.id)">编辑</span>
                    </template>
                </el-table-column>

            </el-table>

            <el-pagination class="page" @current-change="handleCurrentChange" :current-page="meta.current_page" :page-size="20" layout="total, prev, pager, next, jumper" :total="meta.total">
            </el-pagination>
        </div>

        <el-dialog title="渠道组编辑" :visible.sync="defaultFormVisiable">
            <el-form :model="form" label-position="left" class="form-class" :inline="true">


                <el-form-item label="一级渠道" :label-width="formLabelWidth">
                    <el-select v-model="form.region1" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="二级渠道" :label-width="formLabelWidth">
                    <el-select v-model="form.region2" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <br/>
                <el-form-item label="渠道组" :label-width="formLabelWidth">
                    <el-select v-model="form.region3" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="统计时长" :label-width="formLabelWidth">
                    <el-select v-model="form.region4" placeholder="请选择统计时长">
                        <el-option v-for="(val,key) in statistics_duration" :label="val" :key="key" :value="val"></el-option>
                    </el-select>
                </el-form-item>
                <br/>
                <el-form-item label="生效日期">
                    <el-date-picker
                            v-model="form.region5"
                            type="date"
                            placeholder="请选择日期"
                            value-format='yyyy-MM-dd'>
                    </el-date-picker>
                </el-form-item>
                <br/>
                <el-form-item label="是否参与排名" >
                    <el-radio v-model="form.region6" label="">是</el-radio>
                    <el-radio v-model="form.region6" label="">否</el-radio>
                </el-form-item>
                <br/>
                <el-form-item label="是否A+类线索标签">
                    <el-radio v-model="form.region7" label="">是</el-radio>
                    <el-radio v-model="form.region7" label="">否</el-radio>
                </el-form-item>
                <br/>
                <el-form-item label="注册用户数得分权重" label-width="150">
                    <el-select v-model="form.region8" placeholder="请选择统计时长">
                        <el-option v-for="(val,key) in weight_score" :label="val" :key="key" :value="val"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="注册预约率得分权重" label-width="150">
                    <el-select v-model="form.region9" placeholder="请选择统计时长">
                        <el-option v-for="(val,key) in weight_score" :label="val" :key="key" :value="val"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="预约体验率得分权重" label-width="150">
                    <el-select v-model="form.region10" placeholder="请选择统计时长">
                        <el-option v-for="(val,key) in weight_score" :label="val" :key="key" :value="val"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="体验转化率得分权重" label-width="150">
                    <el-select v-model="form.region11" placeholder="请选择统计时长">
                        <el-option v-for="(val,key) in weight_score" :label="val" :key="key" :value="val"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="新签客单价得分权重" label-width="150">
                    <el-select v-model="form.region12" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <br/>
                <el-form-item label="A类线索" :label-width="formLabelWidth">
                    第&nbsp;<el-input class="clue-num" disabled placeholder="请输入内容" :value="1"></el-input>
                    &nbsp;～&nbsp;<el-input class="clue-num" v-model="form.region13" placeholder="请输入内容"></el-input>
                    &nbsp;名
                </el-form-item>
                <br/>
                <el-form-item label="B类线索" :label-width="formLabelWidth">
                    第&nbsp;<el-input class="clue-num" v-model="form.region14" placeholder="请输入内容"></el-input>
                    &nbsp;～&nbsp;<el-input class="clue-num" v-model="form.region15" placeholder="请输入内容"></el-input>
                    &nbsp;名
                </el-form-item>
                <br/>
                <el-form-item label="C类线索" :label-width="formLabelWidth">
                    第&nbsp;<el-input class="clue-num" v-model="form.region16" placeholder="请输入内容"></el-input>
                    &nbsp;～&nbsp;<el-input class="clue-num" disabled value="末" placeholder="请输入内容"></el-input>
                    &nbsp;名
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
    import metaObj from '@/utils/meta'
    export default {
        props:{
            dataList:{
                type:Array,
                require:true
            },
            meta:{
                type:Object,
                require:true,
            },
        },
        data(){
            return{
                statistics_duration:metaObj.statistics_duration,
                weight_score:metaObj.weight_score,

                multipleSelection: [],
                currentPage4: 4,

                editId:'',
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
                alert('编辑确认')
                this.defaultFormVisiable=false;
            },
            edit(id){
                this.editId = id;
                this.defaultFormVisiable=true
            },
            tableHeaderColor(){
                return 'background-color:#EFF3F5;height:40px;'
            },
            //fenye
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
        }

    }
</script>
<style scoped>
    .container{
        margin: 0 20px;
        padding: 20px 0;
    }
    .page{
        margin: 20px 0;
        text-align: right;
    }
    .clue-num{
        width: 60px;
    }
    .light-blue{
        color:#30ABF9;
        cursor: pointer;
        margin: 0 5px;
    }
</style>
