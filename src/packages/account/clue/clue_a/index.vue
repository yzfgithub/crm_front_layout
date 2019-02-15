<template>
    <div>
        <div class="top">
            <div class="title">A类公海</div>
            <query class="form" :clueAForm = 'form'></query>
        </div>
        <div class="bottom">
            <clueAForm :clueAData="clueAData"></clueAForm>
        </div>
    </div>

</template>
<script type="text/ecmascript-6">
    import query from './query'
    import clueAForm from './form'
    export default {
        data(){
            return{
                form:{

                },
                clueAData:[
                    {id:'11111',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'11111',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'11111',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'11111',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'11111',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'11111',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'11111',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'11111',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'11111',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'11111',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'11111',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
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
        margin-left: 40px;
        line-height: 50px;
        padding-top: 20px;
    }
    .top .form{
        margin-left: 40px;
        text-align: left;
    }
    .bottom{
        background-color: #fff;
        margin-top: 20px;
    }
</style>
