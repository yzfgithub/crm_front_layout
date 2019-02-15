//EmployeeManage
import employee from '@/packages/system/employeeManage/employee/index'

//architectureManage
import architecture from '@/packages/system/architectureManage/architecture/index'

//rolesManage
import roles from '@/packages/system/rolesManage/roles/index'

//permissionsManage
import permissions from '@/packages/system/permissionsManage/permissions/index'
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
            name:'系统管理 > 架构管理 > 架构管理',
            path:'/system/architecture',
            meta:{
                flag:true
            },
            components:{default:architecture},
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
            name:'系统管理 > 权限管理 > 权限管理',
            path:'/system/permissions',
            meta:{
                flag:true
            },
            components:{default:permissions},
        },
    ]
}
