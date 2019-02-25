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
    },
    pay_logs_list(id,params,cb,fb){
        axios.get('/api/orders/'+ id +'/pay_logs',{params:params})
            .then( (response) => {
                network_util.success(response, cb)
            })
            .catch((err) => {
                network_util.fail(err, fb)
            })
    },
    cash_pay_logs_list(id,params,cb,fb){
        axios.get('/api/orders/'+ id +'/cash_pay_logs',{params:params})
            .then( (response) => {
                network_util.success(response, cb)
            })
            .catch((err) => {
                network_util.fail(err, fb)
            })
    },
};
