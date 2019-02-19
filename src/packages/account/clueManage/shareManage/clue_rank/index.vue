<template>
    <div>
        <div class="top">
            <div class="title">排名搜索</div>
            <query class="form" :clueAForm = 'form'></query>
        </div>
        <div class="bottom">
            <clueAForm :clueAData="clueAData"></clueAForm>
        </div>
    </div>

</template>
<script type="text/ecmascript-6">
    import query from '@/components/clue_rank/query'
    import clueAForm from '@/components/clue_rank/form'
    export default {
        data(){
            return{
                form:{

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
