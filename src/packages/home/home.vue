<template>
    <div>
        <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                router
                background-color="#fff"
                text-color="#333"
                active-text-color="#F8542E">
            <el-menu-item index="0" class="logo" disabled><img src="../../assets/logo.png" alt=""></el-menu-item>
            <el-menu-item index="/account">客户管理</el-menu-item>
            <el-menu-item index="/klass">课程管理</el-menu-item>
            <el-menu-item index="/order">订单管理</el-menu-item>
            <el-menu-item index="/system">系统管理</el-menu-item>

            <el-menu-item class="last" index="5" disabled>
                <span>123/123 <img src="../../assets/logo.png" alt=""></span>
            </el-menu-item>
        </el-menu>
        <router-view></router-view>
    </div>

</template>
<script type="text/ecmascript-6">
    export default {
        data(){
            return{
                activeIndex:'/account'
            }
        },
        methods:{
            handleSelect(key, keyPath) {
                this.activeIndex = key;
            },

        },
        mounted(){
            this.activeIndex = this.$route.fullPath;
        }
    }
</script>
<style scoped>
    .el-menu-demo{
        position: relative;
    }
    .el-menu-item:hover{
        outline: 0 !important;
        color:#F8542E !important;
        background-color: #fff !important;
    }
    .el-menu-item.is-active {

    }
    .el-menu-item.is-disabled {
        opacity: 1 !important;
        cursor: default !important;
    }
    .logo{width: 210px;}
    .el-menu-item:last-child{
        position: absolute;
        right: 0;
        top: 0;
    }
    .last{
        position: absolute;
        right: 0;
        top: 0;
    }
</style>
