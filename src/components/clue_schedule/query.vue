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
        <el-form-item label="排班状态">
            <el-select v-model="formInline.schedule_status" placeholder="请选择排班状态">
                <el-option label="全部" value="" key=""></el-option>
                <el-option v-for="(val,key) in schedule_status" :label="val" :key="key" :value="val"></el-option>
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
            clueAForm:{
                type:Object,
                require:true,
            }
        },
        data() {
            return {
                schedule_status:metaObj.schedule_status,
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
