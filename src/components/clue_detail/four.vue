<template>
    <div>
        <el-table
                ref="multipleTable"
                :data="clueAData"
                tooltip-effect="dark"
                style="width: 100%;"
                :header-cell-style="tableHeaderColor">
            <el-table-column
                    prop="name"
                    label="学生"
            >
                <template slot-scope="scope">
                    <span @click="pathTo(scope.row.id)">{{scope.row.name}}</span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="mobile"
                    label="产品名称"
            >
            </el-table-column>
            <el-table-column
                    prop="province"
                    label="订单总金额"
            >
            </el-table-column>
            <el-table-column
                    prop="created_at"
                    label="折扣金额"
            >
            </el-table-column>
            <el-table-column
                    prop="updated_at"
                    label="订单金额"
            >
            </el-table-column>
            <el-table-column
                    prop="updated_for"
                    label="创建时间"
            >
            </el-table-column>
            <el-table-column
                    prop="state"
                    label="支付时间"
            >
            </el-table-column>
            <el-table-column
                    prop="delay"
                    label="支付方式"
            >
            </el-table-column>
            <el-table-column
                    prop="rollback"
                    label="订单状态"
            >
            </el-table-column>
            <el-table-column
                    prop="like"
                    label="CC"
            >
            </el-table-column>
            <el-table-column
                    prop="like"
                    label="下单人"
            >
            </el-table-column>
            <el-table-column
                    prop="like"
                    label="操作"
            >
                <template slot-scope="scope">
                    <span>查看</span>
                    <span>取消</span>
                    <span>上传凭证</span>
                </template>
            </el-table-column>

        </el-table>

        <!--<el-pagination class="page" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">-->
        <!--</el-pagination>-->
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data(){
            return{
                clueAData:[
                    {id:'11111',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'22222',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'33333',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'44444',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'55555',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'55555',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'55555',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'55555',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'55555',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'55555',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'55555',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                ],
                currentPage4: 4
            }
        },
        methods:{
            tableHeaderColor(){
                return 'background-color:#EFF3F5;height:40px;'
            },
            //fenye
            // handleSizeChange(val) {
            //     console.log(`每页 ${val} 条`);
            // },
            // handleCurrentChange(val) {
            //     console.log(`当前页: ${val}`);
            // },
            // pathTo(id){
            //     this.$router.push({path:`/account/clue_detail/${id}`});
            // }
        }
    }
</script>
<style scoped>

</style>
