<template lang="html">
    <div class="network_form">
        <el-form ref="form" :model="form" :inline="true">
            <el-form-item label="客户端类型">
                <el-select v-model="form.server" placeholder="请选择类型">
                    <el-option label="全部" value="" key=""></el-option>
                    <el-option v-for="(val, key) in server" :label="val" :value="key" :key="key"> {{ val}} </el-option>
                </el-select>
            </el-form-item>
            &nbsp;&nbsp;&nbsp;
            <el-form-item label="采样时间" >
                <el-select v-model="start_hour" placeholder="时" clearable>
                    <el-option
                            v-for="item in optionsh"
                            :key="item.value"
                            :label="item.value"
                            :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="start_minute" placeholder="分" clearable>
                    <el-option
                            v-for="item in optionsm"
                            :key="item.value"
                            :label="item.value"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="to">  ～  </span>
                <el-select v-model="end_hour" placeholder="时" clearable>
                    <el-option
                            v-for="item in optionsh"
                            :key="item.value"
                            :label="item.value"
                            :disabled = '!item.disabled'
                            :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="end_minute" placeholder="分" clearable>
                    <el-option
                            v-for="item in optionsm"
                            :key="item.value"
                            :label="item.value"
                            :disabled = '!item.disabled'
                            :value="item.value">
                    </el-option>
                </el-select>
                <el-button class = 'n_search' @click = 'n_search' type="primary">搜索</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        props:{
            form:{
                type:Object,
                required:true
            },
            server:{
                type:Object,
                required:true
            }
        },
        data(){
            return{
                start_hour:'',
                start_minute:'',
                end_hour:'',
                end_minute:'',
            }
        },
        computed:{
            optionsm:function() {
                let arr_m = []
                for (let i = 1; i < 60; i++) {
                    let network_minute = {
                        value:'',
                        disabled : true
                    }
                    if (i<10) {
                        i = '0'+i
                    }
                    network_minute.value = i;
                    if (this.start_hour && this.start_hour == this.end_hour && this.start_minute > i) {
                        network_minute.disabled = false
                    }
                    arr_m.push(network_minute)
                }

                return arr_m
            },
            optionsh:function() {
                let arr_hour = []
                let that = this;

                for (let i = 6; i < 24; i++) {
                    let network_hour = {
                        value:'',
                        disabled : true
                    }
                    if (i<10) {
                        i = '0'+i
                    }
                    network_hour.value = i;

                    if (that.start_hour && that.start_hour > i) {
                        network_hour.disabled = false
                    }
                    if (that.start_hour > that.end_hour) {
                        that.end_hour = ''
                    }
                    if (that.start_hour == that.end_hour && that.end_minute < that.start_minute) {
                        that.end_minute = ''
                    }
                    arr_hour.push(network_hour)
                }
                return arr_hour
            }
        },
        methods:{
            n_search(){
                if (this.start_hour&&this.start_minute&&this.end_hour&&this.end_minute) {
                    this.form.start_time = this.start_hour + ':'+this.start_minute
                    this.form.end_time = this.end_hour + ':'+this.end_minute
                }else {
                    this.form.start_time = ''
                    this.form.end_time = ''
                }
                this.$emit('n_search')
            }
        }
    }
</script>

<style lang="css">
    .network_form{
        box-sizing: border-box;
        padding-top: 20px;
    }
    .network_form .el-input__inner{
        width: 90px;
    }
    .network_form .n_search{
        margin-left: 60px;
    }
    .network_form .to{
        display: inline-block;
        box-sizing: border-box;
        padding: 0 10px;
        color: #dcdfe6;
    }
</style>
