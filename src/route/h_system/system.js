import system from '@/packages/system/system'
import children from "./children";

export default {
    mappings:[
        {
            path:'/system',
            meta:{
                flag:true
            },
            components:{default:system},
        },
        {
            path:'/',
            meta:{
                flag:true
            },
            components:{default:system},
            children: [].concat(children.mappings)
        }

    ]
}
