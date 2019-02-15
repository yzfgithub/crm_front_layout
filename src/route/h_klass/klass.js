import klass from '@/packages/klass/klass'
import children from "./children";

export default {
    mappings:[
        {
            path:'/klass',
            meta:{
                flag:true
            },
            components:{default:klass},
        },
        {
            path:'/',
            meta:{
                flag:true
            },
            components:{default:klass},
            children: [].concat(children.mappings)
        }

    ]
}
