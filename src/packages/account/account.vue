<template>
    <div class="content-box" v-bind:style="styleObject">
        <el-menu
                background-color="#363534"
                text-color="#fff"
                class="left-menu"
                active-text-color="#ffd04b"
                :default-active="activeIndex"
                router
        >
            <NavMenu :navMenus="menuData"></NavMenu>
        </el-menu>


        <div class="content">
            <div class="path">{{this.$route.name}}</div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import NavMenu from '@/components/menu/menu'
    export default {
        data(){
            return{
                activeIndex:'1',
                styleObject:{
                    height:'auto',
                    minHeight:'768px',
                },
                menuData: [
                    {
                        //一级
                        entity: {
                            id: 1,
                            name: "clue",
                            icon: "",
                            alias: "公海"
                        },
                        //二级
                        childs: [
                            {
                                entity: {
                                    id: 11,
                                    name: "/account/clue_a",
                                    icon: "el-icon-loading",
                                    alias: "A类公海",
                                    value: { path: "/account/hello" }
                                }
                            },
                            {
                                entity: {
                                    id: 12,
                                    name: "/account/clue_b",
                                    icon: "el-icon-bell",
                                    alias: "B类公海",
                                    value: "/account/system"
                                }
                            },
                            {
                                entity: {
                                    id: 13,
                                    name: "/account/clue_c",
                                    icon: "el-icon-edit",
                                    alias: "C类公海",
                                    value: "/system/menu"
                                }
                            }
                        ]
                    },
                    {
                        //一级
                        entity: {
                            id: 2,
                            name: "client",
                            icon: "",
                            alias: "我的客户"
                        },
                        //二级
                        childs: [
                            {
                                entity: {
                                    id: 21,
                                    name: "/account/board",
                                    icon: "el-icon-loading",
                                    alias: "数据看板",
                                    value: { path: "/hello" }
                                }
                            },
                            {
                                entity: {
                                    id: 22,
                                    name: "/account/distribution",
                                    icon: "el-icon-bell",
                                    alias: "待分配",
                                    value: "/system/role"
                                }
                            },
                            {
                                entity: {
                                    id: 23,
                                    name: "/account/follow",
                                    icon: "el-icon-edit",
                                    alias: "待跟进",
                                    value: "/system/menu"
                                }
                            },
                            {
                                entity: {
                                    id: 24,
                                    name: "/account/device",
                                    icon: "el-icon-edit",
                                    alias: "待设备检测",
                                    value: "/system/menu"
                                }
                            },
                            {
                                entity: {
                                    id: 25,
                                    name: "/account/inspection",
                                    icon: "el-icon-edit",
                                    alias: "待体检",
                                    value: "/system/menu"
                                }
                            },
                            {
                                entity: {
                                    id: 26,
                                    name: "/account/conversion",
                                    icon: "el-icon-edit",
                                    alias: "待转化",
                                    value: "/system/menu"
                                }
                            },
                            {
                                entity: {
                                    id: 27,
                                    name: "/account/payed",
                                    icon: "el-icon-edit",
                                    alias: "已付费",
                                    value: "/system/menu"
                                }
                            }
                        ]
                    },
                    {
                        //一级
                        entity: {
                            id: 3,
                            name: "clueManage",
                            icon: "",
                            alias: "线索管理"
                        },
                        //二级
                        childs: [
                            {
                                entity: {
                                    id: 31,
                                    name: "/account/shareManage",
                                    icon: "el-icon-loading",
                                    alias: "分配管理",
                                    value: { path: "/hello" }
                                }
                            },
                            {
                                entity: {
                                    id: 32,
                                    name: "/account/dealManage",
                                    icon: "el-icon-bell",
                                    alias: "奖惩管理",
                                    value: "/system/role"
                                }
                            },
                        ]
                    },
                ]
            }
        },
        components:{
            NavMenu
        },
        methods:{
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        mounted(){
            console.log(this.$route)
            this.activeIndex = this.$route.path
            this.styleObject.height = document.documentElement.clientHeight-60 +'px';
        }
    }
</script>
<style>
    .content-box{display: flex;}
    .el-menu-vertical-demo{
        width: 190px;
        height: 300px;
    }
    .left-menu{
        width: 190px;
        /*height: 100%;*/

    }
    .content{
        flex:1;
        padding-left: 20px;
    }
    .content .path{
        color:#9B9B9D;
        font-size: 12px;
        line-height: 30px;
        text-align: left;
    }

</style>
