<template>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="学生">
            <el-input v-model="formInline.name" placeholder="请输入学生姓名"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
            <el-input v-model="formInline.mobile" placeholder="请输入学生手机号"></el-input>
        </el-form-item>
        <el-form-item label="CC">
            <el-select v-model="formInline.region" placeholder="请选择CC">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="赠课状态">
            <el-select v-model="formInline.discardCause" placeholder="请选择赠课状态">
                <el-option label="全部" value="" key=""></el-option>
                <el-option v-for="(val,key) in give_status" :label="val" :key="key" :value="val"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="创建时间">
            <el-date-picker v-model="formInline.registerStartDate" type="date" value-format="yyyy/MM/dd" placeholder="请选择开始时间" ref="start_date">
            </el-date-picker>
            &nbsp;&nbsp;
            <el-date-picker v-model="formInline.registerEndDate" type="date" value-format="yyyy/MM/dd" placeholder="请选择结束时间">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="审批时间">
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
<script type="text/ecmascript-6">
    import meta from '@/utils/meta'
    export default {
        props:{
            clueAForm:{
                type:Object,
                require:true,
            }
        },
        data() {
            return {
                give_status:meta.give_status,
                formInline: {

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
