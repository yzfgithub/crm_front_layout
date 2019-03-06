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
                        prop="student.data.name"
                        label="学生"
                >
                    <template slot-scope="scope">
                        <span class="light-blue" @click="pathTo(scope.row.id)">{{scope.row.student.data.name}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="account.data.mobile"
                        label="手机号"
                >
                </el-table-column>
                <el-table-column
                        prop="product.data.name"
                        label="产品名称"
                >
                </el-table-column>
                <el-table-column
                        prop="total"
                        label="订单总金额"
                >
                </el-table-column>
                <el-table-column
                        prop="discount"
                        label="折扣金额"
                >
                </el-table-column>
                <el-table-column
                        prop="updated_for"
                        label="订单金额"
                >
                    <template slot-scope="scope">
                        {{scope.row.total-scope.row.discount}}
                    </template>
                </el-table-column>
                <el-table-column
                        prop="created_at"
                        label="创建时间"
                >
                </el-table-column>
                <el-table-column
                        prop="paid_at"
                        label="支付时间"
                >
                </el-table-column>
                <!---->
                <el-table-column
                        prop="pay_type"
                        label="支付方式"
                        :formatter="fmt_pay_type"
                >
                </el-table-column>
                <!---->
                <el-table-column
                        prop="status"
                        label="订单状态"
                        :formatter="fmt_pay_status"
                >
                </el-table-column>
                <el-table-column
                        prop="admin_member.data.name"
                        label="CC"
                >
                </el-table-column>
                <el-table-column
                        prop="account.data.name"
                        label="下单人"
                >
                </el-table-column>
                <el-table-column
                        prop="rollback"
                        label="操作"
                >
                    <template slot-scope="scope">
                        <span class="light-blue" @click="toOrderDetail(scope.row.id)"> 查看 </span>
                        <span class="light-origin" @click="cancelOrder(scope.row.id)"> 取消 </span>
                        <br>
                        <span class="light-blue" @click="uploadImg(scope.row.id)"> 上传凭证 </span>
                    </template>
                </el-table-column>

            </el-table>

            <el-pagination class="page" @current-change="handleCurrentChange" :current-page="meta.current_page" :page-size="10" layout="total, prev, pager, next, jumper" :total="meta.total">
            </el-pagination>
        </div>

        <el-dialog title="取消订单" :visible.sync="cancelOrderDialog">
            <el-form label-position="left" class="form-class">
                <el-form-item>
                    <span>确认取消该订单？取消后用户将无法完成支付</span>
                </el-form-item>
                <el-form-item label="取消原因" :label-width="formLabelWidth">
                    <el-select v-model="cancel_reason" placeholder="请选择取消原因">
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
                <el-form-item label="">
                    <el-upload ref="upload" action="" :http-request="submitUpload" accept="image/*" :headers="{'Content-Type':'multipart/form-data'}">
                        <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
                    </el-upload>
                    <el-input style="margin-top:10px;" v-model="coverUrl" :disabled="true" ref="xml"></el-input>
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
    import meta from '@/utils/meta'
    import formater from './formater'
    import fetcher from '@/fetchers/order/order'
    import config from '@/config'
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

                multipleSelection: [],
                currentPage4: 4,

                cancel_order_reason:meta.cancel_order_reason,
                cancel_reason:'',
                coverUrl:'',//UPload
                cancelOrderDialog:false,
                uploadDialog:false,
                formLabelWidth: '80px',

                orderId:'',

            }
        },
        methods:{
            fmt_pay_type(row,column,value){
                return formater.fmt_pay_type(value)
            },
            fmt_pay_status(row,column,value){
                return formater.fmt_pay_status(value)
            },

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
                this.orderId=id;
                this.uploadDialog=true;
            },
            submit(){
                fetcher.submitUpload({id:this.orderId,filePath:this.coverUrl},(response)=>{
                    this.$emit('凭证上传成功')
                    this.uploadDialog=false;
                })
            },
            submitUpload(options){
                let formData = new FormData()
                formData.append('file',options.file);
                fetcher.uploadImg(formData,(response)=>{
                    if(response.data.code==100000){
                        this.coverUrl=response.data.data;
                    }
                })
            },

            tableHeaderColor(){
                return 'background-color:#EFF3F5;height:40px;'
            },

            //fenye
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
        color:#30ABF9;
        cursor: pointer;
        margin: 0 5px;
    }
    .light-origin{
        color:#F8542E;
        cursor: pointer;
        margin: 0 5px;
    }
</style>
