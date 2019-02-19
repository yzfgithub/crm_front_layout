//orderManage
import klass_list from '@/packages/klass/klassManage/klasses/index'

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
    ]
}
