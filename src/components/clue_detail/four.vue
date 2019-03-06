<template>
    <div>
        <el-table
                ref="multipleTable"
                :data="clueAData"
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
                    label="产品名称"
            >
            </el-table-column>
            <el-table-column
                    prop="province"
                    label="订单总金额"
            >
            </el-table-column>
            <el-table-column
                    prop="created_at"
                    label="折扣金额"
            >
            </el-table-column>
            <el-table-column
                    prop="updated_at"
                    label="订单金额"
            >
            </el-table-column>
            <el-table-column
                    prop="updated_for"
                    label="创建时间"
            >
            </el-table-column>
            <el-table-column
                    prop="state"
                    label="支付时间"
            >
            </el-table-column>
            <el-table-column
                    prop="delay"
                    label="支付方式"
            >
            </el-table-column>
            <el-table-column
                    prop="rollback"
                    label="订单状态"
            >
            </el-table-column>
            <el-table-column
                    prop="like"
                    label="CC"
            >
            </el-table-column>
            <el-table-column
                    prop="like"
                    label="下单人"
            >
            </el-table-column>
            <el-table-column
                    prop="like"
                    label="操作"
            >
                <template slot-scope="scope">
                    <a class="light-blue" href="javascript:void(0);" @click="toOrderDetail(scope.row.id)"> 查看 </a>
                    <a class="hard-yellow" href="javascript:void(0);" @click="cancelOrder(scope.row.id)"> 取消 </a>
                    <a class="light-blue" href="javascript:void(0);" @click="uploadImg(scope.row.id)"> 上传凭证 </a>
                </template>
            </el-table-column>

        </el-table>

        <el-dialog title="取消订单" :visible.sync="cancelOrderDialog">
            <el-form label-position="left" class="form-class" :model="form">
                <el-form-item>
                    <span>确认取消该订单？取消后用户将无法完成支付</span>
                </el-form-item>
                <el-form-item label="取消原因" :label-width="formLabelWidth">
                    <el-select v-model="form.cancel_reason" placeholder="请选择取消原因">
                        <el-option v-for="(val, key) in cancel_order_reason" :label="val" :value="val" :key="key"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click='cancelOrderDialog = false'>取 消</el-button>
                <el-button type="primary" @click="submitCancelOrder">确 定</el-button>
            </div>
        </el-dialog>

        <el-dialog title="上传凭证" :visible.sync="uploadDialog">
            <el-form label-position="left" class="form-class">
                <el-form-item label="" prop="cover">
                    <el-upload ref="upload" action="" :http-request="submitUpload">
                        <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
                    </el-upload>
                    <el-input v-model="cover" :disabled="true" ref="xml"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click='uploadDialog = false'>取 消</el-button>
                <el-button type="primary" @click="submit">确 定</el-button>
            </div>
        </el-dialog>

    </div>
</template>
<script type="text/ecmascript-6">
    import fetcher from '@/fetchers/account/clue/clue'
    import meta from '@/utils/meta'
    export default {
        props:{
            tabName:{
                type:String,
                require:true
            },
            show_edit:{
                type:Boolean,
                require:true,
            }
        },
        data(){
            return{
                clueAData:[
                    {id:'11111',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'22222',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'33333',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'44444',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'55555',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'55555',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'55555',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'55555',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'55555',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'55555',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                    {id:'55555',name:'yzf',mobile:'234',province:'bj',created_at:'123',updated_at:'345',updated_for:'tl',state:'0/0/0',delay:'10s',rollback:'20',like:'0'},
                ],
                currentPage4: 4,

                cancel_order_reason:meta.cancel_order_reason,
                form:{},
                cover:'',//UPload
                cancelOrderDialog:false,
                uploadDialog:false,
                formLabelWidth: '80px',
            }
        },
        watch:{
            tabName:{
                handler(val,oldVal){
                    if(val!=oldVal && val == 'fourth'){
                        this.load();
                    }
                }
            }
        },
        methods:{
            toOrderDetail(id){
                this.$router.push({path:`/order/detail/${id}`});
            },
            cancelOrder(id){
                this.cancelOrderDialog=true;
                console.log('cancelOrder');
            },
            submitCancelOrder(){
                console.log('cancel ok')
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


            load(){
                fetcher.getCommunicationRecord({clueSubjectId:this.$route.params.id},(response)=>{
                    if(response.data.code==100000){
                        this.data = response.data.data;
                    }
                })
            }
        }
    }
</script>
<style scoped>
    .light-blue{
        color:#1CB5ED;
    }
    .hard-yellow{
        color:#F8542E;
    }
</style>
