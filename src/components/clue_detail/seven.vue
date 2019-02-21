<template>
    <div class="seven_box">
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
    export default {
        data(){
            return{
                operations:[{str:'abcde'},{str:'desfag'}]
            }
        },
        components:{
            timeline
        },
        methods:{

        },
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
