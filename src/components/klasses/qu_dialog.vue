<template lang="html">
    <div class="qm_dialog">
        <div class="one_item" v-for = '(val,key) in img_arr' :key="key">
            <el-form :model="form">
                <el-form-item prop = 'qm_name' label="曲目名称"   :label-width="formLabelWidth">
                    <el-input style = 'width:50%' clearable ref = 'qm_name'  v-model="val.qm_name" placeholder = '请输入曲目名称'></el-input>
                </el-form-item>
            </el-form>
            <div class="qmtp_onLoad picture_qm">
                <p class="qmtp_onLoad">曲目图片
                    <span class="discrib"> ( 必填，一个曲目曲谱不超过10张图片 )</span>
                </p>
                <el-upload

                        :ref='val.qm'
                        action=""
                        :data='val'
                        :limit="10"
                        :http-request="httpRequest"
                        list-type="picture-card"
                        :before-upload="beforeUpload"
                        :on-progress="onBeforeUpload"
                        :on-remove="handleRemove"
                        :on-exceed="handleExceed"
                >
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </div>

        </div>
        <!-- <div class="dialog_footer">
            <el-button size="mini" type="danger" icon="el-icon-plus" circle></el-button>
            <el-button type="text" class = 'add_qm'  @click = 'submitUpload'>添加曲目</el-button>
            <span class="discrib"> ( 添加不超过30首曲目 ) </span>

        </div> -->
        <div class="footer_dialog">
            <el-button @click="dismiss_dialog">取消</el-button>
            <el-button type="primary" @click="submitUpload">确定</el-button>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'
    import config from '@/config'
    import fetcher from './fetcher'
    export default {
        props:{
            dialog_type:{
                type:String,
                required:true
            },
            klass_id:{
                type:String,
                required:true
            }

        },
        data(){
            return {
                coach:{
                    type: Object,
                    required:true,
                },
                keys:[],
                titles:[],
                add_count:1,
                add_btn_nums:[],
                ul_li_arr:[],
                del_li:[],
                images:{},
                all_data:{},
                rules:{
                    qm_name:[
                        {required:true,message:'请输入曲目名称',trigger:'blur'}
                    ]
                },
                img_arr:[{qm_name:'',images:[],title_has:false,qm:'qm_1'}],
                form: {
                    msg:{qm_name:'',images:[],title_has:false},
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                imageUrl: '',
                imgthing: {},
                formLabelWidth: '120px',
                dialogImageUrl: '',
                dialogVisible: false
            };
        },
        methods:{
            beforeUpload(file){
                // console.log(this.ul_li_arr);
                // console.log(file);
            },
            clearFiles(file){
// console.log(file);
            },
            dismiss_dialog(){
                this.$emit('cancel_action')
                this.$refs['qm_1'][0].clearFiles();
                this.img_arr = [{qm_name:'',images:[],title_has:false,qm:'qm_1'}]
            },
            handleExceed(){
                this.$message.warning(`每次最多只能选择10张曲目图片`);

            },
            ok_action(){
                this.$emit('ok_action')
                let msg_obj = this.all_data['qm_1']
                let title_input = $('.one_item .el-input input');
                let obj = {name:title_input[0].value,image:msg_obj.images.join(';')}
                let scores = [];
                let send_mst = {}
                send_mst.type = '1'
                scores.push(obj)
                send_mst.scores = scores
                this.qm_post(send_mst)

            },
            qm_post(obj){
// console.log(obj);

                fetcher.qm_post(this.klass_id,obj,(response)=>{
                    // console.log(response);
                    // this.$message.success('添加成功');
                    this.$refs['qm_1'][0].clearFiles();
                    this.img_arr = [{qm_name:'',images:[],title_has:false,qm:'qm_1'}]
                    this.$emit('loading')
                })
            },
            handleRemove(file, fileList) {
                for (var value in this.all_data) {
                    if(this.all_data[value].images.includes(this.images[file.uid])){
                        this.all_data[value].images.map((val,index)=>{
                            if (val == this.images[file.uid]) {
                                this.all_data[value].images.splice(index,1)
                            }
                        })
                    }


                }
                setTimeout(()=>{
                    let arr = this.get_ul_li_numbers()
                    this.delete_img()
                    this.get_add_btn_numbers()
                },100)
            },
            onBeforeUpload(file) {
                // console.log(file);
                // this.dialogImageUrl = file.url;
                // this.dialogVisible = true;
            },
            httpRequest(options){

                axios.get('/api/get_upload_assume_role')
                    .then( (response) => {
                        let Oss = OSS.Wrapper;
                        var ossClient = new Oss({
                            region: config.oss_region,
                            accessKeyId: response.data.data.AccessKeyId,
                            accessKeySecret: response.data.data.AccessKeySecret,
                            stsToken: response.data.data.SecurityToken,
                            bucket: config.oss_bucket,
                            endpoint: config.oss_endpoint,
                        });
                        var contents = options.file.name.split('.')
                        var ext = contents[contents.length - 1];
                        var filename = 'book/score/' + Math.random().toString(36).substr(2)+ '.' + ext;
                        var ret = ossClient.multipartUpload(filename, options.file, {}).then( (result) => {
                            this.coach.avatar = filename
                            let key = options.file.uid
                            let img = {[key]:filename}
                            this.keys.push(key)
                            // this.images.push(img)
                            options.data.images.push(filename)
                            this.images[key]=filename;
                            // console.log(options.data);
                            this.form.msg.images.push(filename)
                            this.get_add_btn_numbers()

                            this.all_data[options.data.qm] = {title:options.data.qm_name,images:options.data.images}

                            this.control_add_hid()
                            this.get_ul_numbers()//ul的个数

                        }).catch((err) => {
                            console.log(err)
                        })
                    })
                    .catch((err) => {
                        console.error(err);
                    })

            },
            alert_message(type){
                if (type == 'name') {
                    this.$message.error('请填写曲目名称');
                }else {
                    this.$message.error('请填写曲目图片');
                }
                return;
            },
            //获取 所有 title
            get_all_titles(){
                let title_input = $('.one_item .el-input input');
                let titles = []
                title_input.map((index,value)=>{
                    titles.push(value.value)
                })
                this.titles = titles;
                // console.log('title:',this.titles);
            },
            //获取 ul 下的 li 的个数
            get_ul_li_numbers(){
                //ul 的数组
                let ul_arr = $('.picture_qm .el-upload-list--picture-card');
                let ul_li_nums = []
                ul_arr.map((index,val)=>{
                    // console.log($(val).find('.el-upload-list__item.is-ready').not('.focusing').length);
                    ul_li_nums.push($(val).find('.el-upload-list__item.is-ready').not('.focusing').length)
                })
                this.ul_li_arr = ul_li_nums
                // console.log('ul 下的 li 的个数:',ul_li_nums);
                return ul_li_nums
            },
            //控制 添加 按钮的显示隐藏
            control_add_hid(){
                //ul 的数组
                let ul_arr =$('.picture_qm .el-upload-list--picture-card');
                let ul_li_nums = []
                ul_arr.map((index,val)=>{
                    ul_li_nums.push($(val).children('li').length)
                })
                this.ul_li_arr = this.get_ul_li_numbers()
                for (var i = 0; i < this.ul_li_arr.length; i++) {
                    if (this.ul_li_arr[i]>9) {
                        this.add_btn_nums[i].style.opacity = 0
                        $(this.add_btn_nums[i]).find('.el-upload__input').attr("disabled","disabled");

                    }else {
                        this.add_btn_nums[i].style.opacity = 1
                        $(this.add_btn_nums[i]).find('.el-upload__input').removeAttr("disabled");;

                    }
                }
            },
            delete_img(){
                //ul 的数组
                let ul_arr =$('.picture_qm .el-upload-list--picture-card');
                let ul_li_nums = []
                let ul_one = ''
                let del_li = []
                ul_arr.map((index,val)=>{
                    ul_one = $(val)[0]
                    del_li.push(ul_one)
                    ul_li_nums.push($(val).children('li').length)
                })
                this.ul_li_arr = this.get_ul_li_numbers();
            },
            //获取 ul 的个数
            get_ul_numbers(){
                //ul 的数组
                let ul_arr = $('.picture_qm .el-upload-list--picture-card');
                // console.log('ul 的个数:',ul_arr);
                return ul_arr;
            },
            //获取 ul 下的 li个数

            //获取 添加 按钮的 个数
            get_add_btn_numbers(){
                let add_arr = $('.el-upload--picture-card')
                let add_item_arr = []
                //得到 每个  item 下的 添加按钮的个数 的 数组
                add_arr.map((index,val)=>{
                    add_item_arr.push(val)
                })
                this.add_btn_nums = add_item_arr
                // console.log(this.ul_li_arr);
                for (let i = 0; i < this.ul_li_arr.length; i++) {
                    if (this.ul_li_arr[i] > 9) {
                        this.add_btn_nums[i].style.opacity = 0
                        $(this.add_btn_nums[i]).find('.el-upload__input').attr("disabled","disabled");
                        continue;
                    }else {
                        this.add_btn_nums[i].style.opacity = 1
                        $(this.add_btn_nums[i]).find('.el-upload__input').removeAttr("disabled");;
                        continue;
                    }
                }
                // console.log('添加 按钮的 个数:',this.add_btn_nums);
            },


            submitUpload(options){
                let input_arr = $('.one_item .el-input__inner');
                let ul_arr = $('.el-upload-list--picture-card');
                let li_arr = this.get_ul_li_numbers()
                this.get_all_titles()

                //每个item 的title
                // console.log(input_arr);
                let has_title =  this.img_arr.filter((value,index,arr)=>{
                    return !value.qm_name || value.qm_name == ''
                })
                let has_image = li_arr.filter((value,index,arr)=>{
                    return value == 0
                })
                if(has_title.length){
                    this.alert_message('name')
                }else{
                    if (has_image.length != 0) {
                        this.alert_message()
                    }else {
                        this.ok_action()
                        // this.add_count ++;
// console.log(this.img_arr.length);
                        // if (this.img_arr.length>2) {
                        //    this.$message.error('曲目最多可添加30首');
                        //   $('.add_qm').attr('disabled',"true");
                        //
                        // }else {
                        //   $('.add_qm').removeAttr('disabled')
                        //   this.img_arr.push({qm_name:'',images:[],title_has:false,qm:'qm_'+this.add_count})
                        //
                        // }

                    }
                }


            },
            delete_item(key,index){
                // console.log(index,key,this.$refs);

                this.$refs[key][0].clearFiles()
// this.$refs[key][0].clearFiles();
                this.img_arr.splice(index,1)
                // console.log(this.img_arr)
                delete (this.all_data[key])
                this.add_count --;
            }


        }
    }
</script>

<style lang="css">

    .qm_dialog{
        box-sizing: border-box;


    }

    .qmtp_onLoad .upload-demo{

    }
    .qmtp_onLoad{
        box-sizing: border-box;
        padding: 0 25px;
    }
    .dialog_footer{
        box-sizing: border-box;
        padding: 5px 50px;
    }
    .footer_dialog{
        box-sizing: border-box;
        padding: 20px 0 0 0;
        display: flex;
        justify-content: flex-end;
    }
    .discrib{
        color: #e6a23c;
    }
    .qmtp_onLoad>div{
        box-sizing: border-box;
        padding-left: 20px;
    }
    .one_item{
        box-sizing: border-box;
        padding: 0 0 20px 0;
    }
    .one_item .el-form-item__content .btn_delete{
        margin-left:60px;

    }
</style>
