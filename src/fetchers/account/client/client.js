import axios from 'axios'
import network_util from '@/utils/network_util'
import config from '@/config'


export default {
//我的客户各阶段列表
    stage_list(params,cb,fb){
        axios.get(config.hostUrl+'/crm-customer/clue/list/stage/page', {params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },




    //product
    getProductList(params,cb,fb){
        axios.get(config.mcUrl+'/crm-order/productList', {params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    createOrder(params,cb,fb){
        axios.get(config.mcUrl+'/crm-order/createOrder', {params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    }
};
