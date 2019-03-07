<template>
    <div class="container">
        <div class="f_table">
            <el-table
                    ref="multipleTable"
                    :data="detaList"
                    tooltip-effect="dark"
                    style="width: 100%;"
                    :header-cell-style="tableHeaderColor">
                <el-table-column
                        prop="name"
                        label="姓名"
                >
                </el-table-column>
                <el-table-column
                        prop="userName"
                        label="登陆名"
                >
                </el-table-column>
                <el-table-column
                        prop="department"
                        label="角色"
                >
                </el-table-column>
                <el-table-column
                        prop="status"
                        label="状态"
                >
                </el-table-column>
                <el-table-column
                        prop="created_at"
                        label="操作"
                >
                    <template slot-scope="scope">
                        <span class="light-blue" @click="showEmployee(scope.row.id)">查看</span>
                        <span class="light-blue" @click="editEmployee(scope.row.id)">编辑</span>
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
            detaList:{
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

            }
        },
        methods:{
            showEmployee(id){
                this.$router.push({path:'/system/employee/show/'+id})
            },
            editEmployee(id){
                this.$router.push({path:'/system/employee/edit/'+id})
            },

            tableHeaderColor(){
                return 'background-color:#EFF3F5;height:40px;'
            },


            //fenye
            handleCurrentChange(val) {
                this.$emit('onSubmit',val)
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
</style>
