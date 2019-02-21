<template>
    <div class="container">
        <div class="f_head">
            <div>已选中 <span class="num">2</span> 项</div>
            <div v-if="!isMultipleSelect"> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp; <img src="../../assets/yuyue_device.png" alt=""> <span class="click-span">预约设备检测课</span></div>
            <div v-if="!isMultipleSelect"> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp; <img src="../../assets/yuyue_tiyan.png" alt=""> <span class="click-span">预约体验课</span></div>
            <div v-if="!isMultipleSelect"> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp; <img src="../../assets/create.png" alt=""> <span class="click-span">新建订单</span></div>
            <div v-if="!isMultipleSelect"> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp; <img src="../../assets/presentation.png" alt=""> <span class="click-span">赠课</span></div>
            <div> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp; <img src="../../assets/discard.png" alt=""> <span class="click-span">废弃</span></div>
            <div> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp; <img src="../../assets/rollback.png" alt=""> <span class="click-span">回收分配</span></div>
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
                        <span @click="pathTo(scope.row.id)">{{scope.row.name}}</span>
                    </template>
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
                        prop="province"
                        label="归属人"
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
                        prop="state"
                        label="设备／体验／正式"
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
                <el-table-column
                        prop="like"
                        label="跟进状态"
                >
                </el-table-column>

            </el-table>

            <el-pagination class="page" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
            </el-pagination>
        </div>

        <!--<el-dialog :title="title_dailog" :visible.sync="dialogFormVisible">-->
            <!--<el-form :model="form" label-position="left" class="form-class">-->
                <!--<el-form-item v-if="dialogType ==='batch'" label="确认领取并分配该部分线索？分配后将进入CC个人【待跟进】私池">-->
                    <!--&lt;!&ndash;<span>确认领取并分配该部分线索？分配后将进入CC个人【待跟进】私池</span>&ndash;&gt;-->
                <!--</el-form-item>-->
                <!--<el-form-item v-if="dialogType ==='batch'" label="领取原因" :label-width="formLabelWidth">-->
                    <!--<el-select v-if = 'dialog_training' v-model="form.batchReasion_id" placeholder="请选择领取原因">-->
                        <!--<el-option v-for="(val, key) in batchReasion_list" :label="val.name" :value="parseInt(val.id)" :key="key"></el-option>-->
                    <!--</el-select>-->
                <!--</el-form-item>-->

                <!--<el-form-item v-if="dialogType ==='batch'" label="分配给" :label-width="formLabelWidth">-->
                    <!--<el-select v-model="form.region" placeholder="请选择活动区域">-->
                        <!--<el-option label="区域一" value="shanghai"></el-option>-->
                        <!--<el-option label="区域二" value="beijing"></el-option>-->
                    <!--</el-select>-->
                <!--</el-form-item>-->


                <!--<el-form-item v-if="dialogType ==='discard'">-->
                    <!--<span>确认废弃该部分线索？废弃后将进入【Z类公海池】</span>-->
                <!--</el-form-item>-->
                <!--<el-form-item v-if="dialogType=='discard'" label="废弃原因" :label-width="formLabelWidth">-->
                    <!--<el-select v-model="form.discardReason_id" placeholder="请选择废弃原因">-->
                        <!--<el-option v-for="(val, key) in discardReason_list" :label="val.name" :value="parseInt(val.id)" :key="key"></el-option>-->
                    <!--</el-select>-->
                <!--</el-form-item>-->


                <!--<el-form-item v-if="dialogType ==='rollback'">-->
                    <!--<span>确认回滚该部分线索？回滚后线索将进入原属公海</span>-->
                <!--</el-form-item>-->

            <!--</el-form>-->
            <!--<div slot="footer" class="dialog-footer">-->
                <!--<el-button @click="dialogFormVisible = false">取 消</el-button>-->
                <!--<el-button type="primary" @click="submitOperate">确 定</el-button>-->
            <!--</div>-->
        <!--</el-dialog>-->
        <myDialog :visiableBar="visiableBar" :dialogType="dialogType" :title_dailog="title_dailog"></myDialog>
    </div>
</template>
<script type="text/ecmascript-6">
    import myDialog from '@/commons/client_batch/myDialog'
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
                multipleSelectionIds:[],
                currentPage4: 4,

                // dialogType:'',
                // title_dailog:'',
                // dialogFormVisible:false,
                // formLabelWidth: '80px',
                // dialog_training:true,
                // form:{
                //     discardReason:0,
                //     batchReasion:0,
                //     team_id:0,
                //     zu_id:0,
                //     cc_id:0,
                // },
                // batchReasion_list:[{name:'1'},{name:'2'}],
                // discardReason_list:[{name:'1'},{name:'2'}]
                visiableBar:false,
                dialogType:'yuyue_tiyan',
                title_dailog: '预约设备检测课',
            }
        },
        computed:{
            isMultipleSelect:function(){
                if(this.multipleSelectionIds.length>1){
                    return true
                }else{
                    return false
                }
            }
        },
        components:{
            myDialog
        },
        methods:{
            tableHeaderColor(){
                return 'background-color:#EFF3F5;height:40px;'
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
                this.multipleSelectionIds = this.multipleSelection.map(function (item) {
                    return item.id;
                })
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
    .f_head img{
        height: 12px;
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
        /*color:#666666;*/
        color:#64c0fe;
        font-family:PingFangSC-Medium;
        font-weight:500;
    }
</style>
