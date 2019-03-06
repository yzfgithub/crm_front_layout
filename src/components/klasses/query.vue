<template>
    <el-form :inline="true" :model="queryForm" class="demo-form-inline">
        <el-form-item label="学生">
            <el-input v-model="queryForm.name" placeholder="请输入学生姓名"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
            <el-input v-model="queryForm.mobile" placeholder="请输入学生手机号"></el-input>
        </el-form-item>
        <el-form-item label="课类型">
            <el-select v-model="queryForm.region" placeholder="请选择课类型">
                <el-option label="全部" value="" key=""></el-option>
                <el-option v-for="(val,key) in klass_type" :label="val" :key="key" :value="val"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="课状态">
            <el-select v-model="queryForm.region" placeholder="请选择课状态">
                <el-option label="全部" value="" key=""></el-option>
                <el-option v-for="(val,key) in klass_status" :label="val" :key="key" :value="val"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="上课时间">
            <el-date-picker v-model="queryForm.updateStartDate" type="date" value-format="yyyy/MM/dd" placeholder="选择开始时间" ref="start_date">
            </el-date-picker>
            &nbsp;&nbsp;
            <el-date-picker v-model="queryForm.updateEndDate" type="date" value-format="yyyy/MM/dd" placeholder="选择结束时间">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="排课时间">
            <el-date-picker v-model="queryForm.updateStartDate" type="date" value-format="yyyy/MM/dd" placeholder="选择开始时间" ref="start_date">
            </el-date-picker>
            &nbsp;&nbsp;
            <el-date-picker v-model="queryForm.updateEndDate" type="date" value-format="yyyy/MM/dd" placeholder="选择结束时间">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="销售团队">
            <el-select v-model="queryForm.region" placeholder="请选择销售团队">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="销售小组">
            <el-select v-model="queryForm.region" placeholder="请选择销售团队">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="CC">
            <el-select v-model="queryForm.region" placeholder="请选择CC">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
    </el-form>
</template>
<script type="text/ecmascript-6">
    import metaObj from '@/utils/meta'
    export default {
        props:{
            queryForm:{
                type:Object,
                require:true,
            }
        },
        data() {
            return {
                klass_type:metaObj.klass_type,
                klass_status:metaObj.klass_status,
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
