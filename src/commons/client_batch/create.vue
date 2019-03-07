<template>
    <el-dialog title="新建订单" :visible="visiableBar" @close='closeDialog'>
        <el-form :model="form" label-position="left" class="form-class">

            <el-form-item label="产品名称" :label-width="formLabelWidth">
                <el-select v-model="form.product_id" placeholder="请选择产品名称">
                    <el-option v-for="(item,key) in productList" :label="item.name" :value="item.id" :key="key"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="订单金额：（单位元）">
               <span>{{pay_money}}</span>
            </el-form-item>

            <el-form-item label="折扣金额：（单位元）">
                <span>{{discount_money}}</span>
            </el-form-item>

            <el-form-item label="信用卡分期订单">
                <el-radio v-model="form.is_stages" label="1">是</el-radio>
                <el-radio v-model="form.is_stages" label="0">否</el-radio>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click='closeDialog'>取 消</el-button>
            <el-button type="primary" @click="submitOperate">确 定</el-button>
        </div>
    </el-dialog>
</template>
<script type="text/ecmascript-6">
    import fetcher from "@/fetchers/account/client/client";
    export default {
        props:{
            visiableBar:{
                type:Boolean,
                require:true,
            },
            productList:{
                type:Array,
                require:true,
            },
            multipleSelectionIds:{
                type:Array,
                require:true,
            }
        },
        data(){
            return{
                formLabelWidth: '80px',
                form:{},
                pay_money:'',
                discount_money:'',
            }
        },
        watch:{
            'form.product_id':{
                handler(val,oldVal){
                    if(val){
                        let obj = this.productList.filter(item=>{return item.id==val})[0];
                        this.pay_money=(obj.real_price /100).toFixed(2) ;
                        this.discount_money=(obj.discount_amount /100).toFixed(2);
                    }
                }
            }
        },
        methods:{
            submitOperate(){
                //salesId销售id
                let account_id = this.multipleSelectionIds[0];
                fetcher.createOrder(Object.assign(this.form,{account_id:account_id,salesId:'123'}),(response)=>{
                    if(response.data.code==100000){
                        this.$message.success('创建订单成功')
                        this.form={};
                        this.pay_money='';
                        this.discount_money=''
                        this.$emit('close')
                    }
                })
            },
            closeDialog(){
                this.$emit('close')
            },
        },
        mounted(){

        }
    }
</script>
<style lang="css">
    .form-class{
        margin-left: 10%;
    }
</style>
