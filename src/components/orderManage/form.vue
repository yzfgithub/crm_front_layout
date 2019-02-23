<template>
    <div class="container">
        <div class="f_table">
            <el-table
                    ref="multipleTable"
                    :data="orderList"
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
                        label="产品名称"
                >
                </el-table-column>
                <el-table-column
                        prop="province"
                        label="订单总金额"
                >
                    <img src="" alt="">
                </el-table-column>
                <el-table-column
                        prop="created_at"
                        label="折扣金额"
                >
                </el-table-column>
                <el-table-column
                        prop="updated_for"
                        label="订单金额"
                >
                </el-table-column>
                <el-table-column
                        prop="state"
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
                        prop="rollback"
                        label="CC"
                >
                </el-table-column>
                <el-table-column
                        prop="rollback"
                        label="下单人"
                >
                </el-table-column>
                <el-table-column
                        prop="rollback"
                        label="操作"
                >
                    <template slot-scope="scope">
                        <a href="javascript:void(0);">查看</a>
                        <a href="javascript:void(0);">取消</a>
                        <a href="javascript:void(0);">上传凭证</a>
                    </template>
                </el-table-column>

            </el-table>

            <el-pagination class="page" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="meta.current_page" :page-size="10" layout="total, prev, pager, next, jumper" :total="meta.total">
            </el-pagination>
        </div>

        <el-dialog title="取消订单" :visible="dialogFormVisible">
            <el-form label-position="left" class="form-class">
                <el-form-item>
                    <span>确认废弃该部分线索？废弃后将进入【Z类公海池】</span>
                </el-form-item>
                <el-form-item label="废弃原因" :label-width="formLabelWidth">
                    <el-select v-model="cancel_reason" placeholder="请选择废弃原因">
                        <el-option v-for="(val, key) in cancel_order_reason" :label="val" :value="val" :key="key"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click='dialogFormVisible = false'>取 消</el-button>
                <el-button type="primary" @click="submitOperate">确 定</el-button>
            </div>
        </el-dialog>

        <el-dialog title="上传凭证" :visible="dialogFormVisible">
            <el-form label-position="left" class="form-class">
                <el-form-item label="" prop="cover">
                    <el-upload ref="upload" action="" :http-request="submitUpload">
                        <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
                    </el-upload>
                    <el-input v-model="cover" :disabled="true" ref="xml"></el-input>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click='dialogFormVisible = false'>取 消</el-button>
                <el-button type="primary" @click="submitOperate">确 定</el-button>
            </div>
        </el-dialog>

    </div>
</template>
<script type="text/ecmascript-6">
    import meta from '@/utils/meta'
    export default {
        props:{
            orderList:{
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
                cancel_reason:'',
                cover:'',//UPload


                multipleSelection: [],
                currentPage4: 4,

                dialogFormVisible:false,
                formLabelWidth: '80px',
            }
        },
        methods:{
            submitOperate(){
                console.log('调接口提交')

            },
            // submitUpload(options){
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
            // },

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
    .f_head{
        text-align: left;
        height:30px;
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(155,155,157,1);
        line-height:14px;
    }
    .f_head div{
        display: inline-block;
    }
    .f_head div .num{
        color:#F8542E;
    }
    .page{
        margin: 20px 0;
        text-align: right;
    }
</style>
