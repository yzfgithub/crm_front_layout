<template>
    <div class="navMenu">

        <template v-for="navMenu in navMenus">
            <!-- 最后一级菜单 -->
            <el-menu-item v-if="!navMenu.childs&&navMenu.entity"
                          :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.name"
            >
                <div class="sub-menu">
                    <!--<i :class="navMenu.entity.icon"></i>-->
                    <div class="dot"></div>
                    <span slot="title">{{navMenu.entity.alias}}</span>
                </div>

            </el-menu-item>

            <!-- 此菜单下还有子菜单 -->
            <el-submenu v-if="navMenu.childs&&navMenu.entity"
                        :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.name">
                <template slot="title">
                    <div class="menu-title">
                        <i :class="navMenu.entity.icon"></i>
                        <span> {{navMenu.entity.alias}}</span>
                    </div>

                </template>
                <!-- 递归 -->
                <NavMenu :navMenus="navMenu.childs"></NavMenu>
            </el-submenu>
        </template>

    </div>
</template>

<script>
    export default {
        name: 'NavMenu',
        props: ['navMenus'],
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style scoped>
    .el-submenu .el-menu-item{
        min-width:auto;
    }
    .el-menu-item:last-child{
        position: relative;
    }
    .menu-title{
        text-align: left;
        padding-left: 20px;
    }
    .menu-title span{
        font-size:14px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
    }
    .sub-menu{
        text-align: left;
        padding-left: 0px;
    }
    .sub-menu span{
        font-size:12px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(255,255,255,.7);
    }
    .dot{
        display: inline-block;
        width: 5px;
        height: 5px;
        border-radius: 5px;
        background-color: rgba(255,255,255,.7);
        margin-right: 7px;
    }
    .el-menu-item.is-active{
        background-color: rgba(43,42,42,1) !important;
    }
    .el-menu-item.is-active .dot{
        background-color:#F8542E;
    }
    .el-menu-item.is-active span{
        color:rgba(255,255,255,1);
    }
</style>
