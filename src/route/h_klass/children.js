//orderManage
import klass_list from '@/packages/klass/klassManage/klasses/index'
import klass_detail from '@/packages/klass/klassManage/klasses/show'

export default {
    mappings:[
        {
            name:'课程管理 > 课程管理 > 课列表',
            path:'/klass/list',
            meta:{
                flag:true
            },
            components:{default:klass_list},
        },
        {
            name:'课程管理 > 课程管理 > 课详情',
            path:'/klass/detail/:id',
            meta:{
                flag:true
            },
            components:{default:klass_detail},
        },
    ]
}
