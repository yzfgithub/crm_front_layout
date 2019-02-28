<template>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="姓名">
            <el-input v-model="clueAForm.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
            <el-input v-model="clueAForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>

        <el-form-item label="注册时间">
            <el-date-picker v-model="clueAForm.registerStartDate" type="date" value-format="yyyy/MM/dd" placeholder="选择开始时间" ref="start_date">
            </el-date-picker>
            &nbsp;&nbsp;
            <el-date-picker v-model="clueAForm.registerEndDate" type="date" value-format="yyyy/MM/dd" placeholder="选择结束时间">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="修改时间">
            <el-date-picker v-model="clueAForm.registerStartDate" type="date" value-format="yyyy/MM/dd" placeholder="选择开始时间" ref="start_date">
            </el-date-picker>
            &nbsp;&nbsp;
            <el-date-picker v-model="clueAForm.registerEndDate" type="date" value-format="yyyy/MM/dd" placeholder="选择结束时间">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="跟进状态">
            <el-select v-model="formInline.region" placeholder="请选择跟进状态">
                <el-option label="全部" value="" key=""></el-option>
                <el-option v-for="(val,key) in follow_status" :label="val" :key="key" :value="val"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="归属人">
            <el-select v-model="formInline.region" placeholder="请选择归属人">
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
                follow_status:meta.follow_status,
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
