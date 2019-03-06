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
                    label="老师"
            >
            </el-table-column>
            <el-table-column
                    prop="province"
                    label="课类型"
            >
            </el-table-column>
            <el-table-column
                    prop="created_at"
                    label="上课时间"
            >
            </el-table-column>
            <el-table-column
                    prop="updated_at"
                    label="排课时间"
            >
            </el-table-column>
            <el-table-column
                    prop="updated_for"
                    label="课状态"
            >
            </el-table-column>
            <el-table-column
                    prop="state"
                    label="迟到状态"
            >
            </el-table-column>
            <el-table-column
                    prop="delay"
                    label="旷课状态"
            >
            </el-table-column>
            <el-table-column
                    prop="rollback"
                    label="曲谱状态"
            >
            </el-table-column>
            <el-table-column
                    prop="like"
                    label="课后反馈"
            >
            </el-table-column>
            <el-table-column
                    prop="like"
                    label="CC"
            >
            </el-table-column>
            <el-table-column
                    prop="like"
                    label="排课人"
            >
            </el-table-column>
            <el-table-column
                    prop="like"
                    label="教务"
            >
            </el-table-column>
            <el-table-column  v-if="show_edit"
                    prop="like"
                    label="老师简历"
            >
                <a href="javascript:void(0);">复制链接</a>

            </el-table-column>
            <el-table-column v-if="show_edit"
                    prop="like"
                    label="操作"
            >
                <a href="javascript:void(0);">查看</a>
                <br>
                <a href="javascript:void(0);">建工单</a>
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
            },
            show_edit:{
                type:Boolean,
                require:true,
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
                    {id:'55555',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'55555',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'55555',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'55555',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                ],
                currentPage4: 4
            }
        },
        watch:{
            tabName:{
                handler(val,oldVal){
                    if(val!=oldVal && val == 'third'){
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
