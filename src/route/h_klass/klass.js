import klass from '@/packages/klass/klass'
// import account from "./account";
// import klass from "./klass";

export default {
    mappings:[
        {
            path:'/klass',
            meta:{
                flag:true
            },
            components:{default:klass},
            // children: [].concat(account.mappings,klass.mappings)
        }

    ]
}
