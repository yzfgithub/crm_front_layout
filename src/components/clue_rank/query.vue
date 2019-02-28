<template>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">

        <el-form-item label="一级渠道">
            <el-select v-model="formInline.region" placeholder="请选择一级渠道">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="渠道组">
            <el-select v-model="formInline.region" placeholder="请选择渠道组">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="线索标签">
            <el-select v-model="formInline.region" placeholder="请选择线索标签">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="统计时长">
            <el-select v-model="formInline.statistics_duration" placeholder="请选择统计时长">
                <el-option v-for="(val,key) in statistics_duration" :label="val" :key="key" :value="val"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="生效时间">
            <el-date-picker
                    v-model="formInline.value1"
                    type="date"
                    placeholder="请选择日期">
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
                statistics_duration:meta.statistics_duration,
                formInline: {
                    statistics_duration:'1周'
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
