<template>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="销售中心">
            <el-select v-model="formInline.region" placeholder="请选择销售中心">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="销售团队">
            <el-select v-model="formInline.region" placeholder="请选择销售团队">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="销售小组">
            <el-select v-model="formInline.region" placeholder="请选择销售小组">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="CC">
            <el-select v-model="formInline.region" placeholder="请选择CC">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="统计时间">
            <el-date-picker v-model="formInline.registerStartDate" type="date" value-format="yyyy/MM/dd" placeholder="请选择开始时间" ref="start_date">
            </el-date-picker>
            &nbsp;&nbsp;
            <el-date-picker v-model="formInline.registerEndDate" type="date" value-format="yyyy/MM/dd" placeholder="请选择结束时间">
            </el-date-picker>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    export default {
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
