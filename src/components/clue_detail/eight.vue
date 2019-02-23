<template>
    <div class="eight_box">
        <ul class="timeline">
            <timeline v-for="item in operations">
                <span slot="dot" class="mydot"></span>
                <span>{{item.str}}</span>
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
                operations:[{str:'abcde'}]
            }
        },
        watch:{
            tabName:{
                handler(val,oldVal){
                    if(val!=oldVal && val == 'eight'){
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
                fetcher.getCommunicationRecord({clueSubjectId:this.$route.params.id},(response)=>{
                    if(response.data.code==100000){
                        this.data = response.data.data;
                    }
                })
            }
        },
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
