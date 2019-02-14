//clue
import clue_a from '@/packages/account/clue/clue_a/index'
import clue_b from '@/packages/account/clue/clue_b/index'
import clue_c from '@/packages/account/clue/clue_c/index'

//client
import board from '@/packages/account/client/board/index'
import distribution from '@/packages/account/client/distribution/index'
import follow from '@/packages/account/client/follow/index'
import device from '@/packages/account/client/device/index'
import inspection from '@/packages/account/client/inspection/index'
import conversion from '@/packages/account/client/conversion/index'
import payed from '@/packages/account/client/payed/index'

//clueManage
import shareManage from '@/packages/account/clueManage/shareManage/index'
import dealManage from '@/packages/account/clueManage/dealManage/index'

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
            name:'客户管理 > 我的客户 > 数据看板',
            path:'/account/board',
            meta:{
                flag:true
            },
            components:{default:board},
        },
        {
            path:'/account/distribution',
            meta:{
                flag:true
            },
            components:{default:distribution},
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
    ]
}
