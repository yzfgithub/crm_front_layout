<template>
    <div class="eight_box">
        <ul class="timeline">
            <timeline v-for="(item,key) in dataList" :key="key">
                <span slot="dot" class="mydot"></span>

                    <span>【{{item.registeredTime}}】</span> &nbsp;&nbsp; <span>{{item.childName}}</span> &nbsp; 通过【{{item.byWay}}】  {{item.operation}}



            </timeline>
        </ul>
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
                dataList:[]
            }
        },
        watch:{
            tabName:{
                handler(val,oldVal){
                    if(val!=oldVal && val == 'eighth'){
                        this.load();
                    }
                }
            }
        },
        components:{
            timeline
        },
        methods:{
            load(){
                fetcher.source_records({clueId:this.$route.params.id},(response)=>{
                    if(response.data.code==100000){
                        this.dataList = response.data.data;
                        console.log(this.dataList)
                    }else{
                        this.dataList = [];
                    }
                })
            }
        },
        mounted(){
            this.load();
        }
    }
</script>
<style lang="css">
    .eight_box{
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
