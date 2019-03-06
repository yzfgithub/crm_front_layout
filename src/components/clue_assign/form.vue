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
                        prop="clueTag"
                        label="线索标签"
                >
                </el-table-column>
                <!--<el-table-column-->
                        <!--prop="mobile"-->
                        <!--label="分配对象"-->
                <!--&gt;-->
                <!--</el-table-column>-->
                <el-table-column
                        label="分配时间"
                >
                    <template slot-scope="scope">
                        {{scope.row.repetition}}{{scope.row.startDistribution}}--{{scope.row.endDistribution}}
                    </template>
                </el-table-column>
                <el-table-column
                        prop="distributionInterval"
                        label="分配间隔"
                >
                </el-table-column>
                <el-table-column
                        prop="distributionNum"
                        label="分配数量／次／人"
                >
                </el-table-column>
                <el-table-column
                        prop="status"
                        label="生效状态"
                >
                </el-table-column>
                <el-table-column
                        prop="updated_for"
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

        <el-dialog title="新建/编辑线索分配" :visible.sync="defaultFormVisiable">
            <el-form :model="form" label-position="left" class="form-class">

                <el-form-item label="线索标签" :label-width="formLabelWidth">
                    <el-select v-model="form.clue_labels" placeholder="请选择活动区域">
                        <el-option v-for="(val,key) in clue_labels" :label="val" :key="key" :value="val"></el-option>
                    </el-select>
                </el-form-item>
                <!--<el-form-item label="分配时间" :label-width="formLabelWidth">-->
                    <!--<el-time-select-->
                            <!--v-model="form.startTime"-->
                            <!--:picker-options="{-->
                                <!--start: '08:30',-->
                                <!--step: '00:15',-->
                                <!--end: '18:30'-->
                              <!--}"-->
                            <!--placeholder="选择时间">-->
                    <!--</el-time-select>-->
                    <!--&nbsp;-&nbsp;-->
                    <!--<el-time-select-->
                            <!--v-model="form.endTime"-->
                            <!--:picker-options="{-->
                                <!--start: '08:30',-->
                                <!--step: '00:15',-->
                                <!--end: '18:30'-->
                              <!--}"-->
                            <!--placeholder="选择时间">-->
                    <!--</el-time-select>-->
                    <!--&nbsp;&nbsp;-->
                    <!--<el-button type="success" icon="el-icon-plus" circle></el-button>-->
                <!--</el-form-item>-->
                <el-form-item :label="key==0?'分配时间':''" :label-width="formLabelWidth" v-for="(item,key) in shareDurationObj" :key="key">
                    <el-time-select
                            v-model="item.startTime"
                            :picker-options="{
                                start: '08:30',
                                step: '00:15',
                                end: '18:30'
                              }"
                            placeholder="选择时间">
                    </el-time-select>
                    &nbsp;-&nbsp;
                    <el-time-select
                            v-model="item.endTime"
                            :picker-options="{
                                start: '08:30',
                                step: '00:15',
                                end: '18:30'
                              }"
                            placeholder="选择时间">
                    </el-time-select>
                    &nbsp;&nbsp;
                    <!--<i @click="deleteCard(item.id)" class="el-icon-circle-close-outline close-el"></i>-->
                    <el-button v-if="key<shareDurationObj.length-1" type="danger" icon="el-icon-delete" circle @click="deleteDuration(key)"></el-button>
                    <el-button v-if="key==shareDurationObj.length-1" type="success" icon="el-icon-plus" circle @click="addDuration"></el-button>
                </el-form-item>

                <el-form-item label="重复" :label-width="formLabelWidth">
                    <el-checkbox-group
                            v-model="form.week">
                        <el-checkbox v-for="(val,key) in repeat_date" :label="val" :key="key">{{val}}</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="分配间隔" :label-width="formLabelWidth">
                    <el-select v-model="form.repeat_duration" placeholder="请选择活动区域">
                        <el-option v-for="(val,key) in repeat_duration" :label="val" :key="key" :value="val"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="分配对象" :label-width="formLabelWidth">
                    <el-tabs v-model="activeName">
                        <el-tab-pane label="销售中心" name="first">
                            <el-checkbox-group
                                    v-model="sale_center">
                                <el-checkbox v-for="(val,key) in sale_center_list" :label="val.id" :key="key">{{val.name}}</el-checkbox>
                            </el-checkbox-group>
                        </el-tab-pane>
                        <el-tab-pane label="销售团队" name="second">
                            <el-checkbox-group
                                    v-model="sale_group">
                                <el-checkbox v-for="(val,key) in sale_group_list" :label="val.id" :key="key">{{val.name}}</el-checkbox>
                            </el-checkbox-group>
                        </el-tab-pane>
                        <el-tab-pane label="销售小组" name="third">
                            <el-checkbox-group
                                    v-model="sale_team">
                                <el-checkbox v-for="(val,key) in sale_team_list" :label="val.id" :key="key">{{val.name}}</el-checkbox>
                            </el-checkbox-group>
                        </el-tab-pane>
                        <el-tab-pane label="CC" name="fourth">
                            <el-checkbox-group
                                    v-model="sale_cc">
                                <el-checkbox v-for="(val,key) in sale_cc_list" :label="val.id" :key="key">{{val.name}}</el-checkbox>
                            </el-checkbox-group>
                        </el-tab-pane>
                    </el-tabs>
                </el-form-item>
                <el-form-item label="分配数量" :label-width="formLabelWidth">
                    <el-input-number v-model="form.num1" label="描述文字"></el-input-number>
                </el-form-item>
                <el-form-item label="生效状态" :label-width="formLabelWidth">
                    <el-select v-model="form.effective_status" placeholder="请选择活动区域">
                        <el-option v-for="(val,key) in effective_status" :label="val" :key="key" :value="val"></el-option>
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
    import meta from '@/utils/meta'
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
                clue_labels:meta.clue_labels,
                repeat_date:meta.repeat_date,
                repeat_duration:meta.repeat_duration,
                effective_status:meta.effective_status,
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
                    num1:1
                },
                activeName:'first',
                sale_center:[],
                sale_group:[],
                sale_team:[],
                sale_cc:[],
                centerList:[{name:'中心1',id:1},{name:'中心2',id:2}],
                groupList:[{name:'团队1',id:10,p_id:1},{name:'团队2',id:11,p_id:1},{name:'团队3',id:12,p_id:2},{name:'团队4',id:13,p_id:2}],
                teamList:[{name:'小组1',id:100,p_id:10,},{name:'小组2',id:101,p_id:10},{name:'小组3',id:102,p_id:11},{name:'小组4',id:103,p_id:11},{name:'小组5',id:104,p_id:12},{name:'小组6',id:105,p_id:12},{name:'小组7',id:106,p_id:13},{name:'小组7',id:107,p_id:13}],
                ccList:[{name:'cc1',cc_id:1000,p_id:100,id:10000},{name:'cc2',id:1001,p_id:100},{name:'cc3',id:1002,p_id:101},{name:'cc4',id:1003,p_id:101},{name:'cc5',id:1004,p_id:102},{name:'cc6',id:1005,p_id:102},{name:'cc7',id:1006,p_id:103},{name:'cc8',id:1007,p_id:103},{name:'cc9',id:1008,p_id:104},{name:'cc10',id:1009,p_id:104},{name:'cc11',id:1010,p_id:105},{name:'cc12',id:1011,p_id:105},{name:'cc13',id:1012,p_id:106},{name:'cc14',id:1013,p_id:106},{name:'cc15',id:1014,p_id:107},{name:'cc16',id:1015,p_id:107}],

                shareDurationObj:[{startTime:'',endTime:''}]
            }
        },
        computed:{
            sale_center_list:function () {
                return this.centerList;
            },
            sale_group_list:function () {
                if(this.sale_center.length){
                    return this.groupList.filter(item=>{return this.sale_center.indexOf(item.p_id)>-1})
                }else{
                    return this.groupList;
                }

            },
            sale_team_list:function () {
                if(this.sale_group.length){
                    return this.teamList.filter(item=>{return this.sale_group.indexOf(item.p_id)>-1})
                }else if(this.sale_center.length){
                    return this.teamList.filter(item=>{return this.sale_group.indexOf(item.p_p_id)>-1})
                }else{
                    return this.teamList;
                }
            },
            sale_cc_list:function () {
                if(this.sale_team.length){
                    return this.ccList.filter(item=>{return this.sale_team.indexOf(item.p_id)>-1})
                }else if(this.sale_group.length){
                    return this.ccList.filter(item=>{return this.sale_team.indexOf(item.p_p_id)>-1})
                }else if(this.sale_center.length){
                    return this.ccList.filter(item=>{return this.sale_team.indexOf(item.p_p_p_id)>-1})
                }else{
                    return this.ccList;
                }
            },
        },
        methods:{
            deleteDuration(key){
               this.shareDurationObj.splice(key,1)
            },
            addDuration(){
                this.shareDurationObj.push({startTime:'',endTime:''})
            },
            onSubmit(){
                alert('编辑确认')
                this.defaultFormVisiable=false;
            },
            edit(id){
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
    .light-blue{
        color:#30ABF9;
        cursor: pointer;
        margin: 0 5px;
    }
</style>
