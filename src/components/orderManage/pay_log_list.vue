<template lang="html">
    <div>
        <el-table :data="pay_logs_list" stripe border ref="table">
            <el-table-column label="家长名称">
                <template slot-scope="scope" v-if="scope.row.account">
                    <router-link :to="'/accounts/show/'+scope.account_id">
                        {{scope.row.account.data.nickname}}
                    </router-link>
                </template>
            </el-table-column>
            <el-table-column prop="tid" label="支付流水">
            </el-table-column>
            <el-table-column prop="fee" label="订单金额" :formatter="fmt_fee">
            </el-table-column>
            <el-table-column prop="created_at" label="创建时间">
            </el-table-column>
            <el-table-column prop="updated_at" label="支付时间">
            </el-table-column>
            <el-table-column prop="status" label="状态" :formatter="f_status">
            </el-table-column>
            <el-table-column prop="tag" label="支付结果通知">
            </el-table-column>
        </el-table>
        <el-pagination @current_page="handleCurrentChange" layout="prev, pager, next" :total="meta.total" @current-change="load" :current-page.sync="meta.current_page" background>
        </el-pagination>
    </div>
</template>

<script>
    import formater from './formater'

    export default {
        props:{
            pay_logs_list:{
                type:Array,
                required:true
            },
            meta:{
                type:Object,
                required:true
            }
        },
        methods:{
            fmt_fee(row,column,value){
                return value/100;
            },
            f_status (row, column, value) {
                return formater.fmt_status(value)
            },
            handleCurrentChange(val){
                return val = 1
            },
            load(){
                this.$emit('load');
            }
        }
    }
</script>

<style lang="css">
</style>
