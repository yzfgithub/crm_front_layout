<template>
    <div>
        <div class="top">
            <div class="title">赠课审批</div>
            <query class="form" :clueAForm = 'form' @queryBtn="queryBtn"></query>
        </div>
        <div class="bottom">
            <clueAForm :clueAData="clueAData"  :meta="meta"></clueAForm>
        </div>
    </div>

</template>
<script type="text/ecmascript-6">
    import query from '@/components/handselReview/query'
    import clueAForm from '@/components/handselReview/form'
    // import fetcher from '@/fetchers/account/clue/clue'
    export default {
        data(){
            return{
                form:{

                },
                meta:{
                    current_page: 1,
                    total: 0,
                },
                clueAData:[
                    {id:'11111',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'22222',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'33333',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'44444',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'55555',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'66666',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'77777',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'88888',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'99999',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'12345',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'23456',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                ]
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
            load(){
                // fetcher.list(Object.assign(this.form,{discard:'否',poolId:'A',pageNum:this.meta.current_page}),(response)=>{
                    // if(response.data.code === 100000){
                    //     let ret = response.data.data;
                    //     this.clueAData = ret.records;
                    //     this.meta={
                    //         current_page:ret.current,
                    //         total: ret.total
                    //     }
                    // }else{
                    //     this.clueAData = [];
                    //     this.meta={
                    //         current_page: 1,
                    //         total: 0,
                    //     }
                    // }
                // })
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
