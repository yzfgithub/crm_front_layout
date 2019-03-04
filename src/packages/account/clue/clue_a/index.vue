<template>
    <div>
        <div class="top">
            <div class="title">A类公海</div>
            <query :isZClue="false" class="form" :clueAForm = 'form' @queryBtn="queryBtn"></query>
        </div>
        <div class="bottom">
            <clueAForm :isZClue="false" :clueAData="clueAData" :meta="meta" @clearmultiple="clearmultiple" @currentPage="currentPage" @maxPage="maxPage"></clueAForm>
        </div>
    </div>

</template>
<script type="text/ecmascript-6">
    import query from '@/commons/clue_query_form/query'
    import clueAForm from '@/commons/clue_table/form'
    import fetcher from '@/fetchers/account/clue/clue'
    export default {
        data(){
            return{
                form:{

                },
                meta:{
                    current_page: 1,
                    total: 0,
                },

                clueAData:[{childName:'S',id:'111',checked:false,allSelect:true},{childName:'S',id:'222',checked:false,allSelect:true},{childName:'S',id:'333',checked:false,allSelect:true}]
            }
        },
        components:{
            query,clueAForm
        },
        methods:{
            queryBtn(){
                this.meta.current_page =1;
                this.load();
            },
            load(){//  discard： Z公海'是'
                fetcher.list(Object.assign(this.form,{discard:'否',poolId:'A',pageNum:this.meta.current_page}),(response)=>{
                    if(response.data.code === 100000){
                        let ret = response.data.data;

                        this.clueAData = ret.records.map((item,idx)=>{
                            return Object.assign(item,{
                                checked:(this.meta.current_page-1)*20+idx+1>1000?false:true
                            })
                        })
                        //如果上限选中，初始化设置为 checked ：true




                        this.meta={
                            current_page:ret.current,
                            total: ret.total
                        }
                    }else{
                        this.clueAData = [];
                        this.meta={
                            current_page: 1,
                            total: 0,
                        }
                    }
                })
            },
            clearmultiple(){
                this.clueAData=this.clueAData.map(item=>{return Object.assign(item,{checked:false})})
            },
            currentPage(){
                this.clueAData=this.clueAData.map(item=>{return Object.assign(item,{checked:true})})
                this.clueAData[0].a=true;
            },
            maxPage(){
                this.clueAData=this.clueAData.map(item=>{return Object.assign(item,{checked:true})})
                //重置第一页
                this.load();
            },

        },
        mounted(){
            this.load();
        }

    }
</script>
<style scoped>
    .top{
        background-color: #fff;
    }
    .top .title{
        color:#353536;
        font-size:18px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        text-align: left;
        margin-left: 20px;
        line-height: 50px;
        padding-top: 20px;
    }
    .top .form{
        margin-left: 20px;
        text-align: left;
    }
    .bottom{
        background-color: #fff;
        margin-top: 20px;
    }
</style>
