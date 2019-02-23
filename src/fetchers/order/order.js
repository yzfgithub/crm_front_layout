import axios from 'axios'
import network_util from '@/utils/netword_util'
import config from '@/config'

export default {
    list(params,cb,fb){
        axios.get(config.hostUrl+'/crm-order/orderList', {params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    }
};
