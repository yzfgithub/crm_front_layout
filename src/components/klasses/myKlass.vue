<template>
    <div>
        <el-row :gutter="10">
            <el-col  :md="24" :lg="12">
                <div class="box">
                    <span class="title">基础信息</span>
                    <table class="table">
                        <tr>
                            <td>学生：</td><td>yzf</td>
                        </tr>
                        <tr>
                            <td>上课时间：</td>
                            <td>2018-01-02 周一 05：00-05：28</td>
                        </tr>
                        <tr>
                            <td>老师：</td>
                            <td> yzf老师</td>
                        </tr>
                        <tr>
                            <td>销售：</td>
                            <td>yzf</td>
                        </tr>
                        <tr>
                            <td>班主任：</td>
                            <td>yzf</td>
                        </tr>
                        <tr>
                            <td>教务：</td>
                            <td>yzf</td>
                        </tr>
                        <tr>
                            <td>课类型：</td>
                            <td>固定课</td>
                        </tr>
                        <tr>
                            <td>老师检测设备：</td>
                            <td>
                                <div class="t_eq_m" v-if = 'jc_show'>
                                    <div class="equipment">
                                        <span class="name">ios</span>
                                        <span>{{equipment1}}</span>
                                        <i v-if = "false" type="success" class="el-icon-success"></i>
                                        <i v-else type="success" class="el-icon-error"></i>
                                        <img class="next" src="./next.png" alt="">
                                    </div>
                                    <div class="equipment">
                                        <span>{{equipment2}}</span>
                                        <i v-if = "false" type="success" class="el-icon-success"></i>
                                        <i v-else type="success" class="el-icon-error"></i>
                                        <img class="next" src="./next.png"  alt="">
                                    </div>
                                    <div class="equipment">
                                        <span>{{equipment3}}</span>
                                        <i v-if = "false" type="success" class="el-icon-success"></i>
                                        <i v-else type="success" class="el-icon-error"></i>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>老师检测设备：</td>
                            <td>
                                <div class="t_eq_m" v-if = 'jc_s_show'>
                                    <div class="equipment">
                                        <span class="name">{{device_name('student_device_adaptation')}}</span>
                                        <span>{{equipment1}}</span>
                                        <i v-if = "true" type="success" class="el-icon-success"></i>
                                        <i v-else type="success" class="el-icon-error"></i>
                                        <img class="next" src="./next.png" alt="">
                                    </div>
                                    <div class="equipment">
                                        <span>{{equipment2}}</span>
                                        <i v-if = "true" type="success" class="el-icon-success"></i>
                                        <i v-else type="success" class="el-icon-error"></i>
                                        <img class="next" src="./next.png"  alt="">
                                    </div>
                                    <div class="equipment">
                                        <span>{{equipment3}}</span>
                                        <i v-if = "true" type="success" class="el-icon-success"></i>
                                        <i v-else type="success" class="el-icon-error"></i>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>孩子信息：</td>
                            <td>这里是孩子信息这里是孩子信息这里是孩子信息这里是孩子信息这里是孩子信息这里是孩子信息这里是孩子信息这里是孩子信息这里是孩子信息这里是孩子信息这里是孩子信息</td>
                        </tr>
                        <tr>
                            <td>家长评价：</td>
                            <td>暂无</td>
                        </tr>
                        <tr>
                            <td>家长评价星数：</td>
                            <td>暂无</td>
                        </tr>
                        <tr>
                            <td>家长评价时间：</td>
                            <td>暂无</td>
                        </tr>

                    </table>

                    <table>
                        <tr>
                            <td>云通道</td>
                            <td>
                                <el-button size = 'mini' :type="btn_type(0)" :disabled="btn_status(0)" @click = "change_type('0')">网易云</el-button>
                                <el-button size = 'mini' :type="btn_type(1)" :disabled="btn_status(1)" @click = "change_type('1')">腾讯云</el-button>
                                <el-button size = 'mini' :type="btn_type(2)" :disabled="btn_status(2)" @click = "change_type('2')">声网</el-button>
                                <el-button size = 'mini' :type="btn_type(3)" :disabled="btn_status(3)" @click = "change_type('3')">即构</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td>Agora播放</td>
                            <td>
                                <el-button size = 'mini' id="join" class="btn btn-primary" @click="join" type="success" plain>播放</el-button>
                                <el-button size = 'mini' id="leave" class="btn btn-primary" @click="leave" type="danger" plain>停止</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td>白板监控</td>
                            <td>
                                <el-button size = 'mini' id="join" class="btn btn-primary" @click="AI_Music" type="primary" plain>白板</el-button>
                            </td>
                        </tr>
                    </table>

                </div>

                <div class="box">
                <span class="title">上课表现</span>
                <table>
                    <tr>
                        <td>上课表现</td>
                        <td>未评价</td>
                    </tr>
                    <tr>
                        <td>音符标准度</td>
                        <td>未评价</td>
                    </tr>
                    <tr>
                        <td>节奏准确度</td>
                        <td>未评价</td>
                    </tr>
                    <tr>
                        <td>连贯性</td>
                        <td>未评价</td>
                    </tr>
                </table>
                <span class="title">课堂笔记</span>
                <table>
                    <tr>
                        <td>这是我的课堂表现这是我的课堂表现这是我的课堂表现这是我的课堂表现这是我的课堂表现这是我的课堂表现这是我的课堂表现</td>
                    </tr>
                </table>
            </div>

            <div class="box">
                <span class="title">课网络状态记录</span>
                <table>
                    <tr>
                        <td>课网络状态记录</td>
                    </tr>
                    <tr>
                        <network_stats></network_stats>
                    </tr>
                </table>
            </div>

            <div class="box">
                <span class="title">进出房间记录</span>
                <table class="table">
                    <tr>
                        <th></th>
                        <th>学生</th>
                        <th>老师</th>
                    </tr>
                    <tr>
                        <td>首次进入时间</td>
                        <td>无</td>
                        <td>无</td>
                    </tr>
                    <tr>
                        <td>最后进入时间</td>
                        <td>无</td>
                        <td>无</td>
                    </tr>
                    <tr>
                        <td>首次退出时间</td>
                        <td>无</td>
                        <td>无</td>
                    </tr>
                    <tr>
                        <td>最后退出时间</td>
                        <td>无</td>
                        <td>无</td>
                    </tr>
                    <tr>
                        <td>进出房间次数</td>
                        <td>无</td>
                        <td>无</td>
                    </tr>
                </table>
            </div>

            </el-col>
            <el-col  :md="24" :lg="12">

                <div class="box">
                    <span class="title">陪练曲目</span>

                    <table>
                        <tr>
                            <td>
                                <el-button type="warning" size="mini" @click="qm_sc_btn('zz')">自主上传</el-button>
                                <el-button type="success" size="mini" @click="qm_sc_btn('qk')">曲库上传</el-button>
                            </td>
                        </tr>
                    </table>
                    <klass_score :scores="scores"></klass_score>


                    <el-card class="box-card jc_list" v-show= 'dialogFormVisible_qk' ref = 'qk_list'>
                        <div slot="header" class="jc_plqm">
                            <span>教材</span>
                            <el-button id = 'del_btn' size = 'mini' icon="el-icon-close" circle @click="qm_sc_btn('qk')"></el-button>
                        </div>
                        <qk_list @jc_list = 'jc_list' :qk_top = 'qk_top'  @loading = 'loading' :klass_id = 'klass_id' @change_select_item = 'change_select_item' :selected_qm = 'selected_qm' @change_self_list = 'change_self_list'  :books="books" :meta="meta" @load = 'load' @load_qm_list = 'load_qm_list' @cancel_action_qk = 'cancel_action_qk'></qk_list>
                    </el-card>

                    <!--<div slot="header" class="jc_plqm">-->
                        <!--<span>教材</span>-->
                        <!--<el-button id = 'del_btn' size = 'mini' icon="el-icon-close" circle @click="qm_sc_btn('qk')"></el-button>-->
                    <!--</div>-->
                    <!--<qk_list @jc_list = 'jc_list' :qk_top = 'qk_top'  @loading = 'loading' :klass_id = 'klass_id' @change_select_item = 'change_select_item' :selected_qm = 'selected_qm' @change_self_list = 'change_self_list'  :books="books" :meta="meta" @load = 'load' @load_qm_list = 'load_qm_list' @cancel_action_qk = 'cancel_action_qk'></qk_list>-->


                </div>

                <div class="box">
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <span class="title">老师点评</span>
                            <audio :src="'http://www.baidu.com'" controls="controls">
                            </audio>
                        </el-col>
                        <el-col :span="12">
                            <span class="title">帮销售促单</span>
                            <audio :src="'http://www.baidu.com'" controls="controls">
                            </audio>
                        </el-col>
                    </el-row>
                </div>

                <div class="box">
                    <span class="title">质检</span>
                    <table>
                        <tr>
                            <td>视频</td>
                        </tr>
                        <tr>
                            <td>
                                <video-player class="video-player-box"
                                              ref="videoPlayer"
                                              :options="playerOptions"
                                              :playsinline="true"
                                >
                                </video-player>
                            </td>
                        </tr>
                        <tr>
                            <td>音频</td>
                        </tr>
                        <tr>
                            <td class="audio">
                                <audio id="audio" :src="aac_file" controls="controls">
                                </audio>
                                <el-button @click="setAudio(1,'btn_1')" :type="setType=='btn_1'?'primary':'info'" size="mini" round>1.0倍</el-button>
                                <el-button @click="setAudio(1.2,'btn_2')" :type="setType=='btn_2'?'primary':'info'" size="mini" round>1.2倍</el-button>
                                <el-button @click="setAudio(1.5,'btn_3')" :type="setType=='btn_3'?'primary':'info'" size="mini" round>1.5倍</el-button>
                                <el-button @click="setAudio(2,'btn_4')" :type="setType=='btn_4'?'primary':'info'" size="mini" round>2.0倍</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td>媒体记录</td>
                        </tr>
                        <tr>
                            <td>
                                <klass_records_list :klass_records="klass_records" @play="play"></klass_records_list>
                            </td>
                        </tr>
                    </table>

                </div>

                <div class="box">
                    <span class="title">课信息</span>
                    <table>
                        <tr>
                            <klass_message></klass_message>
                        </tr>
                    </table>
                </div>
            </el-col>
        </el-row>


        <!--上传曲目-->
        <el-dialog title="自主上传">
            <qu_dialog :klass_id = 'klass_id' @cancel_action = 'cancel_action'  :coach = 'coach' :dialog_type = 'dialog_type' @ok_action = 'ok_action' @loading = 'loading'></qu_dialog>
        </el-dialog>



    </div>
</template>
<script type="text/ecmascript-6">
    import 'video.js/dist/video-js.css'
    import { videoPlayer } from 'vue-video-player'
    import  AgoraRTC  from 'agora-rtc-sdk'

    import 'videojs-flash'
    import 'videojs-contrib-hls'

    import formater from './formater'
    import qu_dialog from './qu_dialog'
    import klass_score from './klass_score'
    import klass_records_list from './klass_records_list'
    import network_stats from '@/packages/klass/klassManage/klasses/network_stats'
    import klass_message from '@/packages/klass/klassManage/klasses/klass_message'

    export default {
        props:{
            class_data:{
                type:Object,
                require:true
            }
        },
        data(){
            return {
                playerOptions : {
                    width: 560,
                    height: 340,
                    muted: false,
                    autoplay: false,
                    language: 'en',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    controlBar: {
                        timeDivider: false,
                        durationDisplay: true,
                        progressControl: true,
                        customControlSpacer: true
                    },
                    manualCleanup: true,
                    techOrder: ['html5', 'flash']
                },
            }
        },
        components:{
            videoPlayer,qu_dialog,klass_score,klass_records_list,network_stats,klass_message
        },
        computed:{
            jc_show(){
                return true;
                // if(this.class_data.klass_room){
                //     if (this.class_data.klass_room.data.coach_device_adaptation) {
                //         return true
                //     }else {
                //         return false
                //     }
                // }else {
                //     return false
                // }
            },
            jc_s_show(){
                return true;
                // if(this.class_data.klass_room){
                //     if (this.class_data.klass_room.data.student_device_adaptation) {
                //         return true
                //     }else {
                //         return false
                //     }
                // }else {
                //     return false
                // }
            },
            equipment1(){
                return formater.fmt_equipment(1)
            },
            equipment2(){
                return formater.fmt_equipment(2)
            },
            equipment3(){
                return formater.fmt_equipment(3)
            },
        },
        methods:{
            //切换通道
            btn_type(av_type){
                if(av_type==0){
                    return 'info'
                }else{
                    return 'danger'
                }
                // if(!this.klass_room.av_type){
                //     if(av_type==0){
                //         return 'info'
                //     }else{
                //         return 'danger'
                //     }
                // }else{
                //     if(this.klass_room.av_type == av_type){
                //         return 'info'
                //     }else{
                //         return 'danger'
                //     }
                // }
            },
            btn_status(av_type){
                if(av_type==0){
                    return true
                }else{
                    return false
                }
                // if(!this.klass_room.av_type){
                //     if(av_type==0){
                //         return true
                //     }else{
                //         return false
                //     }
                // }else{
                //     if(this.klass_room.av_type == av_type){
                //         return true
                //     }else{
                //         return false
                //     }
                // }
            },
            change_type(value){
                this.$confirm(value==0?'是否切换至网易云频道':value==1?'是否切换至腾讯云频道': value==2?'是否切换至声网频道':'是否切换至即构频道', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(() => {
                    fetcher.change_type(this.$route.params.id,value,(response)=>{
                        this.$emit('update_message')
                        this.$message('切换成功!');

                        window.location.reload()
                    })
                }).catch(() => {
                    this.$message.error('取消切换');
                });
            },

            notice_result(msg){
                if(this.class_data.klass_room){
                    if (this.class_data.klass_room.data[msg].data) {
                        if (this.class_data.klass_room.data[msg].data.notice_result == 1) {
                            return true
                        } else {
                            return false
                        }
                    }
                }
            },
            camera_result(msg){
                if(this.class_data.klass_room){
                    if (this.class_data.klass_room.data[msg].data) {
                        if (this.class_data.klass_room.data[msg].data.camera_result == 1) {
                            return true
                        } else {
                            return false
                        }
                    }
                }
            },
            ear_mic_result(msg){
                if(this.class_data.klass_room){
                    if (this.class_data.klass_room.data[msg].data) {
                        if (this.class_data.klass_room.data[msg].data.ear_mic_result == 1) {
                            return true
                        } else {
                            return false
                        }
                    }
                }
            },
            device_name(msg){
                return 'sss'
                // if(this.class_data.klass_room){
                //     if (this.class_data.klass_room.data[msg].data) {
                //         return   this.class_data.klass_room.data[msg].data.device_name
                //     }
                // }
            },
            //跳转白板
            AI_Music(){
                let token = window.localStorage.token;
                let ai_id = this.$route.params.id;
                // let ai_id = '1e612d00-357e-11e9-9020-493f7e995642';
                let domain_name = document.domain;
                let params = {
                    token:token,
                    ai_id:ai_id
                }
                let d_p = domain_name.split('.')[0];
                let url = ''
                if (document.domain === 'localhost') {
                    url = `http://localhost:8080/#/login?token=${token}?ai_id=${ai_id}?d_p=d`;
                } else {
                    url = `http://${d_p}.aimusic.kuaipeilian.com/#/login?token=${token}?ai_id=${ai_id}?d_p=${d_p}`;
                }
                if (url) {
                    window.open(url)
                }else{
                    this.$message('白板URL不存在')
                }

            },

        }
    }
</script>
<style lang="css" scoped>
    .box{
        background-color: #fff;
        border-radius: 5px;
        padding: 10px 5px;
        margin:10px 0;
    }
    .title{
        font-size: 14px;
        line-height: 30px;
    }
    table{
        font-size: 12px;
    }
    table tr{
        line-height: 18px;
        height: 30px;
    }
    table tr .t_eq_m{
        display: flex;
    }
    table tr td:first-child{
        min-width: 90px;
    }
    .t_eq_m,{
        display: flex;
        /* box-sizing: border-box; */
        padding: 7px 0;
    }
    .t_eq_m .next{
        width: 35px;
        padding: 0 30px 4px 30px;
        align-self: center;
    }
    .t_eq_m .el-icon-success:before{
        padding-left: 10px;
        color: #67C23A;
        font-size: 20px;
    }
    .t_eq_m .el-icon-error:before{
        padding-left: 10px;
        color: rgb(203,24,25);
        font-size: 20px;
    }

    .audio{
        display: flex;
        align-items: center;
    }
    .audio audio{
        margin-right: 20px;
    }
</style>
