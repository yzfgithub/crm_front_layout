import order from '@/packages/order/order'
// import account from "./account";
// import klass from "./klass";

export default {
    mappings:[
        {
            path:'/order',
            meta:{
                flag:true
            },
            components:{default:order},
            // children: [].concat(account.mappings,klass.mappings)
        }

    ]
}
