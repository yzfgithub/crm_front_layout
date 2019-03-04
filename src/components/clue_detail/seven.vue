<template>
    <div class="seven_box">
        <ul class="timeline">
            <timeline v-for="(item,key) in dataList" :key="key">
                <span slot="dot" class="mydot"></span>
                <div v-if="item.type === '废弃'">
                    <span>【{{item.time}}】</span> &nbsp;&nbsp; <span>{{item.user}}</span> &nbsp; 因 <span style="color:orangered">【{{item.reason}}】</span>  将 所属公海从 【{{item.fromCluePool}}】 更新为 【{{item.toCluePool}}】
                </div>
                <div v-else>
                    <span>【{{item.time}}】</span> &nbsp;&nbsp;<span>{{item.fromUser}}</span> &nbsp; 将 客户归属人  从 【{{item.fromUser}}】 更新为 【{{item.toUser}}】
                </div>

            </timeline>
        </ul>
        <el-pagination class="page" @current-change="handleCurrentChange" :current-page="meta.current_page" :page-size="20" layout="total, prev, pager, next, jumper" :total="meta.total">
        </el-pagination>
    </div>
</template>
<script type="text/ecmascript-6">
    import timeline from '@/commons/timeLine/timeline'
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
                meta:{
                    current_page:1,
                    total:0
                },
                dataList:[],
            }
        },
        watch:{
            tabName:{
                handler(val,oldVal){
                    if(val!=oldVal && val == 'seventh'){
                        this.load();
                    }
                }
            }
        },
        components:{
            timeline
        },
        methods:{
            handleCurrentChange(val){

            },
            load(){
                fetcher.operation_logs({clueId:this.$route.params.id,pageNum:this.meta.current_page},(response)=>{
                    if(response.data.code==100000){
                        this.dataList = response.data.data.records;
                        console.log(this.dataList)
                        this.meta={
                            current_page:ret.current,
                            total: ret.total
                        }
                    }else{
                        this.dataList = [];
                        this.meta={
                            current_page: 1,
                            total: 0,
                        }
                    }
                })
            }
        },
        mounted(){
            this.load()
        }
    }
</script>
<style lang="css">
    .seven_box{
        padding-bottom: 20px;
    }
    .timeline{
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .mydot{
        display:inline-block;
        width: 6px;
        height: 6px;
        background-color: rgba(102,102,102,1);
        border-radius: 6px;
        position: absolute;
        top: 3px;
        left: 3px;
    }
</style>
