<template lang="html">
    <div class="members">
        <el-table :data="network_list" stripe border ref="table">
            <!--<el-table-column label="丢包率" prop="loss_rate" v-if='show'></el-table-column>-->
            <!--<el-table-column label="平均响应时间" prop="rtt_average" v-if='show'>-->
            <!--</el-table-column>-->
            <!--<el-table-column label="响应时间平均偏差" prop="rtt_mean_deviation" v-if='show'>-->
            <!--</el-table-column>-->
            <!--<el-table-column label="网络状态" prop="network_status" v-if='show'>-->
                <!--<template slot-scope="scope" v-if='show'>-->
                    <!--{{network_stats(scope)}}-->
                <!--</template>-->
            <!--</el-table-column>-->
            <el-table-column label="上行" prop="upload_quality"  >
            </el-table-column>
            <el-table-column label="下行" prop="download_quality" >
            </el-table-column>
            <el-table-column label="网络状态" prop="network_status">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.network_status | statusFilter">{{scope.row.network_status}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="客户端类型" prop="server" :formatter="f_server"></el-table-column>
            <el-table-column label="采样时间" prop="created_at">
            </el-table-column>
        </el-table>
        <el-pagination layout="prev, pager, next" :total="meta.total" @current-change="load" :current-page.sync="meta.current_page" background>
        </el-pagination>
    </div>
</template>

<script>
    import formater from './formater'

    export default {
        data(){
            return{
                show:true,
            }
        },
        props:{
            network_list:{
                type: Array,
                required:true
            },
            meta:{
                type: Object,
                required:true
            },
        },
        filters: {
            // // el-tag类型转换
            statusFilter(status) {
                const statusMap = {
                    '网络好': 'success',
                    '网络一般': 'primary',
                    '网络较差': 'info',
                    '网络极差': 'danger',
                    '对方未进入教室': 'warning',

                }
                return statusMap[status]
            },
            // // 状态显示转换
            // formatStata(status) {
            //   console.log(status);

            //   const statusMap = {
            //     '网络好': '网络好',
            //     '网络一般': '网络一般',
            //     '网络较差': '网络较差',
            //     '网络极差': '网络极差',
            //     '对方未进入教室': '对方未进入教室',
            //  }
            //   return statusMap[status]
            // }
        },
        methods:{
            fmt_upload_quality(row,column,value){
                return formater.fmt_upload_quality(value)
            },
            fmt_download_quality(row,column,value){
                return formater.fmt_download_quality(value)
            },
            f_server(row,column,value){

                return formater.fmt_server(value)
            },
            network_stats(scope){

                if (scope.row.rtt_mean_deviation == null) {
                    this.show = false;
                }
                var netStateIndex = (scope.row.loss_rate * 1.0 / 20) * 0.5
                    + (scope.row.rtt_average * 1.0  / 1200) * 0.25 + (scope.row.rtt_mean_deviation  * 1.0 / 150) * 0.25;
                if (netStateIndex < 0.2625) {
                    return "A: 音视频通话流畅";
                } else if (netStateIndex < 0.55) {
                    return "B: 音视频通话卡顿";
                } else if (netStateIndex < 1) {
                    return "C: 音频通话流畅";
                } else {
                    return "D: 音频通话卡顿";
                }

            },
            load(){
                this.$emit('load')
            }
        }
    }
</script>

<style lang="css">
    .status{
        cursor: pointer
    }
    table{width: 100%;}
</style>
