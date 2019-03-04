<template>
    <el-table :data="scores">
        <el-table-column prop="score.name" label="曲目名称">
        </el-table-column>
        <el-table-column label="曲目图片">
            <template slot-scope="scope">
                <div class="" v-if="scope.row.score.music_type">
                    <img  :src="url" style="{background:#fff;width:130px;}" v-for="(url,key) in scope.row.score.image.split(';')"  @click="pop_img(url)" :key="key"/>
                </div>
                <div class="" v-else>
                    <img  :src="oss_url(url)" style="{background:#fff;width:130px;}" v-for="(url,key) in scope.row.score.image.split(';')"  @click="popup(url)" :key="key"/>
                </div>
                <!-- <img :src="oss_url(url)" style="{background:#fff;width:130px;}" v-for="url in scope.row.score.image.split(';')" v-if="scope.row.score.image" @click="popup(url)"/> -->
            </template>
        </el-table-column>
    </el-table>
</template>
<script>
    import tool from '@/utils/tool'

    export default {
        props:{
            scores:{
                type:Array,
                required:true
            }
        },
        methods:{
            oss_url(url){
                return tool.oss_url(url)
            },
            popup(url){
                window.open(this.oss_url(url), '_blank')
            },
            pop_img(url){
                window.open(url, '_blank')
            }
        }
    }
</script>
<style>

</style>
