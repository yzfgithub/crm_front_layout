//orderManage
import klass_list from '@/packages/order/orderManage/orderes/index'

export default {
    mappings:[
        {
            name:'订单管理 > 订单管理 > 订单列表',
            path:'/order/list',
            meta:{
                flag:true
            },
            components:{default:klass_list},
        },
    ]
}
