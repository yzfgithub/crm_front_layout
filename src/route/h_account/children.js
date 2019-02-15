//clue
import clue_a from '@/packages/account/clue/clue_a/index'
import clue_b from '@/packages/account/clue/clue_b/index'
import clue_c from '@/packages/account/clue/clue_c/index'
import clue_d from '@/packages/account/clue/clue_d/index'
import clue_z from '@/packages/account/clue/clue_z/index'

//client
import board from '@/packages/account/client/board/index'
import follow from '@/packages/account/client/follow/index'
import device from '@/packages/account/client/device/index'
import inspection from '@/packages/account/client/inspection/index'
import conversion from '@/packages/account/client/conversion/index'
import payed from '@/packages/account/client/payed/index'

//clueManage
import shareManage from '@/packages/account/clueManage/shareManage/index'
import dealManage from '@/packages/account/clueManage/dealManage/index'

//reviewManage
import handselManage from '@/packages/account/reviewManage/handselManage/index'
import orderManage from '@/packages/account/reviewManage/orderManage/index'

export default {
    mappings:[
        {
            name:'客户管理 > 公海 > A类公海',
            path:'/account/clue_a',
            meta:{
                flag:true
            },
            components:{default:clue_a},
        },
        {
            name:'客户管理 > 公海 > B类公海',
            path:'/account/clue_b',
            meta:{
                flag:true
            },
            components:{default:clue_b},
        },
        {
            name:'客户管理 > 公海 > C类公海',
            path:'/account/clue_c',
            meta:{
                flag:true
            },
            components:{default:clue_c},
        },
        {
            name:'客户管理 > 公海 > D类公海',
            path:'/account/clue_d',
            meta:{
                flag:true
            },
            components:{default:clue_d},
        },
        {
            name:'客户管理 > 公海 > Z类公海',
            path:'/account/clue_z',
            meta:{
                flag:true
            },
            components:{default:clue_z},
        },
        {
            name:'客户管理 > 我的客户 > 数据看板',
            path:'/account/board',
            meta:{
                flag:true
            },
            components:{default:board},
        },
        {
            path:'/account/follow',
            meta:{
                flag:true
            },
            components:{default:follow},
        },
        {
            path:'/account/device',
            meta:{
                flag:true
            },
            components:{default:device},
        },
        {
            path:'/account/inspection',
            meta:{
                flag:true
            },
            components:{default:inspection},
        },
        {
            path:'/account/conversion',
            meta:{
                flag:true
            },
            components:{default:conversion},
        },
        {
            path:'/account/payed',
            meta:{
                flag:true
            },
            components:{default:payed},
        },
        {
            path:'/account/shareManage',
            meta:{
                flag:true
            },
            components:{default:shareManage},
        },
        {
            path:'/account/dealManage',
            meta:{
                flag:true
            },
            components:{default:dealManage},
        },
        {
            path:'/account/handselManage',
            meta:{
                flag:true
            },
            components:{default:handselManage},
        },
        {
            path:'/account/orderManage',
            meta:{
                flag:true
            },
            components:{default:orderManage},
        },
    ]
}
