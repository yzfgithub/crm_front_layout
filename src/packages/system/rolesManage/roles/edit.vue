<template>
    <div>
        <div class="top">
            <!--<div class="title">订单详情</div>-->

            <div class="close" @click="closeDetail">
                <i class="el-icon-circle-close"></i>
            </div>

            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>编辑角色</span>
                </div>

                <myForm :employeeForm = 'employeeForm' :permission_list="permission_list" @onSubmit="onSubmit"></myForm>

            </el-card>

        </div>

    </div>
</template>
<script type="text/ecmascript-6">

    import myForm from '@/components/rolesManage/edit_form'
    import permission_fetcher from '@/fetchers/system/permission'
    import fetcher from '@/fetchers/system/role'
    export default {
        data(){
            return {

                employeeForm:{
                    permissions:[{id:7587,permissionName:"公海-A类公海-查看"}],
                },
                permission_list:[],
            }
        },
        components:{
            myForm
        },
        methods:{
            closeDetail(){
                history.back();
            },
            onSubmit(){
                let arr=[];
                for(let i in this.employeeForm.permissions){
                    let obj = this.permission_list.filter(item=>item.id==this.employeeForm.permissions[i])[0];
                    arr.push(obj)
                }
                let obj = Object.assign(this.employeeForm,{
                    permissions: arr
                })
                fetcher.updateRoles(obj,(response)=>{
                    if(response.data.code==100000){
                        this.$message.success('角色编辑成功')
                        history.back();

                    }else{
                        this.$message.error('角色名重复')
                    }
                })
            },

            load(){
                //根据id获得obj
                permission_fetcher.getAllPermission({},(response)=>{
                    this.permission_list = response.data.data.map(item=>{
                        return {id:item.id,permissionName:item.permissionName}
                    });

                })
                fetcher.getRoleInfoById({roleId:this.$route.params.id},(response)=>{
                    this.employeeForm = Object.assign(response.data.data,{
                        permissions:response.data.data.permissions.map(item=>{return item.id})
                    })
                    console.log(this.employeeForm)

                })
            }
        },
        mounted(){
            this.load()
        }
    }
</script>
<style scoped>
    .top{
        position: relative;
    }
    .top .distributor_box span{
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(155,155,157,1);
        line-height:14px;
    }
    .top .close{
        position: absolute;
        right: 10px;
        top:10px;
        font-size: 24px;
        color:#daddde;
    }
    .bottom{
        background-color: #fff;
        margin-top: 20px;
    }
    .bottom .tab_box{
        margin:0 20px;
    }
    .table{
        width: 100%;
        max-width: 100%;
        margin-bottom: 1rem;
        background-color: transparent;
        border-collapse: collapse
        /*display: table;*/
        /*border-collapse: separate;*/
        /*border-spacing: 2px;*/
        /*border-color: grey*/
    }
    .table tr td{
        border-top: 1px solid #dee2e6;
        border-bottom: 1px solid #dee2e6;
        height: 34px;
    }
</style>
