<template lang="html">
    <div>
        <el-table :data="klass_records" stripe ref="table">
            <el-table-column label="文件名" prop="filename">
            </el-table-column>
            <el-table-column label="文件类型" prop="type"></el-table-column>
            <el-table-column label="地址" prop="url"></el-table-column>
            <el-table-column label="创建时间" prop="created_at"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <a @click="play(scope.row.url)">播放</a>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        props:{
            klass_records:{
                type:Array,
                required:true
            }
        },
        methods:{
            play(url, type){
                this.$emit('play', url);
            }
        }
    }
</script>

<style lang="css">
</style>
