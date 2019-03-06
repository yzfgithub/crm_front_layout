<template>
    <el-form :inline="true" :model="queryForm" class="demo-form-inline">

        <el-form-item label="一级渠道">
            <el-select v-model="queryForm.grandparentId" placeholder="请选择一级渠道" @change = 'changeParentId'>
                <el-option label="全部" value="" key=""></el-option>
                <el-option v-for="(item,key) in computedFirstLevel" :label="item.name" :value="item.id" :key="key"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="渠道组">
            <el-select v-model="queryForm.id" placeholder="请选择渠道组" @change = "changeThirdId">
                <el-option label="全部" value="" key=""></el-option>
                <el-option v-for="(item,key) in computedThirdLevel" :label="item.name" :value="item.id" :key="key"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="线索标签">
            <el-select v-model="queryForm.clueTag" placeholder="请选择线索标签">
                <el-option label="全部" value="" key=""></el-option>
                <el-option v-for="(item,key) in clue_labels" :label="item" :value="item" :key="key"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="统计时长">
            <el-select v-model="queryForm.statisticalDuration" placeholder="请选择统计时长">
                <el-option v-for="(val,key) in statistics_duration" :label="val" :key="key" :value="val"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="生效时间">
            <el-date-picker
                    v-model="queryForm.entryIntoForceTime"
                    type="date"
                    value-format="yyyy/MM/dd"
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
            queryForm:{
                type:Object,
                require:true,
            },
            channelArray:{
                type:Object,
                require:true,
            }
        },
        data() {
            return {
                statistics_duration:meta.statistics_duration,
                clue_labels:meta.clue_labels,

                computedFirstLevel:[],
                computedThirdLevel:[],


            }
        },
        watch:{
            channelArray:{
                handler(val,oldVal){
                    if(val){
                        this.computedFirstLevel=val.firstLevel;
                        this.computedThirdLevel=val.thirdLevel;
                    }
                }
            }
        },
        methods: {
            changeParentId(val){
                //重新计算下级列表，清空下级数据
                this.computedThirdLevel = this.channelArray.thirdLevel.filter(item=>{
                    return item.grandparentId==val
                })
                this.$emit('clearThird')
            },
            changeThirdId(val){
                //如果上边没有，默认选择
                if(!this.queryForm.grandparentId){
                    let p_id = this.channelArray.thirdLevel.filter(item=>{
                        return item.id==val;
                    })[0].grandparentId;
                    this.$emit('resetPId',p_id)
                }
            },
            onSubmit() {
                this.$emit('onSubmit')
            }
        }
    }
</script>
