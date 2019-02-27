//EmployeeManage
import employee from '@/packages/system/employeeManage/employee/index'
import employee_new from '@/packages/system/employeeManage/employee/new'
import employee_edit from '@/packages/system/employeeManage/employee/edit'
import employee_show from '@/packages/system/employeeManage/employee/show'

//architectureManage
import architecture from '@/packages/system/architectureManage/architecture/index'
import architecture_new from '@/packages/system/architectureManage/architecture/new'
import architecture_edit from '@/packages/system/architectureManage/architecture/edit'
import architecture_show from '@/packages/system/architectureManage/architecture/show'

//rolesManage
import roles from '@/packages/system/rolesManage/roles/index'
import roles_new from '@/packages/system/rolesManage/roles/new'
import roles_edit from '@/packages/system/rolesManage/roles/edit'
import roles_show from '@/packages/system/rolesManage/roles/show'

//permissionsManage
import permissions from '@/packages/system/permissionsManage/permissions/index'
import permissions_new from '@/packages/system/permissionsManage/permissions/new'
import permissions_edit from '@/packages/system/permissionsManage/permissions/edit'
import permissions_show from '@/packages/system/permissionsManage/permissions/show'
export default {
    mappings:[
        {
            name:'系统管理 > 员工管理 > 员工管理',
            path:'/system/employee',
            meta:{
                flag:true
            },
            components:{default:employee},
        },
        {
            name:'系统管理 > 员工管理 > 员工管理 > 新建员工',
            path:'/system/employee/new',
            meta:{
                flag:true
            },
            components:{default:employee_new},
        },
        {
            name:'系统管理 > 员工管理 > 员工管理 > 编辑员工',
            path:'/system/employee/edit/:id',
            meta:{
                flag:true
            },
            components:{default:employee_edit},
        },        {
            name:'系统管理 > 员工管理 > 员工管理 > 员工详情',
            path:'/system/employee/show/:id',
            meta:{
                flag:true
            },
            components:{default:employee_show},
        },
        {
            name:'系统管理 > 架构管理 > 架构管理',
            path:'/system/architecture',
            meta:{
                flag:true
            },
            components:{default:architecture},
        },
        {
            name:'系统管理 > 架构管理 > 架构管理 > 新建团队',
            path:'/system/architecture/new',
            meta:{
                flag:true
            },
            components:{default:architecture_new},
        },
        {
            name:'系统管理 > 架构管理 > 架构管理 > 编辑团队',
            path:'/system/architecture/edit/:id',
            meta:{
                flag:true
            },
            components:{default:architecture_edit},
        },
        {
            name:'系统管理 > 架构管理 > 架构管理 > 团队详情',
            path:'/system/architecture/show/:id',
            meta:{
                flag:true
            },
            components:{default:architecture_show},
        },
        {
            name:'系统管理 > 角色管理 > 角色管理',
            path:'/system/roles',
            meta:{
                flag:true
            },
            components:{default:roles},
        },
        {
            name:'系统管理 > 角色管理 > 角色管理 > 新建角色',
            path:'/system/roles/new',
            meta:{
                flag:true
            },
            components:{default:roles_new},
        },
        {
            name:'系统管理 > 角色管理 > 角色管理 > 编辑角色',
            path:'/system/roles/edit/:id',
            meta:{
                flag:true
            },
            components:{default:roles_edit},
        },
        {
            name:'系统管理 > 角色管理 > 角色管理 > 角色详情',
            path:'/system/roles/show/:id',
            meta:{
                flag:true
            },
            components:{default:roles_show},
        },
        {
            name:'系统管理 > 权限管理 > 权限管理',
            path:'/system/permissions',
            meta:{
                flag:true
            },
            components:{default:permissions},
        },
        {
            name:'系统管理 > 权限管理 > 权限管理 > 新建权限',
            path:'/system/permissions/new',
            meta:{
                flag:true
            },
            components:{default:permissions_new},
        },
        {
            name:'系统管理 > 权限管理 > 权限管理 > 编辑权限',
            path:'/system/permissions/edit/:id',
            meta:{
                flag:true
            },
            components:{default:permissions_edit},
        },
        {
            name:'系统管理 > 权限管理 > 权限管理 > 角色权限',
            path:'/system/permissions/show/:id',
            meta:{
                flag:true
            },
            components:{default:permissions_show},
        },
    ]
}
