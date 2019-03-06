<template>
    <div class="container">
        <div class="f_head">
            <div>已选中 <span class="num">{{multipleSelectionIds.length}}</span> 项</div>
            <div> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp; <img src="../../assets/batch.png" alt=""> <span class="click-span" @click="batchShare">领取分配</span></div>
            <div v-if="!isZClue"> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp; <img src="../../assets/discard.png" alt=""> <span class="click-span" @click="discard">废弃</span></div>
            <div v-if="isZClue"> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp; <img src="../../assets/rollback.png" alt=""> <span class="click-span" @click="rollBack">回滚</span></div>
        </div>
        <!--:render-header="renderHeader"-->
        <div class="f_table">
            <!--<el-table-->
                    <!--ref="multipleTable"-->
                    <!--:data="clueAData"-->
                    <!--tooltip-effect="dark"-->
                    <!--style="width: 100%;"-->
                    <!--:header-cell-style="tableHeaderColor">-->
                <!--<el-table-column-->
                        <!--width="80">-->
                    <!--<template slot="header">-->

                        <!--<el-checkbox @selectable="selectAllFun" class="self-select" ref="selection" :checked="selection" v-model="selection" @change="selectChange"></el-checkbox>-->
                    <!--</template>-->
                    <!--<template slot-scope="scope">-->
                        <!--<el-checkbox class="self-select"  v-model="scope.row.checked" @change="selectEvery"></el-checkbox>-->
                    <!--</template>-->
                <!--</el-table-column>-->
                <!--<el-table-column-->
                        <!--prop="childName"-->
                        <!--label="姓名"-->
                <!--&gt;-->
                    <!--<template slot-scope="scope">-->
                        <!--<span class="form-name" @click="pathTo(scope.row.id)">{{scope.row.childName}}</span>-->
                    <!--</template>-->
                <!--</el-table-column>-->
                <!--<el-table-column-->
                        <!--prop="parentalPhone"-->
                        <!--label="手机号"-->
                <!--&gt;-->
                    <!--<template slot-scope="scope">-->
                        <!--<span class="form-mobile" @click="callPhone">-->
                            <!--{{scope.row.parentalPhone}} <i class="el-icon-phone"></i>-->
                        <!--</span>-->
                    <!--</template>-->
                <!--</el-table-column>-->
                <!--<el-table-column-->
                        <!--prop="province"-->
                        <!--label="省份"-->
                <!--&gt;-->
                <!--</el-table-column>-->
                <!--<el-table-column-->
                        <!--prop="registeredTime"-->
                        <!--label="注册时间"-->
                <!--&gt;-->
                <!--</el-table-column>-->
                <!--<el-table-column-->
                        <!--prop="lastUpdatedTime"-->
                        <!--label="最新修改时间"-->
                <!--&gt;-->
                <!--</el-table-column>-->
                <!--<el-table-column-->
                        <!--prop="lastUpdater"-->
                        <!--label="修改人"-->
                <!--&gt;-->
                <!--</el-table-column>-->
                <!--<el-table-column-->
                        <!--prop="status"-->
                        <!--label="有效／接通／拨打"-->
                <!--&gt;-->
                <!--</el-table-column>-->
                <!--<el-table-column-->
                        <!--prop="delay"-->
                        <!--label="搁置时间"-->
                <!--&gt;-->
                    <!--<template slot-scope="scope">-->
                        <!--<span>{{delayTime(scope.row)}}</span>-->
                    <!--</template>-->
                <!--</el-table-column>-->
                <!--<el-table-column-->
                        <!--prop="rollBackNum"-->
                        <!--label="回滚次数"-->
                <!--&gt;-->
                <!--</el-table-column>-->
                <!--<el-table-column-->
                        <!--prop="intentionality"-->
                        <!--label="意向度"-->
                <!--&gt;-->
                <!--</el-table-column>-->

            <!--</el-table>-->

            <table cellspacing=0 cellpadding=0>
                <tbody>
                <tr class="my_th_tr">
                    <th class="my_th_th"><span @click="showAllSelect" class="el-checkbox__inner" :class="selection?'is_focus':''"><span class="inner"></span></span></th>
                    <th class="my_th_th">姓名</th>

                    <th class="my_th_th">手机号</th>
                    <th class="my_th_th">省份</th>

                    <th class="my_th_th" width="180">注册时间</th>
                    <th class="my_th_th" width="180">最新修改时间</th>

                    <th class="my_th_th">修改人</th>
                    <th class="my_th_th">有效／接通／拨打</th>

                    <th class="my_th_th">搁置时间</th>
                    <th class="my_th_th">回滚次数</th>

                    <th class="my_th_th">意向度</th>
                </tr>
                    <tr v-for="(item,key) in dataList" :key="key" class="my_tb_tr">
                        <td class="my_tb_td"><el-checkbox v-model="item.checked"></el-checkbox></td>

                        <td class="my_tb_td">
                            <span class="form-name" @click="pathTo(item.id)">{{item.name}}</span>
                        </td>


                        <td class="my_tb_td">
                             <span class="form-mobile" @click="callPhone">
                            {{item.phone}} <i class="el-icon-phone"></i>
                        </span>
                        </td>
                        <td class="my_tb_td">{{item.province}}</td>

                        <td class="my_tb_td" width="180">{{item.registedDate}}</td>
                        <td class="my_tb_td" width="180">{{item.updatedDate}}</td>

                        <td class="my_tb_td">{{item.updater}}</td>
                        <td class="my_tb_td">{{item.validNum}}/{{item.connectedNum}}/{{item.dialledNum}}</td>

                        <td class="my_tb_td">{{delayTime(item.updatedDate)}}</td>
                        <td class="my_tb_td">{{item.rollBackNum}}</td>

                        <td class="my_tb_td">{{item.intentionality}}</td>
                    </tr>
                </tbody>
            </table>

            <div class="f_table_select_all" v-show="select_all_op">

                <el-checkbox class="self-select" v-model="selectionOne" @change="selectChangeOne">1000项上限</el-checkbox>
                <el-checkbox class="self-select" v-model="selectionTwo" @change="selectChangeTwo">当前页20项</el-checkbox>

            </div>
            <!--:page-sizes="[20, 3000]   layout：sizes"-->
            <el-pagination class="page" @current-change="handleCurrentChange" :current-page="meta.current_page" :page-size="20" layout="total, prev, pager, next, jumper" :total="meta.total">
            </el-pagination>
        </div>

        <el-dialog :title="title_dailog" :visible.sync="dialogFormVisible">
            <el-form :model="form" label-position="left" class="form-class">
                <el-form-item v-if="dialogType ==='batch'" label="确认领取并分配该部分线索？分配后将进入CC个人【待跟进】私池">
                    <!--<span>确认领取并分配该部分线索？分配后将进入CC个人【待跟进】私池</span>-->
                </el-form-item>
                <el-form-item v-if="dialogType ==='batch'" label="领取原因" :label-width="formLabelWidth">
                    <el-select v-if = 'dialog_training' v-model="form.batchReasion_id" placeholder="请选择领取原因">
                        <el-option v-for="(val, key) in receive_reason" :label="val" :value="val" :key="key"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item v-if="dialogType ==='batch'" label="分配给" :label-width="formLabelWidth">
                    <el-select style="margin-bottom: 10px;" v-model="form.region" placeholder="请选择团队">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                    <br/>
                    <el-select style="margin-bottom: 10px;" v-model="form.region" placeholder="请选择小组">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                    <br/>
                    <el-select v-model="form.region" placeholder="请选择CC">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>


                <el-form-item v-if="dialogType ==='discard'">
                    <span>确认废弃该部分线索？废弃后将进入【Z类公海池】</span>
                </el-form-item>
                <el-form-item v-if="dialogType=='discard'" label="废弃原因" :label-width="formLabelWidth">
                    <el-select v-model="form.discardCause" placeholder="请选择废弃原因">
                        <el-option v-for="(val,key) in discard_reason" :label="val" :key="key" :value="val"></el-option>
                    </el-select>
                </el-form-item>


                <el-form-item v-if="dialogType ==='rollback'">
                    <span>确认回滚该部分线索？回滚后线索将进入原属公海</span>
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
    import metaObj from '@/utils/meta'
    import tool from '@/utils/tool'
    export default {
        props:{
            clueAData:{
                type:Array,
                require:true
            },
            isZClue:{
                type:Boolean,
                require:true
            },
            meta:{
                type:Object,
                require:true
            }
        },
        data(){
            return{
                discard_reason:metaObj.discard_reason,
                receive_reason:metaObj.receive_reason,

                dialogType:'',
                title_dailog:'',
                dialogFormVisible:false,
                formLabelWidth: '80px',
                dialog_training:true,
                form:{
                    discardReason:0,
                    batchReasion:0,
                    team_id:0,
                    zu_id:0,
                    cc_id:0,
                },
                batchReasion_list:[{name:'1'},{name:'2'}],
                discardReason_list:[{name:'1'},{name:'2'}],

                //全选
                // multipleSelection: [], //list array
                multipleSelectionIds:[], //id array
                //2 个全选项 是否显示
                select_all_op:false,
                //全选按钮状态
                selection:false,
                //上限选择 选择按钮
                selectionOne:false,
                //当前页 选择按钮
                selectionTwo:false,

                //是否是 上限选择
                isUpSelect:false,
                currentPageSelect:0,
            }
        },
        computed:{
            dataList:function() {
                let that = this;
                let trueData = this.clueAData.filter(item=>{return item.checked == true});
                if(trueData.length >= 1){
                    that.selection=true;
                }
                return this.clueAData;
            },
        },
        methods:{
            showAllSelect(){
                this.select_all_op=true;
            },
            selectChangeOne(val){

                if(val){
                    //---all checked     //------------------------------------这里请求接口数据，拿到总量，然后显示选中多少条
                    this.selectionTwo=true;
                    this.multipleSelectionIds=[];
                    this.isUpSelect=true;
                    this.$emit('maxPage')
                }else{
                    this.isUpSelect=false;
                    this.multipleSelectionIds=[];
                    // this.$emit('currentPage')
                    this.$emit('clearmultiple');
                }
                this.select_all_op = false;
                console.log('领取分配','是否上限选择'+this.isUpSelect,'选择ids'+this.multipleSelectionIds.join(','),'总条数:1000')

            },
            selectChangeTwo(val){ //20 tip
                if(val){
                    this.currentPageSelect=this.meta.current_page;
                    this.$emit('currentPage')
                    this.multipleSelectionIds=this.clueAData.map(item => {return item.id});
                }else{
                    this.currentPageSelect=0
                    this.selectionOne = false;
                    this.multipleSelectionIds=[];
                    this.$emit('clearmultiple');
                }
                this.isUpSelect=false;
                this.select_all_op = false;
                console.log('领取分配','是否上限选择'+this.isUpSelect,'选择ids'+this.multipleSelectionIds.join(','),'总条数:1000')
            },
            // renderHeader (h,{column}) { // h即为cerateElement的简写，具体可看vue官方文档
            //     console.log(column)
            //     return h(
            //         'div',
            //         [
            //             h('span', column.label),
            //             h('el-checkbox',{
            //                 style:'margin-left:0px',
            //                 attrs:{
            //                     checked:false,
            //                 },
            //                 on:{
            //                     change:this.select // 选中事件
            //                 }
            //             })
            //         ],
            //     );
            // },
            // select (data) {
            //     // this.select_all_op = true;
            // },
            // selectAllFun(row,index){
            //     console.log(row,index,'111')
            // },
            // selectChange(){
            //     // this.selection = true;
            //     // this.$refs.selection.checked=true;
            //     console.log('~~~')
            //     this.select_all_op = true;
            // },

            // selectEvery(){
            //     this.isUpSelect=false;
            //     this.multipleSelectionIds=this.clueAData.filter(item => {return item.checked==true}).map(val=>{return val.id});
            //     console.log('领取分配','是否上限选择'+this.isUpSelect,'选择ids'+this.multipleSelectionIds.join(','),'总条数:1000')
            //     if(this.multipleSelectionIds.length==this.clueAData.length){
            //         this.$emit('currentPage')
            //     }
            // },


            delayTime(val){
                return tool.delayTime(val)
            },
            callPhone(){
                // axios.get('/crm-call/outCall',{params:{FromExten:'1006',Exten:'18910420795'}}).then((response)=>{
                //     console.log('sss')
                //     this.$message('已发起通话，请稍后！')
                // })
            },

            tableHeaderColor(){
                return 'background-color:#EFF3F5;height:40px;'
            },

            batchShare(){
                console.log('领取分配')
                this.title_dailog='领取分配线索'
                this.dialogType='batch'
                this.dialogFormVisible=true;
            },
            discard(){
                console.log('废弃')
                this.title_dailog='废弃线索'
                this.dialogType='discard'
                this.dialogFormVisible=true;
            },
            rollBack(){
                this.title_dailog='回滚线索'
                this.dialogType='rollback'
                this.dialogFormVisible=true;
                console.log('回滚')
            },
            submitOperate(){
                if(this.dialogType==='batch'){
                    //领取分配

                    this.dialogFormVisible=false;
                }else if(this.dialogType==='discard'){
                    //废弃

                    this.dialogFormVisible=false;
                }else if(this.dialogType==='discard'){
                    //回滚

                    this.dialogFormVisible=false;
                }else{
                    console.log('error')
                }
            },

            //fenye
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
    .f_table{
        position: relative;
    }
    .f_table_select_all{
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100px;
        background-color: #fff;
        border: 1px solid #76c8fe;
        padding: 10px 5px;
        z-index: 1000;
        border-radius: 5px;
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
    .click-span:hover{
        color:#64c0fe;
    }
    .form-name{
        color:#30ABF9;
        cursor: pointer;
    }
    .form-mobile{
        color:#6AC230;
        cursor: pointer;
    }
    .el-form-item__content{
        text-align: left !important;
    }
    .form-class{
        margin-left: 10%;
    }


    .el-checkbox__inner{
        display: inline-block;
        position: relative;
        border: 1px solid #dcdfe6;
        border-radius: 2px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 14px;
        height: 14px;
        background-color: #fff;
        z-index: 1;
        -webkit-transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
        transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
        cursor: pointer;
    }
    .el-checkbox__inner.is_focus{
        border: 1px solid #409EFF;
    }
    .el-checkbox__inner.is_focus .inner{
        width: 10px;
        height: 10px;
        background-color: #409EFF;
        display: block;
        margin: 1px 0 0 1px;

    }

    .my_th_tr{
        color: #909399;
        font-weight: 500;
        display:table;
        width:100%;
    }
    .my_th_th{
        background-color: rgb(239, 243, 245);
        height: 40px;
    }
    .my_th_tr .my_th_th:first-child{
        width:50px;
    }
    .my_tb_tr{
        border-bottom: 1px solid #ebeef5;
        background-color: #fff;
        display:table;
        width:100%;
    }
    .my_tb_tr:hover{
        background-color: rgb(239, 243, 245,0.6);
    }
    .my_tb_td{
        text-align: center;
        word-break:break-all
    }
    .my_tb_tr .my_tb_td:first-child{
        width:50px;

    }

    table tbody {
        display:block;
        height:200px;
        overflow-y:scroll;
        min-height: 80px;
    }

    table thead, tbody tr {
        display:table;
        width:100%;
        table-layout:fixed;
        min-height:48px;
    }

    table thead {
        width: calc( 100% - 50 )
    }


</style>
