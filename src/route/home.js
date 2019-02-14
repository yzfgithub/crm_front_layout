import home from '@/packages/home/home'
import account from "./h_account/account";
import klass from "./h_klass/klass";
import order from "./h_order/order";
import system from "./h_system/system";

export default {
    mappings:[
        {
            path:'/',
            components:{default:home},
            children: [].concat(account.mappings,klass.mappings,order.mappings,system.mappings)
        }

    ]
}
