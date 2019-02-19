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
    import NavMenu from '@/commons/menu/menu'
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
                            name: "klassManage",
                            icon: "",
                            alias: "课程管理"
                        },
                        //二级
                        childs: [
                            {
                                entity: {
                                    id: 11,
                                    name: "/klass/list",
                                    icon: "el-icon-loading",
                                    alias: "课列表",
                                    value: { path: "/account/hello" }
                                }
                            }
                        ]
                    }
                ]
            }
        },
        components:{
            NavMenu
        },
        methods:{

        },
        mounted(){
            this.styleObject.height = document.documentElement.clientHeight-44 +'px';
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
        padding-right: 20px;
    }
    .content .path{
        color:#9B9B9D;
        font-size: 12px;
        line-height: 30px;
        text-align: left;
    }
</style>
