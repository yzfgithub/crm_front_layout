<template>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="姓名">
            <el-input v-model="clueAForm.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
            <el-input v-model="clueAForm.mobile"></el-input>
        </el-form-item>

        <el-form-item label="注册时间">
            <el-date-picker
                    v-model="clueAForm.registerTime"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
            </el-date-picker>

        </el-form-item>
        <el-form-item label="修改时间">
            <el-date-picker
                    v-model="clueAForm.updateTime"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="付费时间">
            <el-date-picker
                    v-model="clueAForm.updateTime"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="归属人">
            <el-select v-model="formInline.region" placeholder="活动区域">
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
            clueAForm:{
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
