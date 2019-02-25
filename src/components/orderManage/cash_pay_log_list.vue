<template lang="html">
    <div>
        <el-table :data="cash_pay_logs_list" stripe border ref="table">
            <el-table-column label="家长名称">
                <template slot-scope="scope" v-if="scope.row.account">
                    <router-link :to="'/accounts/show/'+scope.account_id">
                        {{scope.row.account.data.nickname}}
                    </router-link>
                </template>
            </el-table-column>
            <el-table-column prop="ticket" label="票据图片">
                <template slot-scope="scope">
                    <img :src="oss_url(scope.row.ticket)" style="{background:#fff;width:130px;}"/>
                </template>
            </el-table-column>
            <el-table-column prop="admin_member.data.name" label="操作人">
            </el-table-column>
            <el-table-column prop="created_at" label="创建时间">
            </el-table-column>
            <el-table-column prop="updated_at" label="支付时间">
            </el-table-column>
        </el-table>
        <el-pagination @current_page="handleCurrentChange" layout="prev, pager, next" :total="meta.total" @current-change="load" :current-page.sync="meta.current_page" background>
        </el-pagination>
    </div>
</template>

<script>
    import utility from '@/utils/tool'

    export default {
        props:{
            cash_pay_logs_list:{
                type:Array,
                required:true
            },
            meta:{
                type:Object,
                required:true
            }
        },
        methods:{
            oss_url(url){
                return utility.oss_url(url)
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
