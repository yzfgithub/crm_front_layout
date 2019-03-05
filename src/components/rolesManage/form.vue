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
                        prop="roleName"
                        label="名称"
                >
                </el-table-column>
                <el-table-column
                        prop="showName"
                        label="显示名"
                >
                </el-table-column>
                <el-table-column
                        prop="descInfo"
                        label="描述"
                >
                </el-table-column>
                <el-table-column
                        prop="created_at"
                        label="操作"
                >
                    <template slot-scope="scope">
                        <span class="light-blue" @click="showEmployee(scope.row.id)">查看</span>
                        <span class="light-blue" @click="editEmployee(scope.row.id)">编辑</span>
                        <span class="light-origin" @click="editEmployee(scope.row.id)">删除</span>
                    </template>
                </el-table-column>

            </el-table>

            <el-pagination class="page" @current-change="handleCurrentChange" :current-page="meta.current_page" :page-size="20" layout="total, prev, pager, next, jumper" :total="meta.total">
            </el-pagination>
        </div>

    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        props:{
            dataList:{
                type:Array,
                require:true
            },
            meta:{
                type:Object,
                require:true
            }
        },
        data(){
            return{
                multipleSelection: [],
                currentPage4: 4
            }
        },
        methods:{
            showEmployee(id){
                this.$router.push({path:'/system/roles/show/'+id})
            },
            editEmployee(id){
                this.$router.push({path:'/system/roles/edit/'+id})
            },

            tableHeaderColor(){
                return 'background-color:#EFF3F5;height:40px;'
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
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
    .page{
        margin: 20px 0;
        text-align: right;
    }
    .light-blue{
        color:#30ABF9;
        cursor: pointer;
        margin: 0 5px;
    }
    .light-origin{
        color:#F8542E;
        cursor: pointer;
        margin: 0 5px;
    }
</style>
