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
                    <a class="light-blue" href="javascript:void(0);" @click="toOrderDetail(scope.row.id)"> 查看 </a>
                </template>
            </el-table-column>

        </el-table>

    </div>
</template>
<script type="text/ecmascript-6">
    import fetcher from '@/fetchers/account/clue/clue'
    import meta from '@/utils/meta'
    export default {
        props:{
            tabName:{
                type:String,
                require:true
            }
        },
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
                currentPage4: 4,

                cancel_order_reason:meta.cancel_order_reason,
                cancel_reason:'',
                cover:'',//UPload
                cancelOrderDialog:false,
                uploadDialog:false,
                formLabelWidth: '80px',
            }
        },
        watch:{
            tabName:{
                handler(val,oldVal){
                    if(val!=oldVal && val == 'four'){
                        this.load();
                    }
                }
            }
        },
        methods:{
            toOrderDetail(id){
                this.$router.push({path:`/order/detail/${id}`});
            },

            tableHeaderColor(){
                return 'background-color:#EFF3F5;height:40px;'
            },


            load(){
                fetcher.getCommunicationRecord({clueSubjectId:this.$route.params.id},(response)=>{
                    if(response.data.code==100000){
                        this.data = response.data.data;
                    }
                })
            }
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
    .light-blue{
        color:#1CB5ED;
    }
    .hard-yellow{
        color:#F8542E;
    }
</style>
