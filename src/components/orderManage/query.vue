<template>
    <el-form :inline="true" :model="orderForm" class="demo-form-inline">
        <el-form-item label="学生">
            <el-input v-model="orderForm.name" placeholder="请输入学生姓名"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
            <el-input v-model="orderForm.phone" placeholder="请输入学生手机号"></el-input>
        </el-form-item>
        <el-form-item label="支付方式">
            <el-select v-model="orderForm.payType" placeholder="请选择CC">
                <el-option label="全部" value="" key=""></el-option>
                <el-option v-for="(val,key) in pay_type" :label="val" :key="key" :value="val"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="订单状态">
            <el-select v-model="orderForm.status" placeholder="请选择订单状态">
                <el-option label="全部" value="" key=""></el-option>
                <el-option v-for="(val,key) in pay_status" :label="val" :key="key" :value="val"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="创建时间">
            <el-date-picker v-model="orderForm.startTime" type="date" value-format="yyyy/MM/dd" placeholder="选择开始时间" ref="start_date">
            </el-date-picker>
            &nbsp;&nbsp;
            <el-date-picker v-model="orderForm.endTime" type="date" value-format="yyyy/MM/dd" placeholder="选择结束时间">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="支付时间">
            <el-date-picker v-model="orderForm.payStartTime" type="date" value-format="yyyy/MM/dd" placeholder="选择开始时间" ref="start_date">
            </el-date-picker>
            &nbsp;&nbsp;
            <el-date-picker v-model="orderForm.payEndTime" type="date" value-format="yyyy/MM/dd" placeholder="选择结束时间">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="销售团队">
            <el-select v-model="orderForm.groupId" placeholder="请选择销售团队">
                <el-option label="" value=""></el-option>
                <el-option v-for="(val,key) in groupList" :value="val.id" :label="val.name" :key="key"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="销售小组">
            <el-select v-model="orderForm.teamId" placeholder="请选择销售团队">
                <el-option label="" value=""></el-option>
                <el-option v-for="(val,key) in teamList" :value="val.id" :label="val.name" :key="key"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="CC">
            <el-select v-model="orderForm.ccId" placeholder="请选择CC">
                <el-option label="" value=""></el-option>
                <el-option v-for="(val,key) in ccList" :value="val.id" :label="val.name" :key="key"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
    </el-form>
</template>
<script type="text/ecmascript-6">
    import meta from '@/utils/meta'
    export default {
        props:{
            orderForm:{
                type:Object,
                require:true,
            }
        },
        data() {
            return {
                pay_type:meta.pay_type,
                pay_status:meta.pay_status,


                groupList:[{name:'团队1',id:10,p_id:1},{name:'团队2',id:11,p_id:1},{name:'团队3',id:12,p_id:2},{name:'团队4',id:13,p_id:2}],
                teamList:[{name:'小组1',id:100,p_id:10,},{name:'小组2',id:101,p_id:10},{name:'小组3',id:102,p_id:11},{name:'小组4',id:103,p_id:11},{name:'小组5',id:104,p_id:12},{name:'小组6',id:105,p_id:12},{name:'小组7',id:106,p_id:13},{name:'小组7',id:107,p_id:13}],
                ccList:[{name:'cc1',id:1000,p_id:100},{name:'cc2',id:1001,p_id:100},{name:'cc3',id:1002,p_id:101},{name:'cc4',id:1003,p_id:101},{name:'cc5',id:1004,p_id:102},{name:'cc6',id:1005,p_id:102},{name:'cc7',id:1006,p_id:103},{name:'cc8',id:1007,p_id:103},{name:'cc9',id:1008,p_id:104},{name:'cc10',id:1009,p_id:104},{name:'cc11',id:1010,p_id:105},{name:'cc12',id:1011,p_id:105},{name:'cc13',id:1012,p_id:106},{name:'cc14',id:1013,p_id:106},{name:'cc15',id:1014,p_id:107},{name:'cc16',id:1015,p_id:107}],
            }
        },
        methods: {
            onSubmit() {
                this.$emit('onSubmit')
            }
        }
    }
</script>
