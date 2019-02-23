<template>
    <el-form :inline="true" :model="clueAForm" class="demo-form-inline">
        <el-form-item label="姓名">
            <el-input v-model="clueAForm.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
            <el-input v-model="clueAForm.phoneNum"></el-input>
        </el-form-item>

        <el-form-item label="注册时间">
            <el-date-picker v-model="clueAForm.registerStartDate" type="date" value-format="yyyy/MM/dd" placeholder="请选择开始时间" ref="start_date">
            </el-date-picker>
            &nbsp;-&nbsp;
            <el-date-picker v-model="clueAForm.registerEndDate" type="date" value-format="yyyy/MM/dd" placeholder="请选择结束时间">
            </el-date-picker>
            <!--<el-date-picker-->
                    <!--v-model="clueAForm.registerDate"-->
                    <!--type="daterange"-->
                    <!--range-separator="至"-->
                    <!--start-placeholder="开始日期"-->
                    <!--end-placeholder="结束日期">-->
            <!--</el-date-picker>-->
        </el-form-item>
        <el-form-item label="修改时间">
            <el-date-picker v-model="clueAForm.updateStartDate" type="date" value-format="yyyy/MM/dd" placeholder="请选择开始时间" ref="start_date">
            </el-date-picker>
            &nbsp;-&nbsp;
            <el-date-picker v-model="clueAForm.updateEndDate" type="date" value-format="yyyy/MM/dd" placeholder="请选择结束时间">
            </el-date-picker>
            <!--<el-date-picker-->
                    <!--v-model="clueAForm.updateDate"-->
                    <!--type="daterange"-->
                    <!--range-separator="至"-->
                    <!--start-placeholder="开始日期"-->
                    <!--end-placeholder="结束日期">-->
            <!--</el-date-picker>-->

        </el-form-item>

        <el-form-item label="废弃原因" v-if="isZClue">
            <el-select v-model="clueAForm.discardCause" placeholder="活动区域">
                <el-option label="全部" value="" key=""></el-option>
                <el-option v-for="(val,key) in discard_reason" :label="val" :key="key" :value="val"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item>
            <el-button class="btn" type="primary" @click="onSubmit">搜索</el-button>
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
            },
            isZClue:{
                type:Boolean,
                require:true
            },
        },
        data() {
            return {
                discard_reason:meta.discard_reason,
                formInline: {
                    user: '',
                    region: ''
                }
            }
        },
        methods: {
            onSubmit() {
                this.$emit('queryBtn')
            }
        }
    }
</script>
