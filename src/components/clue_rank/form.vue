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
                    <el-select disabled v-model="form.channelGrandparentName" placeholder="请选择一级渠道">
                    </el-select>
                </el-form-item>
                <el-form-item label="二级渠道" :label-width="formLabelWidth">
                    <el-select disabled v-model="form.channelParentName" placeholder="请选择二级渠道">
                    </el-select>
                </el-form-item>
                <br/>
                <el-form-item label="渠道组" :label-width="formLabelWidth">
                    <el-select disabled v-model="form.channelName" placeholder="请选择渠道组">
                    </el-select>
                </el-form-item>
                <el-form-item label="统计时长" :label-width="formLabelWidth">
                    <el-select v-model="form.statisticalDuration" placeholder="请选择统计时长">
                        <el-option v-for="(val,key) in statistics_duration" :label="val" :key="key" :value="val"></el-option>
                    </el-select>
                </el-form-item>
                <br/>
                <el-form-item label="生效日期">
                    <el-date-picker
                            v-model="form.entryIntoForceTime"
                            type="date"
                            placeholder="请选择日期"
                            value-format='yyyy-MM-dd'>
                    </el-date-picker>
                </el-form-item>
                <br/>
                <el-form-item label="是否参与排名" >
                    <el-radio v-model="form.participationRanking" label="是">是</el-radio>
                    <el-radio v-model="form.participationRanking" label="否">否</el-radio>
                </el-form-item>
                <br/>
                <el-form-item label="是否A+类线索标签">
                    <el-radio v-model="form.aplus" label="是">是</el-radio>
                    <el-radio v-model="form.aplus" label="否">否</el-radio>
                </el-form-item>
                <br/>
                <el-form-item label="注册用户数得分权重(%)" label-width="150">
                    <el-select v-model="form.registerWeightCoefficient" placeholder="请选择统计时长">
                        <el-option v-for="(val,key) in weight_score" :label="val" :key="key" :value="val"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="注册预约率得分权重(%)" label-width="150">
                    <el-select v-model="form.appointmentWeightCoefficient" placeholder="请选择统计时长">
                        <el-option v-for="(val,key) in weight_score" :label="val" :key="key" :value="val"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="预约体验率得分权重(%)" label-width="150">
                    <el-select v-model="form.experienceWeightCoefficient" placeholder="请选择统计时长">
                        <el-option v-for="(val,key) in weight_score" :label="val" :key="key" :value="val"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="体验转化率得分权重(%)" label-width="150">
                    <el-select v-model="form.conversionWeightCoefficient" placeholder="请选择统计时长">
                        <el-option v-for="(val,key) in weight_score" :label="val" :key="key" :value="val"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="新签客单价得分权重(%)" label-width="150">
                    <el-select v-model="form.newPriceWeightCoefficient" placeholder="请选择新签客单价得分权重">
                        <el-option v-for="(val,key) in weight_score" :label="val" :key="key" :value="val"></el-option>
                    </el-select>
                </el-form-item>
                <br/>
                <el-form-item label="A类线索" :label-width="formLabelWidth">
                    第&nbsp;<el-input class="clue-num" v-model="form.clueRankingDistributionRuleEntities[0].startRanking" disabled placeholder="请输入内容" :value="1"></el-input>
                    &nbsp;～&nbsp;<el-input class="clue-num" v-model="form.clueRankingDistributionRuleEntities[0].endRanking" placeholder="请输入内容"></el-input>
                    &nbsp;名
                </el-form-item>
                <br/>
                <el-form-item label="B类线索" :label-width="formLabelWidth">
                    第&nbsp;<el-input class="clue-num" v-model="form.clueRankingDistributionRuleEntities[1].startRanking" placeholder="请输入内容"></el-input>
                    &nbsp;～&nbsp;<el-input class="clue-num" v-model="form.clueRankingDistributionRuleEntities[1].endRanking" placeholder="请输入内容"></el-input>
                    &nbsp;名
                </el-form-item>
                <br/>
                <el-form-item label="C类线索" :label-width="formLabelWidth">
                    第&nbsp;<el-input class="clue-num" v-model="form.clueRankingDistributionRuleEntities[2].startRanking" placeholder="请输入内容"></el-input>
                    &nbsp;～&nbsp;<el-input class="clue-num" v-model="form.clueRankingDistributionRuleEntities[2].endRanking" disabled value="末" placeholder="请输入内容"></el-input>
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
    import fetcher from '@/fetchers/account/clueManage/shareManage'
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

                defaultFormVisiable:false,
                formLabelWidth: '80px',
                form:{
                    clueRankingDistributionRuleEntities:[{},{},{}]
                },

            }
        },
        methods:{
            onSubmit(){
                let sum =parseInt(this.form.registerWeightCoefficient)
                    +parseInt(this.form.appointmentWeightCoefficient)
                    +parseInt(this.form.experienceWeightCoefficient)
                    +parseInt(this.form.conversionWeightCoefficient)
                    +parseInt(this.form.newPriceWeightCoefficient);
                console.log(sum)
                if(sum!=100){
                    this.$message.error('得分权重不等于100%')
                    return false;
                }
                fetcher.updateRankById(this.form,(response)=>{
                    if(response.data.code==100000){
                        this.$message.success('编辑成功')
                    }
                })
                this.defaultFormVisiable=false;
            },
            edit(id){
                this.defaultFormVisiable=true
                fetcher.getRankById({channelId:id},(response)=>{
                    this.form = response.data.data

                })
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
