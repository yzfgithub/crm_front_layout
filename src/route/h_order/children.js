//orderManage
import order_list from '@/packages/order/orderManage/orderes/index'
import order_detail from '@/packages/order/orderManage/orderes/order_detail'

export default {
    mappings:[
        {
            name:'订单管理 > 订单管理 > 订单列表',
            path:'/order/list',
            meta:{
                flag:true
            },
            components:{default:order_list},
        },
        {
            name:'订单管理 > 订单管理 > 订单详情',
            path:'/order/detail/:id',
            meta:{
                flag:true
            },
            components:{default:order_detail},
        },
    ]
}
