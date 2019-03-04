<template>
    <div class="container">
        <div class="f_table">
            <el-table
                    ref="multipleTable"
                    :data="klassList"
                    tooltip-effect="dark"
                    style="width: 100%;"
                    :header-cell-style="tableHeaderColor">
                <el-table-column
                        prop="name"
                        label="学生"
                >
                    <template slot-scope="scope">
                        <span @click="pathTo(scope.row.id)">{{scope.row.name}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="mobile"
                        label="手机号"
                >
                </el-table-column>
                <el-table-column
                        prop="province"
                        label="老师"
                >
                </el-table-column>
                <el-table-column
                        prop="province"
                        label="课类型"
                >
                    <img src="" alt="">
                </el-table-column>
                <el-table-column
                        prop="created_at"
                        label="上课时间"
                >
                </el-table-column>
                <el-table-column
                        prop="updated_for"
                        label="排课时间"
                >
                </el-table-column>
                <el-table-column
                        prop="state"
                        label="课状态"
                >
                </el-table-column>
                <el-table-column
                        prop="state"
                        label="迟到状态"
                >
                </el-table-column>
                <el-table-column
                        prop="delay"
                        label="旷课状态"
                >
                </el-table-column>
                <el-table-column
                        prop="rollback"
                        label="曲谱状态"
                >
                </el-table-column>
                <el-table-column
                        prop="rollback"
                        label="课后反馈"
                >
                </el-table-column>
                <el-table-column
                        prop="rollback"
                        label="销售团队"
                >
                </el-table-column>
                <el-table-column
                        prop="rollback"
                        label="销售小组"
                >
                </el-table-column>
                <el-table-column
                        prop="rollback"
                        label="CC"
                >
                </el-table-column>
                <el-table-column
                        prop="rollback"
                        label="排课人"
                >
                </el-table-column>
                <el-table-column
                        prop="rollback"
                        label="教务"
                >
                </el-table-column>
                <el-table-column
                        prop="rollback"
                        label="老师简历"
                >
                    <template slot-scope="scope">
                        <button :class="scope.row.is_copy_id !== '' ? 'status':''" class="tag-read" :data-clipboard-text="scope.row.is_copy_id" @click="copyUrl">{{scope.row.is_copy_id !== '' ? '复制简历链接' : '无简历'}}</button>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="rollback"
                        label="操作"
                >
                    <template slot-scope="scope">
                        <a class="light-blue" href="javascript:void(0);" @click="toKlassDetail(scope.row.id)"> 查看 </a>
                        <a class="light-blue" href="javascript:void(0);" @click="createRecord(scope.row.id)"> 建工单 </a>

                    </template>
                </el-table-column>

            </el-table>

            <el-pagination class="page" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="meta.current_page" :page-size="10" layout="total, prev, pager, next, jumper" :total="meta.total">
            </el-pagination>
        </div>


        <el-dialog title="新建工单" :visible.sync="createRecordDialog" width="400px">
            <el-form :model="form">
                <el-form-item label="问题类型" label-width="120px">
                    <el-select v-model="form.problem_id" placeholder="请选择问题类型" @change="is_accept_input">
                        <el-option v-for="problem in problems" :label="problem.content" :value="problem.id" :key="problem.id" @keyup.enter.native="search"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否需要外呼" label-width="120px">
                    <el-checkbox v-model="form.is_outgoing_call">是</el-checkbox>
                </el-form-item>

                <el-form-item label="问题描述"  label-width="120px" v-show="is_show">
                    <el-input class="input-class" placeholder="请输入问题" v-model="form.problem_content"></el-input>
                </el-form-item>
                <el-form-item label="备注信息"  label-width="120px">
                    <el-input class="input-class" placeholder="输入用户的备注信息" v-model="form.comment_info"></el-input>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="createRecordDialog = false">取 消</el-button>
                <el-button type="primary" @click="submit">确 定</el-button>
            </div>
        </el-dialog>

    </div>
</template>
<script type="text/ecmascript-6">
    import meta from '@/utils/meta'
    export default {
        props:{
            klassList:{
                type:Array,
                require:true
            },
            meta:{
                type:Object,
                require:true
            }
        },
        data(){
            return{
                cancel_order_reason:meta.cancel_order_reason,
                multipleSelection: [],
                currentPage4: 4,

                createRecordDialog:false,
                formLabelWidth: '80px',
                form:{},
                problems:[],
                is_show:false,
            }
        },
        methods:{
            toKlassDetail(id){
                this.$router.push({path:`/klass/detail/${id}`});
            },
            createRecord(id){
                this.createRecordDialog=true;
                console.log('cancelOrder');
            },
            copyUrl(){
                var clipboard = new Clipboard('.tag-read')
                clipboard.on('success', e => {
                    this.$message({
                        type: 'success',
                        message: '复制成功!'
                    });
                    // 释放内存
                    clipboard.destroy()
                })
                clipboard.on('error', e => {
                    // 不支持复制
                    this.$message({
                        type: 'error',
                        message: '浏览器不支持自动复制!'
                    });
                    // 释放内存
                    clipboard.destroy()
                })
            },
            is_accept_input(val){
                if(val==17){
                    this.is_show = true
                }else{
                    this.is_show = false
                }
            },


            uploadImg(id){
                this.uploadDialog=true;
            },
            submit(){
                console.log('img upload')
            },
            submitUpload(options){
            //     axios.get('/api/get_upload_assume_role')
            //         .then( (response) => {
            //             let Oss = OSS.Wrapper;
            //
            //             var ossClient = new Oss({
            //                 region: config.oss_region,
            //                 accessKeyId: response.data.data.AccessKeyId,
            //                 accessKeySecret: response.data.data.AccessKeySecret,
            //                 stsToken: response.data.data.SecurityToken,
            //                 bucket: config.oss_bucket,
            //                 endpoint: config.oss_endpoint,
            //             });
            //             var contens = options.file.name.split('.')
            //             var ext = contens[contens.length - 1];
            //             var filename = 'poster/' + Math.random().toString(36).substr(2) + '.' + ext;
            //             var ret = ossClient.multipartUpload(filename, options.file, {}).then( (result) => {
            //                 this.$emit('upload', result.name)
            //                 // this.poster.filepath = filename
            //                 // vm.$message({
            //                 //     type: 'success',
            //                 //     message: '图片上传成功'
            //                 // });
            //             }).catch((err) => {
            //                 console.log(err)
            //             })
            //         })
            //         .catch((err) => {
            //             console.error(err);
            //         })
            },

            tableHeaderColor(){
                return 'background-color:#EFF3F5;height:40px;'
            },

            //fenye
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            pathTo(id){
                this.$router.push({path:`/account/clue_detail/${id}`});
            }
        }

    }
</script>
<style scoped>
    .container{
        margin: 0 20px;
        padding: 20px 0;
    }
    .f_head div{
        display: inline-block;
    }
    .page{
        margin: 20px 0;
        text-align: right;
    }
    .light-blue{
        color:#30ABF9;
        cursor: pointer;
        margin: 0 5px;
    }
    .light-blue{
        color:#1CB5ED;
    }
    .hard-yellow{
        color:#F8542E;
    }
    .status{
        cursor: pointer;
        color:#007bff !important;
    }
    .status:hover{color:#0056b3 !important;text-decoration: underline;}
</style>
