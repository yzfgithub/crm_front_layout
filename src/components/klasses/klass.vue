<template lang="html">
    <div>
        <!--<div class="" v-if="class_data.coach && can_show(class_data.coach.name)">-->
            <!--<div class="" style=" text-align:center" v-show="freshen">-->
                <!--<p style="margin-top:20px">友情提示：正在排课中...</p>-->
                <!--<p @click="loading">请 <span class="freshen">刷新</span></p>-->
            <!--</div>-->
        <!--</div>-->
        <div class="class_top">
            <a href="#"></a>
            <h3>我的点评表</h3>
        </div>
        <el-row>
            <table class="table">
                <tr>
                    <td>学生：</td><td><router-link v-if="class_data.student" :to="'/students/show/'+class_data.student.id">{{fullStudentname}}</router-link></td>
                </tr>
                <tr>
                    <td>上课时间：</td>
                    <td>{{class_data.start_date}}</td>
                    <td>{{class_day(class_data)}}</td>
                    <td>{{class_time(class_data)}}</td>
                </tr>
                <tr>
                    <td>老师：</td>
                    <td><router-link v-if="class_data.coach" :to="'/coaches/show/'+class_data.coach.id">{{fullCoachname}}</router-link>老师</td>
                </tr>
                <tr>
                    <td>销售：{{class_data.sales_name}}</td>
                    <td>班主任：{{class_data.class_teacher_name}}</td>
                    <td>教务：{{class_data.educational_administration_name}}</td>
                </tr>
                <tr>
                    <td>课类型：{{fmt_type(class_data.type)}}</td>
                    <!--<td>老师设备：<el-tag :type="class_data.coach_adaptation_status | statusFilter">{{class_data.coach_adaptation_status | formatStata}}</el-tag></td>-->
                    <!--<td>学生设备：<el-tag :type="class_data.student_adaptation_status | statusFilter">{{class_data.student_adaptation_status | formatStata}}</el-tag></td>-->
                </tr>

            </table>
            <div class="equipment_list">
                <div class="t_eq">
                    <span>老师检测设备:</span>
                    <div class="t_eq_m" v-if = 'jc_show'>
                        <div class="equipment">
                            <span class="name">{{device_name('coach_device_adaptation')}}</span>
                            <span>{{equipment1}}</span>
                            <i v-if = "ear_mic_result('coach_device_adaptation')" type="success" class="el-icon-success"></i>
                            <i v-else type="success" class="el-icon-error"></i>
                            <img class="next" src="./next.png" alt="">
                        </div>
                        <div class="equipment">
                            <span>{{equipment2}}</span>
                            <i v-if = "camera_result('coach_device_adaptation')" type="success" class="el-icon-success"></i>
                            <i v-else type="success" class="el-icon-error"></i>
                            <img class="next" src="./next.png"  alt="">
                        </div>
                        <div class="equipment">
                            <span>{{equipment3}}</span>
                            <i v-if = "notice_result('coach_device_adaptation')" type="success" class="el-icon-success"></i>
                            <i v-else type="success" class="el-icon-error"></i>
                        </div>
                    </div>
                </div>
                <div class="s_eq">
                    <span>学生检测设备:</span>
                    <div class="t_eq_m" v-if = 'jc_s_show'>
                        <div class="equipment">
                            <span class="name">{{device_name('student_device_adaptation')}}</span>
                            <span>{{equipment1}}</span>
                            <i v-if = "ear_mic_result('student_device_adaptation')" type="success" :class="ear_mic_result('student_device_adaptation')?'el-icon-success':'el-icon-error'"></i>
                            <!-- <i v-else type="success" class="el-icon-error"></i> -->
                            <img class="next" src="./next.png" alt="">
                        </div>
                        <div class="equipment">
                            <span>{{equipment2}}</span>
                            <i v-if = "camera_result('student_device_adaptation')" type="success" class="el-icon-success"></i>
                            <i v-else type="success" class="el-icon-error"></i>
                            <img class="next" src="./next.png"  alt="">
                        </div>
                        <div class="equipment">
                            <span>{{equipment3}}</span>
                            <i v-if = "notice_result('student_device_adaptation')" type="success" class="el-icon-success"></i>
                            <i v-else type="success" class="el-icon-error"></i>
                        </div>
                    </div>
                </div>


            </div>
        </el-row>
        <el-row>
            <el-row >
                <div class="row_line">
                    孩子信息：{{class_data.student.feedback||'暂无'}}
                </div>
            </el-row>
            <el-row >
                <div class="row_line">
                    家长评价：{{class_data.evaluate_content ||'暂无'}}
                </div>
            </el-row>
            <el-row >
                <div class="row_line">
                    家长评价星数：{{class_data.evaluate_rank==null?'暂无':class_data.evaluate_rank+'星'}}
                </div>
            </el-row>
            <el-row >
                <div class="row_line">
                    家长评价时间：{{class_data.evaluated_at==null?'暂无':class_data.evaluated_at}}
                </div>
            </el-row>
            <el-row >
                <div class="row_line table">
                    云通道：
                    <el-button size = 'mini' :type="btn_type(0)" :disabled="btn_status(0)" @click = "change_type('0')">网易云</el-button>
                    <el-button size = 'mini' :type="btn_type(1)" :disabled="btn_status(1)" @click = "change_type('1')">腾讯云</el-button>
                    <el-button size = 'mini' :type="btn_type(2)" :disabled="btn_status(2)" @click = "change_type('2')">声网</el-button>
                    <el-button size = 'mini' :type="btn_type(3)" :disabled="btn_status(3)" @click = "change_type('3')">即构</el-button>
                </div>
            </el-row>
            <table class="table table_msg">
                <tr class="last_tr">

                    <td class="left_td_img">
                        <span>Agora播放：   </span>
                        <el-button size = 'mini' id="join" class="btn btn-primary" @click="join" type="success" plain>播放</el-button>
                        <el-button size = 'mini' id="leave" class="btn btn-primary" @click="leave" type="danger" plain>停止</el-button>
                    </td>
                    <!--<td>-->
                    <!--<div id="voice_agora">-->
                    <!--<img v-if = 'play_img' id = 'voice_img' src="./timg3.gif" alt="">-->
                    <!--</div>-->
                    <!--</td>-->

                    <!--</tr>-->
                <tr>
                    <td  v-if = 'play_img'>
                        <div id="video" style="margin:0 auto;">
                        </div>
                    </td>
                </tr>
            </table>
        </el-row>
        <el-card class="box-card">
            <div slot="header" class="plqm">
                <span>陪练曲目</span>
                <div class="qm_send" v-if = "can('post.uploading_music')">
                    <el-button type="warning" size="mini" @click="qm_sc_btn('zz')">自主上传</el-button>
                    <el-button type="success" size="mini" @click="qm_sc_btn('qk')">曲库上传</el-button>
                    <el-dialog :title="dialog_title" :visible.sync="dialogFormVisible">
                        <qu_dialog :klass_id = 'klass_id' @cancel_action = 'cancel_action'  :coach = 'coach' :dialog_type = 'dialog_type' @ok_action = 'ok_action' @loading = 'loading'></qu_dialog>
                    </el-dialog>
                </div>
            </div>
            <klass_score :scores="scores"></klass_score>
        </el-card>
        <el-card class="box-card jc_list" v-show= 'dialogFormVisible_qk' ref = 'qk_list'>
            <div slot="header" class="jc_plqm">
                <span>教材</span>
                <el-button id = 'del_btn' size = 'mini' icon="el-icon-close" circle @click="qm_sc_btn('qk')"></el-button>
            </div>
            <qk_list @jc_list = 'jc_list' :qk_top = 'qk_top'  @loading = 'loading' :klass_id = 'klass_id' @change_select_item = 'change_select_item' :selected_qm = 'selected_qm' @change_self_list = 'change_self_list'  :books="books" :meta="meta" @load = 'load' @load_qm_list = 'load_qm_list' @cancel_action_qk = 'cancel_action_qk'></qk_list>
        </el-card>
        <el-card class="box-card">
            <table class="table" >
                <tr>
                    <td>上课表现：</td>
                    <td>{{fnt_perfromance(class_data.class_rank)}}</td>
                </tr>
                <tr>
                    <td>音符标准度：</td>
                    <td>{{fnt_perfromance(class_data.note_rank) }}</td>
                </tr>
                <tr>
                    <td>节奏准确度：</td>
                    <td>{{fnt_perfromance(class_data.rhythm_rank)}}</td>
                </tr>
                <tr>
                    <td>连贯性：</td>
                    <td>{{fnt_perfromance(class_data.coherence_rank)}}</td>
                </tr>
            </table>
        </el-card>
        <el-card class="box-card">
            <table class="table">
                <tr><td>老师点评</td><td>帮销售促单</td></tr>
                <tr>
                    <td>
                        <audio :src="oss_url(class_data.voice_comment)" controls="controls">
                        </audio>
                    </td>
                    <td>
                        <audio :src="oss_url(class_data.voice_for_cc)" controls="controls">
                        </audio>
                    </td>
                </tr>
            </table>
        </el-card>
        <el-card class="box-card">
            <table class="table">
                <tr><td>课堂笔记</td></tr>
                <tr><td>{{class_data.note}}</td></tr>
            </table>
        </el-card>
        <el-card class="box-card">
            <table class="table">
                <tr>
                    <td>质检</td>
                </tr>
                <tr>
                    <td >
                        <video-player class="video-player-box"
                                      ref="videoPlayer"
                                      :options="playerOptions"
                                      :playsinline="true"
                        >
                        </video-player>
                    </td>
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
                    <td>
                        <klass_records_list :klass_records="klass_records" @play="play"></klass_records_list>
                    </td>
                </tr>
            </table>
        </el-card>
        <el-card class="box-card">
            <table>
                <tr>
                    <td>课网络状态记录</td>
                </tr>
                <tr>
                    <network_stats></network_stats>
                </tr>
            </table>
        </el-card>
        <el-card class="box-card">
            <table>
                <tr>
                    <td>课信息</td>
                </tr>
                <tr>
                    <klass_message></klass_message>
                </tr>
            </table>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>进出房间记录</span>
            </div>
            <table class="table">
                <tr>
                    <th></th>
                    <th>学生</th>
                    <th>老师</th>
                </tr>
                <tr>
                    <td>首次进入时间</td>
                    <td>{{klass_room.student_first_in_time}}</td>
                    <td>{{klass_room.coach_first_in_time}}</td>
                </tr>
                <tr>
                    <td>最后进入时间</td>
                    <td>{{klass_room.student_last_in_time}}</td>
                    <td>{{klass_room.coach_last_in_time}}</td>
                </tr>
                <tr>
                    <td>首次退出时间</td>
                    <td>{{klass_room.student_first_out_time}}</td>
                    <td>{{klass_room.coach_first_out_time}}</td>
                </tr>
                <tr>
                    <td>最后退出时间</td>
                    <td>{{klass_room.student_last_out_time}}</td>
                    <td>{{klass_room.coach_last_out_time}}</td>
                </tr>
                <tr>
                    <td>进出房间次数</td>
                    <td>{{klass_room.student_inout_count}}</td>
                    <td>{{klass_room.coach_inout_count}}</td>
                </tr>
            </table>
        </el-card>
    </div>
</template>

<script>
    import 'video.js/dist/video-js.css'
    import { videoPlayer } from 'vue-video-player'
    import  AgoraRTC  from 'agora-rtc-sdk'

    import 'videojs-flash'
    import 'videojs-contrib-hls'
    import formater from './formater'
    import tool from '@/utils/tool'
    import klass_score from './klass_score'
    import klass_records_list from './klass_records_list'
    import network_stats from '@/packages/klass/klassManage/klasses/network_stats'
    import klass_message from '@/packages/klass/klassManage/klasses/klass_message'
    import fetcher from './fetcher'
    import qu_dialog from './qu_dialog'
    import qk_list from './qk_list.vue'
    // import fetcher_jc from '@/components/books/fetcher'

    export default {

        data: function(){
            var playerOptions = {
                width: 960,
                height: 540,
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
            }

            return {
                meta:{
                    current_page: 1,
                    total: 0
                },
                klass_id:'',
                books:[],
                item_id:'',
                qk_top:'',
                selected_qm:false,
                dialogFormVisible: false,
                dialogFormVisible_qk: false,
                playerOptions: playerOptions,
                aac_file: null,
                freshen:true,
                dialog_title:'',
                dialog_type:'',
                coach:{},
                client:null,
                play_img:false,
                setType:'btn_1',

            }
        },
        filters: {
            // el-tag类型转换
            statusFilter(status) {
                const statusMap = {
                    0: 'danger',
                    1: 'success',
                    2: 'danger',
                    3: 'danger'
                }
                return statusMap[status]
            },
            // 状态显示转换
            formatStata(status) {
                const statusMap = {
                    0: '不适配',
                    1: '适配',
                    2: '可能不适配',
                    3: '未知'
                }
                return statusMap[status]
            }
        },
        props:{
            video_url:{type:String},
            class_data:{
                type:Object,
                required:true
            },
            scores:{
                type:Array,
                required:true
            },
            klass_room:{
                type:Object,
                required:true
            },
            token:{
                type:String,
                required:true
            },
            room_id:{
                type:String,
                required:true
            }
        },
        components:{
            klass_score, klass_records_list,network_stats,klass_message,videoPlayer,qu_dialog,qk_list
        },
        computed:{
            av_type(){
                if (this.klass_room&&this.klass_room.av_type==0) {
                    return true
                }else {
                    return false
                }
            },
            klass_records:function(){
                if(this.class_data.klass_records){
                    return this.class_data.klass_records.data
                }else{
                    return []
                }
            },
            fullStudentname(){
                if(this.class_data.student != null){
                    return  this.class_data.student.name;
                }else{
                    return ''
                }
            },
            fullCoachname(){
                if(this.class_data.coach != null){
                    return this.class_data.coach.name;
                }else{
                    return ''
                }
            },
            player() {
                return this.$refs.videoPlayer.player
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
            jc_show(){
                if(this.class_data.klass_room){
                    if (this.class_data.klass_room.data.coach_device_adaptation) {
                        return true
                    }else {
                        return false
                    }
                }else {
                    return false
                }
            },
            jc_s_show(){
                if(this.class_data.klass_room){
                    if (this.class_data.klass_room.data.student_device_adaptation) {
                        return true
                    }else {
                        return false
                    }
                }else {
                    return false
                }
            },

        },
        created(){
            this.load()

        },
        methods:{
            setAudio(num,str){
                let dom = $('#audio')[0];
                dom.playbackRate=num;
                this.setType=str;
            },
            btn_type(av_type){
                if(!this.klass_room.av_type){
                    if(av_type==0){
                        return 'info'
                    }else{
                        return 'danger'
                    }
                }else{
                    if(this.klass_room.av_type == av_type){
                        return 'info'
                    }else{
                        return 'danger'
                    }
                }
            },
            btn_status(av_type){
                if(!this.klass_room.av_type){
                    if(av_type==0){
                        return true
                    }else{
                        return false
                    }
                }else{
                    if(this.klass_room.av_type == av_type){
                        return true
                    }else{
                        return false
                    }
                }
            },
            join(){
                this.play_img=true;
                this.getDevices();
                this.agoraTC_logger()
                //创建 this.client 对象
                var channel_key = this.token;
                var appId = '9b136e828e004466a2ebe1f5290101aa'
                //创建 this.client 对象
                this.client = AgoraRTC.createClient({mode: 'interop'});
                //初始化 this.client 对象
                this.client.init(appId,  ()=>{
                    this.client.join(channel_key, this.room_id, 0, function() {
                        console.log('join channel success')
                    }, function(err) {
                        console.log("Join channel failed", err);
                    });
                }, function (err) {
                    console.log("AgoraRTC this.client init failed", err);
                });
                //订阅远端音频流
                this.client.on('stream-added',  (evt)=>{
                    var stream = evt.stream;
                    this.client.subscribe(stream, function (err) {
                    });
                });
                //订阅流成功时，播放远端流
                this.client.on('stream-subscribed', function (evt) {
                    var stream = evt.stream;
                    stream.play('video');
                });
            },
            leave() {
                this.play_img=false;
                this.client.leave( ()=>{
                    this.play_img = false
                    console.log("Leavel channel successfully");
                }, function (err) {
                    console.log("Leave channel failed");
                });
            },
            getDevices() {
                AgoraRTC.getDevices(function (devices) {
                    for (var i = 0; i !== devices.length; ++i) {
                        var device = devices[i];
                        var option = document.createElement('option');
                        option.value = device.deviceId;
                        if (device.kind === 'audioinput') {
                            option.text = device.label || 'microphone ' + (audioSelect.length + 1);
                            audioSelect.appendChild(option);
                        } else if (device.kind === 'videoinput') {
                            option.text = device.label || 'camera ' + (videoSelect.length + 1);
                            videoSelect.appendChild(option);
                        } else {
                            console.log('Some other kind of source/device: ', device);
                        }
                    }
                });
            },
            cancel_action_qk(){

                this.selected_qm =!this.selected_qm
                this.load()
            },
            changePage(){
                this.meta.current_page = 1
                this.load()

            },
            agoraTC_logger(){
                AgoraRTC.Logger.error('this is error');
                AgoraRTC.Logger.warning('this is warning');
                AgoraRTC.Logger.info('this is info');
                AgoraRTC.Logger.debug('this is debug');
                if(!AgoraRTC.checkSystemRequirements()) {
                    alert("Your browser does not support WebRTC!");
                }
            },
            load () {

                this.klass_id = this.$route.params.id
                this.jc_list()
            },
            jc_list(params){

                fetcher.jc_list(Object.assign({page:this.meta.current_page}, params?params:{}), (response) => {
                    this.books = response.data.data
                    this.meta = response.data.meta.pagination;
                })
            },
            change_select_item(index){

                if (this.books) {
                    for (let i = 0; i < this.books.length; i++) {
                        if (i == index) {

                            this.books[i].add = !this.books[i].add
                            continue;
                        }
                    }
                }

            },
            load_qm_list(id,params){
                this.item_id = id?id:this.item_id
                fetcher.qk_list(this.item_id,Object.assign({page:this.meta.current_page},params?params:{}), (response) => {
                    this.books = response.data.data;
                    this.books.map((value,indx)=>{
                        value.add = true
                    })
                    this.meta = response.data.meta.pagination;
                })
            },
            change_self_list(msg){
                this.selected_qm = true
                this.load_qm_list(msg)
            },
            dismiss_dialog(){this.dialogFormVisible = false},
            ok_action(){
                this.dismiss_dialog()

            },
            cancel_action(){
                this.dismiss_dialog()
            },
            get_qm_top(){
                var jc_list = document.getElementsByClassName('box-card')[0];
                let scroll_distance = ''
                this.qk_top =jc_list.offsetTop.toString()
            },
            qm_sc_btn(type){
                this.dialog_type = type;
                if (type === 'zz') {
                    this.dialog_title = '自主上传'

                    if (this.scores.length>29) {
                        this.$message.error('最多可上传30个曲目');
                    }else {

                        this.dialogFormVisible = true;
                    }

                }else {
                    // this.dialog_title = '曲库上传'
                    this.dialogFormVisible_qk = !this.dialogFormVisible_qk;
                    this.scroll_to_qk_list()
                    this.get_qm_top()
                }

            },
            scroll_to_qk_list(){
                var jc_list = document.getElementsByClassName('box-card')[0];
                let scroll_distance = ''
                if (this.dialogFormVisible_qk ) {
                    scroll_distance = jc_list.offsetTop+jc_list.offsetHeight
                }else {
                    scroll_distance = 0
                }
                $('html, body').animate({scrollTop: scroll_distance}, 300)
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
            adaptation_result(msg){
                if(this.class_data.klass_room){
                    if (this.class_data.klass_room.data[msg].data) {
                        switch (this.class_data.klass_room.data[msg].data.adaptation_result) {
                            case 0:
                                return '不适配';
                                break;
                            case 1:
                                return '适配';
                                break;
                            case 2:
                                return '可能不适配';
                                break;
                            default:
                                return '未知'
                        }
                    }
                }
            },
            btn_success(msg){
                if(this.class_data.klass_room){
                    if (this.class_data.klass_room.data[msg].data) {
                        if (this.class_data.klass_room.data[msg].data.adaptation_result == 1) {
                            return true
                        }else {
                            return false
                        }
                    }
                }
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

                if(this.class_data.klass_room){
                    if (this.class_data.klass_room.data[msg].data) {
                        return   this.class_data.klass_room.data[msg].data.device_name
                    }
                }
            },
            fmt_type(value){
                return formater.fmt_type(value)
            },
            can_show(name){
                if(name == ""){
                    return true
                } else {
                    return false
                }
            },
            loading(){
                this.freshen = false;
                this.$emit('load');
            },
            fnt_perfromance:function(value){
                return formater.fmt_perfromance(value)
            },
            class_day (row){
                var moment = require('moment');
                var start_date = row.start_date;
                var weak = moment(start_date).weekday()+1
                var new_weak;
                switch (weak) {
                    case 1:
                        new_weak = '星期一'
                        break;
                    case 2:
                        new_weak = '星期二'
                        break;
                    case 3:
                        new_weak = '星期三'
                        break;
                    case 4:
                        new_weak = '星期四'
                        break;
                    case 5:
                        new_weak = '星期五'
                        break;
                    case 6:
                        new_weak = '星期六'
                        break;
                    case 7:
                        new_weak = '星期日'
                        break;
                    default:

                }
                return `${new_weak}`;
            },
            class_time (row){
                return tool.show_class_hour(row.start_timeblock_index, row.end_timeblock_index)
            },
            oss_url (url){
                if(url){
                    return tool.oss_url(url)
                }
            },
            play(url){
                this.setType='btn_1'
                this.player.pause()
                if (url.indexOf(".flv") > 0) {
                    this.player.src([{
                        type: "video/x-flv", src: url
                    }]);
                }else if(url.indexOf(".m3u8") > 0) {
                    this.player.src([{
                        type: "application/x-mpegURL", src: url
                    }]);
                }else if (url.indexOf(".aac") > 0) {
                    this.aac_file = url
                }else if (url.indexOf(".mp3") > 0) {
                    this.aac_file = url
                }else if (url.indexOf(".mp4") > 0) {
                    this.player.src([{
                        type: "video/mp4", src: url
                    }]);
                }else{
                    this.player.src([{
                        type: "rtmp/mp4", src: url
                    }]);
                }
            }
        }

    }
</script>

<style lang="css">
    #video{width: 100%;height: 480px;min-width: 300px;display: flex;}
    #video #player_1{width: 50% !important;}
    #video #player_2{width: 50% !important;}
    .video{
        background: black;
    }
    .t_eq_m,.t_eq,.s_eq{
        display: flex;
        /* box-sizing: border-box; */
        padding: 7px 0;
    }
    .t_eq>p,.s_eq>p{
        display: flex;
        align-items: center;
    }
    .s_eq{
        border-top: 1px solid #dee2e6;
        padding: 14px 0 0;
    }
    .t_eq_m,.s_eq_m{
        box-sizing: border-box;
        padding: 0 10px 0 0;
    }
    .equipment_list{
        box-sizing: border-box;
        border-top: 1px solid #dee2e6;
        padding: 10px 8px;
    }
    .equipment_list ._eq,.equipment_list .s_eq{
        display: flex;
    }
    .equipment_list .equipment{
        display:flex;
        box-sizing: border-box;
        align-items: center;
    }
    .equipment_list .el-icon-success:before{
        padding-left: 10px;
        color: #67C23A;
        font-size: 20px;
    }
    .equipment_list .el-icon-error:before{
        padding-left: 10px;
        color: rgb(203,24,25);
        font-size: 20px;
    }

    .equipment_list .next{
        display: block;
        width: 100px;
        padding: 0 30px 4px 30px;
        align-self: center;
    }
    .equipment_list span{
        display: block;
        padding: 0 5px;
    }
    .equipment_list .name{
        padding-right: 50px;
    }
    .equipment_list .equ{
        display: flex;
    }
    #flashObject {
        display: none;
    }

    #msg {
        color: #eee;
        text-align: center;
        font-size: 16px;
        position: relative;
        top: -80px;
    }

    #customURL {
        text-align: center;
        font-size: 16px;
        display: none;
    }

    input {
        padding: 0 15px;
        height: 40px;
        box-sizing: border-box;
    }

    input[type=button] {
        -webkit-appearance: button;
        background: #ccc;
        border: 0px;
    }

    input[type=button]:hover {
        background: #09f;
    }

    .error {
        /* 错误提示样式 */
        position: absolute;
        width: 60%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(255, 255, 255, 0.9);
        color: #999;
        text-align: center;
        font-size: 20px;
        border: 1px solid #999;
        border-radius: 10px;
        padding: 50px 10px;
        display: none;
    }
    .video-js{
        width: 640px;
        height: 400px;
    }
    .table .yun_btn_info{
        color: #fff;
        background-color: #909399;
        border-color: #909399;
    }
    .table .yun_btn_danger{
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c;
    }
    .plqm{
        display: flex;
        align-items: center;
    }
    .qm_send{
        box-sizing: border-box;
        margin-left: 20px;
        padding: 0 10px;
    }
    .jc_list .jc_plqm{
        display: flex;
        justify-content: space-between;
    }
    #del_btn{
        color: red;
        border:1px solid red;
    }
    #voice_agora{
        width: 500px;
        height: 10px;

    }
    #voice_img{

        height: 15px;
        width: 320px;

    }
    .left_td_img{

        width: 320px;
    }
    .table .last_tr{
        border-bottom: 1px solid #dee2e6;
    }
    .row_line{
        padding: .85rem .75rem;
        /* border-bottom: 1px solid #dee2e6; */
        border-top: 1px solid #dee2e6;
        display: flex;
        align-items: center;
    }
    .audio{
        display: flex;
        align-items: center;
    }
    .audio audio{
        margin-right: 20px;
    }
</style>
