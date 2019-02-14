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
                            alias: "员工管理"
                        },
                        //二级
                        childs: [
                            {
                                entity: {
                                    id: 11,
                                    name: "/account/clue_a",
                                    icon: "el-icon-loading",
                                    alias: "员工管理",
                                    value: { path: "/account/hello" }
                                }
                            },
                        ]
                    },
                    {
                        //一级
                        entity: {
                            id: 2,
                            name: "client",
                            icon: "",
                            alias: "架构管理"
                        },
                        //二级
                        childs: [
                            {
                                entity: {
                                    id: 21,
                                    name: "/account/board",
                                    icon: "el-icon-loading",
                                    alias: "架构管理",
                                    value: { path: "/hello" }
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
                            alias: "角色管理"
                        },
                        //二级
                        childs: [
                            {
                                entity: {
                                    id: 31,
                                    name: "/account/shareManage",
                                    icon: "el-icon-loading",
                                    alias: "角色管理",
                                    value: { path: "/hello" }
                                }
                            }
                        ]
                    },
                    {
                        //一级
                        entity: {
                            id: 4,
                            name: "clueManage",
                            icon: "",
                            alias: "权限管理"
                        },
                        //二级
                        childs: [
                            {
                                entity: {
                                    id: 41,
                                    name: "/account/shareManage",
                                    icon: "el-icon-loading",
                                    alias: "权限管理",
                                    value: { path: "/hello" }
                                }
                            }
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
            // console.log()
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
    .content{flex:1;}
</style>
