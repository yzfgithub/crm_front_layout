import order from '@/packages/order/order'
import children from "./children";

export default {
    mappings:[
        {
            path:'/order',
            meta:{
                flag:true
            },
            components:{default:order},
        },
        {
            path:'/',
            meta:{
                flag:true
            },
            components:{default:order},
            children: [].concat(children.mappings)
        }

    ]
}
