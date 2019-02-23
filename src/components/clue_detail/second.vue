<template>
    <div>
        <div class="second_box">
            <myTab v-for="item in data" class="second_tab" :title="item.ccInfoName+'-'+item.teamInfoName+'-'+item.parentName+'-'+item.grandparentName+'-'+item.mode">
                <span class="val">{{item.status}}</span> &nbsp;&nbsp;&nbsp;
                <span class="val">{{item.time}}</span>&nbsp;&nbsp;&nbsp;
                <span class="key">备注：</span><span class="val">{{item.remark}}</span>
            </myTab>
        </div>
        <!--<el-pagination class="page" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">-->
        <!--</el-pagination>-->
    </div>
</template>
<script type="text/ecmascript-6">
    import myTab from '@/commons/myTab/tab'
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
                currentPage4: 4,
                data:[]
            }
        },
        watch:{
            tabName:{
                handler(val,oldVal){
                    if(val!=oldVal && val == 'second'){
                        this.load();
                    }
                }
            }
        },
        components:{
            myTab
        },
        methods:{
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
            load(){
                fetcher.getCommunicationRecord({clueSubjectId:this.$route.params.id},(response)=>{
                    if(response.data.code==100000){
                        this.data = response.data.data;
                    }
                })
            }
        },
        mounted(){
            this.load();
        }
    }
</script>
<style lang="css" scoped>
    .key{
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(155,155,157,1);
        line-height:14px;
    }
    .val{
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height:14px;
    }
    .second_box{
        padding-bottom: 20px;
    }
    .second_tab{
        border:1px solid rgba(239,243,245,1);
        border-bottom-width: 0;
    }
    .second_box .second_tab:last-of-type
    {
        border-bottom-width: 1px;
    }
</style>
