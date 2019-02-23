<template>
    <el-form :inline="true" :model="orderForm" class="demo-form-inline">
        <el-form-item label="学生">
            <el-input v-model="orderForm.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
            <el-input v-model="orderForm.mobile"></el-input>
        </el-form-item>
        <el-form-item label="CC">
            <el-select v-model="orderForm.region" placeholder="支付方式">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="订单状态">
            <el-select v-model="orderForm.region" placeholder="订单状态">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="创建时间">
            <el-date-picker
                    v-model="orderForm.updateTime"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="支付时间">
            <el-date-picker
                    v-model="orderForm.registerTime"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="销售团队">
            <el-select v-model="orderForm.region" placeholder="订单状态">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="销售小组">
            <el-select v-model="orderForm.region" placeholder="订单状态">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="CC">
            <el-select v-model="orderForm.region" placeholder="订单状态">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    export default {
        props:{
            orderForm:{
                type:Object,
                require:true,
            }
        },
        data() {
            return {
                formInline: {
                    user: '',
                    region: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>
