<template>
    <div class="container">
        <div class="f_head">
            <div>已选中 <span class="num">{{multipleSelectionIds.length}}</span> 项</div>
            <div v-if="!isMultipleSelect"> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp; <img src="../../assets/create.png" alt=""> <span class="click-span" @click="createClick">新建订单</span></div>
            <div v-if="!isMultipleSelect"> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp; <img src="../../assets/presentation.png" alt=""> <span class="click-span" @click="presentationClick">赠课</span></div>
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
                        label="付费金额"
                >
                </el-table-column>

            </el-table>

            <el-pagination class="page" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
            </el-pagination>
        </div>

        <create :visiableBar="createBar" @close="closeBtn"></create>
        <presentation :visiableBar="presentationBar" @close="closeBtn"></presentation>
    </div>
</template>
<script type="text/ecmascript-6">
    import create from '@/commons/client_batch/create'
    import presentation from '@/commons/client_batch/presentation'
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

                createBar:false,
                presentationBar:false,
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
           create,presentation
        },
        methods:{
            createClick(){
                this.createBar = true;
            },
            presentationClick(){
                this.presentationBar = true;
            },
            closeBtn(){
                this.createBar=false
                this.presentationBar=false

            },


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
