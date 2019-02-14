import system from '@/packages/system/system'
// import account from "./account";
// import klass from "./klass";

export default {
    mappings:[
        {
            path:'/system',
            meta:{
                flag:true
            },
            components:{default:system},
            // children: [].concat(account.mappings,klass.mappings)
        }

    ]
}
