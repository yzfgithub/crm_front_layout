<template>
    <div class="first_box">
        <myTab :title="'家长信息'" :hasTitle="true">
            <audio :src="aac_file" controls="controls">
            </audio>
            <br />
            <span class="key">外呼人：</span><span class="val">暂无</span> &nbsp;&nbsp;&nbsp;
            <span class="key">开始时间：</span><span class="val">18872616235</span>&nbsp;&nbsp;&nbsp;
            <span class="key">结束时间：</span><span class="val">暂无</span>
        </myTab>
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
                aac_file:''
            }
        },
        watch:{
            tabName:{
                handler(val,oldVal){
                    if(val!=oldVal && val == 'six'){
                        this.load();
                    }
                }
            }
        },
        components:{
            myTab
        },
        methods:{
            load(){
                fetcher.getCommunicationRecord({clueSubjectId:this.$route.params.id},(response)=>{
                    if(response.data.code==100000){
                        this.data = response.data.data;
                    }
                })
            }
        },
    }
</script>
<style lang="css" scoped>
    audio{
        width: 247px;
        height: 40px;
    }
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
    .first_box{
        padding-bottom: 20px;
    }
    .first_box .my_tab_box:last-of-type
    {
        border-bottom-width: 1px;
    }
</style>
