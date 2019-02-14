import account from '@/packages/account/account'
import children from "./children";


export default {
    mappings:[
        {
            path:'/account',
            meta:{
                flag:true
            },
            components:{default:account},
        },
        {
            path:'/',
            meta:{
                flag:true
            },
            components:{default:account},
            children: [].concat(children.mappings)
        }

    ]
}

