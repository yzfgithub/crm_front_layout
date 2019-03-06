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
                    label="姓名"
            >
                <template slot-scope="scope">
                    <span @click="pathTo(scope.row.id)">{{scope.row.name}}</span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="mobile"
                    label="学生"
            >
            </el-table-column>
            <el-table-column
                    prop="province"
                    label="赠课理由"
            >
            </el-table-column>
            <el-table-column
                    prop="created_at"
                    label="赠课数量"
            >
            </el-table-column>
            <el-table-column
                    prop="updated_at"
                    label="创建人"
            >
            </el-table-column>
            <el-table-column
                    prop="updated_for"
                    label="创建时间"
            >
            </el-table-column>
            <el-table-column
                    prop="state"
                    label="审批人"
            >
            </el-table-column>
            <el-table-column
                    prop="delay"
                    label="审批日期"
            >
            </el-table-column>
            <el-table-column
                    prop="rollback"
                    label="赠课状态"
            >
            </el-table-column>
            <el-table-column
                    prop="like"
                    label="CC"
            >
            </el-table-column>
        </el-table>
    </div>
</template>
<script type="text/ecmascript-6">
    import fetcher from '@/fetchers/account/clue/clue'
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
                    {id:'44444',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'44444',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'44444',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'44444',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'44444',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'44444',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'55555',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                ],
                currentPage4: 4
            }
        },
        watch:{
            tabName:{
                handler(val,oldVal){
                    if(val!=oldVal && val == 'fifth'){
                        this.load();
                    }
                }
            }
        },
        methods:{
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
        }
    }
</script>
<style scoped>

</style>
