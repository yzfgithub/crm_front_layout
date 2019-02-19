//clue
import clue_a from '@/packages/account/clue/clue_a/index'
import clue_b from '@/packages/account/clue/clue_b/index'
import clue_c from '@/packages/account/clue/clue_c/index'
import clue_d from '@/packages/account/clue/clue_d/index'
import clue_e from '@/packages/account/clue/clue_e/index'
import clue_z from '@/packages/account/clue/clue_z/index'

import clue_detail from '@/packages/account/clue/detail/index'

//client
import board from '@/packages/account/client/board/index'
import follow from '@/packages/account/client/follow/index'
import device from '@/packages/account/client/device/index'
import inspection from '@/packages/account/client/inspection/index'
import conversion from '@/packages/account/client/conversion/index'
import payed from '@/packages/account/client/payed/index'

//clueManage
import shareManage from '@/packages/account/clueManage/shareManage/index'
import clueRank from '@/packages/account/clueManage/shareManage/clue_rank/index'
import clueAssign from '@/packages/account/clueManage/shareManage/clue_assign/index'
import clueSchedule from '@/packages/account/clueManage/shareManage/clue_schedule/index'
import clueDepositary from '@/packages/account/clueManage/shareManage/clue_depositary/index'
import dealManage from '@/packages/account/clueManage/dealManage/index'

//reviewManage
import handselReview from '@/packages/account/reviewManage/handselReview/index'
import orderReview from '@/packages/account/reviewManage/orderReview/index'

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
            name:'客户管理 > 公海 > E类公海',
            path:'/account/clue_e',
            meta:{
                flag:true
            },
            components:{default:clue_e},
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
            name:'客户管理 > 公海 > 客户详情',
            path:'/account/clue_detail/:id',
            meta:{
                flag:true
            },
            components:{default:clue_detail},
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
            name:'客户管理 > 我的客户 > 待跟进',
            path:'/account/follow',
            meta:{
                flag:true
            },
            components:{default:follow},
        },
        {
            name:'客户管理 > 我的客户 > 待设备检测',
            path:'/account/device',
            meta:{
                flag:true
            },
            components:{default:device},
        },
        {
            name:'客户管理 > 我的客户 > 待体验',
            path:'/account/inspection',
            meta:{
                flag:true
            },
            components:{default:inspection},
        },
        {
            name:'客户管理 > 我的客户 > 待转化',
            path:'/account/conversion',
            meta:{
                flag:true
            },
            components:{default:conversion},
        },
        {
            name:'客户管理 > 我的客户 > 已付费',
            path:'/account/payed',
            meta:{
                flag:true
            },
            components:{default:payed},
        },

        {
            name:'客户管理 > 线索管理 > 分配管理',
            path:'/account/shareManage',
            meta:{
                flag:true
            },
            components:{default:shareManage},
        },
        {
            name:'客户管理 > 线索管理 > 分配管理 > 线索排名',
            path:'/account/shareManage/clue_rank',
            meta:{
                flag:true
            },
            components:{default:clueRank},
        },
        {
            name:'客户管理 > 线索管理 > 分配管理 > 线索分配',
            path:'/account/shareManage/clue_assign',
            meta:{
                flag:true
            },
            components:{default:clueAssign},
        },
        {
            name:'客户管理 > 线索管理 > 分配管理 > 销售排班',
            path:'/account/shareManage/clue_schedule',
            meta:{
                flag:true
            },
            components:{default:clueSchedule},
        },
        {
            name:'客户管理 > 线索管理 > 分配管理 > 私池库容',
            path:'/account/shareManage/clue_depositary',
            meta:{
                flag:true
            },
            components:{default:clueDepositary},
        },
        {
            name:'客户管理 > 线索管理 > 奖惩管理',
            path:'/account/dealManage',
            meta:{
                flag:true
            },
            components:{default:dealManage},
        },

        {
            name:'客户管理 > 审批管理 > 赠课管理',
            path:'/account/handselReview',
            meta:{
                flag:true
            },
            components:{default:handselReview},
        },
        {
            name:'客户管理 > 审批管理 > 订单管理',
            path:'/account/orderReview',
            meta:{
                flag:true
            },
            components:{default:orderReview},
        },
    ]
}
