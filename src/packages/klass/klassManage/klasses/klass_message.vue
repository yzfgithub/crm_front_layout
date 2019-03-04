<template lang="html">
    <div class="">
        <message :message = "message" @load="load"></message>
    </div>
</template>

<script>
    import message from '@/components/klasses/message'
    // import fetcher from '@/components/klasses/fetcher'

    export default {
        data(){
            return {
                message:{}
            }
        },
        components:{
            message
        },
        methods:{
            load(){
                // fetcher.get_klass_message(this.$route.params.id,(response) => {
                //     this.message = response.data.data;
                // })
            }
        },
        created(){
            // this.load()
        }
    }
</script>

<style lang="css">
</style>
