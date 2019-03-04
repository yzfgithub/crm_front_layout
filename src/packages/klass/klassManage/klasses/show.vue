<template>
    <div class="class_details">
        <klass :token = 'token' :room_id = 'room_id' :class_data="class_data" :scores="scores" :klass_room="klass_room" ref="klass" @load="load" @update_message = 'load'></klass>
    </div>
</template>
<script>
    import klass from '@/components/klasses/myKlass'
    // import fetcher from '@/components/klasses/fetcher'
    export default {
        data() {
            return {
                // klass_id:'',
                token:'',
                room_id:'',
                class_data:{
                    student:{
                        name:''
                    },
                    coach:{
                        name:''
                    },
                    start_timeblock_index:'',
                    end_tiemblock_index:'',
                    timeblock:'',
                    weekDay:'',
                    year:'',
                    week_id:''
                },
                scores: [],
                klass_room: {
                }
            }
        },
        components:{
            klass
        },
        methods:{
            load(){
            //     fetcher.show(this.$route.params.id,(response) => {
            //         this.class_data = response.data.data;
            //         if(this.class_data.klasses_scores){
            //             this.scores = this.class_data.klasses_scores.data;
            //         }
            //         if(this.class_data.klass_room){
            //             this.klass_room = this.class_data.klass_room.data;
            //             this.token = this.klass_room.agora_token
            //             // this.token = '0069b136e828e004466a2ebe1f5290101aaIAAx9Z0nwEts6Y/zv+x7P54OjybvoBZN/Q+e0fOosdmq3wf8etoAAAAAKAC9pgAAZjrJWwUAAQAAAAAAAgAAAAAAAwAAAAAABAAAAAAAZQAAAAAA'
            //             this.room_id = this.klass_room.av_room_id?this.klass_room.av_room_id:'';
            //             // this.room_id = 'e7635560-a900-11e8-b41e-ddffba61b163'
            //         }
            //         if(this.class_data.status == 2 && this.klass_room){
            //             // var video = this.klass_room.av_type==0?this.klass_room.hlsPullUrl:this.klass_room.trtc_hls_pull_url;
            //             var video;
            //             switch (this.klass_room.av_type) {
            //                 case 0:
            //                     video=this.klass_room.hlsPullUrl
            //                     break;
            //                 case 1:
            //                     video=this.klass_room.trtc_hls_pull_url
            //                     break;
            //                 case 2:
            //                     video=this.klass_room.trtc_rtmp_pull_url
            //                     break;
            //                 case 3:
            //                     video=this.klass_room.zego_rtmp_pull_url
            //                     break;
            //                 default:
            //             }
            //             this.$refs.klass.play(video)
            //         }
            //     })
            }
        },
        created() {
            // this.klass_id=this.$route.params.id;
            this.load()
        },
    }
</script>
<style>
    .class_top{
        display: flex;
    }
    .class_top a{
        margin-right: 80px;
        color:#ccc;
    }
    .class_top h3{
        font-size: 1rem;
    }
</style>
